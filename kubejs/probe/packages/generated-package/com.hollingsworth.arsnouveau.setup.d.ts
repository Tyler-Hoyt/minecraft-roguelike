declare module "com.hollingsworth.arsnouveau.setup.registry.BlockRegistryWrapper" {
import {$RegistryWrapper} from "com.hollingsworth.arsnouveau.setup.registry.RegistryWrapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"

export class $BlockRegistryWrapper<T extends $Block> extends $RegistryWrapper<($Block), (T)> {
 "registryObject": $DeferredHolder<(R), (T)>

constructor(arg0: $DeferredHolder$$Type<($Block$$Type), (T)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRegistryWrapper$$Type<T> = ($BlockRegistryWrapper<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockRegistryWrapper$$Original<T> = $BlockRegistryWrapper<(T)>;}
declare module "com.hollingsworth.arsnouveau.setup.registry.BlockEntityTypeRegistryWrapper" {
import {$RegistryWrapper} from "com.hollingsworth.arsnouveau.setup.registry.RegistryWrapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"

export class $BlockEntityTypeRegistryWrapper<T extends $BlockEntity> extends $RegistryWrapper<($BlockEntityType<(never)>), ($BlockEntityType<(T)>)> {
 "registryObject": $DeferredHolder<(R), (T)>

constructor(arg0: $DeferredHolder$$Type<($BlockEntityType$$Type<(never)>), ($BlockEntityType$$Type<(T)>)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeRegistryWrapper$$Type<T> = ($BlockEntityTypeRegistryWrapper<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityTypeRegistryWrapper$$Original<T> = $BlockEntityTypeRegistryWrapper<(T)>;}
declare module "com.hollingsworth.arsnouveau.setup.registry.RecipeRegistry$ModRecipeType" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Interface} from "net.minecraft.world.item.crafting.RecipeType"

export class $RecipeRegistry$ModRecipeType<T extends $Recipe<(object)>> implements $RecipeType$$Interface<(T)> {
constructor()

public "toString"(): StringJS
public static "register"<T extends $Recipe<(object)>>(arg0: StringJS): $RecipeType<(T)>
public static "simple"<T extends $Recipe<(object)>>(arg0: $ResourceLocation$$Type): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeRegistry$ModRecipeType$$Type<T> = ($RecipeRegistry$ModRecipeType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeRegistry$ModRecipeType$$Original<T> = $RecipeRegistry$ModRecipeType<(T)>;}
declare module "com.hollingsworth.arsnouveau.setup.registry.RegistryWrapper" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike$$Interface} from "net.minecraft.world.level.ItemLike"
import {$Supplier$$Interface} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $RegistryWrapper<R, T> implements $Supplier$$Interface<(T)>, $ItemLike$$Interface {
 "registryObject": $DeferredHolder<(R), (T)>

constructor(arg0: $DeferredHolder$$Type<(R), (T)>)

public "get"(): T
public "getResourceLocation"(): $ResourceLocation
public "defaultBlockState"(): $BlockState
public "asItem"(): $Item
public "getHolder"(): $Holder<(R)>
public "getRegistryName"(): StringJS
get "resourceLocation"(): $ResourceLocation
get "holder"(): $Holder<(R)>
get "registryName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryWrapper$$Type<R, T> = ($RegistryWrapper<(R), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryWrapper$$Original<R, T> = $RegistryWrapper<(R), (T)>;}
