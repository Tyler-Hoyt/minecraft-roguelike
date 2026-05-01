declare module "dev.shadowsoffire.placebo.util.CachedObject$CachedObjectSource" {
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $CachedObject$CachedObjectSource$$Interface {

(arg0: $ResourceLocation, arg1: $Function<($ItemStack), (T)>, arg2: $ToIntFunction<($ItemStack)>): T
}

export class $CachedObject$CachedObjectSource implements $CachedObject$CachedObjectSource$$Interface {
 "getOrCreate"<T>(arg0: $ResourceLocation$$Type, arg1: $Function$$Type<($ItemStack), (T)>, arg2: $ToIntFunction$$Type<($ItemStack)>): T
static "getOrCreate"<T>(arg0: $ItemStack$$Type, arg1: $ResourceLocation$$Type, arg2: $Function$$Type<($ItemStack), (T)>, arg3: $ToIntFunction$$Type<($ItemStack)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedObject$CachedObjectSource$$Type = ((arg0: $ResourceLocation, arg1: $Function<($ItemStack), (T)>, arg2: $ToIntFunction<($ItemStack)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedObject$CachedObjectSource$$Original = $CachedObject$CachedObjectSource;}
declare module "dev.shadowsoffire.placebo.util.DrawsOnLeft" {
import {$AbstractContainerScreen, $AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"

export interface $DrawsOnLeft$$Interface {
}

export class $DrawsOnLeft implements $DrawsOnLeft$$Interface {
static "draw"(arg0: $AbstractContainerScreen$$Type<(never)>, arg1: $GuiGraphics$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: integer): void
 "__ths"(): $AbstractContainerScreen<(never)>
 "drawOnLeft"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer): void
 "drawOnLeft"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawsOnLeft$$Type = ($DrawsOnLeft);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawsOnLeft$$Original = $DrawsOnLeft;}
