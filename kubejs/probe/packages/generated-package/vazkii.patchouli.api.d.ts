declare module "vazkii.patchouli.api.IVariable" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"
import {$Stream} from "java.util.stream.Stream"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IVariable$$Interface {
}

export class $IVariable implements $IVariable$$Interface {
static "wrap"(arg0: number, arg1: $HolderLookup$Provider$$Type): $IVariable
static "wrap"(arg0: StringJS, arg1: $HolderLookup$Provider$$Type): $IVariable
/**
 * 
 * @deprecated
 */
static "wrap"(arg0: StringJS): $IVariable
/**
 * 
 * @deprecated
 */
static "wrap"(arg0: boolean): $IVariable
/**
 * 
 * @deprecated
 */
static "wrap"(arg0: number): $IVariable
static "wrap"(arg0: $JsonElement$$Type, arg1: $HolderLookup$Provider$$Type): $IVariable
static "wrap"(arg0: boolean, arg1: $HolderLookup$Provider$$Type): $IVariable
static "from"<T>(arg0: T, arg1: $HolderLookup$Provider$$Type): $IVariable
static "empty"(): $IVariable
 "asList"(arg0: $HolderLookup$Provider$$Type): $List<($IVariable)>
 "unwrap"(): $JsonElement
 "as"<T>(arg0: $Class$$Type<(T)>): T
 "as"<T>(arg0: $Class$$Type<(T)>, arg1: T): T
 "asListOrSingleton"(arg0: $HolderLookup$Provider$$Type): $List<($IVariable)>
 "asString"(arg0: StringJS): StringJS
 "asString"(): StringJS
 "asNumber"(): number
 "asNumber"(arg0: number): number
 "asBoolean"(): boolean
 "asBoolean"(arg0: boolean): boolean
 "asStream"(arg0: $HolderLookup$Provider$$Type): $Stream<($IVariable)>
 "asStreamOrSingleton"(arg0: $HolderLookup$Provider$$Type): $Stream<($IVariable)>
static "wrapList"(arg0: $Iterable$$Type<($IVariable$$Type)>, arg1: $HolderLookup$Provider$$Type): $IVariable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariable$$Type = ($IVariable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVariable$$Original = $IVariable;}
declare module "vazkii.patchouli.api.BookContentsReloadEvent" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Event} from "net.neoforged.bus.api.Event"

export class $BookContentsReloadEvent extends $Event {
constructor(arg0: $ResourceLocation$$Type)

public "getBook"(): $ResourceLocation
get "book"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContentsReloadEvent$$Type = ($BookContentsReloadEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookContentsReloadEvent$$Original = $BookContentsReloadEvent;}
declare module "vazkii.patchouli.api.BookDrawScreenEvent" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Event} from "net.neoforged.bus.api.Event"

export class $BookDrawScreenEvent extends $Event {
constructor(arg0: $ResourceLocation$$Type, arg1: $Screen$$Type, arg2: integer, arg3: integer, arg4: float, arg5: $GuiGraphics$$Type)

public "getScreen"(): $Screen
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getBook"(): $ResourceLocation
public "getPartialTicks"(): float
public "getGraphics"(): $GuiGraphics
get "screen"(): $Screen
get "mouseX"(): integer
get "mouseY"(): integer
get "book"(): $ResourceLocation
get "partialTicks"(): float
get "graphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookDrawScreenEvent$$Type = ($BookDrawScreenEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookDrawScreenEvent$$Original = $BookDrawScreenEvent;}
declare module "vazkii.patchouli.api.IComponentRenderContext" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List$$Type} from "java.util.List"
import {$AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Button$$Type} from "net.minecraft.client.gui.components.Button"

export interface $IComponentRenderContext$$Interface {
set "hoverTooltipComponents"(value: $List$$Type<($Component$$Type)>)
get "textColor"(): integer
get "font"(): $Style
get "gui"(): $Screen
get "ticksInBook"(): integer
get "craftingTexture"(): $ResourceLocation
set "hoverTooltip"(value: $List$$Type<(StringJS)>)
get "bookTexture"(): $ResourceLocation
get "headerColor"(): integer
}

