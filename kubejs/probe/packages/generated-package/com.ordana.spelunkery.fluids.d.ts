declare module "com.ordana.spelunkery.fluids.SpringWater$Source" {
import {$SpringWater} from "com.ordana.spelunkery.fluids.SpringWater"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ModFlowingFluid$Properties$$Type} from "net.mehvahdjukaar.moonlight.api.fluids.ModFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export class $SpringWater$Source extends $SpringWater {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(properties: $ModFlowingFluid$Properties$$Type, block: $Supplier$$Type<($LiquidBlock$$Type)>)

public "isSource"(state: $FluidState$$Type): boolean
public "getAmount"(state: $FluidState$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringWater$Source$$Type = ($SpringWater$Source);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpringWater$Source$$Original = $SpringWater$Source;}
declare module "com.ordana.spelunkery.fluids.SpringWater" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Optional} from "java.util.Optional"
import {$ModFluidRenderProperties} from "net.mehvahdjukaar.moonlight.api.client.ModFluidRenderProperties"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ModFlowingFluid$Properties$$Type} from "net.mehvahdjukaar.moonlight.api.fluids.ModFlowingFluid$Properties"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ModFlowingFluid} from "net.mehvahdjukaar.moonlight.api.fluids.ModFlowingFluid"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export class $SpringWater extends $ModFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(properties: $ModFlowingFluid$Properties$$Type, block: $Supplier$$Type<($LiquidBlock$$Type)>)

public "getSource"(): $Fluid
public "createRenderProperties"(): $ModFluidRenderProperties
public "getBucket"(): $Item
public "animateTick"(level: $Level$$Type, pos: $BlockPos$$Type, state: $FluidState$$Type, random: $RandomSource$$Type): void
public "isSource"(state: $FluidState$$Type): boolean
public "getFlowing"(): $Fluid
public "getAmount"(state: $FluidState$$Type): integer
public "getTickDelay"(level: $LevelReader$$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
get "source"(): $Fluid
get "bucket"(): $Item
get "flowing"(): $Fluid
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringWater$$Type = ($SpringWater);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpringWater$$Original = $SpringWater;}
declare module "com.ordana.spelunkery.fluids.SpringWater$Flowing" {
import {$SpringWater} from "com.ordana.spelunkery.fluids.SpringWater"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ModFlowingFluid$Properties$$Type} from "net.mehvahdjukaar.moonlight.api.fluids.ModFlowingFluid$Properties"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export class $SpringWater$Flowing extends $SpringWater {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(properties: $ModFlowingFluid$Properties$$Type, block: $Supplier$$Type<($LiquidBlock$$Type)>)

public "isSource"(state: $FluidState$$Type): boolean
public "getAmount"(state: $FluidState$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringWater$Flowing$$Type = ($SpringWater$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpringWater$Flowing$$Original = $SpringWater$Flowing;}
