declare module "xiroc.dungeoncrawl.dungeon.Dungeon" {
import {$GenerationStep$Decoration} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Optional} from "java.util.Optional"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $Dungeon extends $Structure {
static readonly "CODEC": $MapCodec<($Structure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
static readonly "GENERATION_STEP": $GenerationStep$Decoration

constructor(arg0: $Structure$StructureSettings$$Type)

public "type"(): $StructureType<(never)>
public "step"(): $GenerationStep$Decoration
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dungeon$$Type = ($Dungeon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dungeon$$Original = $Dungeon;}
