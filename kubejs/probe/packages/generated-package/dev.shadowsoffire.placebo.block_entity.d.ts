declare module "dev.shadowsoffire.placebo.block_entity.TickingBlockEntity" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $TickingBlockEntity$$Interface {
}

export class $TickingBlockEntity implements $TickingBlockEntity$$Interface {
 "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
 "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingBlockEntity$$Type = ($TickingBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickingBlockEntity$$Original = $TickingBlockEntity;}
declare module "dev.shadowsoffire.placebo.block_entity.TickingEntityBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $TickingEntityBlock$$Interface extends $EntityBlock$$Interface {

(arg0: $BlockPos, arg1: $BlockState): $BlockEntity$$Type
}

export class $TickingEntityBlock implements $TickingEntityBlock$$Interface {
 "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingEntityBlock$$Type = ((arg0: $BlockPos, arg1: $BlockState) => $BlockEntity$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickingEntityBlock$$Original = $TickingEntityBlock;}
declare module "dev.shadowsoffire.placebo.block_entity.TickingBlockEntityType" {
import {$ChestBlockEntity} from "net.minecraft.world.level.block.entity.ChestBlockEntity"
import {$ChiseledBookShelfBlockEntity} from "net.minecraft.world.level.block.entity.ChiseledBookShelfBlockEntity"
import {$BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$DispenserBlockEntity} from "net.minecraft.world.level.block.entity.DispenserBlockEntity"
import {$HopperBlockEntity} from "net.minecraft.world.level.block.entity.HopperBlockEntity"
import {$BarrelBlockEntity} from "net.minecraft.world.level.block.entity.BarrelBlockEntity"
import {$SignBlockEntity} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$SmokerBlockEntity} from "net.minecraft.world.level.block.entity.SmokerBlockEntity"
import {$JigsawBlockEntity} from "net.minecraft.world.level.block.entity.JigsawBlockEntity"
import {$SculkSensorBlockEntity} from "net.minecraft.world.level.block.entity.SculkSensorBlockEntity"
import {$BrushableBlockEntity} from "net.minecraft.world.level.block.entity.BrushableBlockEntity"
import {$JukeboxBlockEntity} from "net.minecraft.world.level.block.entity.JukeboxBlockEntity"
import {$CommandBlockEntity} from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import {$BrewingStandBlockEntity} from "net.minecraft.world.level.block.entity.BrewingStandBlockEntity"
import {$DaylightDetectorBlockEntity} from "net.minecraft.world.level.block.entity.DaylightDetectorBlockEntity"
import {$BannerBlockEntity} from "net.minecraft.world.level.block.entity.BannerBlockEntity"
import {$TrappedChestBlockEntity} from "net.minecraft.world.level.block.entity.TrappedChestBlockEntity"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BeaconBlockEntity} from "net.minecraft.world.level.block.entity.BeaconBlockEntity"
import {$TheEndGatewayBlockEntity} from "net.minecraft.world.level.block.entity.TheEndGatewayBlockEntity"
import {$CalibratedSculkSensorBlockEntity} from "net.minecraft.world.level.block.entity.CalibratedSculkSensorBlockEntity"
import {$TrialSpawnerBlockEntity} from "net.minecraft.world.level.block.entity.TrialSpawnerBlockEntity"
import {$PistonMovingBlockEntity} from "net.minecraft.world.level.block.piston.PistonMovingBlockEntity"
import {$DecoratedPotBlockEntity} from "net.minecraft.world.level.block.entity.DecoratedPotBlockEntity"
import {$CrafterBlockEntity} from "net.minecraft.world.level.block.entity.CrafterBlockEntity"
import {$VaultBlockEntity} from "net.minecraft.world.level.block.entity.vault.VaultBlockEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ConduitBlockEntity} from "net.minecraft.world.level.block.entity.ConduitBlockEntity"
import {$SculkShriekerBlockEntity} from "net.minecraft.world.level.block.entity.SculkShriekerBlockEntity"
import {$DropperBlockEntity} from "net.minecraft.world.level.block.entity.DropperBlockEntity"
import {$TheEndPortalBlockEntity} from "net.minecraft.world.level.block.entity.TheEndPortalBlockEntity"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$EnchantingTableBlockEntity} from "net.minecraft.world.level.block.entity.EnchantingTableBlockEntity"
import {$SculkCatalystBlockEntity} from "net.minecraft.world.level.block.entity.SculkCatalystBlockEntity"
import {$CampfireBlockEntity} from "net.minecraft.world.level.block.entity.CampfireBlockEntity"
import {$BellBlockEntity} from "net.minecraft.world.level.block.entity.BellBlockEntity"
import {$EnderChestBlockEntity} from "net.minecraft.world.level.block.entity.EnderChestBlockEntity"
import {$LecternBlockEntity} from "net.minecraft.world.level.block.entity.LecternBlockEntity"
import {$FurnaceBlockEntity} from "net.minecraft.world.level.block.entity.FurnaceBlockEntity"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SpawnerBlockEntity} from "net.minecraft.world.level.block.entity.SpawnerBlockEntity"
import {$ShulkerBoxBlockEntity} from "net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity"
import {$BeehiveBlockEntity} from "net.minecraft.world.level.block.entity.BeehiveBlockEntity"
import {$HangingSignBlockEntity} from "net.minecraft.world.level.block.entity.HangingSignBlockEntity"
import {$TickingBlockEntityType$TickSide$$Type} from "dev.shadowsoffire.placebo.block_entity.TickingBlockEntityType$TickSide"
import {$StructureBlockEntity} from "net.minecraft.world.level.block.entity.StructureBlockEntity"
import {$BedBlockEntity} from "net.minecraft.world.level.block.entity.BedBlockEntity"
import {$SkullBlockEntity} from "net.minecraft.world.level.block.entity.SkullBlockEntity"
import {$BlastFurnaceBlockEntity} from "net.minecraft.world.level.block.entity.BlastFurnaceBlockEntity"
import {$ComparatorBlockEntity} from "net.minecraft.world.level.block.entity.ComparatorBlockEntity"

