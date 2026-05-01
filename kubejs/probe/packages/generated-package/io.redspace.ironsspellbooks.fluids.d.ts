declare module "io.redspace.ironsspellbooks.fluids.PotionFluidType" {
import {$FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Lazy} from "net.neoforged.neoforge.common.util.Lazy"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"

export class $PotionFluidType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor(arg0: $FluidType$Properties$$Type)

public "getDescriptionId"(arg0: $FluidStack$$Type): StringJS
public "getDescription"(arg0: $FluidStack$$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFluidType$$Type = ($PotionFluidType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionFluidType$$Original = $PotionFluidType;}
declare module "io.redspace.ironsspellbooks.fluids.NoopFluid" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $NoopFluid extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $BaseFlowingFluid$Properties$$Type)

public "getBucket"(): $Item
public "isSource"(arg0: $FluidState$$Type): boolean
public "getAmount"(arg0: $FluidState$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoopFluid$$Type = ($NoopFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoopFluid$$Original = $NoopFluid;}
