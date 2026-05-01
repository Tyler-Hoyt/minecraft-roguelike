declare module "io.wispforest.owo.ui.core.Sizing$Method" {
import {$Enum} from "java.lang.Enum"

export class $Sizing$Method extends $Enum<($Sizing$Method)> {
static readonly "EXPAND": $Sizing$Method
static readonly "FILL": $Sizing$Method
static readonly "FIXED": $Sizing$Method
static readonly "CONTENT": $Sizing$Method

public static "values"(): ($Sizing$Method)[]
public static "valueOf"(name: StringJS): $Sizing$Method
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sizing$Method$$Type = (("fixed") | ("content") | ("fill") | ("expand"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Sizing$Method$$Original = $Sizing$Method;}
declare module "io.wispforest.owo.ui.util.FocusHandler" {
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Component$FocusSource, $Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"

export class $FocusHandler {
constructor(root: $ParentComponent$$Type)

public "updateClickFocus"(mouseX: double, mouseY: double): void
public "lastFocusSource"(): $Component$FocusSource
public "cycle"(forwards: boolean): void
public "focused"(): $Component
public "moveFocus"(keyCode: integer): void
public "focus"(component: $Component$$Type, source: $Component$FocusSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusHandler$$Type = ($FocusHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusHandler$$Original = $FocusHandler;}
declare module "io.wispforest.owo.ui.core.Color" {
import {$Node$$Type} from "org.w3c.dom.Node"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Animatable, $Animatable$$Type, $Animatable$$Interface} from "io.wispforest.owo.ui.core.Animatable"
import {$Record} from "java.lang.Record"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $Color extends $Record implements $Animatable$$Interface<($Color)> {
static readonly "RED": $Color
static readonly "WHITE": $Color
static readonly "BLUE": $Color
static readonly "BLACK": $Color
static readonly "GREEN": $Color

constructor(red: float, green: float, blue: float)
constructor(red: float, green: float, blue: float, alpha: float)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "parse"(node: $Node$$Type): $Color
public static "random"(): $Color
public "red"(): float
public "blue"(): float
public "rgb"(): integer
public static "ofArgb"(argb: integer): $Color
public "green"(): float
public "asHexString"(includeAlpha: boolean): StringJS
public static "ofFormatting"(formatting: $ChatFormatting$$Type): $Color
public static "parseAndPack"(node: $Node$$Type): integer
public "alpha"(): float
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public "interpolate"(next: $Color$$Type, delta: float): $Color
public "argb"(): integer
public "hsv"(): (float)[]
public static "ofRgb"(rgb: integer): $Color
public static "ofDye"(dyeColor: $DyeColor$$Type): $Color
public static "ofHsv"(hue: float, saturation: float, value: float): $Color
public static "ofHsv"(hue: float, saturation: float, value: float, alpha: float): $Color
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$$Type = ({"alpha"?: float, "green"?: float, "blue"?: float, "red"?: float}) | ([alpha?: float, green?: float, blue?: float, red?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Color$$Original = $Color;}
declare module "io.wispforest.owo.ui.event.MouseDrag" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseDrag$$Interface {

(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
}

export class $MouseDrag implements $MouseDrag$$Interface {
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
static "newStream"(): $EventStream<($MouseDrag)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseDrag$$Type = ((arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseDrag$$Original = $MouseDrag;}
declare module "io.wispforest.owo.ui.util.MatrixStackTransformer" {
import {$PoseStack} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Quaternionf$$Type} from "org.joml.Quaternionf"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export interface $MatrixStackTransformer$$Interface {
get "matrixStack"(): $PoseStack
}

export class $MatrixStackTransformer implements $MatrixStackTransformer$$Interface {
 "scale"(x: float, y: float, z: float): $MatrixStackTransformer
 "multiply"(quaternion: $Quaternionf$$Type): $MatrixStackTransformer
 "multiply"(quaternion: $Quaternionf$$Type, originX: float, originY: float, originZ: float): $MatrixStackTransformer
 "push"(): $MatrixStackTransformer
 "pop"(): $MatrixStackTransformer
 "translate"(x: double, y: double, z: double): $MatrixStackTransformer
 "translate"(x: float, y: float, z: float): $MatrixStackTransformer
 "multiplyPositionMatrix"(matrix: $Matrix4f$$Type): $MatrixStackTransformer
 "getMatrixStack"(): $PoseStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatrixStackTransformer$$Type = ($MatrixStackTransformer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatrixStackTransformer$$Original = $MatrixStackTransformer;}
declare module "io.wispforest.owo.ui.event.CharTyped" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $CharTyped$$Interface {

(arg0: character, arg1: integer): boolean
}

export class $CharTyped implements $CharTyped$$Interface {
 "onCharTyped"(arg0: character, arg1: integer): boolean
static "newStream"(): $EventStream<($CharTyped)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharTyped$$Type = ((arg0: character, arg1: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CharTyped$$Original = $CharTyped;}
declare module "io.wispforest.owo.ui.base.BaseComponent" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ComponentExtension$$Interface} from "io.wispforest.accessories.pond.owo.ComponentExtension"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$FocusGained} from "io.wispforest.owo.ui.event.FocusGained"
import {$Component as $Component$0, $Component$$Type as $Component$0$$Type, $Component$$Interface as $Component$0$$Interface} from "io.wispforest.owo.ui.core.Component"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$KeyPress} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Map$$Type} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$MouseUp} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost} from "io.wispforest.owo.ui.event.FocusLost"
import {$MouseDrag} from "io.wispforest.owo.ui.event.MouseDrag"
import {$FocusHandler} from "io.wispforest.owo.ui.util.FocusHandler"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"
import {$MouseLeave} from "io.wispforest.owo.ui.event.MouseLeave"

export class $BaseComponent implements $Component$0$$Interface, $ComponentExtension$$Interface {
public "parent"(): $ParentComponent
public "inflate"(space: $Size$$Type): void
public "update"(delta: float, mouseX: integer, mouseY: integer): void
public "x"(): integer
public "id"(id: StringJS): $Component$0
public "id"(): StringJS
public "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
public "y"(): integer
public "width"(): integer
public "configure"<C extends $Component$0>(closure: $Consumer$$Type<(C)>): C
public "updateY"(y: integer): void
public "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
public "focusLost"(): $EventSource<($FocusLost)>
public "margins"(): $AnimatableProperty<($Insets)>
public "margins"(margins: $Insets$$Type): $BaseComponent
public "keyPress"(): $EventSource<($KeyPress)>
public "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "dismount"(reason: $Component$DismountReason$$Type): void
public "updateX"(x: integer): void
public "mouseDown"(): $EventSource<($MouseDown)>
public "zIndex"(zIndex: integer): $Component$0
public "zIndex"(): integer
public "mouseLeave"(): $EventSource<($MouseLeave)>
public "mouseDrag"(): $EventSource<($MouseDrag)>
public "mouseUp"(): $EventSource<($MouseUp)>
public "mouseEnter"(): $EventSource<($MouseEnter)>
public "charTyped"(): $EventSource<($CharTyped)>
public "height"(): integer
public "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
public "positioning"(): $AnimatableProperty<($Positioning)>
public "positioning"(positioning: $Positioning$$Type): $BaseComponent
public "horizontalSizing"(horizontalSizing: $Sizing$$Type): $Component$0
public "horizontalSizing"(): $AnimatableProperty<($Sizing)>
public "verticalSizing"(verticalSizing: $Sizing$$Type): $Component$0
public "verticalSizing"(): $AnimatableProperty<($Sizing)>
public "mouseScroll"(): $EventSource<($MouseScroll)>
public "focusGained"(): $EventSource<($FocusGained)>
public "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
public "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
public "onCharTyped"(chr: character, modifiers: integer): boolean
public "onFocusGained"(source: $Component$FocusSource$$Type): void
public "cursorStyle"(): $CursorStyle
public "cursorStyle"(arg0: $CursorStyle$$Type): $Component$0
public "onFocusLost"(): void
public "focusHandler"(): $FocusHandler
public "tooltip"(): $List<($ClientTooltipComponent)>
public "tooltip"(tooltip: $List$$Type<($ClientTooltipComponent$$Type)>): $Component$0
public "allowIndividualOverdraw"(value: boolean): $BaseComponent
public "allowIndividualOverdraw"(): boolean
public "remove"(): void
public "root"(): $ParentComponent
public "sizing"(sizing: $Sizing$$Type): $Component$0
public "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component$0
public "canFocus"(source: $Component$FocusSource$$Type): boolean
public "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
public "moveTo"(x: integer, y: integer): void
public "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(StringJS), ($Element$$Type)>): void
public "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
public "tooltip"(tooltip: $Component$$Type): $Component$0
public "tooltip"(tooltip: $Collection$$Type<($Component$$Type)>): $Component$0
public "hasParent"(): boolean
public "baseX"(): integer
public "baseY"(): integer
public "fullSize"(): $Size
public "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "isInBoundingBox"(x: double, y: double): boolean
public "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public "intersects"(other: $PositionedRectangle$$Type): boolean
public "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseComponent$$Type = ($BaseComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseComponent$$Original = $BaseComponent;}
declare module "io.wispforest.owo.ui.util.CursorAdapter" {
import {$CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"

export class $CursorAdapter {
public "dispose"(): void
public static "ofWindow"(windowHandle: long): $CursorAdapter
public static "ofWindow"(window: $Window$$Type): $CursorAdapter
public "applyStyle"(style: $CursorStyle$$Type): void
public static "ofClientWindow"(): $CursorAdapter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorAdapter$$Type = ($CursorAdapter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CursorAdapter$$Original = $CursorAdapter;}
declare module "io.wispforest.owo.ui.event.MouseDown" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseDown$$Interface {

(arg0: double, arg1: double, arg2: integer): boolean
}

export class $MouseDown implements $MouseDown$$Interface {
 "onMouseDown"(arg0: double, arg1: double, arg2: integer): boolean
static "newStream"(): $EventStream<($MouseDown)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseDown$$Type = ((arg0: double, arg1: double, arg2: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseDown$$Original = $MouseDown;}
declare module "io.wispforest.owo.ui.event.MouseScroll" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseScroll$$Interface {

(arg0: double, arg1: double, arg2: double): boolean
}

export class $MouseScroll implements $MouseScroll$$Interface {
 "onMouseScroll"(arg0: double, arg1: double, arg2: double): boolean
static "newStream"(): $EventStream<($MouseScroll)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseScroll$$Type = ((arg0: double, arg1: double, arg2: double) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseScroll$$Original = $MouseScroll;}
declare module "io.wispforest.owo.ui.core.Easing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Easing$$Interface {

(arg0: float): float
}

export class $Easing implements $Easing$$Interface {
static readonly "EXPO": $Easing
static readonly "QUADRATIC": $Easing
static readonly "QUARTIC": $Easing
static readonly "SINE": $Easing
static readonly "LINEAR": $Easing
static readonly "CUBIC": $Easing

 "apply"(arg0: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$$Type = ((arg0: float) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Easing$$Original = $Easing;}
declare module "io.wispforest.owo.ui.core.AnimatableProperty" {
import {$Animation} from "io.wispforest.owo.ui.core.Animation"
import {$Observable} from "io.wispforest.owo.util.Observable"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Easing$$Type} from "io.wispforest.owo.ui.core.Easing"

export class $AnimatableProperty<A extends $Animatable<(object)>> extends $Observable<(A)> {
public "update"(delta: float): void
public static "of"<A extends $Animatable<(object)>>(initial: A): $AnimatableProperty<(A)>
public "animation"(): $Animation<(A)>
public "animate"(duration: integer, easing: $Easing$$Type, to: A): $Animation<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableProperty$$Type<A> = ($AnimatableProperty<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimatableProperty$$Original<A> = $AnimatableProperty<(A)>;}
declare module "io.wispforest.owo.ui.event.KeyPress" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $KeyPress$$Interface {

(arg0: integer, arg1: integer, arg2: integer): boolean
}

export class $KeyPress implements $KeyPress$$Interface {
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
static "newStream"(): $EventStream<($KeyPress)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPress$$Type = ((arg0: integer, arg1: integer, arg2: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyPress$$Original = $KeyPress;}
declare module "io.wispforest.owo.ui.parsing.UIModel" {
import {$Component} from "io.wispforest.owo.ui.core.Component"
import {$ParentComponent} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Map$$Type} from "java.util.Map"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Function$$Type} from "java.util.function.Function"
import {$OwoUIAdapter} from "io.wispforest.owo.ui.core.OwoUIAdapter"
import {$Class$$Type} from "java.lang.Class"
import {$Path$$Type} from "java.nio.file.Path"
import {$InputStream$$Type} from "java.io.InputStream"

export class $UIModel {
public static "load"(path: $Path$$Type): $UIModel
public static "load"(stream: $InputStream$$Type): $UIModel
public "createAdapterWithoutScreen"<T extends $ParentComponent>(x: integer, y: integer, width: integer, height: integer, expectedRootComponentClass: $Class$$Type<(T)>): $OwoUIAdapter<(T)>
public "expandTemplate"<T extends $Component>(expectedClass: $Class$$Type<(T)>, name: StringJS, parameters: $Map$$Type<(StringJS), (StringJS)>): T
public "expandTemplate"<T extends $Component>(expectedClass: $Class$$Type<(T)>, name: StringJS, parameterSupplier: $Function$$Type<(StringJS), (StringJS)>, childSupplier: $Function$$Type<(StringJS), ($Element$$Type)>): T
public "parseComponent"<T extends $Component>(expectedClass: $Class$$Type<(T)>, componentElement: $Element$$Type): T
public "createAdapter"<T extends $ParentComponent>(expectedRootComponentClass: $Class$$Type<(T)>, screen: $Screen$$Type): $OwoUIAdapter<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIModel$$Type = ($UIModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UIModel$$Original = $UIModel;}
declare module "io.wispforest.owo.ui.component.VanillaWidgetComponent" {
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$BaseComponent} from "io.wispforest.owo.ui.base.BaseComponent"
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $VanillaWidgetComponent extends $BaseComponent {
public "inflate"(space: $Size$$Type): void
public "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
public "configure"<C extends $Component>(closure: $Consumer$$Type<(C)>): C
public "updateY"(y: integer): void
public "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
public "hovered"(): boolean
public "margins"(margins: $Insets$$Type): $BaseComponent
public "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "updateX"(x: integer): void
public "draw"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
public "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
public "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
public "onCharTyped"(chr: character, modifiers: integer): boolean
public "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
public "notifyParentIfMounted"(): void
public "cursorStyle"(arg0: $CursorStyle$$Type): $Component
public static "bypassCheck"(component: $Component$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaWidgetComponent$$Type = ($VanillaWidgetComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VanillaWidgetComponent$$Original = $VanillaWidgetComponent;}
declare module "io.wispforest.owo.ui.inject.ComponentStub" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$FocusGained} from "io.wispforest.owo.ui.event.FocusGained"
import {$Component as $Component$0, $Component$$Interface as $Component$0$$Interface} from "io.wispforest.owo.ui.core.Component"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$KeyPress} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Map$$Type} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$MouseUp} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost} from "io.wispforest.owo.ui.event.FocusLost"
import {$MouseDrag} from "io.wispforest.owo.ui.event.MouseDrag"
import {$FocusHandler} from "io.wispforest.owo.ui.util.FocusHandler"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$VanillaWidgetComponent} from "io.wispforest.owo.ui.component.VanillaWidgetComponent"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"
import {$MouseLeave} from "io.wispforest.owo.ui.event.MouseLeave"

export interface $ComponentStub$$Interface extends $Component$0$$Interface {
}

export class $ComponentStub implements $ComponentStub$$Interface {
 "parent"(): $ParentComponent
 "inflate"(space: $Size$$Type): void
 "x"(): integer
 "id"(id: StringJS): $Component$0
 "id"(): StringJS
 "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
 "y"(): integer
 "width"(): integer
 "configure"<C extends $Component$0>(closure: $Consumer$$Type<(C)>): C
 "updateY"(y: integer): void
 "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
 "focusLost"(): $EventSource<($FocusLost)>
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(margins: $Insets$$Type): $Component$0
 "keyPress"(): $EventSource<($KeyPress)>
 "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
 "dismount"(reason: $Component$DismountReason$$Type): void
 "updateX"(x: integer): void
 "mouseDown"(): $EventSource<($MouseDown)>
 "zIndex"(): integer
 "zIndex"(zIndex: integer): $Component$0
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "draw"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "charTyped"(): $EventSource<($CharTyped)>
 "height"(): integer
 "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
 "positioning"(): $AnimatableProperty<($Positioning)>
 "positioning"(positioning: $Positioning$$Type): $Component$0
 "horizontalSizing"(horizontalSizing: $Sizing$$Type): $Component$0
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "verticalSizing"(verticalSizing: $Sizing$$Type): $Component$0
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "focusGained"(): $EventSource<($FocusGained)>
 "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
 "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
 "onCharTyped"(chr: character, modifiers: integer): boolean
 "onFocusGained"(source: $Component$FocusSource$$Type): void
 "cursorStyle"(style: $CursorStyle$$Type): $Component$0
 "cursorStyle"(): $CursorStyle
 "onFocusLost"(): void
 "focusHandler"(): $FocusHandler
 "widthOffset"(): integer
 "widgetWrapper"(): $VanillaWidgetComponent
 "heightOffset"(): integer
 "tooltip"(tooltip: $List$$Type<($ClientTooltipComponent$$Type)>): $Component$0
 "tooltip"(): $List<($ClientTooltipComponent)>
 "xOffset"(): integer
 "yOffset"(): integer
 "remove"(): void
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "root"(): $ParentComponent
 "sizing"(sizing: $Sizing$$Type): $Component$0
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component$0
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "moveTo"(x: integer, y: integer): void
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(StringJS), ($Element$$Type)>): void
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "tooltip"(tooltip: $Component$$Type): $Component$0
 "tooltip"(tooltip: $Collection$$Type<($Component$$Type)>): $Component$0
 "hasParent"(): boolean
 "baseX"(): integer
 "baseY"(): integer
 "fullSize"(): $Size
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentStub$$Type = ($ComponentStub);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComponentStub$$Original = $ComponentStub;}
declare module "io.wispforest.owo.ui.core.OwoUIDrawContext" {
import {$ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List$$Type} from "java.util.List"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$OwoUIDrawContext$TextAnchor$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext$TextAnchor"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$OwoUIDrawContext$UtilityScreen} from "io.wispforest.owo.ui.core.OwoUIDrawContext$UtilityScreen"
import {$Color$$Type} from "io.wispforest.owo.ui.core.Color"
import {$ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export class $OwoUIDrawContext extends $GuiGraphics {
/**
 * 
 * @deprecated
 */
static readonly "PANEL_TEXTURE": $ResourceLocation
static readonly "PANEL_NINE_PATCH_TEXTURE": $ResourceLocation
static readonly "MIN_GUI_Z": float
static readonly "PANEL_INSET_NINE_PATCH_TEXTURE": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "DARK_PANEL_TEXTURE": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "PANEL_INSET_TEXTURE": $ResourceLocation
static readonly "DARK_PANEL_NINE_PATCH_TEXTURE": $ResourceLocation
static readonly "MAX_GUI_Z": float

public static "of"(context: $GuiGraphics$$Type): $OwoUIDrawContext
public "recording"(): boolean
public "drawSpectrum"(x: integer, y: integer, width: integer, height: integer, vertical: boolean): void
public "drawGradientRect"(x: integer, y: integer, width: integer, height: integer, topLeftColor: integer, topRightColor: integer, bottomRightColor: integer, bottomLeftColor: integer): void
public "drawInspector"(root: $ParentComponent$$Type, mouseX: double, mouseY: double, onlyHovered: boolean): void
public "recordQuads"(): void
public "submitQuads"(): void
public "drawCircle"(centerX: integer, centerY: integer, angleFrom: double, angleTo: double, segments: integer, radius: double, color: $Color$$Type): void
public "drawCircle"(centerX: integer, centerY: integer, segments: integer, radius: double, color: $Color$$Type): void
public "drawLine"(x1: integer, y1: integer, x2: integer, y2: integer, thiccness: double, color: $Color$$Type): void
public static "utilityScreen"(): $OwoUIDrawContext$UtilityScreen
public "drawText"(text: $Component$$Type, x: float, y: float, scale: float, color: integer): void
public "drawText"(text: $Component$$Type, x: float, y: float, scale: float, color: integer, anchorPoint: $OwoUIDrawContext$TextAnchor$$Type): void
public "drawRing"(centerX: integer, centerY: integer, angleFrom: double, angleTo: double, segments: integer, innerRadius: double, outerRadius: double, innerColor: $Color$$Type, outerColor: $Color$$Type): void
public "drawRing"(centerX: integer, centerY: integer, segments: integer, innerRadius: double, outerRadius: double, innerColor: $Color$$Type, outerColor: $Color$$Type): void
public "drawPanel"(x: integer, y: integer, width: integer, height: integer, dark: boolean): void
public "drawInsets"(x: integer, y: integer, width: integer, height: integer, insets: $Insets$$Type, color: integer): void
public "drawRectOutline"(x: integer, y: integer, width: integer, height: integer, color: integer): void
public "drawTooltip"(textRenderer: $Font$$Type, x: integer, y: integer, components: $List$$Type<($ClientTooltipComponent$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIDrawContext$$Type = ($OwoUIDrawContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoUIDrawContext$$Original = $OwoUIDrawContext;}
declare module "io.wispforest.owo.ui.layers.Layer$Instance$AnchorSide" {
import {$Enum} from "java.lang.Enum"

export class $Layer$Instance$AnchorSide extends $Enum<($Layer$Instance$AnchorSide)> {
static readonly "TOP": $Layer$Instance$AnchorSide
static readonly "LEFT": $Layer$Instance$AnchorSide
static readonly "RIGHT": $Layer$Instance$AnchorSide
static readonly "BOTTOM": $Layer$Instance$AnchorSide

public static "values"(): ($Layer$Instance$AnchorSide)[]
public static "valueOf"(name: StringJS): $Layer$Instance$AnchorSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$Instance$AnchorSide$$Type = (("top") | ("bottom") | ("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Layer$Instance$AnchorSide$$Original = $Layer$Instance$AnchorSide;}
declare module "io.wispforest.owo.ui.core.OwoUIDrawContext$TextAnchor" {
import {$Enum} from "java.lang.Enum"

export class $OwoUIDrawContext$TextAnchor extends $Enum<($OwoUIDrawContext$TextAnchor)> {
static readonly "TOP_LEFT": $OwoUIDrawContext$TextAnchor
static readonly "BOTTOM_RIGHT": $OwoUIDrawContext$TextAnchor
static readonly "TOP_RIGHT": $OwoUIDrawContext$TextAnchor
static readonly "BOTTOM_LEFT": $OwoUIDrawContext$TextAnchor

public static "values"(): ($OwoUIDrawContext$TextAnchor)[]
public static "valueOf"(name: StringJS): $OwoUIDrawContext$TextAnchor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIDrawContext$TextAnchor$$Type = (("top_right") | ("bottom_right") | ("top_left") | ("bottom_left"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoUIDrawContext$TextAnchor$$Original = $OwoUIDrawContext$TextAnchor;}
declare module "io.wispforest.owo.ui.core.Size" {
import {$Record} from "java.lang.Record"

export class $Size extends $Record {
/**
 * 
 * @deprecated
 */
constructor(width: integer, height: integer)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(width: integer, height: integer): $Size
public static "zero"(): $Size
public static "square"(sideLength: integer): $Size
public "width"(): integer
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Size$$Type = ({"width"?: integer, "height"?: integer}) | ([width?: integer, height?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Size$$Original = $Size;}
declare module "io.wispforest.owo.ui.core.Component$DismountReason" {
import {$Enum} from "java.lang.Enum"

export class $Component$DismountReason extends $Enum<($Component$DismountReason)> {
static readonly "LAYOUT_INFLATION": $Component$DismountReason
static readonly "REMOVED": $Component$DismountReason

public static "values"(): ($Component$DismountReason)[]
public static "valueOf"(name: StringJS): $Component$DismountReason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$DismountReason$$Type = (("layout_inflation") | ("removed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Component$DismountReason$$Original = $Component$DismountReason;}
declare module "io.wispforest.owo.ui.layers.Layer$Instance" {
import {$Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$OwoUIAdapter} from "io.wispforest.owo.ui.core.OwoUIAdapter"
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Layer$Instance$AnchorSide$$Type} from "io.wispforest.owo.ui.layers.Layer$Instance$AnchorSide"

export class $Layer$Instance {
readonly "adapter": $OwoUIAdapter<(R)>
 "aggressivePositioning": boolean
readonly "screen": S

public "resize"(width: integer, height: integer): void
public "dispatchLayoutUpdates"(): void
public "alignComponentToWidget"(locator: $Predicate$$Type<($AbstractWidget)>, anchor: $Layer$Instance$AnchorSide$$Type, justification: float, component: $Component$$Type): void
public "alignComponentToHandledScreenCoordinates"(component: $Component$$Type, x: integer, y: integer): void
public "queryWidget"(locator: $Predicate$$Type<($AbstractWidget)>): $AbstractWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$Instance$$Type = ($Layer$Instance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Layer$Instance$$Original = $Layer$Instance;}
declare module "io.wispforest.owo.ui.core.Component$FocusSource" {
import {$Enum} from "java.lang.Enum"

export class $Component$FocusSource extends $Enum<($Component$FocusSource)> {
static readonly "MOUSE_CLICK": $Component$FocusSource
static readonly "KEYBOARD_CYCLE": $Component$FocusSource

public static "values"(): ($Component$FocusSource)[]
public static "valueOf"(name: StringJS): $Component$FocusSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$FocusSource$$Type = (("mouse_click") | ("keyboard_cycle"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Component$FocusSource$$Original = $Component$FocusSource;}
declare module "io.wispforest.owo.ui.event.MouseEnter" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseEnter$$Interface {

(): void
}

export class $MouseEnter implements $MouseEnter$$Interface {
static "newStream"(): $EventStream<($MouseEnter)>
 "onMouseEnter"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseEnter$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseEnter$$Original = $MouseEnter;}
declare module "io.wispforest.owo.ui.core.OwoUIDrawContext$UtilityScreen" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$List} from "java.util.List"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"

export class $OwoUIDrawContext$UtilityScreen extends $Screen {
static readonly "MENU_BACKGROUND": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "FOOTER_SEPARATOR": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

public static "get"(): $OwoUIDrawContext$UtilityScreen
public "handleComponentClicked"(style: $Style$$Type): boolean
public "getAndClearLinkSource"(): $Screen
public "captureLinkSource"(): void
public "setLinkSource"(screen: $Screen$$Type): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
get "andClearLinkSource"(): $Screen
set "linkSource"(value: $Screen$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIDrawContext$UtilityScreen$$Type = ($OwoUIDrawContext$UtilityScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoUIDrawContext$UtilityScreen$$Original = $OwoUIDrawContext$UtilityScreen;}
declare module "io.wispforest.owo.ui.event.FocusLost" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $FocusLost$$Interface {

(): void
}

export class $FocusLost implements $FocusLost$$Interface {
 "onFocusLost"(): void
static "newStream"(): $EventStream<($FocusLost)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusLost$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusLost$$Original = $FocusLost;}
declare module "io.wispforest.owo.ui.event.MouseLeave" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseLeave$$Interface {

(): void
}

export class $MouseLeave implements $MouseLeave$$Interface {
static "newStream"(): $EventStream<($MouseLeave)>
 "onMouseLeave"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseLeave$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseLeave$$Original = $MouseLeave;}
declare module "io.wispforest.owo.ui.core.Sizing" {
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Function$$Type} from "java.util.function.Function"
import {$Animatable, $Animatable$$Type, $Animatable$$Interface} from "io.wispforest.owo.ui.core.Animatable"
import {$Sizing$Method} from "io.wispforest.owo.ui.core.Sizing$Method"

export class $Sizing implements $Animatable$$Interface<($Sizing)> {
readonly "method": $Sizing$Method
readonly "value": integer

public "equals"(o: any): boolean
public "hashCode"(): integer
public static "expand"(): $Sizing
public static "expand"(percent: integer): $Sizing
public "inflate"(space: integer, contentSizeFunction: $Function$$Type<($Sizing), (integer)>): integer
public static "fill"(percent: integer): $Sizing
public static "fill"(): $Sizing
public static "parse"(sizingElement: $Element$$Type): $Sizing
public static "fixed"(value: integer): $Sizing
public static "content"(padding: integer): $Sizing
public static "content"(): $Sizing
public "contentFactor"(): float
public "isContent"(): boolean
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public "interpolate"(next: $Sizing$$Type, delta: float): $Sizing
public "isExpand"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sizing$$Type = ($Sizing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Sizing$$Original = $Sizing;}
declare module "io.wispforest.owo.ui.core.OwoUIAdapter" {
import {$CursorAdapter} from "io.wispforest.owo.ui.util.CursorAdapter"
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ParentComponent} from "io.wispforest.owo.ui.core.ParentComponent"
import {$GuiEventListener$$Interface} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$NarratableEntry$$Interface} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"
import {$Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"
import {$NarratableEntry$NarrationPriority} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export class $OwoUIAdapter<R extends $ParentComponent> implements $GuiEventListener$$Interface, $Renderable$$Interface, $NarratableEntry$$Interface {
readonly "cursorAdapter": $CursorAdapter
 "enableInspector": boolean
readonly "rootComponent": R
 "inspectorZOffset": integer
 "globalInspector": boolean

public "x"(): integer
public static "create"<R extends $ParentComponent>(screen: $Screen$$Type, rootComponentMaker: $BiFunction$$Type<($Sizing), ($Sizing), (R)>): $OwoUIAdapter<(R)>
public "y"(): integer
public "width"(): integer
public "dispose"(): void
public "toggleGlobalInspector"(): boolean
public "setFocused"(focused: boolean): void
public "isFocused"(): boolean
public "charTyped"(chr: character, modifiers: integer): boolean
public "render"(context: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "height"(): integer
public static "createWithoutScreen"<R extends $ParentComponent>(x: integer, y: integer, width: integer, height: integer, rootComponentMaker: $BiFunction$$Type<($Sizing), ($Sizing), (R)>): $OwoUIAdapter<(R)>
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "isMouseOver"(mouseX: double, mouseY: double): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, deltaX: double, deltaY: double): boolean
public "narrationPriority"(): $NarratableEntry$NarrationPriority
public "mouseScrolled"(mouseX: double, mouseY: double, horizontalAmount: double, verticalAmount: double): boolean
public "updateNarration"(builder: $NarrationElementOutput$$Type): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "inflateAndMount"(): void
public static "isRendering"(): boolean
public "moveAndResize"(x: integer, y: integer, width: integer, height: integer): void
public "toggleInspector"(): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "mouseMoved"(arg0: double, arg1: double): void
public "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "isActive"(): boolean
public "getTabOrderGroup"(): integer
set "focused"(value: boolean)
get "focused"(): boolean
public static get "rendering"(): boolean
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "active"(): boolean
get "tabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIAdapter$$Type<R> = ($OwoUIAdapter<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoUIAdapter$$Original<R> = $OwoUIAdapter<(R)>;}
declare module "io.wispforest.owo.ui.core.PositionedRectangle" {
import {$Animatable, $Animatable$$Type, $Animatable$$Interface} from "io.wispforest.owo.ui.core.Animatable"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export interface $PositionedRectangle$$Interface extends $Animatable$$Interface<($PositionedRectangle)> {
}

export class $PositionedRectangle implements $PositionedRectangle$$Interface {
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
 "x"(): integer
 "y"(): integer
 "width"(): integer
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "height"(): integer
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
 "isInBoundingBox"(x: double, y: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedRectangle$$Type = ($PositionedRectangle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PositionedRectangle$$Original = $PositionedRectangle;}
declare module "io.wispforest.owo.ui.event.FocusGained" {
import {$Component$FocusSource, $Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $FocusGained$$Interface {

(arg0: $Component$FocusSource): void
}

export class $FocusGained implements $FocusGained$$Interface {
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
static "newStream"(): $EventStream<($FocusGained)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusGained$$Type = ((arg0: $Component$FocusSource) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusGained$$Original = $FocusGained;}
declare module "io.wispforest.owo.ui.core.ParentComponent" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$Surface, $Surface$$Type} from "io.wispforest.owo.ui.core.Surface"
import {$List, $List$$Type} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type as $Component$0$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$FocusGained} from "io.wispforest.owo.ui.event.FocusGained"
import {$Component, $Component$$Type, $Component$$Interface} from "io.wispforest.owo.ui.core.Component"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$HorizontalAlignment, $HorizontalAlignment$$Type} from "io.wispforest.owo.ui.core.HorizontalAlignment"
import {$KeyPress} from "io.wispforest.owo.ui.event.KeyPress"
import {$Class$$Type} from "java.lang.Class"
import {$AnimatableProperty} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$VerticalAlignment, $VerticalAlignment$$Type} from "io.wispforest.owo.ui.core.VerticalAlignment"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll} from "io.wispforest.owo.ui.event.MouseScroll"
import {$ArrayList$$Type} from "java.util.ArrayList"
import {$MouseDown} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Map$$Type} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$MouseUp} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost} from "io.wispforest.owo.ui.event.FocusLost"
import {$MouseDrag} from "io.wispforest.owo.ui.event.MouseDrag"
import {$FocusHandler} from "io.wispforest.owo.ui.util.FocusHandler"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"
import {$MouseLeave} from "io.wispforest.owo.ui.event.MouseLeave"

export interface $ParentComponent$$Interface extends $Component$$Interface {
}

export class $ParentComponent implements $ParentComponent$$Interface {
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "queue"(arg0: $Runnable$$Type): void
 "layout"(arg0: $Size$$Type): void
 "children"(): $List<($Component)>
 "padding"(): $AnimatableProperty<($Insets)>
 "padding"(arg0: $Insets$$Type): $ParentComponent
 "surface"(arg0: $Surface$$Type): $ParentComponent
 "surface"(): $Surface
 "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
 "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(StringJS), ($Element$$Type)>): void
 "removeChild"(arg0: $Component$$Type): $ParentComponent
 "forEachDescendantWhere"(action: $Consumer$$Type<($Component)>, condition: $Predicate$$Type<($Component)>): void
 "horizontalAlignment"(): $HorizontalAlignment
 "horizontalAlignment"(arg0: $HorizontalAlignment$$Type): $ParentComponent
 "childById"<T extends $Component>(expectedClass: $Class$$Type<(T)>, id: StringJS): T
 "childAt"(x: integer, y: integer): $Component
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "allowOverflow"(arg0: boolean): $ParentComponent
 "allowOverflow"(): boolean
 "verticalAlignment"(arg0: $VerticalAlignment$$Type): $ParentComponent
 "verticalAlignment"(): $VerticalAlignment
 "forEachDescendant"(action: $Consumer$$Type<($Component)>): void
 "collectDescendants"(into: $ArrayList$$Type<($Component$$Type)>): void
 "onChildMutated"(arg0: $Component$$Type): void
 "alignment"(horizontalAlignment: $HorizontalAlignment$$Type, verticalAlignment: $VerticalAlignment$$Type): $ParentComponent
 "remove"(): void
 "parent"(): $ParentComponent
 "inflate"(arg0: $Size$$Type): void
 "x"(): integer
 "id"(arg0: StringJS): $Component
 "id"(): StringJS
 "root"(): $ParentComponent
 "mount"(arg0: $ParentComponent$$Type, arg1: integer, arg2: integer): void
 "y"(): integer
 "width"(): integer
 "configure"<C extends $Component>(arg0: $Consumer$$Type<(C)>): C
 "updateY"(arg0: integer): void
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
 "focusLost"(): $EventSource<($FocusLost)>
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(arg0: $Insets$$Type): $Component
 "keyPress"(): $EventSource<($KeyPress)>
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
 "dismount"(arg0: $Component$DismountReason$$Type): void
 "updateX"(arg0: integer): void
 "sizing"(sizing: $Sizing$$Type): $Component
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
 "mouseDown"(): $EventSource<($MouseDown)>
 "zIndex"(): integer
 "zIndex"(arg0: integer): $Component
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
 "moveTo"(x: integer, y: integer): void
 "charTyped"(): $EventSource<($CharTyped)>
 "height"(): integer
 "positioning"(arg0: $Positioning$$Type): $Component
 "positioning"(): $AnimatableProperty<($Positioning)>
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "horizontalSizing"(arg0: $Sizing$$Type): $Component
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "verticalSizing"(arg0: $Sizing$$Type): $Component
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "focusGained"(): $EventSource<($FocusGained)>
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
 "onCharTyped"(arg0: character, arg1: integer): boolean
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
 "cursorStyle"(arg0: $CursorStyle$$Type): $Component
 "cursorStyle"(): $CursorStyle
 "onFocusLost"(): void
 "focusHandler"(): $FocusHandler
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "tooltip"(tooltip: $Component$0$$Type): $Component
 "tooltip"(): $List<($ClientTooltipComponent)>
 "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
 "tooltip"(arg0: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
 "hasParent"(): boolean
 "baseX"(): integer
 "baseY"(): integer
 "fullSize"(): $Size
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParentComponent$$Type = ($ParentComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParentComponent$$Original = $ParentComponent;}
declare module "io.wispforest.owo.ui.core.Animatable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Animatable$$Interface<T extends $Animatable<(object)>> {

(arg0: T, arg1: float): T
}

export class $Animatable<T extends $Animatable<(object)>> implements $Animatable$$Interface {
 "interpolate"(arg0: T, arg1: float): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animatable$$Type<T> = ((arg0: T, arg1: float) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Animatable$$Original<T> = $Animatable<(T)>;}
declare module "io.wispforest.owo.ui.core.Positioning" {
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Animatable, $Animatable$$Type, $Animatable$$Interface} from "io.wispforest.owo.ui.core.Animatable"
import {$Positioning$Type} from "io.wispforest.owo.ui.core.Positioning$Type"

export class $Positioning implements $Animatable$$Interface<($Positioning)> {
readonly "x": integer
readonly "y": integer
readonly "type": $Positioning$Type

public "equals"(o: any): boolean
public "hashCode"(): integer
public static "parse"(positioningElement: $Element$$Type): $Positioning
public "isRelative"(): boolean
public static "layout"(): $Positioning
public static "absolute"(xPixels: integer, yPixels: integer): $Positioning
public static "relative"(xPercent: integer, yPercent: integer): $Positioning
public static "across"(xPercent: integer, yPercent: integer): $Positioning
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public "interpolate"(next: $Positioning$$Type, delta: float): $Positioning
public "withX"(x: integer): $Positioning
public "withY"(y: integer): $Positioning
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Positioning$$Type = ($Positioning);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Positioning$$Original = $Positioning;}
declare module "io.wispforest.owo.ui.core.HorizontalAlignment" {
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Enum} from "java.lang.Enum"

export class $HorizontalAlignment extends $Enum<($HorizontalAlignment)> {
static readonly "CENTER": $HorizontalAlignment
static readonly "LEFT": $HorizontalAlignment
static readonly "RIGHT": $HorizontalAlignment

public static "values"(): ($HorizontalAlignment)[]
public static "valueOf"(name: StringJS): $HorizontalAlignment
public static "parse"(element: $Element$$Type): $HorizontalAlignment
public "align"(componentWidth: integer, span: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalAlignment$$Type = (("left") | ("center") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HorizontalAlignment$$Original = $HorizontalAlignment;}
declare module "io.wispforest.owo.ui.event.MouseUp" {
import {$EventStream} from "io.wispforest.owo.util.EventStream"

export interface $MouseUp$$Interface {

(arg0: double, arg1: double, arg2: integer): boolean
}

export class $MouseUp implements $MouseUp$$Interface {
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
static "newStream"(): $EventStream<($MouseUp)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseUp$$Type = ((arg0: double, arg1: double, arg2: integer) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseUp$$Original = $MouseUp;}
declare module "io.wispforest.owo.ui.core.Component" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type, $PositionedRectangle$$Interface} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$Component$$Type as $Component$0$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$FocusGained} from "io.wispforest.owo.ui.event.FocusGained"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$KeyPress} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Map$$Type} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$MouseUp} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost} from "io.wispforest.owo.ui.event.FocusLost"
import {$MouseDrag} from "io.wispforest.owo.ui.event.MouseDrag"
import {$FocusHandler} from "io.wispforest.owo.ui.util.FocusHandler"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"
import {$MouseLeave} from "io.wispforest.owo.ui.event.MouseLeave"

export interface $Component$$Interface extends $PositionedRectangle$$Interface {
}

export class $Component implements $Component$$Interface {
 "remove"(): void
 "parent"(): $ParentComponent
 "inflate"(arg0: $Size$$Type): void
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "x"(): integer
 "id"(arg0: StringJS): $Component
 "id"(): StringJS
 "root"(): $ParentComponent
 "mount"(arg0: $ParentComponent$$Type, arg1: integer, arg2: integer): void
 "y"(): integer
 "width"(): integer
 "configure"<C extends $Component>(arg0: $Consumer$$Type<(C)>): C
 "updateY"(arg0: integer): void
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
 "focusLost"(): $EventSource<($FocusLost)>
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(arg0: $Insets$$Type): $Component
 "keyPress"(): $EventSource<($KeyPress)>
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
 "dismount"(arg0: $Component$DismountReason$$Type): void
 "updateX"(arg0: integer): void
 "sizing"(sizing: $Sizing$$Type): $Component
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
 "mouseDown"(): $EventSource<($MouseDown)>
 "zIndex"(): integer
 "zIndex"(arg0: integer): $Component
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
 "moveTo"(x: integer, y: integer): void
 "charTyped"(): $EventSource<($CharTyped)>
 "height"(): integer
 "onMouseDown"(arg0: double, arg1: double, arg2: integer): boolean
 "positioning"(arg0: $Positioning$$Type): $Component
 "positioning"(): $AnimatableProperty<($Positioning)>
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "horizontalSizing"(arg0: $Sizing$$Type): $Component
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "verticalSizing"(arg0: $Sizing$$Type): $Component
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "focusGained"(): $EventSource<($FocusGained)>
 "onMouseScroll"(arg0: double, arg1: double, arg2: double): boolean
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
 "onCharTyped"(arg0: character, arg1: integer): boolean
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
 "cursorStyle"(arg0: $CursorStyle$$Type): $Component
 "cursorStyle"(): $CursorStyle
 "onFocusLost"(): void
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(StringJS), ($Element$$Type)>): void
 "focusHandler"(): $FocusHandler
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "tooltip"(tooltip: $Component$0$$Type): $Component
 "tooltip"(): $List<($ClientTooltipComponent)>
 "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
 "tooltip"(arg0: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
 "hasParent"(): boolean
 "baseX"(): integer
 "baseY"(): integer
 "fullSize"(): $Size
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$$Type = ($Component);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Component$$Original = $Component;}
declare module "io.wispforest.owo.ui.core.Surface" {
import {$OwoUIDrawContext, $OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"

export interface $Surface$$Interface {

(arg0: $OwoUIDrawContext, arg1: $ParentComponent): void
}

export class $Surface implements $Surface$$Interface {
static readonly "OPTIONS_BACKGROUND": $Surface
static readonly "BLANK": $Surface
static readonly "PANEL": $Surface
static readonly "DARK_PANEL": $Surface
static readonly "TOOLTIP": $Surface
static readonly "PANEL_INSET": $Surface
static readonly "VANILLA_TRANSLUCENT": $Surface

static "parse"(surfaceElement: $Element$$Type): $Surface
 "and"(surface: $Surface$$Type): $Surface
static "tiled"(texture: $ResourceLocation$$Type, textureWidth: integer, textureHeight: integer): $Surface
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: $ParentComponent$$Type): void
static "flat"(color: integer): $Surface
static "panorama"(renderer: $PanoramaRenderer$$Type, alwaysVisible: boolean): $Surface
static "panelWithInset"(insetWidth: integer): $Surface
static "vanillaPanorama"(alwaysVisible: boolean): $Surface
static "blur"(quality: float, size: float): $Surface
static "outline"(color: integer): $Surface
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Surface$$Type = ((arg0: $OwoUIDrawContext, arg1: $ParentComponent) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Surface$$Original = $Surface;}
declare module "io.wispforest.owo.ui.core.VerticalAlignment" {
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Enum} from "java.lang.Enum"

export class $VerticalAlignment extends $Enum<($VerticalAlignment)> {
static readonly "CENTER": $VerticalAlignment
static readonly "TOP": $VerticalAlignment
static readonly "BOTTOM": $VerticalAlignment

public static "values"(): ($VerticalAlignment)[]
public static "valueOf"(name: StringJS): $VerticalAlignment
public static "parse"(element: $Element$$Type): $VerticalAlignment
public "align"(componentWidth: integer, span: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalAlignment$$Type = (("top") | ("center") | ("bottom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VerticalAlignment$$Original = $VerticalAlignment;}
declare module "io.wispforest.owo.ui.core.CursorStyle" {
import {$Enum} from "java.lang.Enum"

export class $CursorStyle extends $Enum<($CursorStyle)> {
static readonly "VERTICAL_RESIZE": $CursorStyle
static readonly "MOVE": $CursorStyle
readonly "glfw": integer
static readonly "POINTER": $CursorStyle
static readonly "NESW_RESIZE": $CursorStyle
static readonly "CROSSHAIR": $CursorStyle
static readonly "NOT_ALLOWED": $CursorStyle
static readonly "TEXT": $CursorStyle
static readonly "HORIZONTAL_RESIZE": $CursorStyle
static readonly "NONE": $CursorStyle
static readonly "NWSE_RESIZE": $CursorStyle
static readonly "HAND": $CursorStyle

public static "values"(): ($CursorStyle)[]
public static "valueOf"(name: StringJS): $CursorStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorStyle$$Type = (("none") | ("pointer") | ("text") | ("hand") | ("crosshair") | ("move") | ("horizontal_resize") | ("vertical_resize") | ("nwse_resize") | ("nesw_resize") | ("not_allowed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CursorStyle$$Original = $CursorStyle;}
declare module "io.wispforest.owo.ui.core.Animation" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$Animation$Direction} from "io.wispforest.owo.ui.core.Animation$Direction"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Easing$$Type} from "io.wispforest.owo.ui.core.Easing"
import {$Animation$Finished} from "io.wispforest.owo.ui.core.Animation$Finished"
import {$Animation$Composed} from "io.wispforest.owo.ui.core.Animation$Composed"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Animation<A extends $Animatable<(object)>> {
constructor(duration: integer, setter: $Consumer$$Type<(A)>, easing: $Easing$$Type, from: A, to: A)

public "reverse"(): $Animation<(A)>
public "update"(delta: float): void
public "loop"(loop: boolean): $Animation<(A)>
public "direction"(): $Animation$Direction
public static "compose"(...elements: ($Animation$$Type<(never)>)[]): $Animation$Composed
public "finished"(): $EventSource<($Animation$Finished)>
public "backwards"(): $Animation<(A)>
public "forwards"(): $Animation<(A)>
public "looping"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$$Type<A> = ($Animation<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Animation$$Original<A> = $Animation<(A)>;}
declare module "io.wispforest.owo.ui.core.Positioning$Type" {
import {$Enum} from "java.lang.Enum"

export class $Positioning$Type extends $Enum<($Positioning$Type)> {
static readonly "ABSOLUTE": $Positioning$Type
static readonly "RELATIVE": $Positioning$Type
static readonly "LAYOUT": $Positioning$Type
static readonly "ACROSS": $Positioning$Type

public static "values"(): ($Positioning$Type)[]
public static "valueOf"(name: StringJS): $Positioning$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Positioning$Type$$Type = (("relative") | ("across") | ("absolute") | ("layout"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Positioning$Type$$Original = $Positioning$Type;}
declare module "io.wispforest.owo.ui.layers.Layer" {
import {$ParentComponent} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Layer$Instance} from "io.wispforest.owo.ui.layers.Layer$Instance"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $Layer<S extends $Screen, R extends $ParentComponent> {
public "getInstance"(screen: S): $Layer$Instance
public "instantiate"(screen: S): $Layer$Instance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$$Type<S, R> = ($Layer<(S), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Layer$$Original<S, R> = $Layer<(S), (R)>;}
declare module "io.wispforest.owo.ui.core.Insets" {
import {$Element$$Type} from "org.w3c.dom.Element"
import {$Animatable, $Animatable$$Type, $Animatable$$Interface} from "io.wispforest.owo.ui.core.Animatable"
import {$Record} from "java.lang.Record"

export class $Insets extends $Record implements $Animatable$$Interface<($Insets)> {
/**
 * 
 * @deprecated
 */
constructor(top: integer, bottom: integer, left: integer, right: integer)

public "bottom"(): integer
public static "bottom"(bottom: integer): $Insets
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "add"(top: integer, bottom: integer, left: integer, right: integer): $Insets
public static "of"(inset: integer): $Insets
public static "of"(top: integer, bottom: integer, left: integer, right: integer): $Insets
public static "parse"(insetsElement: $Element$$Type): $Insets
public "top"(): integer
public static "top"(top: integer): $Insets
public "left"(): integer
public static "left"(left: integer): $Insets
public "right"(): integer
public static "right"(right: integer): $Insets
public "withBottom"(bottom: integer): $Insets
public "withRight"(right: integer): $Insets
public "withLeft"(left: integer): $Insets
public "withTop"(top: integer): $Insets
public "vertical"(): integer
public static "vertical"(inset: integer): $Insets
public "horizontal"(): integer
public static "horizontal"(inset: integer): $Insets
public static "none"(): $Insets
public "inverted"(): $Insets
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public "interpolate"(next: $Insets$$Type, delta: float): $Insets
public static "both"(horizontal: integer, vertical: integer): $Insets
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Insets$$Type = ({"top"?: integer, "right"?: integer, "bottom"?: integer, "left"?: integer}) | ([top?: integer, right?: integer, bottom?: integer, left?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Insets$$Original = $Insets;}
