declare module "twilightforest.world.components.TFCavesCarver" {
import {$ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$CaveCarverConfiguration, $CaveCarverConfiguration$$Type} from "net.minecraft.world.level.levelgen.carver.CaveCarverConfiguration"
import {$CanyonCarverConfiguration} from "net.minecraft.world.level.levelgen.carver.CanyonCarverConfiguration"
import {$Aquifer$$Type} from "net.minecraft.world.level.levelgen.Aquifer"
import {$CarvingContext$$Type} from "net.minecraft.world.level.levelgen.carver.CarvingContext"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$CarvingMask$$Type} from "net.minecraft.world.level.chunk.CarvingMask"
import {$Function$$Type} from "java.util.function.Function"
import {$WorldCarver} from "net.minecraft.world.level.levelgen.carver.WorldCarver"
import {$CarverConfiguration$$Type} from "net.minecraft.world.level.levelgen.carver.CarverConfiguration"
import {$BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $TFCavesCarver extends $WorldCarver<($CaveCarverConfiguration)> {
static readonly "CAVE": $WorldCarver<($CaveCarverConfiguration)>
static readonly "CANYON": $WorldCarver<($CanyonCarverConfiguration)>
static readonly "NETHER_CAVE": $WorldCarver<($CaveCarverConfiguration)>

constructor(arg0: $Codec$$Type<($CaveCarverConfiguration$$Type)>, arg1: boolean, arg2: $BlockStateProvider$$Type)

public "carve"(arg0: $CarvingContext$$Type, arg1: $CarverConfiguration$$Type, arg2: $ChunkAccess$$Type, arg3: $Function$$Type, arg4: $RandomSource$$Type, arg5: $Aquifer$$Type, arg6: $ChunkPos$$Type, arg7: $CarvingMask$$Type): boolean
public "carve"(arg0: $CarvingContext$$Type, arg1: $CaveCarverConfiguration$$Type, arg2: $ChunkAccess$$Type, arg3: $Function$$Type<($BlockPos), ($Holder$$Type<($Biome$$Type)>)>, arg4: $RandomSource$$Type, arg5: $Aquifer$$Type, arg6: $ChunkPos$$Type, arg7: $CarvingMask$$Type): boolean
public "getCarveState"(arg0: $CarvingContext$$Type, arg1: $CaveCarverConfiguration$$Type, arg2: $BlockPos$$Type, arg3: $Aquifer$$Type): $BlockState
public "getCarveState"(arg0: $CarvingContext$$Type, arg1: $CarverConfiguration$$Type, arg2: $BlockPos$$Type, arg3: $Aquifer$$Type): $BlockState
public "isStartChunk"(arg0: $CaveCarverConfiguration$$Type, arg1: $RandomSource$$Type): boolean
public "isStartChunk"(arg0: $CarverConfiguration$$Type, arg1: $RandomSource$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TFCavesCarver$$Type = ($TFCavesCarver);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TFCavesCarver$$Original = $TFCavesCarver;}
