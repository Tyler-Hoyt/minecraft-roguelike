declare module "com.aetherteam.nitrogen.entity.BossRoomTracker" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$List, $List$$Type} from "java.util.List"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Function$$Type} from "java.util.function.Function"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BossRoomTracker<T extends $Mob> extends $Record {
constructor(boss: T, originCoordinates: $Vec3$$Type, roomBounds: $AABB$$Type, dungeonPlayers: $List$$Type<($UUID$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "readAdditionalSaveData"<T extends $Mob>(arg0: $CompoundTag$$Type, arg1: T): $BossRoomTracker<(T)>
public "addAdditionalSaveData"(): $CompoundTag
public "boss"(): T
public "grantAdvancements"(arg0: $DamageSource$$Type): void
public "isPlayerTracked"(arg0: $Player$$Type): boolean
public "originCoordinates"(): $Vec3
public "dungeonPlayers"(): $List<($UUID)>
public "trackPlayers"(): void
public "isBossWithinRoom"(): boolean
public "roomBounds"(): $AABB
public "modifyRoom"(arg0: $Function$$Type<($BlockState), ($BlockState$$Type)>): void
public "isPlayerWithinRoomInterior"(arg0: $Entity$$Type): boolean
public "isPlayerWithinRoom"(arg0: $Entity$$Type): boolean
get "bossWithinRoom"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossRoomTracker$$Type<T> = ({"originCoordinates"?: $Vec3$$Type, "boss"?: T, "roomBounds"?: $AABB$$Type, "dungeonPlayers"?: $List$$Type<($UUID$$Type)>}) | ([originCoordinates?: $Vec3$$Type, boss?: T, roomBounds?: $AABB$$Type, dungeonPlayers?: $List$$Type<($UUID$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossRoomTracker$$Original<T> = $BossRoomTracker<(T)>;}
