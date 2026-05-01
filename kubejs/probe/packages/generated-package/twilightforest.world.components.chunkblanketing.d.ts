declare module "twilightforest.world.components.chunkblanketing.GlacierBlanketProcessor" {
import {$ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Heightmap$Types} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ChunkBlanketType} from "twilightforest.world.components.chunkblanketing.ChunkBlanketType"
import {$ChunkBlanketProcessor$SimpleProcessor$$Interface} from "twilightforest.world.components.chunkblanketing.ChunkBlanketProcessor$SimpleProcessor"
import {$Function$$Type} from "java.util.function.Function"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $GlacierBlanketProcessor extends $Record implements $ChunkBlanketProcessor$SimpleProcessor$$Interface {
static readonly "CODEC": $MapCodec<($GlacierBlanketProcessor)>

constructor(biomesForApplication: $HolderSet$$Type<($Biome)>, glacierBody: $BlockStateProvider$$Type, glacierTop: $BlockStateProvider$$Type, height: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getType"(): $ChunkBlanketType
public "height"(): integer
public "glacierTop"(): $BlockStateProvider
public "glacierBody"(): $BlockStateProvider
public "processColumn"(arg0: $RandomSource$$Type, arg1: $ChunkAccess$$Type, arg2: $BlockPos$$Type): void
public "heightmap"(): $Heightmap$Types
public "biomesForApplication"(): $HolderSet<($Biome)>
public "processChunk"(arg0: $RandomSource$$Type, arg1: $Function$$Type<($BlockPos), ($Holder$$Type<($Biome$$Type)>)>, arg2: $ChunkAccess$$Type): void
get "type"(): $ChunkBlanketType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlacierBlanketProcessor$$Type = ({"glacierTop"?: $BlockStateProvider$$Type, "biomesForApplication"?: $HolderSet$$Type<($Biome)>, "glacierBody"?: $BlockStateProvider$$Type, "height"?: integer}) | ([glacierTop?: $BlockStateProvider$$Type, biomesForApplication?: $HolderSet$$Type<($Biome)>, glacierBody?: $BlockStateProvider$$Type, height?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlacierBlanketProcessor$$Original = $GlacierBlanketProcessor;}
declare module "twilightforest.world.components.chunkblanketing.ChunkBlanketProcessor$SimpleProcessor" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ChunkBlanketType} from "twilightforest.world.components.chunkblanketing.ChunkBlanketType"
import {$Heightmap$Types} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Function$$Type} from "java.util.function.Function"
import {$ChunkBlanketProcessor$$Interface} from "twilightforest.world.components.chunkblanketing.ChunkBlanketProcessor"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export interface $ChunkBlanketProcessor$SimpleProcessor$$Interface extends $ChunkBlanketProcessor$$Interface {
get "type"(): $ChunkBlanketType
}

export class $ChunkBlanketProcessor$SimpleProcessor implements $ChunkBlanketProcessor$SimpleProcessor$$Interface {
 "processChunk"(arg0: $RandomSource$$Type, arg1: $Function$$Type<($BlockPos), ($Holder$$Type<($Biome$$Type)>)>, arg2: $ChunkAccess$$Type): void
 "processColumn"(arg0: $RandomSource$$Type, arg1: $ChunkAccess$$Type, arg2: $BlockPos$$Type): void
 "heightmap"(): $Heightmap$Types
 "getType"(): $ChunkBlanketType
 "biomesForApplication"(): $HolderSet<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBlanketProcessor$SimpleProcessor$$Type = ($ChunkBlanketProcessor$SimpleProcessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkBlanketProcessor$SimpleProcessor$$Original = $ChunkBlanketProcessor$SimpleProcessor;}
declare module "twilightforest.world.components.chunkblanketing.CanopyBlanketProcessor" {
import {$ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ChunkBlanketType} from "twilightforest.world.components.chunkblanketing.ChunkBlanketType"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Function$$Type} from "java.util.function.Function"
import {$ChunkBlanketProcessor$$Interface} from "twilightforest.world.components.chunkblanketing.ChunkBlanketProcessor"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $CanopyBlanketProcessor extends $Record implements $ChunkBlanketProcessor$$Interface {
static readonly "CODEC": $MapCodec<($CanopyBlanketProcessor)>

constructor(biomesForApplication: $HolderSet$$Type<($Biome)>, blockState: $BlockStateProvider$$Type, height: integer, avoidStructures: $HolderSet$$Type<($Structure)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getType"(): $ChunkBlanketType
public "blockState"(): $BlockStateProvider
public "height"(): integer
public "processChunk"(arg0: $RandomSource$$Type, arg1: $Function$$Type<($BlockPos), ($Holder$$Type<($Biome$$Type)>)>, arg2: $ChunkAccess$$Type): void
public "avoidStructures"(): $HolderSet<($Structure)>
public "biomesForApplication"(): $HolderSet<($Biome)>
get "type"(): $ChunkBlanketType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanopyBlanketProcessor$$Type = ({"avoidStructures"?: $HolderSet$$Type<($Structure)>, "blockState"?: $BlockStateProvider$$Type, "biomesForApplication"?: $HolderSet$$Type<($Biome)>, "height"?: integer}) | ([avoidStructures?: $HolderSet$$Type<($Structure)>, blockState?: $BlockStateProvider$$Type, biomesForApplication?: $HolderSet$$Type<($Biome)>, height?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CanopyBlanketProcessor$$Original = $CanopyBlanketProcessor;}
declare module "twilightforest.world.components.chunkblanketing.ChunkBlanketProcessor" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ChunkBlanketType} from "twilightforest.world.components.chunkblanketing.ChunkBlanketType"
import {$Function$$Type} from "java.util.function.Function"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export interface $ChunkBlanketProcessor$$Interface {
get "type"(): $ChunkBlanketType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.TwilightChunkBlanketProcessors
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.TwilightChunkBlanketProcessorsTag
}

export class $ChunkBlanketProcessor implements $ChunkBlanketProcessor$$Interface {
 "getType"(): $ChunkBlanketType
 "processChunk"(arg0: $RandomSource$$Type, arg1: $Function$$Type<($BlockPos), ($Holder$$Type<($Biome$$Type)>)>, arg2: $ChunkAccess$$Type): void
 "biomesForApplication"(): $HolderSet<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBlanketProcessor$$Type = (Special.TwilightChunkBlanketProcessors);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkBlanketProcessor$$Original = $ChunkBlanketProcessor;}
declare module "twilightforest.world.components.chunkblanketing.ChunkBlanketType" {
import {$ChunkBlanketProcessor, $ChunkBlanketProcessor$$Type} from "twilightforest.world.components.chunkblanketing.ChunkBlanketProcessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $ChunkBlanketType$$Interface {

(): $MapCodec$$Type<($ChunkBlanketProcessor$$Type)>
get "codec"(): $MapCodec<($ChunkBlanketProcessor)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.TwilightforestChunkBlanketType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.TwilightforestChunkBlanketTypeTag
}

export class $ChunkBlanketType implements $ChunkBlanketType$$Interface {
 "getCodec"(): $MapCodec<($ChunkBlanketProcessor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBlanketType$$Type = (Special.TwilightforestChunkBlanketType) | (() => $MapCodec$$Type<($ChunkBlanketProcessor$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkBlanketType$$Original = $ChunkBlanketType;}
