declare module "twilightforest.client.overlay.display.ItemDisplay$DisplayPosition" {
import {$Enum} from "java.lang.Enum"

export class $ItemDisplay$DisplayPosition extends $Enum<($ItemDisplay$DisplayPosition)> {
static readonly "TOP": $ItemDisplay$DisplayPosition
static readonly "BOTTOM": $ItemDisplay$DisplayPosition
static readonly "DEFAULT": $ItemDisplay$DisplayPosition

public static "values"(): ($ItemDisplay$DisplayPosition)[]
public static "valueOf"(arg0: StringJS): $ItemDisplay$DisplayPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDisplay$DisplayPosition$$Type = (("top") | ("default") | ("bottom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDisplay$DisplayPosition$$Original = $ItemDisplay$DisplayPosition;}
declare module "twilightforest.client.overlay.display.ItemDisplay" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ItemDisplay$Bounds} from "twilightforest.client.overlay.display.ItemDisplay$Bounds"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Gui$$Type} from "net.minecraft.client.gui.Gui"
import {$ItemDisplay$DisplayPosition} from "twilightforest.client.overlay.display.ItemDisplay$DisplayPosition"

export interface $ItemDisplay$$Interface {
}

export class $ItemDisplay implements $ItemDisplay$$Interface {
 "render"(arg0: $ItemStack$$Type, arg1: $GuiGraphics$$Type, arg2: $Minecraft$$Type, arg3: $Gui$$Type, arg4: $Player$$Type, arg5: integer): void
 "getWidgetSize"(arg0: $ItemStack$$Type, arg1: $Minecraft$$Type, arg2: $Gui$$Type, arg3: $Player$$Type, arg4: integer): $ItemDisplay$Bounds
 "displayPosition"(): $ItemDisplay$DisplayPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDisplay$$Type = ($ItemDisplay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDisplay$$Original = $ItemDisplay;}
declare module "twilightforest.client.overlay.display.ItemDisplay$Bounds" {
import {$Record} from "java.lang.Record"

export class $ItemDisplay$Bounds extends $Record {
constructor(startX: integer, startY: integer, width: integer, height: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "width"(): integer
public "startY"(): integer
public "height"(): integer
public "startX"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDisplay$Bounds$$Type = ({"width"?: integer, "height"?: integer, "startX"?: integer, "startY"?: integer}) | ([width?: integer, height?: integer, startX?: integer, startY?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDisplay$Bounds$$Original = $ItemDisplay$Bounds;}
