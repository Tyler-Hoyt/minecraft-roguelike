declare module "com.aetherteam.aether.event.TriggerTrapEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TriggerTrapEvent extends $BlockEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getPlayer"(): $Player
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "player"(): $Player
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriggerTrapEvent$$Type = ($TriggerTrapEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriggerTrapEvent$$Original = $TriggerTrapEvent;}
declare module "com.aetherteam.aether.event.ValkyrieTeleportEvent" {
import {$EntityTeleportEvent} from "net.neoforged.neoforge.event.entity.EntityTeleportEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ValkyrieTeleportEvent extends $EntityTeleportEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValkyrieTeleportEvent$$Type = ($ValkyrieTeleportEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValkyrieTeleportEvent$$Original = $ValkyrieTeleportEvent;}
declare module "com.aetherteam.aether.event.PlacementBanEvent$CheckItem" {
import {$PlacementBanEvent} from "com.aetherteam.aether.event.PlacementBanEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $PlacementBanEvent$CheckItem extends $PlacementBanEvent {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type)

public "getLevel"(): $LevelAccessor
public "setBanned"(arg0: boolean): void
public "getItemStack"(): $ItemStack
public "isBanned"(): boolean
public "getPos"(): $BlockPos
get "level"(): $LevelAccessor
set "banned"(value: boolean)
get "itemStack"(): $ItemStack
get "banned"(): boolean
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementBanEvent$CheckItem$$Type = ($PlacementBanEvent$CheckItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacementBanEvent$CheckItem$$Original = $PlacementBanEvent$CheckItem;}
declare module "com.aetherteam.aether.event.FreezeEvent$FreezeFromItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FreezeEvent} from "com.aetherteam.aether.event.FreezeEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FreezeEvent$FreezeFromItem extends $FreezeEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $ItemStack$$Type)

public "getSourceStack"(): $ItemStack
get "sourceStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezeEvent$FreezeFromItem$$Type = ($FreezeEvent$FreezeFromItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreezeEvent$FreezeFromItem$$Original = $FreezeEvent$FreezeFromItem;}
declare module "com.aetherteam.aether.event.FreezeEvent$FreezeFromBlock" {
import {$FreezeEvent} from "com.aetherteam.aether.event.FreezeEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FreezeEvent$FreezeFromBlock extends $FreezeEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: $BlockState$$Type)

public "getSourcePos"(): $BlockPos
public "getSourceBlock"(): $BlockState
get "sourcePos"(): $BlockPos
get "sourceBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezeEvent$FreezeFromBlock$$Type = ($FreezeEvent$FreezeFromBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreezeEvent$FreezeFromBlock$$Original = $FreezeEvent$FreezeFromBlock;}
declare module "com.aetherteam.aether.event.BossFightEvent$Stop" {
import {$BossFightEvent} from "com.aetherteam.aether.event.BossFightEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BossRoomTracker$$Type} from "com.aetherteam.nitrogen.entity.BossRoomTracker"

export class $BossFightEvent$Stop extends $BossFightEvent {
constructor(arg0: $Entity$$Type, arg1: $BossRoomTracker$$Type<(never)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossFightEvent$Stop$$Type = ($BossFightEvent$Stop);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossFightEvent$Stop$$Original = $BossFightEvent$Stop;}
declare module "com.aetherteam.aether.event.PlacementBanEvent$SpawnParticles" {
import {$PlacementBanEvent} from "com.aetherteam.aether.event.PlacementBanEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlacementBanEvent$SpawnParticles extends $PlacementBanEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $ItemStack$$Type, arg4: $BlockState$$Type)

public "getLevel"(): $LevelAccessor
public "getBlockState"(): $BlockState
public "getFace"(): $Direction
public "getItemStack"(): $ItemStack
public "getPos"(): $BlockPos
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "level"(): $LevelAccessor
get "blockState"(): $BlockState
get "face"(): $Direction
get "itemStack"(): $ItemStack
get "pos"(): $BlockPos
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementBanEvent$SpawnParticles$$Type = ($PlacementBanEvent$SpawnParticles);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacementBanEvent$SpawnParticles$$Original = $PlacementBanEvent$SpawnParticles;}
declare module "com.aetherteam.aether.event.BossFightEvent$Start" {
import {$BossFightEvent} from "com.aetherteam.aether.event.BossFightEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BossRoomTracker$$Type} from "com.aetherteam.nitrogen.entity.BossRoomTracker"

export class $BossFightEvent$Start extends $BossFightEvent {
constructor(arg0: $Entity$$Type, arg1: $BossRoomTracker$$Type<(never)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossFightEvent$Start$$Type = ($BossFightEvent$Start);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossFightEvent$Start$$Original = $BossFightEvent$Start;}
declare module "com.aetherteam.aether.event.PlacementBanEvent$CheckBlock" {
import {$PlacementBanEvent} from "com.aetherteam.aether.event.PlacementBanEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlacementBanEvent$CheckBlock extends $PlacementBanEvent {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getLevel"(): $LevelAccessor
public "setBanned"(arg0: boolean): void
public "getBlockState"(): $BlockState
public "isBanned"(): boolean
public "getPos"(): $BlockPos
get "level"(): $LevelAccessor
set "banned"(value: boolean)
get "blockState"(): $BlockState
get "banned"(): boolean
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementBanEvent$CheckBlock$$Type = ($PlacementBanEvent$CheckBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacementBanEvent$CheckBlock$$Original = $PlacementBanEvent$CheckBlock;}
declare module "com.aetherteam.aether.event.PlacementBanEvent" {
import {$Event} from "net.neoforged.bus.api.Event"

export class $PlacementBanEvent extends $Event {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementBanEvent$$Type = ($PlacementBanEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacementBanEvent$$Original = $PlacementBanEvent;}
declare module "com.aetherteam.aether.event.PlacementConvertEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlacementConvertEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type)

public "getLevel"(): $LevelAccessor
public "setNewBlockState"(arg0: $BlockState$$Type): void
public "getOldBlockState"(): $BlockState
public "getNewBlockState"(): $BlockState
public "getPos"(): $BlockPos
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "level"(): $LevelAccessor
set "newBlockState"(value: $BlockState$$Type)
get "oldBlockState"(): $BlockState
get "newBlockState"(): $BlockState
get "pos"(): $BlockPos
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementConvertEvent$$Type = ($PlacementConvertEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacementConvertEvent$$Original = $PlacementConvertEvent;}
declare module "com.aetherteam.aether.event.FreezeEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FreezeEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type)

public "getLevel"(): $LevelAccessor
public "setFrozenBlock"(arg0: $BlockState$$Type): void
public "getPriorBlock"(): $BlockState
public "getFrozenBlock"(): $BlockState
public "getPos"(): $BlockPos
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "level"(): $LevelAccessor
set "frozenBlock"(value: $BlockState$$Type)
get "priorBlock"(): $BlockState
get "frozenBlock"(): $BlockState
get "pos"(): $BlockPos
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezeEvent$$Type = ($FreezeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreezeEvent$$Original = $FreezeEvent;}
declare module "com.aetherteam.aether.event.BossFightEvent$RemovePlayer" {
import {$BossFightEvent} from "com.aetherteam.aether.event.BossFightEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BossRoomTracker$$Type} from "com.aetherteam.nitrogen.entity.BossRoomTracker"

export class $BossFightEvent$RemovePlayer extends $BossFightEvent {
constructor(arg0: $Entity$$Type, arg1: $BossRoomTracker$$Type<(never)>, arg2: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossFightEvent$RemovePlayer$$Type = ($BossFightEvent$RemovePlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossFightEvent$RemovePlayer$$Original = $BossFightEvent$RemovePlayer;}
declare module "com.aetherteam.aether.event.BossFightEvent$AddPlayer" {
import {$BossFightEvent} from "com.aetherteam.aether.event.BossFightEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BossRoomTracker$$Type} from "com.aetherteam.nitrogen.entity.BossRoomTracker"

export class $BossFightEvent$AddPlayer extends $BossFightEvent {
constructor(arg0: $Entity$$Type, arg1: $BossRoomTracker$$Type<(never)>, arg2: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossFightEvent$AddPlayer$$Type = ($BossFightEvent$AddPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossFightEvent$AddPlayer$$Original = $BossFightEvent$AddPlayer;}
declare module "com.aetherteam.aether.event.EggLayEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EggLayEvent extends $EntityEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Entity$$Type, arg1: $SoundEvent$$Type, arg2: float, arg3: float, arg4: $ItemStack$$Type)

public "getItem"(): $ItemStack
public "setVolume"(arg0: float): void
public "getPitch"(): float
public "getVolume"(): float
public "getSound"(): $SoundEvent
public "setPitch"(arg0: float): void
public "setItem"(arg0: $ItemStack$$Type): void
public "setSound"(arg0: $SoundEvent$$Type): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "item"(): $ItemStack
set "volume"(value: float)
get "pitch"(): float
get "volume"(): float
get "sound"(): $SoundEvent
set "pitch"(value: float)
set "item"(value: $ItemStack$$Type)
set "sound"(value: $SoundEvent$$Type)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EggLayEvent$$Type = ($EggLayEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EggLayEvent$$Original = $EggLayEvent;}
declare module "com.aetherteam.aether.event.ItemUseConvertEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemUseConvertEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $BlockState$$Type, arg5: $BlockState$$Type, arg6: $RecipeType$$Type<(never)>)

public "getLevel"(): $LevelAccessor
public "setNewBlockState"(arg0: $BlockState$$Type): void
public "getOldBlockState"(): $BlockState
public "getNewBlockState"(): $BlockState
public "getRecipeType"(): $RecipeType<(never)>
public "getItemStack"(): $ItemStack
public "getPos"(): $BlockPos
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "level"(): $LevelAccessor
set "newBlockState"(value: $BlockState$$Type)
get "oldBlockState"(): $BlockState
get "newBlockState"(): $BlockState
get "recipeType"(): $RecipeType<(never)>
get "itemStack"(): $ItemStack
get "pos"(): $BlockPos
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUseConvertEvent$$Type = ($ItemUseConvertEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUseConvertEvent$$Original = $ItemUseConvertEvent;}
declare module "com.aetherteam.aether.event.BossFightEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BossRoomTracker, $BossRoomTracker$$Type} from "com.aetherteam.nitrogen.entity.BossRoomTracker"

export class $BossFightEvent extends $EntityEvent {
constructor(arg0: $Entity$$Type, arg1: $BossRoomTracker$$Type<(never)>)

public "getDungeon"(): $BossRoomTracker<(never)>
get "dungeon"(): $BossRoomTracker<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossFightEvent$$Type = ($BossFightEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossFightEvent$$Original = $BossFightEvent;}
