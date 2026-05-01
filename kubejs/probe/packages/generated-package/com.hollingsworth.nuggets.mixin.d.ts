declare module "com.hollingsworth.nuggets.mixin.KeyMappingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyMappingAccessor$$Interface {

(): $InputConstants$Key$$Type
get "key"(): $InputConstants$Key
}

export class $KeyMappingAccessor implements $KeyMappingAccessor$$Interface {
 "getKey"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$$Type = (() => $InputConstants$Key$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyMappingAccessor$$Original = $KeyMappingAccessor;}
declare module "com.hollingsworth.nuggets.mixin.MobAccessor" {
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"

export interface $MobAccessor$$Interface {

(): $GoalSelector$$Type
get "goalSelector"(): $GoalSelector
}

export class $MobAccessor implements $MobAccessor$$Interface {
 "getGoalSelector"(): $GoalSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccessor$$Type = (() => $GoalSelector$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobAccessor$$Original = $MobAccessor;}
declare module "com.hollingsworth.nuggets.mixin.StructureTemplateAccessor" {
import {$StructureTemplate$Palette} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$StructureTemplate$StructureEntityInfo} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$List} from "java.util.List"

export interface $StructureTemplateAccessor$$Interface {
get "size"(): $Vec3i
get "palettes"(): $List<($StructureTemplate$Palette)>
get "entityInfoList"(): $List<($StructureTemplate$StructureEntityInfo)>
}

export class $StructureTemplateAccessor implements $StructureTemplateAccessor$$Interface {
 "getSize"(): $Vec3i
 "getPalettes"(): $List<($StructureTemplate$Palette)>
 "getEntityInfoList"(): $List<($StructureTemplate$StructureEntityInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateAccessor$$Type = ($StructureTemplateAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTemplateAccessor$$Original = $StructureTemplateAccessor;}
declare module "com.hollingsworth.nuggets.mixin.ScreenAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export interface $ScreenAccessor$$Interface {

(): $List$$Type<($Renderable$$Type)>
get "renderables"(): $List<($Renderable)>
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
 "getRenderables"(): $List<($Renderable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = (() => $List$$Type<($Renderable$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAccessor$$Original = $ScreenAccessor;}
