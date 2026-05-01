declare module "net.minecraft.data.recipes.RecipeBuilder" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeCategory$$Type} from "net.minecraft.data.recipes.RecipeCategory"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Item} from "net.minecraft.world.item.Item"

export interface $RecipeBuilder$$Interface {
get "result"(): $Item
}

export class $RecipeBuilder implements $RecipeBuilder$$Interface {
static readonly "ROOT_RECIPE_ADVANCEMENT": $ResourceLocation

 "group"(arg0: StringJS): $RecipeBuilder
 "save"(arg0: $RecipeOutput$$Type): void
 "save"(arg0: $RecipeOutput$$Type, arg1: StringJS): void
 "save"(arg0: $RecipeOutput$$Type, arg1: $ResourceLocation$$Type): void
 "getResult"(): $Item
static "getDefaultRecipeId"(arg0: $ItemLike$$Type): $ResourceLocation
static "determineBookCategory"(arg0: $RecipeCategory$$Type): $CraftingBookCategory
 "unlockedBy"(arg0: StringJS, arg1: $Criterion$$Type<(never)>): $RecipeBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBuilder$$Type = ($RecipeBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBuilder$$Original = $RecipeBuilder;}
declare module "net.minecraft.data.recipes.RecipeOutput" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$IRecipeOutputExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IRecipeOutputExtension"
import {$Advancement$Builder} from "net.minecraft.advancements.Advancement$Builder"
import {$AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export interface $RecipeOutput$$Interface extends $IRecipeOutputExtension$$Interface {
}

export class $RecipeOutput implements $RecipeOutput$$Interface {
 "accept"(arg0: $ResourceLocation$$Type, arg1: $Recipe$$Type<(never)>, arg2: $AdvancementHolder$$Type): void
 "advancement"(): $Advancement$Builder
 "accept"(arg0: $ResourceLocation$$Type, arg1: $Recipe$$Type<(never)>, arg2: $AdvancementHolder$$Type, ...arg3: ($ICondition$$Type)[]): void
 "withConditions"(...arg0: ($ICondition$$Type)[]): $RecipeOutput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeOutput$$Type = ($RecipeOutput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeOutput$$Original = $RecipeOutput;}
declare module "net.minecraft.data.recipes.RecipeCategory" {
import {$Enum} from "java.lang.Enum"

export class $RecipeCategory extends $Enum<($RecipeCategory)> {
static readonly "BUILDING_BLOCKS": $RecipeCategory
static readonly "REDSTONE": $RecipeCategory
static readonly "TRANSPORTATION": $RecipeCategory
static readonly "COMBAT": $RecipeCategory
static readonly "MISC": $RecipeCategory
static readonly "BREWING": $RecipeCategory
static readonly "DECORATIONS": $RecipeCategory
static readonly "TOOLS": $RecipeCategory
static readonly "FOOD": $RecipeCategory

public static "values"(): ($RecipeCategory)[]
public static "valueOf"(arg0: StringJS): $RecipeCategory
public "getFolderName"(): StringJS
get "folderName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCategory$$Type = (("building_blocks") | ("decorations") | ("redstone") | ("transportation") | ("tools") | ("combat") | ("food") | ("brewing") | ("misc"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeCategory$$Original = $RecipeCategory;}
