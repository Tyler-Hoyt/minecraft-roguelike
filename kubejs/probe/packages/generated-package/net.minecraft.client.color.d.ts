declare module "net.minecraft.client.color.item.ItemColors" {
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ItemColorsExtended$$Interface} from "org.embeddedt.embeddium.impl.model.color.interop.ItemColorsExtended"
import {$ItemColor, $ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"

export class $ItemColors implements $ItemColorsExtended$$Interface {
constructor()

/**
 * 
 * @deprecated
 */
public "register"(arg0: $ItemColor$$Type, ...arg1: ($ItemLike$$Type)[]): void
public "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public static "createDefault"(arg0: $BlockColors$$Type): $ItemColors
public "sodium$getColorProvider"(arg0: $ItemStack$$Type): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColors$$Type = ($ItemColors);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemColors$$Original = $ItemColors;}
declare module "net.minecraft.client.color.item.ItemColor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ItemColor$$Interface {

(arg0: $ItemStack, arg1: integer): integer
}

export class $ItemColor implements $ItemColor$$Interface {
 "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColor$$Type = ((arg0: $ItemStack, arg1: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemColor$$Original = $ItemColor;}
declare module "net.minecraft.client.color.block.BlockColors" {
import {$BlockColorsAccessor$$Interface} from "com.aetherteam.aether.mixin.mixins.client.accessor.BlockColorsAccessor"
import {$Map} from "java.util.Map"
import {$Reference2ReferenceMap} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceMap"
import {$ReferenceSet} from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Set} from "java.util.Set"
import {$BlockColorsExtended$$Interface} from "org.embeddedt.embeddium.impl.model.color.interop.BlockColorsExtended"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $BlockColors implements $BlockColorsAccessor$$Interface, $BlockColorsExtended$$Interface {
constructor()

/**
 * 
 * @deprecated
 */
public "register"(arg0: $BlockColor$$Type, ...arg1: ($Block$$Type)[]): void
public "getColor"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public static "createDefault"(): $BlockColors
public "sodium$getOverridenVanillaBlocks"(): $ReferenceSet
public "sodium$getProviders"(): $Reference2ReferenceMap
public "getColoringProperties"(arg0: $Block$$Type): $Set<($Property<(never)>)>
public "aether$getBlockColors"(): $Map
public static "getProviders"(arg0: $BlockColors$$Type): $Reference2ReferenceMap<($Block), ($BlockColor)>
public static "getOverridenVanillaBlocks"(arg0: $BlockColors$$Type): $ReferenceSet<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColors$$Type = ($BlockColors);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockColors$$Original = $BlockColors;}
declare module "net.minecraft.client.color.block.BlockColor" {
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockColor$$Interface {

(arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: integer): integer
}

export class $BlockColor implements $BlockColor$$Interface {
 "getColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColor$$Type = ((arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockColor$$Original = $BlockColor;}