export class $IComponentRenderContext implements $IComponentRenderContext$$Interface {
 "setHoverTooltipComponents"(arg0: $List$$Type<($Component$$Type)>): void
 "addWidget"(arg0: $AbstractWidget$$Type, arg1: integer): void
 "getTextColor"(): integer
 "getFont"(): $Style
 "getGui"(): $Screen
 "renderItemStack"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$$Type): void
 "renderIngredient"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$$Type): void
 "getTicksInBook"(): integer
 "isAreaHovered"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
/**
 * 
 * @deprecated
 */
 "registerButton"(arg0: $Button$$Type, arg1: integer, arg2: $Runnable$$Type): void
 "getCraftingTexture"(): $ResourceLocation
 "navigateToEntry"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean): boolean
/**
 * 
 * @deprecated
 */
 "setHoverTooltip"(arg0: $List$$Type<(StringJS)>): void
 "getBookTexture"(): $ResourceLocation
 "getHeaderColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentRenderContext$$Type = ($IComponentRenderContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IComponentRenderContext$$Original = $IComponentRenderContext;}
declare module "vazkii.patchouli.api.IVariableProvider" {
import {$IVariable} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IVariableProvider$$Interface {
}

export class $IVariableProvider implements $IVariableProvider$$Interface {
 "get"(arg0: StringJS, arg1: $HolderLookup$Provider$$Type): $IVariable
 "has"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableProvider$$Type = ($IVariableProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVariableProvider$$Original = $IVariableProvider;}
declare module "vazkii.patchouli.api.IVariablesAvailableCallback" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IVariablesAvailableCallback$$Interface {

(arg0: $UnaryOperator<($IVariable)>, arg1: $HolderLookup$Provider): void
}

export class $IVariablesAvailableCallback implements $IVariablesAvailableCallback$$Interface {
 "onVariablesAvailable"(arg0: $UnaryOperator$$Type<($IVariable)>, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariablesAvailableCallback$$Type = ((arg0: $UnaryOperator<($IVariable)>, arg1: $HolderLookup$Provider) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVariablesAvailableCallback$$Original = $IVariablesAvailableCallback;}
declare module "vazkii.patchouli.api.IComponentProcessor" {
import {$IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IVariable} from "vazkii.patchouli.api.IVariable"

export interface $IComponentProcessor$$Interface {
}

export class $IComponentProcessor implements $IComponentProcessor$$Interface {
 "setup"(arg0: $Level$$Type, arg1: $IVariableProvider$$Type): void
 "process"(arg0: $Level$$Type, arg1: StringJS): $IVariable
 "allowRender"(arg0: StringJS): boolean
 "refresh"(arg0: $Screen$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentProcessor$$Type = ($IComponentProcessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IComponentProcessor$$Original = $IComponentProcessor;}
declare module "vazkii.patchouli.api.PatchouliConfigAccess$TextOverflowMode" {
import {$Enum} from "java.lang.Enum"

export class $PatchouliConfigAccess$TextOverflowMode extends $Enum<($PatchouliConfigAccess$TextOverflowMode)> {
static readonly "RESIZE": $PatchouliConfigAccess$TextOverflowMode
static readonly "OVERFLOW": $PatchouliConfigAccess$TextOverflowMode
static readonly "TRUNCATE": $PatchouliConfigAccess$TextOverflowMode

public static "values"(): ($PatchouliConfigAccess$TextOverflowMode)[]
public static "valueOf"(arg0: StringJS): $PatchouliConfigAccess$TextOverflowMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatchouliConfigAccess$TextOverflowMode$$Type = (("overflow") | ("truncate") | ("resize"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PatchouliConfigAccess$TextOverflowMode$$Original = $PatchouliConfigAccess$TextOverflowMode;}
