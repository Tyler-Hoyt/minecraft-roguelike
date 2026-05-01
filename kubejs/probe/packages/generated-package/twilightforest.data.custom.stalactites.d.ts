declare module "twilightforest.data.custom.stalactites.entry.Stalactite" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Record} from "java.lang.Record"

export class $Stalactite extends $Record {
static readonly "CODEC": $Codec<($Stalactite)>

constructor(ores: $Either$$Type<($List$$Type<($Pair$$Type<($Block$$Type), (integer)>)>), ($Block$$Type)>, sizeVariation: float, maxLength: integer, weight: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "maxLength"(): integer
public "ores"(): $Either<($List<($Pair<($Block), (integer)>)>), ($Block)>
public "weight"(): integer
public "sizeVariation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stalactite$$Type = ({"maxLength"?: integer, "sizeVariation"?: float, "ores"?: $Either$$Type<($List$$Type<($Pair$$Type<($Block$$Type), (integer)>)>), ($Block$$Type)>, "weight"?: integer}) | ([maxLength?: integer, sizeVariation?: float, ores?: $Either$$Type<($List$$Type<($Pair$$Type<($Block$$Type), (integer)>)>), ($Block$$Type)>, weight?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stalactite$$Original = $Stalactite;}
declare module "twilightforest.data.custom.stalactites.entry.SpeleothemVarietyConfig" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $SpeleothemVarietyConfig extends $Record {
static readonly "CODEC": $Codec<($SpeleothemVarietyConfig)>

constructor(type: StringJS, baseStalactites: $List$$Type<($ResourceLocation$$Type)>, oreStalactites: $List$$Type<($ResourceLocation$$Type)>, stalagmites: $List$$Type<($ResourceLocation$$Type)>, oreChance: float, stalactiteChance: float, stalagmiteChance: float, replace: boolean)

public "type"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "replace"(): boolean
public "shouldDoAStalactite"(arg0: $RandomSource$$Type): boolean
public "shouldDoAStalagmite"(arg0: $RandomSource$$Type): boolean
public "oreChance"(): float
public "baseStalactites"(): $List<($ResourceLocation)>
public "stalagmiteChance"(): float
public "stalactiteChance"(): float
public "oreStalactites"(): $List<($ResourceLocation)>
public "stalagmites"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeleothemVarietyConfig$$Type = ({"oreStalactites"?: $List$$Type<($ResourceLocation$$Type)>, "type"?: StringJS, "stalactiteChance"?: float, "oreChance"?: float, "replace"?: boolean, "stalagmites"?: $List$$Type<($ResourceLocation$$Type)>, "stalagmiteChance"?: float, "baseStalactites"?: $List$$Type<($ResourceLocation$$Type)>}) | ([oreStalactites?: $List$$Type<($ResourceLocation$$Type)>, type?: StringJS, stalactiteChance?: float, oreChance?: float, replace?: boolean, stalagmites?: $List$$Type<($ResourceLocation$$Type)>, stalagmiteChance?: float, baseStalactites?: $List$$Type<($ResourceLocation$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpeleothemVarietyConfig$$Original = $SpeleothemVarietyConfig;}