export class $TickingBlockEntityType<T extends $BlockEntity> extends $BlockEntityType<(T)> {
static readonly "BLAST_FURNACE": $BlockEntityType<($BlastFurnaceBlockEntity)>
static readonly "HANGING_SIGN": $BlockEntityType<($HangingSignBlockEntity)>
static readonly "COMPARATOR": $BlockEntityType<($ComparatorBlockEntity)>
static readonly "VAULT": $BlockEntityType<($VaultBlockEntity)>
static readonly "SKULL": $BlockEntityType<($SkullBlockEntity)>
static readonly "CHISELED_BOOKSHELF": $BlockEntityType<($ChiseledBookShelfBlockEntity)>
static readonly "JIGSAW": $BlockEntityType<($JigsawBlockEntity)>
static readonly "DECORATED_POT": $BlockEntityType<($DecoratedPotBlockEntity)>
static readonly "BEACON": $BlockEntityType<($BeaconBlockEntity)>
static readonly "CRAFTER": $BlockEntityType<($CrafterBlockEntity)>
static readonly "FURNACE": $BlockEntityType<($FurnaceBlockEntity)>
static readonly "BEEHIVE": $BlockEntityType<($BeehiveBlockEntity)>
static readonly "PISTON": $BlockEntityType<($PistonMovingBlockEntity)>
static readonly "TRAPPED_CHEST": $BlockEntityType<($TrappedChestBlockEntity)>
static readonly "END_PORTAL": $BlockEntityType<($TheEndPortalBlockEntity)>
static readonly "ENDER_CHEST": $BlockEntityType<($EnderChestBlockEntity)>
static readonly "COMMAND_BLOCK": $BlockEntityType<($CommandBlockEntity)>
static readonly "SIGN": $BlockEntityType<($SignBlockEntity)>
static readonly "STRUCTURE_BLOCK": $BlockEntityType<($StructureBlockEntity)>
static readonly "BELL": $BlockEntityType<($BellBlockEntity)>
static readonly "ENCHANTING_TABLE": $BlockEntityType<($EnchantingTableBlockEntity)>
static readonly "BREWING_STAND": $BlockEntityType<($BrewingStandBlockEntity)>
static readonly "BED": $BlockEntityType<($BedBlockEntity)>
static readonly "MOB_SPAWNER": $BlockEntityType<($SpawnerBlockEntity)>
static readonly "CALIBRATED_SCULK_SENSOR": $BlockEntityType<($CalibratedSculkSensorBlockEntity)>
static readonly "SCULK_CATALYST": $BlockEntityType<($SculkCatalystBlockEntity)>
static readonly "CONDUIT": $BlockEntityType<($ConduitBlockEntity)>
static readonly "CAMPFIRE": $BlockEntityType<($CampfireBlockEntity)>
static readonly "END_GATEWAY": $BlockEntityType<($TheEndGatewayBlockEntity)>
static readonly "SMOKER": $BlockEntityType<($SmokerBlockEntity)>
static readonly "DISPENSER": $BlockEntityType<($DispenserBlockEntity)>
static readonly "SCULK_SHRIEKER": $BlockEntityType<($SculkShriekerBlockEntity)>
static readonly "HOPPER": $BlockEntityType<($HopperBlockEntity)>
static readonly "CHEST": $BlockEntityType<($ChestBlockEntity)>
static readonly "DAYLIGHT_DETECTOR": $BlockEntityType<($DaylightDetectorBlockEntity)>
static readonly "BANNER": $BlockEntityType<($BannerBlockEntity)>
static readonly "SCULK_SENSOR": $BlockEntityType<($SculkSensorBlockEntity)>
static readonly "TRIAL_SPAWNER": $BlockEntityType<($TrialSpawnerBlockEntity)>
static readonly "LECTERN": $BlockEntityType<($LecternBlockEntity)>
static readonly "SHULKER_BOX": $BlockEntityType<($ShulkerBoxBlockEntity)>
static readonly "BRUSHABLE_BLOCK": $BlockEntityType<($BrushableBlockEntity)>
static readonly "JUKEBOX": $BlockEntityType<($JukeboxBlockEntity)>
static readonly "BARREL": $BlockEntityType<($BarrelBlockEntity)>
static readonly "DROPPER": $BlockEntityType<($DropperBlockEntity)>

constructor(arg0: $BlockEntityType$BlockEntitySupplier$$Type<(T)>, arg1: $Set$$Type<($Block$$Type)>, arg2: $TickingBlockEntityType$TickSide$$Type)

public "getTicker"(arg0: boolean): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingBlockEntityType$$Type<T> = ($TickingBlockEntityType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickingBlockEntityType$$Original<T> = $TickingBlockEntityType<(T)>;}
declare module "dev.shadowsoffire.placebo.block_entity.TickingBlockEntityType$TickSide" {
import {$Enum} from "java.lang.Enum"

export class $TickingBlockEntityType$TickSide extends $Enum<($TickingBlockEntityType$TickSide)> {
static readonly "SERVER": $TickingBlockEntityType$TickSide
static readonly "CLIENT_AND_SERVER": $TickingBlockEntityType$TickSide
static readonly "CLIENT": $TickingBlockEntityType$TickSide

public static "values"(): ($TickingBlockEntityType$TickSide)[]
public static "valueOf"(arg0: StringJS): $TickingBlockEntityType$TickSide
public "ticksOnClient"(): boolean
public "ticksOnServer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingBlockEntityType$TickSide$$Type = (("client") | ("server") | ("client_and_server"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickingBlockEntityType$TickSide$$Original = $TickingBlockEntityType$TickSide;}
