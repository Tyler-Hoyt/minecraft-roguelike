declare module "net.p3pp3rf1y.sophisticatedstorage.client.particle.CustomTintTerrainParticleData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions$$Interface} from "net.minecraft.core.particles.ParticleOptions"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CustomTintTerrainParticleData extends $ParticleType<($CustomTintTerrainParticleData)> implements $ParticleOptions$$Interface {
constructor()
constructor(arg0: $BlockState$$Type, arg1: $BlockPos$$Type)

public "getState"(): $BlockState
public "getType"(): $ParticleType
public "codec"(): $MapCodec<($CustomTintTerrainParticleData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CustomTintTerrainParticleData)>
public "getPos"(): $BlockPos
get "state"(): $BlockState
get "type"(): $ParticleType
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTintTerrainParticleData$$Type = ($CustomTintTerrainParticleData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomTintTerrainParticleData$$Original = $CustomTintTerrainParticleData;}
