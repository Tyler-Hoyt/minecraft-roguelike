declare module "twilightforest.block.entity.spawner.BossSpawnerBlockEntity" {
import {$Mob} from "net.minecraft.world.entity.Mob"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BossSpawnerBlockEntity<T extends $Mob> extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

public static "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BossSpawnerBlockEntity$$Type<(never)>): void
public "getSpawnerParticle"(): $ParticleOptions
public "anyPlayerInRange"(arg0: $Level$$Type): boolean
get "spawnerParticle"(): $ParticleOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossSpawnerBlockEntity$$Type<T> = ($BossSpawnerBlockEntity<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossSpawnerBlockEntity$$Original<T> = $BossSpawnerBlockEntity<(T)>;}
