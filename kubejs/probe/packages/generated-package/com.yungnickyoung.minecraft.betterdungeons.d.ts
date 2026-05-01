declare module "com.yungnickyoung.minecraft.betterdungeons.world.structure.SmallNetherDungeonStructure" {
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$DimensionPadding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.DimensionPadding"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $SmallNetherDungeonStructure extends $Structure {
static readonly "CODEC": $MapCodec<($SmallNetherDungeonStructure)>
readonly "maxY": $Optional<(integer)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
readonly "maxDepth": integer
readonly "zOffsetInChunk": $IntProvider
readonly "xOffsetInChunk": $IntProvider
readonly "useExpansionHack": boolean
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "minY": $Optional<(integer)>
static readonly "MAX_TOTAL_STRUCTURE_RADIUS": integer
readonly "maxDistanceFromCenter": integer

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: ($ResourceLocation$$Type)?, arg3: integer, arg4: $HeightProvider$$Type, arg5: $IntProvider$$Type, arg6: $IntProvider$$Type, arg7: boolean, arg8: ($Heightmap$Types$$Type)?, arg9: integer, arg10: (integer)?, arg11: (integer)?, arg12: $DimensionPadding$$Type, arg13: $LiquidSettings$$Type)

public "type"(): $StructureType<(never)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallNetherDungeonStructure$$Type = ($SmallNetherDungeonStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmallNetherDungeonStructure$$Original = $SmallNetherDungeonStructure;}
declare module "com.yungnickyoung.minecraft.betterdungeons.world.structure.spider_dungeon.SpiderDungeonStructure" {
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Optional} from "java.util.Optional"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $SpiderDungeonStructure extends $Structure {
static readonly "CODEC": $MapCodec<($SpiderDungeonStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $HeightProvider$$Type)

public "type"(): $StructureType<(never)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiderDungeonStructure$$Type = ($SpiderDungeonStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiderDungeonStructure$$Original = $SpiderDungeonStructure;}
declare module "com.yungnickyoung.minecraft.betterdungeons.mixin.accessor.BoundingBoxAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoundingBoxAccessor$$Interface {
set "minX"(value: integer)
set "maxX"(value: integer)
set "minZ"(value: integer)
set "maxY"(value: integer)
set "maxZ"(value: integer)
set "minY"(value: integer)
}

export class $BoundingBoxAccessor implements $BoundingBoxAccessor$$Interface {
 "setMinX"(arg0: integer): void
 "setMaxX"(arg0: integer): void
 "setMinZ"(arg0: integer): void
 "setMaxY"(arg0: integer): void
 "setMaxZ"(arg0: integer): void
 "setMinY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundingBoxAccessor$$Type = ($BoundingBoxAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoundingBoxAccessor$$Original = $BoundingBoxAccessor;}
