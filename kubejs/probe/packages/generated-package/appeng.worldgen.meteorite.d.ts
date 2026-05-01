declare module "appeng.worldgen.meteorite.MeteoriteStructure" {
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$StructureSet} from "net.minecraft.world.level.levelgen.structure.StructureSet"
import {$Optional} from "java.util.Optional"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $MeteoriteStructure extends $Structure {
static readonly "STRUCTURE_SET_KEY": $ResourceKey<($StructureSet)>
static readonly "CODEC": $MapCodec<($MeteoriteStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
static readonly "ID": $ResourceLocation
static readonly "BIOME_TAG_KEY": $TagKey<($Biome)>
static "TYPE": $StructureType<($MeteoriteStructure)>
static readonly "KEY": $ResourceKey<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type)

public "type"(): $StructureType<(never)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeteoriteStructure$$Type = ($MeteoriteStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MeteoriteStructure$$Original = $MeteoriteStructure;}
