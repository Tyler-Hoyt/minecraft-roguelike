declare module "com.telepathicgrunt.repurposedstructures.mixins.structures.StructureProcessorAccessor" {
import {$StructureProcessorType, $StructureProcessorType$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"

export interface $StructureProcessorAccessor$$Interface {

(): $StructureProcessorType$$Type<(never)>
}

export class $StructureProcessorAccessor implements $StructureProcessorAccessor$$Interface {
 "callGetType"(): $StructureProcessorType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureProcessorAccessor$$Type = (() => $StructureProcessorType$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureProcessorAccessor$$Original = $StructureProcessorAccessor;}
declare module "com.telepathicgrunt.repurposedstructures.mixins.structures.ListPoolElementAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $ListPoolElementAccessor$$Interface {

(): $List$$Type<($StructurePoolElement$$Type)>
}

export class $ListPoolElementAccessor implements $ListPoolElementAccessor$$Interface {
 "repurposedstructures_getElements"(): $List<($StructurePoolElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListPoolElementAccessor$$Type = (() => $List$$Type<($StructurePoolElement$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListPoolElementAccessor$$Original = $ListPoolElementAccessor;}
declare module "com.telepathicgrunt.repurposedstructures.mixins.entities.MerchantOfferAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MerchantOfferAccessor$$Interface {

(arg0: integer): void
set "maxUses"(value: integer)
}

export class $MerchantOfferAccessor implements $MerchantOfferAccessor$$Interface {
 "setMaxUses"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantOfferAccessor$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MerchantOfferAccessor$$Original = $MerchantOfferAccessor;}
declare module "com.telepathicgrunt.repurposedstructures.mixins.structures.StructurePieceAccessor" {
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"

export interface $StructurePieceAccessor$$Interface {

(arg0: $BoundingBox): void
set "boundingBox"(value: $BoundingBox$$Type)
}

export class $StructurePieceAccessor implements $StructurePieceAccessor$$Interface {
 "setBoundingBox"(arg0: $BoundingBox$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePieceAccessor$$Type = ((arg0: $BoundingBox) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructurePieceAccessor$$Original = $StructurePieceAccessor;}
declare module "com.telepathicgrunt.repurposedstructures.mixins.entities.EntityAccessor" {
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $EntityAccessor$$Interface {

(arg0: $ImmutableList<($Entity)>): void
set "passengers"(value: $ImmutableList$$Type<($Entity$$Type)>)
}

export class $EntityAccessor implements $EntityAccessor$$Interface {
 "setPassengers"(arg0: $ImmutableList$$Type<($Entity$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = ((arg0: $ImmutableList<($Entity)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccessor$$Original = $EntityAccessor;}
declare module "com.telepathicgrunt.repurposedstructures.mixins.entities.ShulkerEntityInvoker" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $ShulkerEntityInvoker$$Interface {

(arg0: $Direction): void
}

export class $ShulkerEntityInvoker implements $ShulkerEntityInvoker$$Interface {
 "repurposedstructures_callSetAttachFace"(arg0: $Direction$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerEntityInvoker$$Type = ((arg0: $Direction) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerEntityInvoker$$Original = $ShulkerEntityInvoker;}
declare module "com.telepathicgrunt.repurposedstructures.mixins.structures.TemplateAccessor" {
import {$StructureTemplate$Palette, $StructureTemplate$Palette$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$List, $List$$Type} from "java.util.List"

export interface $TemplateAccessor$$Interface {

(): $List$$Type<($StructureTemplate$Palette$$Type)>
}

export class $TemplateAccessor implements $TemplateAccessor$$Interface {
 "repurposedstructures_getPalettes"(): $List<($StructureTemplate$Palette)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateAccessor$$Type = (() => $List$$Type<($StructureTemplate$Palette$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemplateAccessor$$Original = $TemplateAccessor;}
declare module "com.telepathicgrunt.repurposedstructures.mixins.structures.SinglePoolElementAccessor" {
import {$StructureProcessorList} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$StructureTemplateManager$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$StructureTemplate} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import {$Holder} from "net.minecraft.core.Holder"

export interface $SinglePoolElementAccessor$$Interface {
}

export class $SinglePoolElementAccessor implements $SinglePoolElementAccessor$$Interface {
 "callGetTemplate"(arg0: $StructureTemplateManager$$Type): $StructureTemplate
 "repurposedstructures_getProcessors"(): $Holder<($StructureProcessorList)>
 "repurposedstructures_getTemplate"(): $Either<($ResourceLocation), ($StructureTemplate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinglePoolElementAccessor$$Type = ($SinglePoolElementAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SinglePoolElementAccessor$$Original = $SinglePoolElementAccessor;}
declare module "com.telepathicgrunt.repurposedstructures.mixins.items.MapItemAccessor" {
import {$MapId} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $MapItemAccessor$$Interface {
}

export class $MapItemAccessor implements $MapItemAccessor$$Interface {
static "callCreateNewSavedData"(level: $Level$$Type, x: integer, z: integer, scale: integer, trackingPosition: boolean, unlimitedTracking: boolean, dimension: $ResourceKey$$Type<($Level)>): $MapId
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapItemAccessor$$Type = ($MapItemAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapItemAccessor$$Original = $MapItemAccessor;}
declare module "com.telepathicgrunt.repurposedstructures.mixins.structures.StructurePoolAccessor" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$StructureTemplatePool} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MutableObject} from "org.apache.commons.lang3.mutable.MutableObject"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$$Type} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import {$Holder} from "net.minecraft.core.Holder"

export interface $StructurePoolAccessor$$Interface {
}

export class $StructurePoolAccessor implements $StructurePoolAccessor$$Interface {
static "getCODEC_REFERENCE"(): $MutableObject<($Codec<($Holder<($StructureTemplatePool)>)>)>
 "repurposedstructures_getTemplates"(): $ObjectArrayList<($StructurePoolElement)>
 "repurposedstructures_setTemplates"(arg0: $ObjectArrayList$$Type<($StructurePoolElement$$Type)>): void
 "repurposedstructures_setRawTemplates"(arg0: $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>): void
 "repurposedstructures_getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePoolAccessor$$Type = ($StructurePoolAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructurePoolAccessor$$Original = $StructurePoolAccessor;}
declare module "com.telepathicgrunt.repurposedstructures.mixins.features.DungeonFeatureAccessor" {
import {$EntityType} from "net.minecraft.world.entity.EntityType"

export interface $DungeonFeatureAccessor$$Interface {
}

export class $DungeonFeatureAccessor implements $DungeonFeatureAccessor$$Interface {
static "getMOBS"(): ($EntityType<(never)>)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DungeonFeatureAccessor$$Type = ($DungeonFeatureAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DungeonFeatureAccessor$$Original = $DungeonFeatureAccessor;}
declare module "com.telepathicgrunt.repurposedstructures.mixins.resources.LootContextAccessor" {
import {$LootParams, $LootParams$$Type} from "net.minecraft.world.level.storage.loot.LootParams"

export interface $LootContextAccessor$$Interface {

(): $LootParams$$Type
get "params"(): $LootParams
}

export class $LootContextAccessor implements $LootContextAccessor$$Interface {
 "getParams"(): $LootParams
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextAccessor$$Type = (() => $LootParams$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootContextAccessor$$Original = $LootContextAccessor;}
