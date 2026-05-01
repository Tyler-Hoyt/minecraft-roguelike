declare module "com.sammy.malum.visual_effects.networked.MalumNetworkedParticleEffectType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$NetworkedParticleEffectColorData, $NetworkedParticleEffectColorData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectColorData"
import {$NetworkedParticleEffectPositionData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPositionData"
import {$NetworkedParticleEffectExtraData, $NetworkedParticleEffectExtraData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectExtraData"
import {$MalumNetworkedParticleEffectColorData$$Type} from "com.sammy.malum.visual_effects.networked.MalumNetworkedParticleEffectColorData"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$NetworkedParticleEffectType$ParticleEffectBuilder} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType$ParticleEffectBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NetworkedParticleEffectType} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType"

export class $MalumNetworkedParticleEffectType<T extends $NetworkedParticleEffectExtraData> extends $NetworkedParticleEffectType<(T)> {
static readonly "CODEC": $Codec<($NetworkedParticleEffectType<(never)>)>
static readonly "EFFECT_TYPES": $Map<(StringJS), ($NetworkedParticleEffectType<(never)>)>

constructor(arg0: StringJS)

public "act"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $NetworkedParticleEffectPositionData$$Type, arg3: $NetworkedParticleEffectColorData$$Type, arg4: T): void
public "act"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $NetworkedParticleEffectPositionData$$Type, arg3: $MalumNetworkedParticleEffectColorData$$Type, arg4: T): void
public "createEffect"(arg0: $Entity$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "createEffect"(): $NetworkedParticleEffectType$ParticleEffectBuilder
public "createEffect"(arg0: $Vec3$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "createEffect"(arg0: $BlockPos$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "getColorCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectColorData)>)>
get "colorCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectColorData)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumNetworkedParticleEffectType$$Type<T> = ($MalumNetworkedParticleEffectType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumNetworkedParticleEffectType$$Original<T> = $MalumNetworkedParticleEffectType<(T)>;}
declare module "com.sammy.malum.visual_effects.networked.MalumNetworkedParticleEffectColorData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection$$Type} from "java.util.Collection"
import {$Codec} from "com.mojang.serialization.Codec"
import {$NetworkedParticleEffectColorData} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectColorData"
import {$List$$Type} from "java.util.List"
import {$ColorParticleDataWrapper$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataWrapper"
import {$SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $MalumNetworkedParticleEffectColorData extends $NetworkedParticleEffectColorData {
static readonly "CODEC": $Codec<($MalumNetworkedParticleEffectColorData)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MalumNetworkedParticleEffectColorData)>
 "colorCycleCounter": integer

constructor(arg0: $List$$Type<($ColorParticleDataWrapper$$Type)>, arg1: $List$$Type<($SpiritLike$$Type)>)
constructor(...arg0: ($ColorParticleDataWrapper$$Type)[])
constructor(...arg0: ($SpiritLike$$Type)[])

public "getColor"(): $ColorParticleData
public static "fromColors"(arg0: $List$$Type<($ColorParticleDataWrapper$$Type)>): $MalumNetworkedParticleEffectColorData
public static "fromColor"(arg0: $ColorParticleDataWrapper$$Type): $MalumNetworkedParticleEffectColorData
public "getSpirit"(): $SpiritArcanaType
public static "fromSpirits"(arg0: $Collection$$Type<($SpiritLike$$Type)>): $MalumNetworkedParticleEffectColorData
public "isSpiritBased"(): boolean
get "color"(): $ColorParticleData
get "spirit"(): $SpiritArcanaType
get "spiritBased"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumNetworkedParticleEffectColorData$$Type = ($MalumNetworkedParticleEffectColorData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumNetworkedParticleEffectColorData$$Original = $MalumNetworkedParticleEffectColorData;}
declare module "com.sammy.malum.visual_effects.networked.MalumNetworkedParticleEffectType$MalumParticleEffectBuilder" {
import {$Color$$Type} from "java.awt.Color"
import {$NetworkedParticleEffectColorData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectColorData"
import {$NetworkedParticleEffectPositionData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPositionData"
import {$List$$Type} from "java.util.List"
import {$NetworkedParticleEffectExtraData, $NetworkedParticleEffectExtraData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectExtraData"
import {$ColorParticleDataWrapper$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataWrapper"
import {$SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$NetworkedParticleEffectType$ParticleEffectBuilder} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType$ParticleEffectBuilder"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NetworkedParticleEffectType$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType"

export class $MalumNetworkedParticleEffectType$MalumParticleEffectBuilder<T extends $NetworkedParticleEffectExtraData> extends $NetworkedParticleEffectType$ParticleEffectBuilder<(T)> {
constructor(arg0: $NetworkedParticleEffectType$$Type<(T)>)

public "at"(arg0: $NetworkedParticleEffectPositionData$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "at"(arg0: $BlockPos$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "at"(arg0: $Entity$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "at"(arg0: $Vec3$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "color"(arg0: $NetworkedParticleEffectColorData$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "color"(...arg0: ($SpiritLike$$Type)[]): $MalumNetworkedParticleEffectType$MalumParticleEffectBuilder<(T)>
public "color"(arg0: $Item$$Type): $MalumNetworkedParticleEffectType$MalumParticleEffectBuilder<(T)>
public "color"(arg0: $List$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "color"(arg0: $ColorParticleDataWrapper$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "color"(arg0: $Color$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "customData"(arg0: T): $MalumNetworkedParticleEffectType$MalumParticleEffectBuilder<(T)>
public "spawn"(arg0: $ServerLevel$$Type): $MalumNetworkedParticleEffectType$MalumParticleEffectBuilder<(T)>
public "spawn"(arg0: $Consumer$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumNetworkedParticleEffectType$MalumParticleEffectBuilder$$Type<T> = ($MalumNetworkedParticleEffectType$MalumParticleEffectBuilder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumNetworkedParticleEffectType$MalumParticleEffectBuilder$$Original<T> = $MalumNetworkedParticleEffectType$MalumParticleEffectBuilder<(T)>;}
declare module "com.sammy.malum.visual_effects.networked.nitrate.NitrateImpactParticleEffectType" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$NetworkedParticleEffectType$ParticleEffectBuilder} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType$ParticleEffectBuilder"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MalumNetworkedParticleEffectType} from "com.sammy.malum.visual_effects.networked.MalumNetworkedParticleEffectType"
import {$NetworkedParticleEffectExtraData} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectExtraData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$NetworkedParticleEffectType} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType"

export class $NitrateImpactParticleEffectType extends $MalumNetworkedParticleEffectType<($NetworkedParticleEffectExtraData)> {
static readonly "CODEC": $Codec<($NetworkedParticleEffectType<(never)>)>
static readonly "EFFECT_TYPES": $Map<(StringJS), ($NetworkedParticleEffectType<(never)>)>

constructor(arg0: StringJS)

public "createEffect"(arg0: $Entity$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "createEffect"(): $NetworkedParticleEffectType$ParticleEffectBuilder
public "createEffect"(arg0: $Vec3$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
public "createEffect"(arg0: $BlockPos$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NitrateImpactParticleEffectType$$Type = ($NitrateImpactParticleEffectType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NitrateImpactParticleEffectType$$Original = $NitrateImpactParticleEffectType;}
