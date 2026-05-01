declare module "tictim.paraglider.contents.worldgen.TarreyTownGoddessStatue" {
import {$GenerationStep$Decoration} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Optional} from "java.util.Optional"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructurePieceType$StructureTemplateType} from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType$StructureTemplateType"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $TarreyTownGoddessStatue extends $Structure {
static readonly "CODEC": $MapCodec<($TarreyTownGoddessStatue)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type)

public "type"(): $StructureType<(never)>
public "step"(): $GenerationStep$Decoration
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
public static "pieceType"(): $StructurePieceType$StructureTemplateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TarreyTownGoddessStatue$$Type = ($TarreyTownGoddessStatue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TarreyTownGoddessStatue$$Original = $TarreyTownGoddessStatue;}
declare module "tictim.paraglider.contents.worldgen.NetherHornedStatue" {
import {$GenerationStep$Decoration} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Optional} from "java.util.Optional"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructurePieceType$StructureTemplateType} from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType$StructureTemplateType"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $NetherHornedStatue extends $Structure {
static readonly "CODEC": $MapCodec<($NetherHornedStatue)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "height": $HeightProvider

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $HeightProvider$$Type)

public "type"(): $StructureType<(never)>
public "step"(): $GenerationStep$Decoration
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
public static "pieceType"(): $StructurePieceType$StructureTemplateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetherHornedStatue$$Type = ($NetherHornedStatue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetherHornedStatue$$Original = $NetherHornedStatue;}
declare module "tictim.paraglider.contents.worldgen.UndergroundHornedStatue" {
import {$GenerationStep$Decoration} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Optional} from "java.util.Optional"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructurePieceType$StructureTemplateType} from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType$StructureTemplateType"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $UndergroundHornedStatue extends $Structure {
static readonly "CODEC": $MapCodec<($UndergroundHornedStatue)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type)

public "type"(): $StructureType<(never)>
public "step"(): $GenerationStep$Decoration
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
public static "pieceType"(): $StructurePieceType$StructureTemplateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UndergroundHornedStatue$$Type = ($UndergroundHornedStatue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UndergroundHornedStatue$$Original = $UndergroundHornedStatue;}
