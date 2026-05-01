declare module "net.minecraft.client.gui.navigation.ScreenDirection" {
import {$Enum} from "java.lang.Enum"
import {$IntComparator} from "it.unimi.dsi.fastutil.ints.IntComparator"
import {$ScreenAxis} from "net.minecraft.client.gui.navigation.ScreenAxis"

export class $ScreenDirection extends $Enum<($ScreenDirection)> {
static readonly "DOWN": $ScreenDirection
static readonly "LEFT": $ScreenDirection
static readonly "RIGHT": $ScreenDirection
static readonly "UP": $ScreenDirection

public static "values"(): ($ScreenDirection)[]
public static "valueOf"(arg0: StringJS): $ScreenDirection
public "isPositive"(): boolean
public "isAfter"(arg0: integer, arg1: integer): boolean
public "isBefore"(arg0: integer, arg1: integer): boolean
public "coordinateValueComparator"(): $IntComparator
public "getOpposite"(): $ScreenDirection
public "getAxis"(): $ScreenAxis
get "positive"(): boolean
get "opposite"(): $ScreenDirection
get "axis"(): $ScreenAxis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenDirection$$Type = (("up") | ("down") | ("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenDirection$$Original = $ScreenDirection;}
declare module "net.minecraft.client.gui.components.AbstractWidget" {
import {$EventSource} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$ClickableWidgetAccessor$$Interface} from "io.wispforest.owo.mixin.ui.access.ClickableWidgetAccessor"
import {$List, $List$$Type} from "java.util.List"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ComponentExtension$$Interface} from "io.wispforest.accessories.pond.owo.ComponentExtension"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$LayoutElement$$Interface} from "net.minecraft.client.gui.layouts.LayoutElement"
import {$Component as $Component$0, $Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$WidgetTooltipHolder} from "net.minecraft.client.gui.components.WidgetTooltipHolder"
import {$SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"
import {$AnimatableProperty} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"
import {$Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$AbstractWidgetAccessor$$Interface} from "com.aetherteam.aether.mixin.mixins.client.accessor.AbstractWidgetAccessor"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$Map$$Type} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$Element$$Type} from "org.w3c.dom.Element"
import {$UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$Duration$$Type} from "java.time.Duration"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Tooltip, $Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"
import {$Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$GuiEventListener$$Interface} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusHandler} from "io.wispforest.owo.ui.util.FocusHandler"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry$$Interface} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$ComponentStub$$Interface} from "io.wispforest.owo.ui.inject.ComponentStub"
import {$Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"
import {$IAbstractWidgetExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IAbstractWidgetExtension"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$NarratableEntry$NarrationPriority} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"
import {$VanillaWidgetComponent} from "io.wispforest.owo.ui.component.VanillaWidgetComponent"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $AbstractWidget implements $Renderable$$Interface, $GuiEventListener$$Interface, $LayoutElement$$Interface, $NarratableEntry$$Interface, $IAbstractWidgetExtension$$Interface, $ComponentStub$$Interface, $ClickableWidgetAccessor$$Interface, $AbstractWidgetAccessor$$Interface, $ComponentExtension$$Interface {
static readonly "UNSET_FG_COLOR": integer
 "visible": boolean
 "active": boolean

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Component$$Type)

public "parent"(): $ParentComponent
public "inflate"(space: $Size$$Type): void
public "update"(delta: float, mouseX: integer, mouseY: integer): void
public "x"(): integer
public "getMessage"(): $Component
public "id"(): StringJS
public "id"(id: StringJS): $Component$0
public "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
public "isActive"(): boolean
public "y"(): integer
public "width"(): integer
public "setSize"(arg0: integer, arg1: integer): void
public "configure"(closure: $Consumer$$Type): $Component$0
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "onClick"(arg0: double, arg1: double): void
public "setTooltip"(arg0: $Tooltip$$Type): void
public "onRelease"(arg0: double, arg1: double): void
public "updateY"(y: integer): void
public "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
public "focusLost"(): $EventSource
public "margins"(): $AnimatableProperty
public "margins"(margins: $Insets$$Type): $Component$0
public "keyPress"(): $EventSource
public "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "getFGColor"(): integer
public "getBottom"(): integer
public "dismount"(reason: $Component$DismountReason$$Type): void
public "updateX"(x: integer): void
public "mouseDown"(): $EventSource
public "zIndex"(zIndex: integer): $Component$0
public "zIndex"(): integer
public "mouseLeave"(): $EventSource
public "setFGColor"(arg0: integer): void
public "mouseDrag"(): $EventSource
public "canFocus"(source: $Component$FocusSource$$Type): boolean
public "mouseUp"(): $EventSource
public "mouseEnter"(): $EventSource
public "setAlpha"(arg0: float): void
public "getY"(): integer
public "draw"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "setX"(arg0: integer): void
public "setY"(arg0: integer): void
public "setFocused"(arg0: boolean): void
public "isFocused"(): boolean
public "charTyped"(): $EventSource
public "getTooltip"(): $Tooltip
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "height"(): integer
public "getRight"(): integer
public "setMessage"(arg0: $Component$$Type): void
public "playDownSound"(arg0: $SoundManager$$Type): void
public "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
public "positioning"(positioning: $Positioning$$Type): $Component$0
public "positioning"(): $AnimatableProperty
public "horizontalSizing"(horizontalSizing: $Sizing$$Type): $Component$0
public "horizontalSizing"(): $AnimatableProperty
public "verticalSizing"(): $AnimatableProperty
public "verticalSizing"(verticalSizing: $Sizing$$Type): $Component$0
public "setRectangle"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "mouseScroll"(): $EventSource
public "setTabOrderGroup"(arg0: integer): void
public "focusGained"(): $EventSource
public "isHoveredOrFocused"(): boolean
public "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
public "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
public "onCharTyped"(chr: character, modifiers: integer): boolean
public "onFocusGained"(source: $Component$FocusSource$$Type): void
public "cursorStyle"(style: $CursorStyle$$Type): $Component$0
public "cursorStyle"(): $CursorStyle
public "clearFGColor"(): void
public "onFocusLost"(): void
public "parseProperties"(spec: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type): void
public "setTooltipDelay"(arg0: $Duration$$Type): void
public "focusHandler"(): $FocusHandler
public "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
public "owo$setHeight"(arg0: integer): void
public "owo$getTooltip"(): $WidgetTooltipHolder
public "widthOffset"(): integer
public "owo$setWidth"(arg0: integer): void
public "aether$getAlpha"(): float
public "widgetWrapper"(): $VanillaWidgetComponent
public "heightOffset"(): integer
public static "wrapDefaultNarrationMessage"(arg0: $Component$$Type): $MutableComponent
public "tooltip"(tooltip: $List$$Type): $Component$0
public "tooltip"(): $List
public static "renderScrollingString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: $Component$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "renderScrollingString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: $Component$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "allowIndividualOverdraw"(value: boolean): $Component$0
public "allowIndividualOverdraw"(): boolean
public "getX"(): integer
public "getHeight"(): integer
public "isMouseOver"(arg0: double, arg1: double): boolean
public "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
public "getTabOrderGroup"(): integer
public "getRectangle"(): $ScreenRectangle
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "narrationPriority"(): $NarratableEntry$NarrationPriority
public "visitWidgets"(arg0: $Consumer$$Type<($AbstractWidget)>): void
public "updateNarration"(arg0: $NarrationElementOutput$$Type): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "owo$setX"(arg0: integer): void
public "owo$setY"(arg0: integer): void
public "isHovered"(): boolean
public "xOffset"(): integer
public "yOffset"(): integer
public "getWidth"(): integer
public "getCurrentFocusPath"(): $ComponentPath
public "mouseMoved"(arg0: double, arg1: double): void
public "charTyped"(arg0: character, arg1: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "setPosition"(arg0: integer, arg1: integer): void
public "onClick"(arg0: double, arg1: double, arg2: integer): void
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public "remove"(): void
public "root"(): $ParentComponent
public "sizing"(sizing: $Sizing$$Type): $Component$0
public "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component$0
public "moveTo"(x: integer, y: integer): void
public "tooltip"(tooltip: $Component$$Type): $Component$0
public "tooltip"(tooltip: $Collection$$Type<($Component$$Type)>): $Component$0
public "hasParent"(): boolean
public "baseX"(): integer
public "baseY"(): integer
public "fullSize"(): $Size
public "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "isInBoundingBox"(x: double, y: double): boolean
public "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public "intersects"(other: $PositionedRectangle$$Type): boolean
public "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
public "interpolate"(arg0: $Animatable$$Type, arg1: float): $Animatable
public "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
get "message"(): $Component
get "FGColor"(): integer
get "bottom"(): integer
set "FGColor"(value: integer)
set "alpha"(value: float)
set "focused"(value: boolean)
get "focused"(): boolean
get "right"(): integer
set "message"(value: $Component$$Type)
set "tabOrderGroup"(value: integer)
get "hoveredOrFocused"(): boolean
set "tooltipDelay"(value: $Duration$$Type)
get "tabOrderGroup"(): integer
get "rectangle"(): $ScreenRectangle
get "hovered"(): boolean
get "currentFocusPath"(): $ComponentPath
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWidget$$Type = ($AbstractWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractWidget$$Original = $AbstractWidget;}
declare module "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason" {
import {$Enum} from "java.lang.Enum"

export class $ReceivingLevelScreen$Reason extends $Enum<($ReceivingLevelScreen$Reason)> {
static readonly "OTHER": $ReceivingLevelScreen$Reason
static readonly "NETHER_PORTAL": $ReceivingLevelScreen$Reason
static readonly "END_PORTAL": $ReceivingLevelScreen$Reason

public static "values"(): ($ReceivingLevelScreen$Reason)[]
public static "valueOf"(arg0: StringJS): $ReceivingLevelScreen$Reason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReceivingLevelScreen$Reason$$Type = (("nether_portal") | ("end_portal") | ("other"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReceivingLevelScreen$Reason$$Original = $ReceivingLevelScreen$Reason;}
declare module "net.minecraft.client.gui.screens.recipebook.RecipeCollection" {
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeBook$$Type} from "net.minecraft.stats.RecipeBook"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $RecipeCollection {
constructor(arg0: $RegistryAccess$$Type, arg1: $List$$Type<($RecipeHolder$$Type<(never)>)>)

public "hasSingleResultItem"(): boolean
public "registryAccess"(): $RegistryAccess
public "getDisplayRecipes"(arg0: boolean): $List<($RecipeHolder<(never)>)>
public "hasCraftable"(): boolean
public "hasKnownRecipes"(): boolean
public "isCraftable"(arg0: $RecipeHolder$$Type<(never)>): boolean
public "hasFitting"(): boolean
public "canCraft"(arg0: $StackedContents$$Type, arg1: integer, arg2: integer, arg3: $RecipeBook$$Type): void
public "getRecipes"(arg0: boolean): $List<($RecipeHolder<(never)>)>
public "getRecipes"(): $List<($RecipeHolder<(never)>)>
public "updateKnownRecipes"(arg0: $RecipeBook$$Type): void
get "recipes"(): $List<($RecipeHolder<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCollection$$Type = ($RecipeCollection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeCollection$$Original = $RecipeCollection;}
declare module "net.minecraft.client.gui.spectator.categories.SpectatorPage" {
import {$SpectatorMenuItem, $SpectatorMenuItem$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import {$List$$Type} from "java.util.List"

export class $SpectatorPage {
static readonly "NO_SELECTION": integer

constructor(arg0: $List$$Type<($SpectatorMenuItem$$Type)>, arg1: integer)

public "getItem"(arg0: integer): $SpectatorMenuItem
public "getSelectedSlot"(): integer
get "selectedSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorPage$$Type = ($SpectatorPage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorPage$$Original = $SpectatorPage;}
declare module "net.minecraft.client.gui.components.ChatComponent$State" {
import {$ChatComponent$DelayedMessageDeletion$$Type} from "net.minecraft.client.gui.components.ChatComponent$DelayedMessageDeletion"
import {$List$$Type} from "java.util.List"
import {$GuiMessage$$Type} from "net.minecraft.client.GuiMessage"

export class $ChatComponent$State {
constructor(arg0: $List$$Type<($GuiMessage$$Type)>, arg1: $List$$Type<(StringJS)>, arg2: $List$$Type<($ChatComponent$DelayedMessageDeletion$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponent$State$$Type = ($ChatComponent$State);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatComponent$State$$Original = $ChatComponent$State;}
declare module "net.minecraft.client.gui.screens.worldselection.PresetEditor" {
import {$Map} from "java.util.Map"
import {$WorldCreationContext, $WorldCreationContext$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$Optional} from "java.util.Optional"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$WorldPreset} from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$CreateWorldScreen, $CreateWorldScreen$$Type} from "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen"

export interface $PresetEditor$$Interface {

(arg0: $CreateWorldScreen, arg1: $WorldCreationContext): $Screen$$Type
}

export class $PresetEditor implements $PresetEditor$$Interface {
/**
 * 
 * @deprecated
 */
static readonly "EDITORS": $Map<($Optional<($ResourceKey<($WorldPreset)>)>), ($PresetEditor)>

 "createEditScreen"(arg0: $CreateWorldScreen$$Type, arg1: $WorldCreationContext$$Type): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PresetEditor$$Type = ((arg0: $CreateWorldScreen, arg1: $WorldCreationContext) => $Screen$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PresetEditor$$Original = $PresetEditor;}
declare module "net.minecraft.client.gui.font.glyphs.BakedGlyph" {
import {$BakedGlyph$Effect$$Type} from "net.minecraft.client.gui.font.glyphs.BakedGlyph$Effect"
import {$GlyphRenderTypes$$Type} from "net.minecraft.client.gui.font.GlyphRenderTypes"
import {$Font$DisplayMode$$Type} from "net.minecraft.client.gui.Font$DisplayMode"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$AccessorBakedGlyph$$Interface} from "com.sammy.malum.mixin.client.AccessorBakedGlyph"

export class $BakedGlyph implements $AccessorBakedGlyph$$Interface {
constructor(arg0: $GlyphRenderTypes$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float)

public "render"(arg0: boolean, arg1: float, arg2: float, arg3: $Matrix4f$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer): void
public "renderEffect"(arg0: $BakedGlyph$Effect$$Type, arg1: $Matrix4f$$Type, arg2: $VertexConsumer$$Type, arg3: integer): void
public "renderType"(arg0: $Font$DisplayMode$$Type): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGlyph$$Type = ($BakedGlyph);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedGlyph$$Original = $BakedGlyph;}
declare module "net.minecraft.client.gui.narration.NarratableEntry" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$TabOrderedElement$$Interface} from "net.minecraft.client.gui.components.TabOrderedElement"
import {$NarrationSupplier$$Interface} from "net.minecraft.client.gui.narration.NarrationSupplier"
import {$NarratableEntry$NarrationPriority} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export interface $NarratableEntry$$Interface extends $TabOrderedElement$$Interface, $NarrationSupplier$$Interface {
get "active"(): boolean
get "tabOrderGroup"(): integer
}

export class $NarratableEntry implements $NarratableEntry$$Interface {
 "isActive"(): boolean
 "narrationPriority"(): $NarratableEntry$NarrationPriority
 "getTabOrderGroup"(): integer
 "updateNarration"(arg0: $NarrationElementOutput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratableEntry$$Type = ($NarratableEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratableEntry$$Original = $NarratableEntry;}
declare module "net.minecraft.client.gui.Gui" {
import {$BossHealthOverlay} from "net.minecraft.client.gui.components.BossHealthOverlay"
import {$PlayerTabOverlay} from "net.minecraft.client.gui.components.PlayerTabOverlay"
import {$Font} from "net.minecraft.client.gui.Font"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$GuiAccessor$$Interface} from "com.aetherteam.aether.mixin.mixins.client.accessor.GuiAccessor"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ChatComponent} from "net.minecraft.client.gui.components.ChatComponent"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$DebugScreenOverlay} from "net.minecraft.client.gui.components.DebugScreenOverlay"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$SpectatorGui} from "net.minecraft.client.gui.components.spectator.SpectatorGui"

export class $Gui implements $GuiAccessor$$Interface {
readonly "random": $RandomSource
static readonly "SPYGLASS_SCOPE_LOCATION": $ResourceLocation
 "vignetteBrightness": float
 "healthBlinkTime": long
 "rightHeight": integer
 "displayHealth": integer
 "lastHealthTime": long
 "leftHeight": integer
 "lastHealth": integer

constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "setTimes"(arg0: integer, arg1: integer, arg2: integer): void
public "tick"(arg0: boolean): void
public "clearCache"(): void
public "renderTextureOverlay"(arg0: $GuiGraphics$$Type, arg1: $ResourceLocation$$Type, arg2: float): void
public "renderSelectedItemName"(arg0: $GuiGraphics$$Type, arg1: integer): void
public "resetTitleTimes"(): void
public "setSubtitle"(arg0: $Component$$Type): void
public "setTitle"(arg0: $Component$$Type): void
public "isShowingChatDisabledByPlayer"(): boolean
public "constant$cip000$apotheosis$apoth_extendTime"(arg0: integer): integer
public "handler$bok000$irons_spellbooks$disableXpBar"(arg0: $CallbackInfoReturnable$$Type): void
public "getSpectatorGui"(): $SpectatorGui
public "onDisconnected"(): void
public "getBossOverlay"(): $BossHealthOverlay
public "setNowPlaying"(arg0: $Component$$Type): void
public "renderFood"(arg0: $GuiGraphics$$Type, arg1: $Player$$Type, arg2: integer, arg3: integer): void
public "aether$getRandom"(): $RandomSource
public "aether$getHealthBlinkTime"(): long
public "aether$getLastHealthTime"(): long
public "render"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type): void
public "getDebugOverlay"(): $DebugScreenOverlay
public "setOverlayMessage"(arg0: $Component$$Type, arg1: boolean): void
public "getChat"(): $ChatComponent
public "canRenderCrosshairForSpectator"(arg0: $HitResult$$Type): boolean
public "renderExperienceBar"(arg0: $GuiGraphics$$Type, arg1: integer): void
public "getLayerCount"(): integer
public "initModdedOverlays"(): void
public "getFont"(): $Font
public "getGuiTicks"(): integer
public "setChatDisabledByPlayerShown"(arg0: boolean): void
public "getTabList"(): $PlayerTabOverlay
public "renderSavingIndicator"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type): void
set "subtitle"(value: $Component$$Type)
set "title"(value: $Component$$Type)
get "showingChatDisabledByPlayer"(): boolean
get "spectatorGui"(): $SpectatorGui
get "bossOverlay"(): $BossHealthOverlay
set "nowPlaying"(value: $Component$$Type)
get "debugOverlay"(): $DebugScreenOverlay
get "chat"(): $ChatComponent
get "layerCount"(): integer
get "font"(): $Font
get "guiTicks"(): integer
set "chatDisabledByPlayerShown"(value: boolean)
get "tabList"(): $PlayerTabOverlay
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gui$$Type = ($Gui);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Gui$$Original = $Gui;}
declare module "net.minecraft.client.gui.components.Button" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$Button$Builder} from "net.minecraft.client.gui.components.Button$Builder"
import {$Button$OnPress$$Type} from "net.minecraft.client.gui.components.Button$OnPress"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$AbstractButton} from "net.minecraft.client.gui.components.AbstractButton"
import {$Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$ButtonAccessor$$Interface} from "com.aetherteam.aether.mixin.mixins.client.accessor.ButtonAccessor"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$ButtonWidgetAccessor$$Interface} from "io.wispforest.owo.mixin.ui.access.ButtonWidgetAccessor"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $Button extends $AbstractButton implements $ButtonWidgetAccessor$$Interface, $ButtonAccessor$$Interface {
static readonly "UNSET_FG_COLOR": integer
 "visible": boolean
static readonly "DEFAULT_HEIGHT": integer
static readonly "SMALL_WIDTH": integer
 "active": boolean
static readonly "BIG_WIDTH": integer
static readonly "DEFAULT_WIDTH": integer
static readonly "DEFAULT_SPACING": integer

public static "builder"(arg0: $Component$$Type, arg1: $Button$OnPress$$Type): $Button$Builder
public "owo$setOnPress"(arg0: $Button$OnPress$$Type): void
public "onPress"(): void
public "callCreateNarrationMessage"(): $MutableComponent
public "updateWidgetNarration"(arg0: $NarrationElementOutput$$Type): void
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$$Type = ($Button);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Button$$Original = $Button;}
declare module "net.minecraft.client.gui.screens.Overlay" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"

export class $Overlay implements $Renderable$$Interface {
constructor()

public "isPauseScreen"(): boolean
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
get "pauseScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Overlay$$Type = ($Overlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Overlay$$Original = $Overlay;}
declare module "net.minecraft.client.gui.components.events.ContainerEventHandler" {
import {$GuiEventListener, $GuiEventListener$$Type, $GuiEventListener$$Interface} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$Optional} from "java.util.Optional"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$List} from "java.util.List"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"

export interface $ContainerEventHandler$$Interface extends $GuiEventListener$$Interface {
get "currentFocusPath"(): $ComponentPath
get "focused"(): $GuiEventListener
set "focused"(value: $GuiEventListener$$Type)
set "focused"(value: boolean)
get "focused"(): boolean
get "dragging"(): boolean
set "dragging"(value: boolean)
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}

export class $ContainerEventHandler implements $ContainerEventHandler$$Interface {
 "children"(): $List<($GuiEventListener)>
 "getCurrentFocusPath"(): $ComponentPath
 "getChildAt"(arg0: double, arg1: double): $Optional<($GuiEventListener)>
 "getFocused"(): $GuiEventListener
 "setFocused"(arg0: $GuiEventListener$$Type): void
 "setFocused"(arg0: boolean): void
 "isFocused"(): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "isDragging"(): boolean
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "setDragging"(arg0: boolean): void
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getRectangle"(): $ScreenRectangle
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerEventHandler$$Type = ($ContainerEventHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerEventHandler$$Original = $ContainerEventHandler;}
declare module "net.minecraft.client.gui.components.toasts.Toast" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Toast$Visibility, $Toast$Visibility$$Type} from "net.minecraft.client.gui.components.toasts.Toast$Visibility"
import {$ToastComponent, $ToastComponent$$Type} from "net.minecraft.client.gui.components.toasts.ToastComponent"

export interface $Toast$$Interface {

(arg0: $GuiGraphics, arg1: $ToastComponent, arg2: long): $Toast$Visibility$$Type
get "token"(): any
}

export class $Toast implements $Toast$$Interface {
static readonly "NO_TOKEN": any
static readonly "SLOT_HEIGHT": integer

 "slotCount"(): integer
 "width"(): integer
 "render"(arg0: $GuiGraphics$$Type, arg1: $ToastComponent$$Type, arg2: long): $Toast$Visibility
 "height"(): integer
 "getToken"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Toast$$Type = ((arg0: $GuiGraphics, arg1: $ToastComponent, arg2: long) => $Toast$Visibility$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Toast$$Original = $Toast;}
declare module "net.minecraft.client.gui.components.CycleButton$ValueListSupplier" {
import {$Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export interface $CycleButton$ValueListSupplier$$Interface<T> {
get "defaultList"(): $List<(T)>
get "selectedList"(): $List<(T)>
}

export class $CycleButton$ValueListSupplier<T> implements $CycleButton$ValueListSupplier$$Interface {
static "create"<T>(arg0: $BooleanSupplier$$Type, arg1: $List$$Type<(T)>, arg2: $List$$Type<(T)>): $CycleButton$ValueListSupplier<(T)>
static "create"<T>(arg0: $Collection$$Type<(T)>): $CycleButton$ValueListSupplier<(T)>
 "getDefaultList"(): $List<(T)>
 "getSelectedList"(): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CycleButton$ValueListSupplier$$Type<T> = ($CycleButton$ValueListSupplier<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CycleButton$ValueListSupplier$$Original<T> = $CycleButton$ValueListSupplier<(T)>;}
declare module "net.minecraft.client.gui.components.ChatComponent" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ChatComponent$State, $ChatComponent$State$$Type} from "net.minecraft.client.gui.components.ChatComponent$State"
import {$MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$Style} from "net.minecraft.network.chat.Style"
import {$ChatComponentAccessor$$Interface} from "com.hollingsworth.arsnouveau.common.mixin.ChatComponentAccessor"
import {$List} from "java.util.List"
import {$ArrayListDeque} from "net.minecraft.util.ArrayListDeque"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$GuiMessageTag, $GuiMessageTag$$Type} from "net.minecraft.client.GuiMessageTag"

export class $ChatComponent implements $ChatComponentAccessor$$Interface {
constructor(arg0: $Minecraft$$Type)

public "tick"(): void
public "addMessage"(arg0: $Component$$Type, arg1: $MessageSignature$$Type, arg2: $GuiMessageTag$$Type): void
public "addMessage"(arg0: $Component$$Type): void
public "constant$zjj000$placebo$unEscapeChatLogNewlines"(arg0: StringJS): StringJS
public "getScale"(): double
public "clearMessages"(arg0: boolean): void
public "getAllMessages"(): $List
public "getTrimmedMessages"(): $List
public "isChatFocused"(): boolean
public "deleteMessage"(arg0: $MessageSignature$$Type): void
public "storeState"(): $ChatComponent$State
public "scrollChat"(arg0: integer): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "rescaleChat"(): void
public "getClickedComponentStyleAt"(arg0: double, arg1: double): $Style
public "handleChatQueueClicked"(arg0: double, arg1: double): boolean
public "restoreState"(arg0: $ChatComponent$State$$Type): void
public static "defaultUnfocusedPct"(): double
public static "getHeight"(arg0: double): integer
public "getHeight"(): integer
public "getLinesPerPage"(): integer
public "getMessageTagAt"(arg0: double, arg1: double): $GuiMessageTag
public "addRecentChat"(arg0: StringJS): void
public "getRecentChat"(): $ArrayListDeque<(StringJS)>
public "resetChatScroll"(): void
public "getWidth"(): integer
public static "getWidth"(arg0: double): integer
get "scale"(): double
get "allMessages"(): $List
get "trimmedMessages"(): $List
get "chatFocused"(): boolean
get "height"(): integer
get "linesPerPage"(): integer
get "recentChat"(): $ArrayListDeque<(StringJS)>
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponent$$Type = ($ChatComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatComponent$$Original = $ChatComponent;}
declare module "net.minecraft.client.gui.components.toasts.Toast$Visibility" {
import {$Enum} from "java.lang.Enum"
import {$SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"

export class $Toast$Visibility extends $Enum<($Toast$Visibility)> {
static readonly "HIDE": $Toast$Visibility
static readonly "SHOW": $Toast$Visibility

public static "values"(): ($Toast$Visibility)[]
public static "valueOf"(arg0: StringJS): $Toast$Visibility
public "playSound"(arg0: $SoundManager$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Toast$Visibility$$Type = (("show") | ("hide"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Toast$Visibility$$Original = $Toast$Visibility;}
declare module "net.minecraft.client.gui.components.events.GuiEventListener" {
import {$TabOrderedElement$$Interface} from "net.minecraft.client.gui.components.TabOrderedElement"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"

export interface $GuiEventListener$$Interface extends $TabOrderedElement$$Interface {
get "currentFocusPath"(): $ComponentPath
set "focused"(value: boolean)
get "focused"(): boolean
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}

export class $GuiEventListener implements $GuiEventListener$$Interface {
static readonly "DOUBLE_CLICK_THRESHOLD_MS": long

 "getCurrentFocusPath"(): $ComponentPath
 "mouseMoved"(arg0: double, arg1: double): void
 "setFocused"(arg0: boolean): void
 "isFocused"(): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "isMouseOver"(arg0: double, arg1: double): boolean
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "getRectangle"(): $ScreenRectangle
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiEventListener$$Type = ($GuiEventListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiEventListener$$Original = $GuiEventListener;}
declare module "net.minecraft.client.gui.font.glyphs.BakedGlyph$Effect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BakedGlyph$Effect {
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGlyph$Effect$$Type = ($BakedGlyph$Effect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedGlyph$Effect$$Original = $BakedGlyph$Effect;}
declare module "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent" {
import {$TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export interface $ClientTooltipComponent$$Interface {
get "height"(): integer
}

export class $ClientTooltipComponent implements $ClientTooltipComponent$$Interface {
static "create"(arg0: $FormattedCharSequence$$Type): $ClientTooltipComponent
static "create"(arg0: $TooltipComponent$$Type): $ClientTooltipComponent
 "renderText"(arg0: $Font$$Type, arg1: integer, arg2: integer, arg3: $Matrix4f$$Type, arg4: $MultiBufferSource$BufferSource$$Type): void
 "renderImage"(arg0: $Font$$Type, arg1: integer, arg2: integer, arg3: $GuiGraphics$$Type): void
 "getHeight"(): integer
 "getWidth"(arg0: $Font$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTooltipComponent$$Type = ($ClientTooltipComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientTooltipComponent$$Original = $ClientTooltipComponent;}
declare module "net.minecraft.client.gui.components.Tooltip" {
import {$FormattedCharSequence} from "net.minecraft.util.FormattedCharSequence"
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$NarrationSupplier$$Interface} from "net.minecraft.client.gui.narration.NarrationSupplier"
import {$List} from "java.util.List"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component$$Type} from "net.minecraft.network.chat.Component"

export class $Tooltip implements $NarrationSupplier$$Interface {
public static "create"(arg0: $Component$$Type): $Tooltip
public static "create"(arg0: $Component$$Type, arg1: $Component$$Type): $Tooltip
public static "splitTooltip"(arg0: $Minecraft$$Type, arg1: $Component$$Type): $List<($FormattedCharSequence)>
public "updateNarration"(arg0: $NarrationElementOutput$$Type): void
public "toCharSequence"(arg0: $Minecraft$$Type): $List<($FormattedCharSequence)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tooltip$$Type = ($Tooltip);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tooltip$$Original = $Tooltip;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldOpenFlows" {
import {$LevelSettings, $LevelSettings$$Type} from "net.minecraft.world.level.LevelSettings"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$WorldDimensions$$Type} from "net.minecraft.world.level.levelgen.WorldDimensions"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$WorldOptions$$Type} from "net.minecraft.world.level.levelgen.WorldOptions"
import {$WorldCreationContext} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$WorldStem} from "net.minecraft.server.WorldStem"
import {$Function$$Type} from "java.util.function.Function"
import {$LevelStorageSource$$Type} from "net.minecraft.world.level.storage.LevelStorageSource"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$WorldData$$Type} from "net.minecraft.world.level.storage.WorldData"
import {$CreateWorldScreen$$Type} from "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $WorldOpenFlows {
constructor(arg0: $Minecraft$$Type, arg1: $LevelStorageSource$$Type)

public "loadWorldStem"(arg0: $Dynamic$$Type<(never)>, arg1: boolean, arg2: $PackRepository$$Type): $WorldStem
public "recreateWorldData"(arg0: $LevelStorageSource$LevelStorageAccess$$Type): $Pair<($LevelSettings), ($WorldCreationContext)>
public "openWorld"(arg0: StringJS, arg1: $Runnable$$Type): void
public "createFreshLevel"(arg0: StringJS, arg1: $LevelSettings$$Type, arg2: $WorldOptions$$Type, arg3: $Function$$Type<($RegistryAccess), ($WorldDimensions$$Type)>, arg4: $Screen$$Type): void
public "createLevelFromExistingSettings"(arg0: $LevelStorageSource$LevelStorageAccess$$Type, arg1: $ReloadableServerResources$$Type, arg2: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg3: $WorldData$$Type): void
public static "confirmWorldCreation"(arg0: $Minecraft$$Type, arg1: $CreateWorldScreen$$Type, arg2: $Lifecycle$$Type, arg3: $Runnable$$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldOpenFlows$$Type = ($WorldOpenFlows);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldOpenFlows$$Original = $WorldOpenFlows;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenu" {
import {$SpectatorMenuItem} from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import {$SpectatorMenuCategory, $SpectatorMenuCategory$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenuCategory"
import {$SpectatorPage} from "net.minecraft.client.gui.spectator.categories.SpectatorPage"
import {$List} from "java.util.List"
import {$SpectatorMenuListener$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenuListener"

export class $SpectatorMenu {
static readonly "EMPTY_SLOT": $SpectatorMenuItem

constructor(arg0: $SpectatorMenuListener$$Type)

public "exit"(): void
public "getItem"(arg0: integer): $SpectatorMenuItem
public "getCurrentPage"(): $SpectatorPage
public "getSelectedSlot"(): integer
public "getSelectedItem"(): $SpectatorMenuItem
public "getItems"(): $List<($SpectatorMenuItem)>
public "getSelectedCategory"(): $SpectatorMenuCategory
public "selectSlot"(arg0: integer): void
public "selectCategory"(arg0: $SpectatorMenuCategory$$Type): void
get "currentPage"(): $SpectatorPage
get "selectedSlot"(): integer
get "selectedItem"(): $SpectatorMenuItem
get "items"(): $List<($SpectatorMenuItem)>
get "selectedCategory"(): $SpectatorMenuCategory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenu$$Type = ($SpectatorMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenu$$Original = $SpectatorMenu;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext" {
import {$LayeredRegistryAccess, $LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$WorldDimensions, $WorldDimensions$$Type} from "net.minecraft.world.level.levelgen.WorldDimensions"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$WorldOptions, $WorldOptions$$Type} from "net.minecraft.world.level.levelgen.WorldOptions"
import {$WorldCreationContext$DimensionsUpdater$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater"
import {$LevelStem, $LevelStem$$Type} from "net.minecraft.world.level.dimension.LevelStem"
import {$RegistryAccess$Frozen} from "net.minecraft.core.RegistryAccess$Frozen"
import {$WorldCreationContext$OptionsModifier$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$OptionsModifier"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryLayer, $RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$WorldGenSettings$$Type} from "net.minecraft.world.level.levelgen.WorldGenSettings"
import {$WorldDataConfiguration, $WorldDataConfiguration$$Type} from "net.minecraft.world.level.WorldDataConfiguration"
import {$Record} from "java.lang.Record"

export class $WorldCreationContext extends $Record {
constructor(options: $WorldOptions$$Type, datapackDimensions: $Registry$$Type<($LevelStem$$Type)>, selectedDimensions: $WorldDimensions$$Type, worldgenRegistries: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, dataPackResources: $ReloadableServerResources$$Type, dataConfiguration: $WorldDataConfiguration$$Type)
constructor(arg0: $WorldOptions$$Type, arg1: $WorldDimensions$$Type, arg2: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg3: $ReloadableServerResources$$Type, arg4: $WorldDataConfiguration$$Type)
constructor(arg0: $WorldGenSettings$$Type, arg1: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg2: $ReloadableServerResources$$Type, arg3: $WorldDataConfiguration$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "validate"(): void
public "options"(): $WorldOptions
public "worldgenLoadContext"(): $RegistryAccess$Frozen
public "withDataConfiguration"(arg0: $WorldDataConfiguration$$Type): $WorldCreationContext
public "dataPackResources"(): $ReloadableServerResources
public "datapackDimensions"(): $Registry<($LevelStem)>
public "dataConfiguration"(): $WorldDataConfiguration
public "withOptions"(arg0: $WorldCreationContext$OptionsModifier$$Type): $WorldCreationContext
public "worldgenRegistries"(): $LayeredRegistryAccess<($RegistryLayer)>
public "selectedDimensions"(): $WorldDimensions
public "withDimensions"(arg0: $WorldCreationContext$DimensionsUpdater$$Type): $WorldCreationContext
public "withSettings"(arg0: $WorldOptions$$Type, arg1: $WorldDimensions$$Type): $WorldCreationContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationContext$$Type = ({"worldgenRegistries"?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, "selectedDimensions"?: $WorldDimensions$$Type, "options"?: $WorldOptions$$Type, "dataConfiguration"?: $WorldDataConfiguration$$Type, "dataPackResources"?: $ReloadableServerResources$$Type, "datapackDimensions"?: $Registry$$Type<($LevelStem$$Type)>}) | ([worldgenRegistries?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, selectedDimensions?: $WorldDimensions$$Type, options?: $WorldOptions$$Type, dataConfiguration?: $WorldDataConfiguration$$Type, dataPackResources?: $ReloadableServerResources$$Type, datapackDimensions?: $Registry$$Type<($LevelStem$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationContext$$Original = $WorldCreationContext;}
declare module "net.minecraft.client.gui.font.FontOption" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FontOption extends $Enum<($FontOption)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($FontOption)>
static readonly "UNIFORM": $FontOption
static readonly "JAPANESE_VARIANTS": $FontOption

public static "values"(): ($FontOption)[]
public static "valueOf"(arg0: StringJS): $FontOption
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontOption$$Type = (("uniform") | ("jp"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontOption$$Original = $FontOption;}
declare module "net.minecraft.client.gui.components.PlayerTabOverlay" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Objective$$Type} from "net.minecraft.world.scores.Objective"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Scoreboard$$Type} from "net.minecraft.world.scores.Scoreboard"
import {$Gui$$Type} from "net.minecraft.client.gui.Gui"

export class $PlayerTabOverlay {
static readonly "MAX_ROWS_PER_COL": integer

constructor(arg0: $Minecraft$$Type, arg1: $Gui$$Type)

public "reset"(): void
public "getNameForDisplay"(arg0: $PlayerInfo$$Type): $Component
public "setVisible"(arg0: boolean): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: $Scoreboard$$Type, arg3: $Objective$$Type): void
public "setHeader"(arg0: $Component$$Type): void
public "setFooter"(arg0: $Component$$Type): void
set "visible"(value: boolean)
set "header"(value: $Component$$Type)
set "footer"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTabOverlay$$Type = ($PlayerTabOverlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTabOverlay$$Original = $PlayerTabOverlay;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenuItem" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Component} from "net.minecraft.network.chat.Component"
import {$SpectatorMenu$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenu"

export interface $SpectatorMenuItem$$Interface {
get "name"(): $Component
get "enabled"(): boolean
}

export class $SpectatorMenuItem implements $SpectatorMenuItem$$Interface {
 "getName"(): $Component
 "isEnabled"(): boolean
 "renderIcon"(arg0: $GuiGraphics$$Type, arg1: float, arg2: integer): void
 "selectItem"(arg0: $SpectatorMenu$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenuItem$$Type = ($SpectatorMenuItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenuItem$$Original = $SpectatorMenuItem;}
declare module "net.minecraft.client.gui.navigation.ScreenRectangle" {
import {$ScreenPosition, $ScreenPosition$$Type} from "net.minecraft.client.gui.navigation.ScreenPosition"
import {$Record} from "java.lang.Record"
import {$ScreenAxis$$Type} from "net.minecraft.client.gui.navigation.ScreenAxis"
import {$ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenRectangle extends $Record {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $ScreenPosition$$Type, arg1: integer, arg2: integer)

public "bottom"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLength"(arg0: $ScreenAxis$$Type): integer
public "position"(): $ScreenPosition
public static "of"(arg0: $ScreenAxis$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $ScreenRectangle
public static "empty"(): $ScreenRectangle
public "top"(): integer
public "step"(arg0: $ScreenDirection$$Type): $ScreenRectangle
public "left"(): integer
public "right"(): integer
public "width"(): integer
public "overlaps"(arg0: $ScreenRectangle$$Type): boolean
public "getBoundInDirection"(arg0: $ScreenDirection$$Type): integer
public "getBorder"(arg0: $ScreenDirection$$Type): $ScreenRectangle
public "height"(): integer
public "containsPoint"(arg0: integer, arg1: integer): boolean
public "intersection"(arg0: $ScreenRectangle$$Type): $ScreenRectangle
public "getCenterInAxis"(arg0: $ScreenAxis$$Type): integer
public "overlapsInAxis"(arg0: $ScreenRectangle$$Type, arg1: $ScreenAxis$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenRectangle$$Type = ({"width"?: integer, "position"?: $ScreenPosition$$Type, "height"?: integer}) | ([width?: integer, position?: $ScreenPosition$$Type, height?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenRectangle$$Original = $ScreenRectangle;}
declare module "net.minecraft.client.gui.navigation.FocusNavigationEvent" {
import {$ScreenDirection, $ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export interface $FocusNavigationEvent$$Interface {

(): $ScreenDirection$$Type
get "verticalDirectionForInitialFocus"(): $ScreenDirection
}

export class $FocusNavigationEvent implements $FocusNavigationEvent$$Interface {
 "getVerticalDirectionForInitialFocus"(): $ScreenDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusNavigationEvent$$Type = (() => $ScreenDirection$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FocusNavigationEvent$$Original = $FocusNavigationEvent;}
declare module "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner" {
import {$Vector2ic, $Vector2ic$$Type} from "org.joml.Vector2ic"

export interface $ClientTooltipPositioner$$Interface {

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Vector2ic$$Type
}

export class $ClientTooltipPositioner implements $ClientTooltipPositioner$$Interface {
 "positionTooltip"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Vector2ic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTooltipPositioner$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer) => $Vector2ic$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientTooltipPositioner$$Original = $ClientTooltipPositioner;}
declare module "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority" {
import {$Enum} from "java.lang.Enum"

export class $NarratableEntry$NarrationPriority extends $Enum<($NarratableEntry$NarrationPriority)> {
static readonly "HOVERED": $NarratableEntry$NarrationPriority
static readonly "NONE": $NarratableEntry$NarrationPriority
static readonly "FOCUSED": $NarratableEntry$NarrationPriority

public static "values"(): ($NarratableEntry$NarrationPriority)[]
public static "valueOf"(arg0: StringJS): $NarratableEntry$NarrationPriority
public "isTerminal"(): boolean
get "terminal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratableEntry$NarrationPriority$$Type = (("none") | ("hovered") | ("focused"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratableEntry$NarrationPriority$$Original = $NarratableEntry$NarrationPriority;}
declare module "net.minecraft.client.gui.components.BossHealthOverlay" {
import {$ClientboundBossEventPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBossEventPacket"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$UUID} from "java.util.UUID"
import {$LerpingBossEvent} from "net.minecraft.client.gui.components.LerpingBossEvent"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BossHealthOverlayAccessor$$Interface} from "com.aetherteam.aether.mixin.mixins.client.accessor.BossHealthOverlayAccessor"

export class $BossHealthOverlay implements $BossHealthOverlayAccessor$$Interface {
static readonly "OVERLAY_BACKGROUND_SPRITES": ($ResourceLocation)[]
static readonly "OVERLAY_PROGRESS_SPRITES": ($ResourceLocation)[]
readonly "events": $Map<($UUID), ($LerpingBossEvent)>

constructor(arg0: $Minecraft$$Type)

public "reset"(): void
public "update"(arg0: $ClientboundBossEventPacket$$Type): void
public "shouldPlayMusic"(): boolean
public "shouldCreateWorldFog"(): boolean
public "render"(arg0: $GuiGraphics$$Type): void
public "getEvents"(): $Map
public "shouldDarkenScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossHealthOverlay$$Type = ($BossHealthOverlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossHealthOverlay$$Original = $BossHealthOverlay;}
declare module "net.minecraft.client.gui.screens.Screen$NarratableSearchResult" {
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$NarratableEntry$NarrationPriority, $NarratableEntry$NarrationPriority$$Type} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export class $Screen$NarratableSearchResult {
readonly "entry": $NarratableEntry
readonly "index": integer
readonly "priority": $NarratableEntry$NarrationPriority

constructor(arg0: $NarratableEntry$$Type, arg1: integer, arg2: $NarratableEntry$NarrationPriority$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Screen$NarratableSearchResult$$Type = ($Screen$NarratableSearchResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Screen$NarratableSearchResult$$Original = $Screen$NarratableSearchResult;}
declare module "net.minecraft.client.gui.components.Renderable" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $Renderable$$Interface {

(arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: float): void
}

export class $Renderable implements $Renderable$$Interface {
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Renderable$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Renderable$$Original = $Renderable;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenuCategory" {
import {$SpectatorMenuItem} from "net.minecraft.client.gui.spectator.SpectatorMenuItem"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $SpectatorMenuCategory$$Interface {
get "items"(): $List<($SpectatorMenuItem)>
get "prompt"(): $Component
}

export class $SpectatorMenuCategory implements $SpectatorMenuCategory$$Interface {
 "getItems"(): $List<($SpectatorMenuItem)>
 "getPrompt"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenuCategory$$Type = ($SpectatorMenuCategory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenuCategory$$Original = $SpectatorMenuCategory;}
declare module "net.minecraft.client.gui.font.FontManager" {
import {$Map} from "java.util.Map"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Font} from "net.minecraft.client.gui.Font"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$FontSet} from "net.minecraft.client.gui.font.FontSet"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $FontManager implements $PreparableReloadListener$$Interface, $AutoCloseable$$Interface {
readonly "fontSets": $Map<($ResourceLocation), ($FontSet)>
static readonly "MISSING_FONT": $ResourceLocation

constructor(arg0: $TextureManager$$Type)

public "close"(): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "createFont"(): $Font
public "updateOptions"(arg0: $Options$$Type): void
public "createFontFilterFishy"(): $Font
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontManager$$Type = ($FontManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontManager$$Original = $FontManager;}
declare module "net.minecraft.client.gui.layouts.LayoutElement" {
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $LayoutElement$$Interface {
get "y"(): integer
set "x"(value: integer)
set "y"(value: integer)
get "x"(): integer
get "height"(): integer
get "rectangle"(): $ScreenRectangle
get "width"(): integer
}

export class $LayoutElement implements $LayoutElement$$Interface {
 "getY"(): integer
 "setX"(arg0: integer): void
 "setY"(arg0: integer): void
 "getX"(): integer
 "getHeight"(): integer
 "getRectangle"(): $ScreenRectangle
 "visitWidgets"(arg0: $Consumer$$Type<($AbstractWidget)>): void
 "setPosition"(arg0: integer, arg1: integer): void
 "getWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayoutElement$$Type = ($LayoutElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayoutElement$$Original = $LayoutElement;}
declare module "net.minecraft.client.gui.narration.NarratedElementType" {
import {$Enum} from "java.lang.Enum"

export class $NarratedElementType extends $Enum<($NarratedElementType)> {
static readonly "POSITION": $NarratedElementType
static readonly "USAGE": $NarratedElementType
static readonly "HINT": $NarratedElementType
static readonly "TITLE": $NarratedElementType

public static "values"(): ($NarratedElementType)[]
public static "valueOf"(arg0: StringJS): $NarratedElementType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratedElementType$$Type = (("title") | ("position") | ("hint") | ("usage"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratedElementType$$Original = $NarratedElementType;}
declare module "net.minecraft.client.gui.Font" {
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List} from "java.util.List"
import {$Font$DisplayMode$$Type} from "net.minecraft.client.gui.Font$DisplayMode"
import {$Vector3f} from "org.joml.Vector3f"
import {$StringSplitter} from "net.minecraft.client.StringSplitter"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IFontExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IFontExtension"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$FontSet, $FontSet$$Type} from "net.minecraft.client.gui.font.FontSet"
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$AccessorFont$$Interface} from "com.sammy.malum.mixin.client.AccessorFont"

export class $Font implements $IFontExtension$$Interface, $AccessorFont$$Interface {
static readonly "SHADOW_OFFSET": $Vector3f
readonly "random": $RandomSource
static readonly "ALPHA_CUTOFF": integer
readonly "lineHeight": integer

constructor(arg0: $Function$$Type<($ResourceLocation), ($FontSet$$Type)>, arg1: boolean)

public "split"(arg0: $FormattedText$$Type, arg1: integer): $List<($FormattedCharSequence)>
public "self"(): $Font
public "width"(arg0: $FormattedCharSequence$$Type): integer
public "width"(arg0: StringJS): integer
public "width"(arg0: $FormattedText$$Type): integer
public "wordWrapHeight"(arg0: $FormattedText$$Type, arg1: integer): integer
public "wordWrapHeight"(arg0: StringJS, arg1: integer): integer
public "substrByWidth"(arg0: $FormattedText$$Type, arg1: integer): $FormattedText
public "drawInBatch8xOutline"(arg0: $FormattedCharSequence$$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: integer): void
public "bidirectionalShaping"(arg0: StringJS): StringJS
public "getSplitter"(): $StringSplitter
public "renderText"(arg0: StringJS, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): float
public "getFontSet"(arg0: $ResourceLocation$$Type): $FontSet
public "isBidirectional"(): boolean
public "drawInBatch"(arg0: StringJS, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer, arg10: boolean): integer
public "drawInBatch"(arg0: $FormattedCharSequence$$Type, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): integer
public "drawInBatch"(arg0: $Component$$Type, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): integer
public "drawInBatch"(arg0: StringJS, arg1: float, arg2: float, arg3: integer, arg4: boolean, arg5: $Matrix4f$$Type, arg6: $MultiBufferSource$$Type, arg7: $Font$DisplayMode$$Type, arg8: integer, arg9: integer): integer
public static "adjustColor"(arg0: integer): integer
public "plainSubstrByWidth"(arg0: StringJS, arg1: integer): StringJS
public "plainSubstrByWidth"(arg0: StringJS, arg1: integer, arg2: boolean): StringJS
public "ellipsize"(arg0: $FormattedText$$Type, arg1: integer): $FormattedText
get "splitter"(): $StringSplitter
get "bidirectional"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Font$$Type = ($Font);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Font$$Original = $Font;}
declare module "net.minecraft.client.gui.screens.inventory.MenuAccess" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"

export interface $MenuAccess$$Interface<T extends $AbstractContainerMenu> {

(): T
get "menu"(): T
}

export class $MenuAccess<T extends $AbstractContainerMenu> implements $MenuAccess$$Interface {
 "getMenu"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuAccess$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuAccess$$Original<T> = $MenuAccess<(T)>;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater" {
import {$BiFunction, $BiFunction$$Interface} from "java.util.function.BiFunction"
import {$RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type} from "net.minecraft.core.RegistryAccess$Frozen"
import {$Function$$Type} from "java.util.function.Function"
import {$WorldDimensions, $WorldDimensions$$Type} from "net.minecraft.world.level.levelgen.WorldDimensions"

export interface $WorldCreationContext$DimensionsUpdater$$Interface extends $BiFunction$$Interface<($RegistryAccess$Frozen), ($WorldDimensions), ($WorldDimensions)> {

(arg0: $RegistryAccess$Frozen, arg1: $WorldDimensions): $WorldDimensions$$Type
}

export class $WorldCreationContext$DimensionsUpdater implements $WorldCreationContext$DimensionsUpdater$$Interface {
 "apply"(arg0: $RegistryAccess$Frozen$$Type, arg1: $WorldDimensions$$Type): $WorldDimensions
 "andThen"<V>(arg0: $Function$$Type<($WorldDimensions), (V)>): $BiFunction<($RegistryAccess$Frozen), ($WorldDimensions), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationContext$DimensionsUpdater$$Type = ((arg0: $RegistryAccess$Frozen, arg1: $WorldDimensions) => $WorldDimensions$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationContext$DimensionsUpdater$$Original = $WorldCreationContext$DimensionsUpdater;}
declare module "net.minecraft.client.gui.screens.social.PlayerSocialManager" {
import {$UserApiService$$Type} from "com.mojang.authlib.minecraft.UserApiService"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Set} from "java.util.Set"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"

export class $PlayerSocialManager {
constructor(arg0: $Minecraft$$Type, arg1: $UserApiService$$Type)

public "isHidden"(arg0: $UUID$$Type): boolean
public "shouldHideMessageFrom"(arg0: $UUID$$Type): boolean
public "removePlayer"(arg0: $UUID$$Type): void
public "getHiddenPlayers"(): $Set<($UUID)>
public "getDiscoveredUUID"(arg0: StringJS): $UUID
public "isBlocked"(arg0: $UUID$$Type): boolean
public "addPlayer"(arg0: $PlayerInfo$$Type): void
public "stopOnlineMode"(): void
public "startOnlineMode"(): void
public "showPlayer"(arg0: $UUID$$Type): void
public "hidePlayer"(arg0: $UUID$$Type): void
get "hiddenPlayers"(): $Set<($UUID)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSocialManager$$Type = ($PlayerSocialManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerSocialManager$$Original = $PlayerSocialManager;}
declare module "net.minecraft.client.gui.narration.NarrationThunk" {
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $NarrationThunk<T> {
static readonly "EMPTY": $NarrationThunk<(never)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "from"(arg0: $List$$Type<($Component$$Type)>): $NarrationThunk<(never)>
public static "from"(arg0: StringJS): $NarrationThunk<(never)>
public static "from"(arg0: $Component$$Type): $NarrationThunk<(never)>
public "getText"(arg0: $Consumer$$Type<(StringJS)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrationThunk$$Type<T> = ($NarrationThunk<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrationThunk$$Original<T> = $NarrationThunk<(T)>;}
declare module "net.minecraft.client.gui.Gui$HeartType" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Enum} from "java.lang.Enum"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$HeartTypeAccessor$$Interface} from "com.aetherteam.aether.mixin.mixins.client.accessor.HeartTypeAccessor"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $Gui$HeartType extends $Enum<($Gui$HeartType)> implements $IExtensibleEnum$$Interface, $HeartTypeAccessor$$Interface {
static readonly "ABSORBING": $Gui$HeartType
static readonly "CONTAINER": $Gui$HeartType
static readonly "UNDERGARDEN_VIRULENT": $Gui$HeartType
static readonly "WITHERED": $Gui$HeartType
static readonly "POISIONED": $Gui$HeartType
static readonly "FROZEN": $Gui$HeartType
static readonly "NORMAL": $Gui$HeartType

public static "values"(): ($Gui$HeartType)[]
public static "valueOf"(arg0: StringJS): $Gui$HeartType
public static "getExtensionInfo"(): $ExtensionInfo
public "getSprite"(arg0: boolean, arg1: boolean, arg2: boolean): $ResourceLocation
public static "callForPlayer$aether_$md$447b7b$0"(arg0: $Player$$Type): $Gui$HeartType
public static "callForPlayer"(arg0: $Player$$Type): $Gui$HeartType
public static get "extensionInfo"(): $ExtensionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gui$HeartType$$Type = (("container") | ("normal") | ("poisioned") | ("withered") | ("absorbing") | ("frozen") | ("undergarden_virulent"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Gui$HeartType$$Original = $Gui$HeartType;}
declare module "net.minecraft.client.gui.font.FontOption$Filter" {
import {$FontOption$$Type} from "net.minecraft.client.gui.font.FontOption"
import {$Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Set$$Type} from "java.util.Set"

export class $FontOption$Filter {
static readonly "CODEC": $Codec<($FontOption$Filter)>
static readonly "ALWAYS_PASS": $FontOption$Filter

constructor(arg0: $Map$$Type<($FontOption$$Type), (boolean)>)

public "apply"(arg0: $Set$$Type<($FontOption$$Type)>): boolean
public "merge"(arg0: $FontOption$Filter$$Type): $FontOption$Filter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontOption$Filter$$Type = ($FontOption$Filter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontOption$Filter$$Original = $FontOption$Filter;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$SelectedGameMode" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$GameType} from "net.minecraft.world.level.GameType"

export class $WorldCreationUiState$SelectedGameMode extends $Enum<($WorldCreationUiState$SelectedGameMode)> {
static readonly "SURVIVAL": $WorldCreationUiState$SelectedGameMode
readonly "gameType": $GameType
readonly "displayName": $Component
static readonly "CREATIVE": $WorldCreationUiState$SelectedGameMode
static readonly "DEBUG": $WorldCreationUiState$SelectedGameMode
static readonly "HARDCORE": $WorldCreationUiState$SelectedGameMode

public static "values"(): ($WorldCreationUiState$SelectedGameMode)[]
public static "valueOf"(arg0: StringJS): $WorldCreationUiState$SelectedGameMode
public "getInfo"(): $Component
get "info"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationUiState$SelectedGameMode$$Type = (("survival") | ("hardcore") | ("creative") | ("debug"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationUiState$SelectedGameMode$$Original = $WorldCreationUiState$SelectedGameMode;}
declare module "net.minecraft.client.gui.screens.MenuScreens$ScreenConstructor" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuScreens$ScreenConstructor$$Interface<T extends $AbstractContainerMenu, U extends $Screen> {

(arg0: T, arg1: $Inventory, arg2: $Component): U
}

export class $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> implements $MenuScreens$ScreenConstructor$$Interface {
 "create"(arg0: T, arg1: $Inventory$$Type, arg2: $Component$$Type): U
 "fromPacket"(arg0: $Component$$Type, arg1: $MenuType$$Type<(T)>, arg2: $Minecraft$$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuScreens$ScreenConstructor$$Type<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component) => U);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuScreens$ScreenConstructor$$Original<T, U> = $MenuScreens$ScreenConstructor<(T), (U)>;}
declare module "net.minecraft.client.gui.narration.NarrationElementOutput" {
import {$NarrationThunk$$Type} from "net.minecraft.client.gui.narration.NarrationThunk"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$NarratedElementType$$Type} from "net.minecraft.client.gui.narration.NarratedElementType"

export interface $NarrationElementOutput$$Interface {
}

export class $NarrationElementOutput implements $NarrationElementOutput$$Interface {
 "add"(arg0: $NarratedElementType$$Type, arg1: $NarrationThunk$$Type<(never)>): void
 "add"(arg0: $NarratedElementType$$Type, ...arg1: ($Component$$Type)[]): void
 "add"(arg0: $NarratedElementType$$Type, arg1: StringJS): void
 "add"(arg0: $NarratedElementType$$Type, arg1: $Component$$Type): void
 "nest"(): $NarrationElementOutput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrationElementOutput$$Type = ($NarrationElementOutput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrationElementOutput$$Original = $NarrationElementOutput;}
declare module "net.minecraft.client.gui.font.GlyphRenderTypes" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Font$DisplayMode$$Type} from "net.minecraft.client.gui.Font$DisplayMode"
import {$SubtractiveTextGlyphRenderTypes$$Interface} from "com.sammy.malum.client.renderer.text.SubtractiveTextGlyphRenderTypes"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Record} from "java.lang.Record"

export class $GlyphRenderTypes extends $Record implements $SubtractiveTextGlyphRenderTypes$$Interface {
constructor(arg0: $RenderType$$Type, arg1: $RenderType$$Type, arg2: $RenderType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "normal"(): $RenderType
public "seeThrough"(): $RenderType
public "select"(arg0: $Font$DisplayMode$$Type): $RenderType
public "polygonOffset"(): $RenderType
public static "createForColorTexture"(arg0: $ResourceLocation$$Type): $GlyphRenderTypes
public static "createForIntensityTexture"(arg0: $ResourceLocation$$Type): $GlyphRenderTypes
public "malum$getSubtractiveType"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphRenderTypes$$Type = ({"normal"?: $RenderType$$Type, "seeThrough"?: $RenderType$$Type, "polygonOffset"?: $RenderType$$Type}) | ([normal?: $RenderType$$Type, seeThrough?: $RenderType$$Type, polygonOffset?: $RenderType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphRenderTypes$$Original = $GlyphRenderTypes;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$OptionsModifier" {
import {$UnaryOperator, $UnaryOperator$$Interface} from "java.util.function.UnaryOperator"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$WorldOptions, $WorldOptions$$Type} from "net.minecraft.world.level.levelgen.WorldOptions"

export interface $WorldCreationContext$OptionsModifier$$Interface extends $UnaryOperator$$Interface<($WorldOptions)> {

(arg0: $WorldOptions): $WorldOptions$$Type
}

export class $WorldCreationContext$OptionsModifier implements $WorldCreationContext$OptionsModifier$$Interface {
static "identity"<T>(): $UnaryOperator<($WorldOptions)>
 "apply"(arg0: $WorldOptions$$Type): $WorldOptions
 "compose"<V>(arg0: $Function$$Type<(V), ($WorldOptions$$Type)>): $Function<(V), ($WorldOptions)>
 "andThen"<V>(arg0: $Function$$Type<($WorldOptions), (V)>): $Function<($WorldOptions), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationContext$OptionsModifier$$Type = ((arg0: $WorldOptions) => $WorldOptions$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationContext$OptionsModifier$$Original = $WorldCreationContext$OptionsModifier;}
declare module "net.minecraft.client.gui.MapRenderer" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$MapDecorationTextureManager$$Type} from "net.minecraft.client.resources.MapDecorationTextureManager"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$MapAtlasTexture} from "net.raphimc.immediatelyfast.feature.map_atlas_generation.MapAtlasTexture"
import {$IMapRenderer$$Interface} from "net.raphimc.immediatelyfast.injection.interfaces.IMapRenderer"
import {$MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"

export class $MapRenderer implements $AutoCloseable$$Interface, $IMapRenderer$$Interface {
constructor(arg0: $TextureManager$$Type, arg1: $MapDecorationTextureManager$$Type)

public "update"(arg0: $MapId$$Type, arg1: $MapItemSavedData$$Type): void
public "close"(): void
public "resetData"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $MapId$$Type, arg3: $MapItemSavedData$$Type, arg4: boolean, arg5: integer): void
public "immediatelyFast$getAtlasMapping"(mapId: integer): integer
public "immediatelyFast$getMapAtlasTexture"(id: integer): $MapAtlasTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRenderer$$Type = ($MapRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapRenderer$$Original = $MapRenderer;}
declare module "net.minecraft.client.gui.narration.NarrationSupplier" {
import {$NarrationElementOutput, $NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"

export interface $NarrationSupplier$$Interface {

(arg0: $NarrationElementOutput): void
}

export class $NarrationSupplier implements $NarrationSupplier$$Interface {
 "updateNarration"(arg0: $NarrationElementOutput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarrationSupplier$$Type = ((arg0: $NarrationElementOutput) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarrationSupplier$$Original = $NarrationSupplier;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$WorldTypeEntry" {
import {$WorldPreset, $WorldPreset$$Type} from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $WorldCreationUiState$WorldTypeEntry extends $Record {
constructor(preset: $Holder$$Type<($WorldPreset)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "preset"(): $Holder<($WorldPreset)>
public "describePreset"(): $Component
public "isAmplified"(): boolean
get "amplified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationUiState$WorldTypeEntry$$Type = ({"preset"?: $Holder$$Type<($WorldPreset)>}) | ([preset?: $Holder$$Type<($WorldPreset)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationUiState$WorldTypeEntry$$Original = $WorldCreationUiState$WorldTypeEntry;}
declare module "net.minecraft.client.gui.spectator.SpectatorMenuListener" {
import {$SpectatorMenu, $SpectatorMenu$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenu"

export interface $SpectatorMenuListener$$Interface {

(arg0: $SpectatorMenu): void
}

export class $SpectatorMenuListener implements $SpectatorMenuListener$$Interface {
 "onSpectatorMenuClosed"(arg0: $SpectatorMenu$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorMenuListener$$Type = ((arg0: $SpectatorMenu) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorMenuListener$$Original = $SpectatorMenuListener;}
declare module "net.minecraft.client.gui.screens.ReceivingLevelScreen" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$List} from "java.util.List"
import {$ReceivingLevelScreen$Reason$$Type} from "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"

export class $ReceivingLevelScreen extends $Screen {
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

constructor(arg0: $BooleanSupplier$$Type, arg1: $ReceivingLevelScreen$Reason$$Type)

public "onClose"(): void
public "tick"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "shouldCloseOnEsc"(): boolean
public "isPauseScreen"(): boolean
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
get "pauseScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReceivingLevelScreen$$Type = ($ReceivingLevelScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReceivingLevelScreen$$Original = $ReceivingLevelScreen;}
declare module "net.minecraft.client.gui.components.Button$OnPress" {
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"

export interface $Button$OnPress$$Interface {

(arg0: $Button): void
}

export class $Button$OnPress implements $Button$OnPress$$Interface {
 "onPress"(arg0: $Button$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$OnPress$$Type = ((arg0: $Button) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Button$OnPress$$Original = $Button$OnPress;}
declare module "net.minecraft.client.gui.components.WidgetTooltipHolder" {
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$ScreenRectangle$$Type} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$Duration$$Type} from "java.time.Duration"
import {$Tooltip, $Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"

export class $WidgetTooltipHolder {
constructor()

public "get"(): $Tooltip
public "set"(arg0: $Tooltip$$Type): void
public "setDelay"(arg0: $Duration$$Type): void
public "refreshTooltipForNextRenderPass"(arg0: boolean, arg1: boolean, arg2: $ScreenRectangle$$Type): void
public "updateNarration"(arg0: $NarrationElementOutput$$Type): void
set "delay"(value: $Duration$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetTooltipHolder$$Type = ($WidgetTooltipHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetTooltipHolder$$Original = $WidgetTooltipHolder;}
declare module "net.minecraft.client.gui.screens.Screen" {
import {$ScreenAccessor$$Interface as $ScreenAccessor$3$$Interface} from "com.aetherteam.cumulus.mixin.mixins.client.accessor.ScreenAccessor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ScreenAccessor$$Interface as $ScreenAccessor$1$$Interface} from "com.hollingsworth.nuggets.mixin.ScreenAccessor"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$AccessorScreen$$Interface} from "vazkii.patchouli.mixin.client.AccessorScreen"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Layer$$Type} from "io.wispforest.owo.ui.layers.Layer"
import {$ScreenAccessor$$Interface as $ScreenAccessor$2$$Interface} from "dev.tr7zw.trender.gui.impl.mixin.client.ScreenAccessor"
import {$ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Renderable, $Renderable$$Type, $Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"
import {$AbstractContainerEventHandler} from "net.minecraft.client.gui.components.events.AbstractContainerEventHandler"
import {$OwoScreenExtension$$Interface} from "io.wispforest.owo.util.pond.OwoScreenExtension"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$ScreenAccessor$$Interface as $ScreenAccessor$0$$Interface} from "io.wispforest.owo.mixin.ScreenAccessor"
import {$Screen$NarratableSearchResult} from "net.minecraft.client.gui.screens.Screen$NarratableSearchResult"
import {$Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$Layer$Instance} from "io.wispforest.owo.ui.layers.Layer$Instance"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$ScreenAccessor$$Interface} from "com.aetherteam.aether.mixin.mixins.client.accessor.ScreenAccessor"
import {$Path$$Type} from "java.nio.file.Path"
import {$Music} from "net.minecraft.sounds.Music"

export class $Screen extends $AbstractContainerEventHandler implements $Renderable$$Interface, $ScreenAccessor$0$$Interface, $ScreenAccessor$$Interface, $ScreenAccessor$2$$Interface, $ScreenAccessor$1$$Interface, $AccessorScreen$$Interface, $ScreenAccessor$3$$Interface, $OwoScreenExtension$$Interface {
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

public "init"(arg0: $Minecraft$$Type, arg1: integer, arg2: integer): void
public "added"(): void
public "removed"(): void
public "resize"(arg0: $Minecraft$$Type, arg1: integer, arg2: integer): void
public "onClose"(): void
public "tick"(): void
public "children"(): $List<($GuiEventListener)>
public static "hasAltDown"(): boolean
public static "wrapScreenError"(arg0: $Runnable$$Type, arg1: StringJS, arg2: StringJS): void
public static "hasControlDown"(): boolean
public "getBackgroundMusic"(): $Music
public static "hasShiftDown"(): boolean
public "triggerImmediateNarration"(arg0: boolean): void
public "getNarrationMessage"(): $Component
public "addRenderableWidget"<T extends $GuiEventListener>(arg0: T): T
public "handleComponentClicked"(arg0: $Style$$Type): boolean
public "handleDelayedNarration"(): void
public static "findNarratableWidget"(arg0: $List$$Type<($NarratableEntry$$Type)>, arg1: $NarratableEntry$$Type): $Screen$NarratableSearchResult
public "owo$addDrawableChild"(arg0: $GuiEventListener$$Type): $GuiEventListener
public "afterKeyboardAction"(): void
public "aether$getNarratables"(): $List
public "updateNarratorStatus"(arg0: boolean): void
public "owo$getInstancesView"(): $List
public static "PANORAMA_RENDERER$owo_$md$447b7b$0"(): $CubeMap
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public static "isCopy"(arg0: integer): boolean
public "getTitle"(): $Component
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "clearFocus"(): void
public "addWidget"<T extends $GuiEventListener>(arg0: T): T
public static "isCut"(arg0: integer): boolean
public static "isPaste"(arg0: integer): boolean
public static "getTooltipFromItem"(arg0: $Minecraft$$Type, arg1: $ItemStack$$Type): $List<($Component)>
public static "cumulus$getCubeMap$cumulus_menus_$md$447b7b$2"(): $CubeMap
public static "cumulus$setCubeMap$cumulus_menus_$md$447b7b$3"(arg0: $CubeMap$$Type): void
public static "ROTATING_PANORAMA_RENDERER$owo_$md$447b7b$1"(): $PanoramaRenderer
public static "cumulus$getPanorama$cumulus_menus_$md$447b7b$4"(): $PanoramaRenderer
public static "cumulus$setPanorama$cumulus_menus_$md$447b7b$5"(arg0: $PanoramaRenderer$$Type): void
public "addRenderableOnly"<T extends $Renderable>(arg0: T): T
public "isMouseOver"(arg0: double, arg1: double): boolean
public static "isSelectAll"(arg0: integer): boolean
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "renderWithTooltip"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "setInitialFocus"(arg0: $GuiEventListener$$Type): void
public "shouldCloseOnEsc"(): boolean
public "libgui$getChildren"(): $List
public "afterMouseAction"(): void
public "onFilesDrop"(arg0: $List$$Type<($Path$$Type)>): void
public "getRectangle"(): $ScreenRectangle
public "owo$updateLayers"(): void
public "owo$getInstance"(layer: $Layer$$Type): $Layer$Instance
public "getRenderables"(): $List
public "getMinecraft"(): $Minecraft
public "getNarratables"(): $List
public "afterMouseMove"(): void
public "setTooltipForNextRenderPass"(arg0: $Tooltip$$Type, arg1: $ClientTooltipPositioner$$Type, arg2: boolean): void
public "setTooltipForNextRenderPass"(arg0: $List$$Type<($FormattedCharSequence$$Type)>): void
public "setTooltipForNextRenderPass"(arg0: $Component$$Type): void
public "setTooltipForNextRenderPass"(arg0: $List$$Type<($FormattedCharSequence$$Type)>, arg1: $ClientTooltipPositioner$$Type, arg2: boolean): void
public static "renderMenuBackgroundTexture"(arg0: $GuiGraphics$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer): void
public "renderTransparentBackground"(arg0: $GuiGraphics$$Type): void
public "isPauseScreen"(): boolean
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
get "backgroundMusic"(): $Music
get "narrationMessage"(): $Component
get "title"(): $Component
set "initialFocus"(value: $GuiEventListener$$Type)
get "rectangle"(): $ScreenRectangle
get "minecraft"(): $Minecraft
set "tooltipForNextRenderPass"(value: $List$$Type<($FormattedCharSequence$$Type)>)
set "tooltipForNextRenderPass"(value: $Component$$Type)
get "pauseScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Screen$$Type = ($Screen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Screen$$Original = $Screen;}
declare module "net.minecraft.client.gui.navigation.ScreenAxis" {
import {$Enum} from "java.lang.Enum"
import {$ScreenDirection} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenAxis extends $Enum<($ScreenAxis)> {
static readonly "VERTICAL": $ScreenAxis
static readonly "HORIZONTAL": $ScreenAxis

public static "values"(): ($ScreenAxis)[]
public static "valueOf"(arg0: StringJS): $ScreenAxis
public "getNegative"(): $ScreenDirection
public "orthogonal"(): $ScreenAxis
public "getPositive"(): $ScreenDirection
public "getDirection"(arg0: boolean): $ScreenDirection
get "negative"(): $ScreenDirection
get "positive"(): $ScreenDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAxis$$Type = (("horizontal") | ("vertical"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAxis$$Original = $ScreenAxis;}
declare module "net.minecraft.client.gui.components.spectator.SpectatorGui" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$SpectatorMenuListener$$Interface} from "net.minecraft.client.gui.spectator.SpectatorMenuListener"
import {$SpectatorMenu$$Type} from "net.minecraft.client.gui.spectator.SpectatorMenu"

export class $SpectatorGui implements $SpectatorMenuListener$$Interface {
constructor(arg0: $Minecraft$$Type)

public "onHotbarSelected"(arg0: integer): void
public "onSpectatorMenuClosed"(arg0: $SpectatorMenu$$Type): void
public "renderHotbar"(arg0: $GuiGraphics$$Type): void
public "renderTooltip"(arg0: $GuiGraphics$$Type): void
public "onMouseMiddleClick"(): void
public "onMouseScrolled"(arg0: integer): void
public "isMenuActive"(): boolean
get "menuActive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectatorGui$$Type = ($SpectatorGui);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectatorGui$$Original = $SpectatorGui;}
declare module "net.minecraft.client.gui.components.LerpingBossEvent" {
import {$BossEvent$BossBarColor$$Type} from "net.minecraft.world.BossEvent$BossBarColor"
import {$UUID$$Type} from "java.util.UUID"
import {$BossEvent} from "net.minecraft.world.BossEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BossEvent$BossBarOverlay$$Type} from "net.minecraft.world.BossEvent$BossBarOverlay"

export class $LerpingBossEvent extends $BossEvent {
constructor(arg0: $UUID$$Type, arg1: $Component$$Type, arg2: float, arg3: $BossEvent$BossBarColor$$Type, arg4: $BossEvent$BossBarOverlay$$Type, arg5: boolean, arg6: boolean, arg7: boolean)

public "setProgress"(arg0: float): void
public "getProgress"(): float
set "progress"(value: float)
get "progress"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpingBossEvent$$Type = ($LerpingBossEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LerpingBossEvent$$Original = $LerpingBossEvent;}
declare module "net.minecraft.client.gui.GuiGraphics$ScissorStack" {
import {$ScreenRectangle, $ScreenRectangle$$Type} from "net.minecraft.client.gui.navigation.ScreenRectangle"

export class $GuiGraphics$ScissorStack {
public "push"(arg0: $ScreenRectangle$$Type): $ScreenRectangle
public "pop"(): $ScreenRectangle
public "containsPoint"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGraphics$ScissorStack$$Type = ($GuiGraphics$ScissorStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiGraphics$ScissorStack$$Original = $GuiGraphics$ScissorStack;}
declare module "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState" {
import {$Optional$$Type} from "java.util.Optional"
import {$List} from "java.util.List"
import {$OptionalLong$$Type} from "java.util.OptionalLong"
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"
import {$WorldCreationContext$DimensionsUpdater$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext$DimensionsUpdater"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$GameRules, $GameRules$$Type} from "net.minecraft.world.level.GameRules"
import {$WorldCreationUiState$SelectedGameMode, $WorldCreationUiState$SelectedGameMode$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$SelectedGameMode"
import {$WorldCreationContext, $WorldCreationContext$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$WorldCreationUiState$WorldTypeEntry, $WorldCreationUiState$WorldTypeEntry$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState$WorldTypeEntry"
import {$PresetEditor} from "net.minecraft.client.gui.screens.worldselection.PresetEditor"
import {$WorldPreset$$Type} from "net.minecraft.world.level.levelgen.presets.WorldPreset"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path$$Type} from "java.nio.file.Path"

export class $WorldCreationUiState {
constructor(arg0: $Path$$Type, arg1: $WorldCreationContext$$Type, arg2: ($ResourceKey$$Type<($WorldPreset$$Type)>)?, arg3: $OptionalLong$$Type)

public "getName"(): StringJS
public "setName"(arg0: StringJS): void
public "isDebug"(): boolean
public "setSeed"(arg0: StringJS): void
public "getSeed"(): StringJS
public "isHardcore"(): boolean
public "getDifficulty"(): $Difficulty
public "getGameRules"(): $GameRules
public "onChanged"(): void
public "updateDimensions"(arg0: $WorldCreationContext$DimensionsUpdater$$Type): void
public "isAllowCommands"(): boolean
public "setDifficulty"(arg0: $Difficulty$$Type): void
public "setSettings"(arg0: $WorldCreationContext$$Type): void
public "getSettings"(): $WorldCreationContext
public "addListener"(arg0: $Consumer$$Type<($WorldCreationUiState)>): void
public "setGameMode"(arg0: $WorldCreationUiState$SelectedGameMode$$Type): void
public "setAllowCommands"(arg0: boolean): void
public "getTargetFolder"(): StringJS
public "getWorldType"(): $WorldCreationUiState$WorldTypeEntry
public "isBonusChest"(): boolean
public "setBonusChest"(arg0: boolean): void
public "setWorldType"(arg0: $WorldCreationUiState$WorldTypeEntry$$Type): void
public "getPresetEditor"(): $PresetEditor
public "setGameRules"(arg0: $GameRules$$Type): void
public "getAltPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
public "setGenerateStructures"(arg0: boolean): void
public "isGenerateStructures"(): boolean
public "getNormalPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
public "getGameMode"(): $WorldCreationUiState$SelectedGameMode
get "name"(): StringJS
set "name"(value: StringJS)
get "debug"(): boolean
set "seed"(value: StringJS)
get "seed"(): StringJS
get "hardcore"(): boolean
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "allowCommands"(): boolean
set "difficulty"(value: $Difficulty$$Type)
set "settings"(value: $WorldCreationContext$$Type)
get "settings"(): $WorldCreationContext
set "gameMode"(value: $WorldCreationUiState$SelectedGameMode$$Type)
set "allowCommands"(value: boolean)
get "targetFolder"(): StringJS
get "worldType"(): $WorldCreationUiState$WorldTypeEntry
get "bonusChest"(): boolean
set "bonusChest"(value: boolean)
set "worldType"(value: $WorldCreationUiState$WorldTypeEntry$$Type)
get "presetEditor"(): $PresetEditor
set "gameRules"(value: $GameRules$$Type)
get "altPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
set "generateStructures"(value: boolean)
get "generateStructures"(): boolean
get "normalPresetList"(): $List<($WorldCreationUiState$WorldTypeEntry)>
get "gameMode"(): $WorldCreationUiState$SelectedGameMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldCreationUiState$$Type = ($WorldCreationUiState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldCreationUiState$$Original = $WorldCreationUiState;}
declare module "net.minecraft.client.gui.GuiSpriteManager" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$GuiSpriteScaling} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TextureAtlasHolder} from "net.minecraft.client.resources.TextureAtlasHolder"

export class $GuiSpriteManager extends $TextureAtlasHolder {
constructor(arg0: $TextureManager$$Type)

public "getSprite"(arg0: $ResourceLocation$$Type): $TextureAtlasSprite
public "getSpriteScaling"(arg0: $TextureAtlasSprite$$Type): $GuiSpriteScaling
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSpriteManager$$Type = ($GuiSpriteManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiSpriteManager$$Original = $GuiSpriteManager;}
declare module "net.minecraft.client.gui.components.SplashRenderer" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$SplashRendererAccessor$$Interface} from "com.aetherteam.cumulus.mixin.mixins.client.accessor.SplashRendererAccessor"

export class $SplashRenderer implements $SplashRendererAccessor$$Interface {
static readonly "CHRISTMAS": $SplashRenderer
static readonly "HALLOWEEN": $SplashRenderer
 "splash": StringJS
static readonly "NEW_YEAR": $SplashRenderer

constructor(arg0: StringJS)

public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: $Font$$Type, arg3: integer): void
public "cumulus$getSplash"(): StringJS
public "cumulus$setSplash"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplashRenderer$$Type = ($SplashRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SplashRenderer$$Original = $SplashRenderer;}
declare module "net.minecraft.client.gui.components.AbstractButton" {
import {$Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$AbstractButtonExtension$$Interface} from "io.wispforest.accessories.client.gui.AbstractButtonExtension"
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ButtonEvents$AdjustRendering$$Type} from "io.wispforest.accessories.client.gui.ButtonEvents$AdjustRendering"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Event} from "net.fabricmc.fabric.api.event.Event"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $AbstractButton extends $AbstractWidget implements $AbstractButtonExtension$$Interface {
static readonly "UNSET_FG_COLOR": integer
 "visible": boolean
 "active": boolean

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Component$$Type)

public "onClick"(arg0: double, arg1: double): void
public "onPress"(): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getRenderingEvent"(): $Event
public "renderString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: integer): void
public "adjustRendering"<B extends $AbstractButton>(event: $ButtonEvents$AdjustRendering$$Type): B
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
get "renderingEvent"(): $Event
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractButton$$Type = ($AbstractButton);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractButton$$Original = $AbstractButton;}
declare module "net.minecraft.client.gui.GuiGraphics" {
import {$GuiGraphics$ScissorStack, $GuiGraphics$ScissorStack$$Type} from "net.minecraft.client.gui.GuiGraphics$ScissorStack"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List$$Type} from "java.util.List"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$DrawContextAccessor$$Interface} from "dev.tr7zw.trender.gui.impl.mixin.client.DrawContextAccessor"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$DrawContextInvoker$$Interface} from "io.wispforest.owo.mixin.ui.DrawContextInvoker"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$IGuiGraphicsExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IGuiGraphicsExtension"
import {$Quaternionf$$Type} from "org.joml.Quaternionf"
import {$GuiGraphicsAccessor$$Interface as $GuiGraphicsAccessor$0$$Interface} from "dev.shadowsoffire.apotheosis.mixin.client.GuiGraphicsAccessor"
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$MatrixStackTransformer, $MatrixStackTransformer$$Interface} from "io.wispforest.owo.ui.util.MatrixStackTransformer"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$GuiGraphicsAccessor$$Interface} from "io.wispforest.accessories.mixin.client.GuiGraphicsAccessor"

export class $GuiGraphics implements $IGuiGraphicsExtension$$Interface, $MatrixStackTransformer$$Interface, $DrawContextInvoker$$Interface, $DrawContextAccessor$$Interface, $GuiGraphicsAccessor$$Interface, $GuiGraphicsAccessor$0$$Interface {
static readonly "MIN_GUI_Z": float
static readonly "MAX_GUI_Z": float

constructor(arg0: $Minecraft$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$BufferSource$$Type)
constructor(arg0: $Minecraft$$Type, arg1: $MultiBufferSource$BufferSource$$Type)

public "flush"(): void
public "fill"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fill"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "fill"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fill"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "setColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "renderComponentTooltipFromElements"(arg0: $Font$$Type, arg1: $List$$Type<($Either$$Type<($FormattedText$$Type), ($TooltipComponent$$Type)>)>, arg2: integer, arg3: integer, arg4: $ItemStack$$Type): void
public "renderItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "renderItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: integer): void
public "renderItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "renderItem"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "renderItem"(arg0: $LivingEntity$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "hLine"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "hLine"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "vLine"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "vLine"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "drawString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: float, arg3: float, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer): integer
public "drawString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer): integer
public "drawString"(arg0: $Font$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: StringJS, arg2: float, arg3: float, arg4: integer, arg5: boolean): integer
public "drawString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer): integer
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "blitSprite"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "containsPointInScissor"(arg0: integer, arg1: integer): boolean
public "renderItemDecorations"(arg0: $Font$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: StringJS): void
public "renderItemDecorations"(arg0: $Font$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer): void
public "renderTooltipInternal"(arg0: $Font$$Type, arg1: $List$$Type<($ClientTooltipComponent$$Type)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void
public "drawStringWithBackdrop"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
public "renderComponentTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: integer, arg3: integer): void
public "renderComponentTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer, arg3: integer, arg4: $ItemStack$$Type): void
public "renderComponentHoverEffect"(arg0: $Font$$Type, arg1: $Style$$Type, arg2: integer, arg3: integer): void
public "libgui$getVertexConsumers"(): $MultiBufferSource$BufferSource
public "owo$getScissorStack"(): $GuiGraphics$ScissorStack
public "owo$setScissorStack"(arg0: $GuiGraphics$ScissorStack$$Type): void
public "fillGradient"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fillGradient"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "fillGradient"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
/**
 * 
 * @deprecated
 */
public "drawManaged"(arg0: $Runnable$$Type): void
public "renderFakeItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: integer): void
public "renderFakeItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "fillRenderType"(arg0: $RenderType$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawCenteredString"(arg0: $Font$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer): void
public "drawCenteredString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "drawCenteredString"(arg0: $Font$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "enableScissor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "renderOutline"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "disableScissor"(): void
public "drawWordWrap"(arg0: $Font$$Type, arg1: $FormattedText$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "bufferSource"(): $MultiBufferSource$BufferSource
public "owo$getMatrices"(): $PoseStack
public "getTooltipStack"(): $ItemStack
public "callBlitSprite"(arg0: $TextureAtlasSprite$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($FormattedCharSequence$$Type)>, arg2: integer, arg3: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: ($TooltipComponent$$Type)?, arg3: integer, arg4: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: ($TooltipComponent$$Type)?, arg3: $ItemStack$$Type, arg4: integer, arg5: integer): void
public "renderTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($FormattedCharSequence$$Type)>, arg2: $ClientTooltipPositioner$$Type, arg3: integer, arg4: integer): void
public "owo$setMatrices"(arg0: $PoseStack$$Type): void
public "setTooltipStack"(arg0: $ItemStack$$Type): void
public "getMatrixStack"(): $PoseStack
public "pose"(): $PoseStack
public "guiHeight"(): integer
public "guiWidth"(): integer
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "blit"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $TextureAtlasSprite$$Type): void
public "blit"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $TextureAtlasSprite$$Type, arg6: float, arg7: float, arg8: float, arg9: float): void
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "blit"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: integer, arg10: integer): void
public "owo$renderTooltipFromComponents"(arg0: $Font$$Type, arg1: $List$$Type, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void
public "drawScrollingString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
public "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
public "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "getColorFromFormattingCharacter"(arg0: character, arg1: boolean): integer
public "scale"(x: float, y: float, z: float): $MatrixStackTransformer
public "multiply"(quaternion: $Quaternionf$$Type): $MatrixStackTransformer
public "multiply"(quaternion: $Quaternionf$$Type, originX: float, originY: float, originZ: float): $MatrixStackTransformer
public "push"(): $MatrixStackTransformer
public "pop"(): $MatrixStackTransformer
public "translate"(x: double, y: double, z: double): $MatrixStackTransformer
public "translate"(x: float, y: float, z: float): $MatrixStackTransformer
public "multiplyPositionMatrix"(matrix: $Matrix4f$$Type): $MatrixStackTransformer
get "tooltipStack"(): $ItemStack
set "tooltipStack"(value: $ItemStack$$Type)
get "matrixStack"(): $PoseStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGraphics$$Type = ($GuiGraphics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiGraphics$$Original = $GuiGraphics;}
declare module "net.minecraft.client.gui.LayeredDraw$Layer" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$DeltaTracker, $DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"

export interface $LayeredDraw$Layer$$Interface {

(arg0: $GuiGraphics, arg1: $DeltaTracker): void
}

export class $LayeredDraw$Layer implements $LayeredDraw$Layer$$Interface {
 "render"(arg0: $GuiGraphics$$Type, arg1: $DeltaTracker$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredDraw$Layer$$Type = ((arg0: $GuiGraphics, arg1: $DeltaTracker) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayeredDraw$Layer$$Original = $LayeredDraw$Layer;}
declare module "net.minecraft.client.gui.components.toasts.TutorialToast" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Toast$Visibility} from "net.minecraft.client.gui.components.toasts.Toast$Visibility"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ToastComponent$$Type} from "net.minecraft.client.gui.components.toasts.ToastComponent"
import {$Toast$$Interface} from "net.minecraft.client.gui.components.toasts.Toast"
import {$TutorialToast$Icons$$Type} from "net.minecraft.client.gui.components.toasts.TutorialToast$Icons"

export class $TutorialToast implements $Toast$$Interface {
static readonly "PROGRESS_BAR_HEIGHT": integer
static readonly "PROGRESS_BAR_X": integer
static readonly "PROGRESS_BAR_WIDTH": integer
static readonly "PROGRESS_BAR_Y": integer

constructor(arg0: $TutorialToast$Icons$$Type, arg1: $Component$$Type, arg2: $Component$$Type, arg3: boolean)

public "updateProgress"(arg0: float): void
public "render"(arg0: $GuiGraphics$$Type, arg1: $ToastComponent$$Type, arg2: long): $Toast$Visibility
public "hide"(): void
public "slotCount"(): integer
public "width"(): integer
public "height"(): integer
public "getToken"(): any
get "token"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TutorialToast$$Type = ($TutorialToast);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TutorialToast$$Original = $TutorialToast;}
declare module "net.minecraft.client.gui.components.ChatComponent$DelayedMessageDeletion" {
import {$MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$Record} from "java.lang.Record"

export class $ChatComponent$DelayedMessageDeletion extends $Record {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponent$DelayedMessageDeletion$$Type = ({"deletableAfter"?: integer, "signature"?: $MessageSignature$$Type}) | ([deletableAfter?: integer, signature?: $MessageSignature$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatComponent$DelayedMessageDeletion$$Original = $ChatComponent$DelayedMessageDeletion;}
declare module "net.minecraft.client.gui.screens.worldselection.CreateWorldScreen" {
import {$LevelSettings$$Type} from "net.minecraft.world.level.LevelSettings"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$WorldCreationUiState} from "net.minecraft.client.gui.screens.worldselection.WorldCreationUiState"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$WorldCreationContext$$Type} from "net.minecraft.client.gui.screens.worldselection.WorldCreationContext"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export class $CreateWorldScreen extends $Screen {
static readonly "MENU_BACKGROUND": $ResourceLocation
static readonly "TAB_HEADER_BACKGROUND": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "FOOTER_SEPARATOR": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

public "onClose"(): void
public static "createTempDataPackDirFromExistingWorld"(arg0: $Path$$Type, arg1: $Minecraft$$Type): $Path
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "repositionElements"(): void
public static "openFresh"(arg0: $Minecraft$$Type, arg1: $Screen$$Type): void
public "getUiState"(): $WorldCreationUiState
public "popScreen"(): void
public static "createFromExisting"(arg0: $Minecraft$$Type, arg1: $Screen$$Type, arg2: $LevelSettings$$Type, arg3: $WorldCreationContext$$Type, arg4: $Path$$Type): $CreateWorldScreen
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
get "uiState"(): $WorldCreationUiState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateWorldScreen$$Type = ($CreateWorldScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateWorldScreen$$Original = $CreateWorldScreen;}
declare module "net.minecraft.client.gui.navigation.ScreenPosition" {
import {$Record} from "java.lang.Record"
import {$ScreenAxis$$Type} from "net.minecraft.client.gui.navigation.ScreenAxis"
import {$ScreenDirection$$Type} from "net.minecraft.client.gui.navigation.ScreenDirection"

export class $ScreenPosition extends $Record {
constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $ScreenAxis$$Type, arg1: integer, arg2: integer): $ScreenPosition
public "x"(): integer
public "y"(): integer
public "step"(arg0: $ScreenDirection$$Type): $ScreenPosition
public "getCoordinate"(arg0: $ScreenAxis$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenPosition$$Type = ({"y"?: integer, "x"?: integer}) | ([y?: integer, x?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenPosition$$Original = $ScreenPosition;}
declare module "net.minecraft.client.gui.components.events.AbstractContainerEventHandler" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$Optional} from "java.util.Optional"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$List} from "java.util.List"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"
import {$ContainerEventHandler$$Interface} from "net.minecraft.client.gui.components.events.ContainerEventHandler"

export class $AbstractContainerEventHandler implements $ContainerEventHandler$$Interface {
constructor()

public "getFocused"(): $GuiEventListener
public "setFocused"(arg0: $GuiEventListener$$Type): void
public "isDragging"(): boolean
public "setDragging"(arg0: boolean): void
public "children"(): $List<($GuiEventListener)>
public "getCurrentFocusPath"(): $ComponentPath
public "getChildAt"(arg0: double, arg1: double): $Optional<($GuiEventListener)>
public "setFocused"(arg0: boolean): void
public "isFocused"(): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "isMouseOver"(arg0: double, arg1: double): boolean
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
get "focused"(): $GuiEventListener
set "focused"(value: $GuiEventListener$$Type)
get "dragging"(): boolean
set "dragging"(value: boolean)
get "currentFocusPath"(): $ComponentPath
set "focused"(value: boolean)
get "focused"(): boolean
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerEventHandler$$Type = ($AbstractContainerEventHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerEventHandler$$Original = $AbstractContainerEventHandler;}
declare module "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen" {
import {$ContainerScreenExtension$$Interface} from "io.wispforest.accessories.pond.ContainerScreenExtension"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$MenuAccess$$Interface} from "net.minecraft.client.gui.screens.inventory.MenuAccess"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$HandledScreenAccessor$$Interface} from "io.wispforest.owo.mixin.ui.layers.HandledScreenAccessor"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$DrawsOnLeft$$Interface} from "dev.shadowsoffire.placebo.util.DrawsOnLeft"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"
import {$AbstractContainerScreenAccessor$$Interface} from "io.wispforest.accessories.mixin.client.AbstractContainerScreenAccessor"

export class $AbstractContainerScreen<T extends $AbstractContainerMenu> extends $Screen implements $MenuAccess$$Interface<(T)>, $HandledScreenAccessor$$Interface, $DrawsOnLeft$$Interface, $AbstractContainerScreenAccessor$$Interface, $ContainerScreenExtension$$Interface {
 "imageWidth": integer
 "leftPos": integer
static readonly "MENU_BACKGROUND": $ResourceLocation
 "draggingItem": $ItemStack
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "clickedSlot": $Slot
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "quickCraftingType": integer
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "isSplittingStack": boolean
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

constructor(arg0: T, arg1: $Inventory$$Type, arg2: $Component$$Type)

public "removed"(): void
public "onClose"(): void
public "tick"(): void
public "renderSlot"(arg0: $GuiGraphics$$Type, arg1: $Slot$$Type): void
public "getMenu"(): T
public "findSlot"(arg0: double, arg1: double): $Slot
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "forceRenderSlot"(context: $GuiGraphics$$Type, slot: $Slot$$Type): void
public "accessories$topPos"(): integer
public "clearDraggingState"(): void
public "owo$getRootX"(): integer
public "getSlotUnderMouse"(): $Slot
public "owo$getRootY"(): integer
public "accessories$recalculateQuickCraftRemaining"(): void
public "accessories$getClickedSlot"(): $Slot
public static "renderSlotHighlight"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public static "renderSlotHighlight"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer): void
public "accessories$leftPos"(): integer
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "handler$bkk000$apothic_attributes$apoth_superMouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double, arg5: $CallbackInfoReturnable$$Type): void
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "getYSize"(): integer
public "getXSize"(): integer
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "isPauseScreen"(): boolean
public "getSlotColor"(arg0: integer): integer
public "recalculateQuickCraftRemaining"(): void
public "accessories$getQuickCraftingType"(): integer
public "accessories$isSplittingStack"(): boolean
public "accessories$getDraggingItem"(): $ItemStack
public static "draw"(arg0: $AbstractContainerScreen$$Type<(never)>, arg1: $GuiGraphics$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: integer): void
public "__ths"(): $AbstractContainerScreen<(never)>
public "drawOnLeft"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer): void
public "drawOnLeft"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($FormattedText$$Type)>, arg2: integer, arg3: integer): void
public "hoverStackOffset"(): integer
public "shouldRenderSlot"(slot: $Slot$$Type): boolean
public "isHovering_Logical"(slot: $Slot$$Type, mouseX: double, mouseY: double): boolean
public "isHovering_Rendering"(slot: $Slot$$Type, mouseX: double, mouseY: double): boolean
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
get "menu"(): T
get "slotUnderMouse"(): $Slot
get "guiLeft"(): integer
get "guiTop"(): integer
get "YSize"(): integer
get "XSize"(): integer
get "pauseScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreen$$Type<T> = ($AbstractContainerScreen<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerScreen$$Original<T> = $AbstractContainerScreen<(T)>;}
declare module "net.minecraft.client.gui.Font$DisplayMode" {
import {$Enum} from "java.lang.Enum"

export class $Font$DisplayMode extends $Enum<($Font$DisplayMode)> {
static readonly "POLYGON_OFFSET": $Font$DisplayMode
static readonly "SEE_THROUGH": $Font$DisplayMode
static readonly "NORMAL": $Font$DisplayMode

public static "values"(): ($Font$DisplayMode)[]
public static "valueOf"(arg0: StringJS): $Font$DisplayMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Font$DisplayMode$$Type = (("normal") | ("see_through") | ("polygon_offset"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Font$DisplayMode$$Original = $Font$DisplayMode;}
declare module "net.minecraft.client.gui.ComponentPath" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ContainerEventHandler$$Type} from "net.minecraft.client.gui.components.events.ContainerEventHandler"

export interface $ComponentPath$$Interface {
}

export class $ComponentPath implements $ComponentPath$$Interface {
 "component"(): $GuiEventListener
static "path"(arg0: $ContainerEventHandler$$Type, arg1: $ComponentPath$$Type): $ComponentPath
static "path"(arg0: $GuiEventListener$$Type, ...arg1: ($ContainerEventHandler$$Type)[]): $ComponentPath
 "applyFocus"(arg0: boolean): void
static "leaf"(arg0: $GuiEventListener$$Type): $ComponentPath
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentPath$$Type = ($ComponentPath);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComponentPath$$Original = $ComponentPath;}
declare module "net.minecraft.client.gui.components.toasts.ToastComponent" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Class$$Type} from "java.lang.Class"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Toast, $Toast$$Type} from "net.minecraft.client.gui.components.toasts.Toast"

export class $ToastComponent {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "addToast"(arg0: $Toast$$Type): void
public "render"(arg0: $GuiGraphics$$Type): void
public "getToast"<T extends $Toast>(arg0: $Class$$Type<(T)>, arg1: any): T
public "getMinecraft"(): $Minecraft
public "getNotificationDisplayTimeMultiplier"(): double
get "minecraft"(): $Minecraft
get "notificationDisplayTimeMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToastComponent$$Type = ($ToastComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToastComponent$$Original = $ToastComponent;}
declare module "net.minecraft.client.gui.font.FontSet" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$FontOption$$Type} from "net.minecraft.client.gui.font.FontOption"
import {$BakedGlyph} from "net.minecraft.client.gui.font.glyphs.BakedGlyph"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$List$$Type} from "java.util.List"
import {$Set$$Type} from "java.util.Set"
import {$GlyphProvider$Conditional$$Type} from "com.mojang.blaze3d.font.GlyphProvider$Conditional"
import {$GlyphInfo, $GlyphInfo$$Type} from "com.mojang.blaze3d.font.GlyphInfo"

export class $FontSet implements $AutoCloseable$$Interface {
constructor(arg0: $TextureManager$$Type, arg1: $ResourceLocation$$Type)

public "name"(): $ResourceLocation
public "close"(): void
public "reload"(arg0: $List$$Type<($GlyphProvider$Conditional$$Type)>, arg1: $Set$$Type<($FontOption$$Type)>): void
public "reload"(arg0: $Set$$Type<($FontOption$$Type)>): void
public "getGlyph"(arg0: integer): $BakedGlyph
public "whiteGlyph"(): $BakedGlyph
public "getRandomGlyph"(arg0: $GlyphInfo$$Type): $BakedGlyph
public "getGlyphInfo"(arg0: integer, arg1: boolean): $GlyphInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontSet$$Type = ($FontSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontSet$$Original = $FontSet;}
declare module "net.minecraft.client.gui.components.toasts.TutorialToast$Icons" {
import {$Enum} from "java.lang.Enum"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $TutorialToast$Icons extends $Enum<($TutorialToast$Icons)> {
static readonly "MOUSE": $TutorialToast$Icons
static readonly "WOODEN_PLANKS": $TutorialToast$Icons
static readonly "MOVEMENT_KEYS": $TutorialToast$Icons
static readonly "RIGHT_CLICK": $TutorialToast$Icons
static readonly "TREE": $TutorialToast$Icons
static readonly "SOCIAL_INTERACTIONS": $TutorialToast$Icons
static readonly "RECIPE_BOOK": $TutorialToast$Icons

public static "values"(): ($TutorialToast$Icons)[]
public static "valueOf"(arg0: StringJS): $TutorialToast$Icons
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TutorialToast$Icons$$Type = (("movement_keys") | ("mouse") | ("tree") | ("recipe_book") | ("wooden_planks") | ("social_interactions") | ("right_click"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TutorialToast$Icons$$Original = $TutorialToast$Icons;}
declare module "net.minecraft.client.gui.components.TabOrderedElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TabOrderedElement$$Interface {
get "tabOrderGroup"(): integer
}

export class $TabOrderedElement implements $TabOrderedElement$$Interface {
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabOrderedElement$$Type = ($TabOrderedElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TabOrderedElement$$Original = $TabOrderedElement;}
declare module "net.minecraft.client.gui.components.DebugScreenOverlay" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$LocalSampleLogger} from "net.minecraft.util.debugchart.LocalSampleLogger"
import {$List} from "java.util.List"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$RemoteDebugSampleType$$Type} from "net.minecraft.util.debugchart.RemoteDebugSampleType"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $DebugScreenOverlay {
constructor(arg0: $Minecraft$$Type)

public "reset"(): void
public "getTickTimeLogger"(): $LocalSampleLogger
public "logRemoteSample"(arg0: (long)[], arg1: $RemoteDebugSampleType$$Type): void
public "getBandwidthLogger"(): $LocalSampleLogger
public "showNetworkCharts"(): boolean
public "showFpsCharts"(): boolean
public "getPingLogger"(): $LocalSampleLogger
public "toggleFpsCharts"(): void
public "toggleOverlay"(): void
public "logFrameDuration"(arg0: long): void
public "render"(arg0: $GuiGraphics$$Type): void
public "showDebugScreen"(): boolean
public "showProfilerChart"(): boolean
public "clearChunkCache"(): void
public "handler$bpc000$entityculling$getLeftText"(callback: $CallbackInfoReturnable$$Type): $List
public "toggleProfilerChart"(): void
public "toggleNetworkCharts"(): void
get "tickTimeLogger"(): $LocalSampleLogger
get "bandwidthLogger"(): $LocalSampleLogger
get "pingLogger"(): $LocalSampleLogger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugScreenOverlay$$Type = ($DebugScreenOverlay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugScreenOverlay$$Original = $DebugScreenOverlay;}
declare module "net.minecraft.client.gui.screens.inventory.EffectRenderingInventoryScreen" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$AbstractContainerScreen, $AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export class $EffectRenderingInventoryScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<(T)> {
 "imageWidth": integer
 "leftPos": integer
static readonly "MENU_BACKGROUND": $ResourceLocation
 "draggingItem": $ItemStack
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "clickedSlot": $Slot
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "quickCraftingType": integer
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "isSplittingStack": boolean
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

constructor(arg0: T, arg1: $Inventory$$Type, arg2: $Component$$Type)

public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "canSeeEffects"(): boolean
public static "draw"(arg0: $AbstractContainerScreen$$Type<(never)>, arg1: $GuiGraphics$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: integer): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectRenderingInventoryScreen$$Type<T> = ($EffectRenderingInventoryScreen<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectRenderingInventoryScreen$$Original<T> = $EffectRenderingInventoryScreen<(T)>;}
declare module "net.minecraft.client.gui.components.Button$Builder" {
import {$Button$CreateNarration, $Button$CreateNarration$$Type} from "net.minecraft.client.gui.components.Button$CreateNarration"
import {$Function$$Type} from "java.util.function.Function"
import {$ButtonBuilderAccessor$$Interface} from "com.aetherteam.cumulus.mixin.mixins.client.accessor.ButtonBuilderAccessor"
import {$Button$OnPress, $Button$OnPress$$Type} from "net.minecraft.client.gui.components.Button$OnPress"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"
import {$Tooltip, $Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"

export class $Button$Builder implements $ButtonBuilderAccessor$$Interface {
constructor(arg0: $Component$$Type, arg1: $Button$OnPress$$Type)

public "size"(arg0: integer, arg1: integer): $Button$Builder
public "bounds"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Button$Builder
public "pos"(arg0: integer, arg1: integer): $Button$Builder
public "build"(): $Button
public "build"(arg0: $Function$$Type<($Button$Builder), ($Button$$Type)>): $Button
public "width"(arg0: integer): $Button$Builder
public "createNarration"(arg0: $Button$CreateNarration$$Type): $Button$Builder
public "cumulus$createNarration"(): $Button$CreateNarration
public "tooltip"(arg0: $Tooltip$$Type): $Button$Builder
public "cumulus$x"(): integer
public "cumulus$y"(): integer
public "cumulus$width"(): integer
public "cumulus$onPress"(): $Button$OnPress
public "cumulus$tooltip"(): $Tooltip
public "cumulus$height"(): integer
public "cumulus$message"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$Builder$$Type = ($Button$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Button$Builder$$Original = $Button$Builder;}
