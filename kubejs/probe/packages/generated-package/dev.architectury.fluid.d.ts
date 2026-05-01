declare module "dev.architectury.fluid.FluidStack" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$Optional} from "java.util.Optional"
import {$PatchedDataComponentMap} from "net.minecraft.core.component.PatchedDataComponentMap"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$DataComponentHolder$$Interface} from "net.minecraft.core.component.DataComponentHolder"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$TooltipProvider} from "net.minecraft.world.item.component.TooltipProvider"

export class $FluidStack implements $DataComponentHolder$$Interface {
static readonly "CODEC": $Codec<($FluidStack)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidStack)>

public "getName"(): $Component
public "remove"<T>(type: $DataComponentType$$Type<(T)>): T
public "equals"(o: any): boolean
public "hashCode"(): integer
public "update"<T>(type: $DataComponentType$$Type<(T)>, component: T, updater: $UnaryOperator$$Type<(T)>): T
public "update"<T, U>(type: $DataComponentType$$Type<(T)>, component: T, updateContext: U, updater: $BiFunction$$Type<(T), (U), (T)>): T
public "isEmpty"(): boolean
public static "empty"(): $FluidStack
public "set"<T>(type: $DataComponentType$$Type<(T)>, component: T): T
public static "init"(): void
public "write"(provider: $HolderLookup$Provider$$Type, tag: $Tag$$Type): $Tag
public "write"(buf: $RegistryFriendlyByteBuf$$Type): void
public static "read"(provider: $HolderLookup$Provider$$Type, tag: $Tag$$Type): $Optional<($FluidStack)>
public static "read"(buf: $RegistryFriendlyByteBuf$$Type): $FluidStack
public "copy"(): $FluidStack
public static "create"(fluid: $Holder$$Type<($Fluid)>, amount: long, patch: $DataComponentPatch$$Type): $FluidStack
public static "create"(stack: $FluidStack$$Type, amount: long): $FluidStack
public static "create"(fluid: $Holder$$Type<($Fluid)>, amount: long): $FluidStack
public static "create"(fluid: $Supplier$$Type<($Fluid$$Type)>, amount: long): $FluidStack
public static "create"(fluid: $Supplier$$Type<($Fluid$$Type)>, amount: long, patch: $DataComponentPatch$$Type): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long, patch: $DataComponentPatch$$Type): $FluidStack
public "grow"(amount: long): void
public "shrink"(amount: long): void
public "applyComponents"(patch: $DataComponentPatch$$Type): void
public "applyComponents"(patch: $DataComponentMap$$Type): void
public "getTranslationKey"(): StringJS
public "getComponents"(): $PatchedDataComponentMap
public "getFluid"(): $Fluid
public "getPatch"(): $DataComponentPatch
public "getAmount"(): long
public "isFluidEqual"(other: $FluidStack$$Type): boolean
public "isComponentEqual"(other: $FluidStack$$Type): boolean
public static "bucketAmount"(): long
public "isFluidStackEqual"(other: $FluidStack$$Type): boolean
public "getRawFluid"(): $Fluid
public "copyWithAmount"(amount: long): $FluidStack
public "getRawFluidSupplier"(): $Supplier<($Fluid)>
public "setAmount"(amount: long): void
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
public "has"(arg0: $DataComponentType$$Type<(never)>): boolean
public "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
public "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
public "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(never)>)>): boolean
public "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
get "name"(): $Component
get "translationKey"(): StringJS
get "components"(): $PatchedDataComponentMap
get "fluid"(): $Fluid
get "patch"(): $DataComponentPatch
get "amount"(): long
get "rawFluid"(): $Fluid
get "rawFluidSupplier"(): $Supplier<($Fluid)>
set "amount"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$$Type = ($FluidStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidStack$$Original = $FluidStack;}
