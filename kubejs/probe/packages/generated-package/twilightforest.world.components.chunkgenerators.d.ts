declare module "twilightforest.world.components.chunkgenerators.TerrainDensityRouter" {
import {$DensityFunction$SimpleFunction$$Interface} from "net.minecraft.world.level.levelgen.DensityFunction$SimpleFunction"
import {$DensityFunction$Visitor$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"
import {$BiomeDensitySource$DensityData} from "twilightforest.world.components.layer.BiomeDensitySource$DensityData"
import {$DensityFunction$ContextProvider$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import {$BiomeDensitySource, $BiomeDensitySource$$Type} from "twilightforest.world.components.layer.BiomeDensitySource"
import {$KeyDispatchDataCodec} from "net.minecraft.util.KeyDispatchDataCodec"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DensityFunction$FunctionContext$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import {$DensityFunction, $DensityFunction$$Type} from "net.minecraft.world.level.levelgen.DensityFunction"

export class $TerrainDensityRouter implements $DensityFunction$SimpleFunction$$Interface {
static readonly "CODEC": $MapCodec<($TerrainDensityRouter)>
static readonly "KEY_CODEC": $KeyDispatchDataCodec<($TerrainDensityRouter)>

constructor(arg0: $Holder$$Type<($BiomeDensitySource)>, arg1: double, arg2: double, arg3: double, arg4: $DensityFunction$$Type, arg5: $DensityFunction$$Type)

public "compute"(arg0: $DensityFunction$FunctionContext$$Type): double
public "maxValue"(): double
public "baseOffset"(): $DensityFunction
public "minValue"(): double
public "biomeDensitySourceHolder"(): $Holder<($BiomeDensitySource)>
public "codec"(): $KeyDispatchDataCodec<($DensityFunction)>
public "upperDensityBound"(): double
public "lowerDensityBound"(): double
public "depthScalar"(): double
public "computeTerrain"(arg0: $DensityFunction$FunctionContext$$Type): $BiomeDensitySource$DensityData
public "mapAll"(arg0: $DensityFunction$Visitor$$Type): $DensityFunction
public "baseFactor"(): $DensityFunction
public "fillArray"(arg0: (double)[], arg1: $DensityFunction$ContextProvider$$Type): void
public "abs"(): $DensityFunction
public "clamp"(arg0: double, arg1: double): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "cube"(): $DensityFunction
public "quarterNegative"(): $DensityFunction
public "halfNegative"(): $DensityFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerrainDensityRouter$$Type = ($TerrainDensityRouter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TerrainDensityRouter$$Original = $TerrainDensityRouter;}
declare module "twilightforest.world.components.chunkgenerators.NoiseDensityRouter" {
import {$DensityFunction$SimpleFunction$$Interface} from "net.minecraft.world.level.levelgen.DensityFunction$SimpleFunction"
import {$DensityFunction$Visitor$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"
import {$BiomeDensitySource$DensityData} from "twilightforest.world.components.layer.BiomeDensitySource$DensityData"
import {$DensityFunction$ContextProvider$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import {$BiomeDensitySource, $BiomeDensitySource$$Type} from "twilightforest.world.components.layer.BiomeDensitySource"
import {$KeyDispatchDataCodec} from "net.minecraft.util.KeyDispatchDataCodec"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DensityFunction$FunctionContext$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import {$DensityFunction} from "net.minecraft.world.level.levelgen.DensityFunction"

export class $NoiseDensityRouter implements $DensityFunction$SimpleFunction$$Interface {
static readonly "CODEC": $MapCodec<($NoiseDensityRouter)>
static readonly "KEY_CODEC": $KeyDispatchDataCodec<($NoiseDensityRouter)>

constructor(arg0: $Holder$$Type<($BiomeDensitySource)>, arg1: double, arg2: double, arg3: double)

public "compute"(arg0: $DensityFunction$FunctionContext$$Type): double
public "maxValue"(): double
public "minValue"(): double
public "biomeDensitySourceHolder"(): $Holder<($BiomeDensitySource)>
public "codec"(): $KeyDispatchDataCodec<($DensityFunction)>
public "upperDensityBound"(): double
public "lowerDensityBound"(): double
public "depthScalar"(): double
public "computeTerrain"(arg0: $DensityFunction$FunctionContext$$Type): $BiomeDensitySource$DensityData
public "mapAll"(arg0: $DensityFunction$Visitor$$Type): $DensityFunction
public "fillArray"(arg0: (double)[], arg1: $DensityFunction$ContextProvider$$Type): void
public "abs"(): $DensityFunction
public "clamp"(arg0: double, arg1: double): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "cube"(): $DensityFunction
public "quarterNegative"(): $DensityFunction
public "halfNegative"(): $DensityFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoiseDensityRouter$$Type = ($NoiseDensityRouter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoiseDensityRouter$$Original = $NoiseDensityRouter;}
declare module "twilightforest.world.components.chunkgenerators.TerrainColumn" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Double2ObjectSortedMap$$Type} from "it.unimi.dsi.fastutil.doubles.Double2ObjectSortedMap"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Stream} from "java.util.stream.Stream"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DensityFunction$FunctionContext$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$DensityFunction$$Type} from "net.minecraft.world.level.levelgen.DensityFunction"

export class $TerrainColumn {
static readonly "CODEC": $Codec<($TerrainColumn)>

constructor(arg0: $Holder$$Type<($Biome)>, arg1: $Double2ObjectSortedMap$$Type<($Holder$$Type<($Biome$$Type)>)>, arg2: $DensityFunction$$Type, arg3: $DensityFunction$$Type, arg4: $DensityFunction$$Type)

public "scale"(arg0: $DensityFunction$FunctionContext$$Type): double
public "depth"(arg0: $DensityFunction$FunctionContext$$Type): double
public "is"(arg0: $ResourceKey$$Type<($Biome)>): boolean
public "is"(arg0: $Holder$$Type<($Biome)>): boolean
public "getBiome"(arg0: integer): $Holder<($Biome)>
public "weight"(arg0: $DensityFunction$FunctionContext$$Type): double
public "getBiomesDebug"(arg0: $Consumer$$Type<(StringJS)>): void
public "getMainBiome"(): $Holder<($Biome)>
public "getResourceKey"(): $ResourceKey<($Biome)>
public "getBiomes"(): $Stream<($Holder<($Biome)>)>
get "mainBiome"(): $Holder<($Biome)>
get "resourceKey"(): $ResourceKey<($Biome)>
get "biomes"(): $Stream<($Holder<($Biome)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerrainColumn$$Type = ($TerrainColumn);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TerrainColumn$$Original = $TerrainColumn;}
