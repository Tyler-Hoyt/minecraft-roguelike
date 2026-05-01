declare module "quek.undergarden.block.fluid.VirulentMixFluid$Source" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$VirulentMixFluid} from "quek.undergarden.block.fluid.VirulentMixFluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $VirulentMixFluid$Source extends $VirulentMixFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $BaseFlowingFluid$Properties$$Type)

public "isSource"(arg0: $FluidState$$Type): boolean
public "getAmount"(arg0: $FluidState$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirulentMixFluid$Source$$Type = ($VirulentMixFluid$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VirulentMixFluid$Source$$Original = $VirulentMixFluid$Source;}
declare module "quek.undergarden.block.fluid.VirulentMixFluid$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$VirulentMixFluid} from "quek.undergarden.block.fluid.VirulentMixFluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $VirulentMixFluid$Flowing extends $VirulentMixFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $BaseFlowingFluid$Properties$$Type)

public "isSource"(arg0: $FluidState$$Type): boolean
public "getAmount"(arg0: $FluidState$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirulentMixFluid$Flowing$$Type = ($VirulentMixFluid$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VirulentMixFluid$Flowing$$Original = $VirulentMixFluid$Flowing;}
declare module "quek.undergarden.block.fluid.VirulentMixFluid" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $VirulentMixFluid extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $BaseFlowingFluid$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirulentMixFluid$$Type = ($VirulentMixFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VirulentMixFluid$$Original = $VirulentMixFluid;}
