declare module "com.sammy.malum.client.screen.codex.WidgetDesignType$FillingType" {
import {$Enum} from "java.lang.Enum"

export class $WidgetDesignType$FillingType extends $Enum<($WidgetDesignType$FillingType)> {
static readonly "DARK": $WidgetDesignType$FillingType
static readonly "PAPER": $WidgetDesignType$FillingType

public static "values"(): ($WidgetDesignType$FillingType)[]
public static "valueOf"(arg0: StringJS): $WidgetDesignType$FillingType
public "getId"(): StringJS
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetDesignType$FillingType$$Type = (("paper") | ("dark"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetDesignType$FillingType$$Original = $WidgetDesignType$FillingType;}
declare module "com.sammy.malum.client.renderer.text.SubtractiveTextGlyphRenderTypes" {
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $SubtractiveTextGlyphRenderTypes$$Interface {

(): $RenderType$$Type
}

export class $SubtractiveTextGlyphRenderTypes implements $SubtractiveTextGlyphRenderTypes$$Interface {
 "malum$getSubtractiveType"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubtractiveTextGlyphRenderTypes$$Type = (() => $RenderType$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SubtractiveTextGlyphRenderTypes$$Original = $SubtractiveTextGlyphRenderTypes;}
declare module "com.sammy.malum.client.screen.codex.screens.AbstractMalumCodexScreen" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$List} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $AbstractMalumCodexScreen extends $Screen {
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

public "playSound"(arg0: $Holder$$Type<($SoundEvent)>, arg1: float, arg2: float): void
public "isHovering"(arg0: double, arg1: double, arg2: float, arg3: float, arg4: integer, arg5: integer): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "isPauseScreen"(): boolean
public "setVoidTouched"(arg0: boolean): void
public "captureLateRendering"(): boolean
public "renderLater"(arg0: $Runnable$$Type): void
public "playSweetenedSound"(arg0: $Holder$$Type<($SoundEvent)>, arg1: float, arg2: float): void
public "playSweetenedSound"(arg0: $Holder$$Type<($SoundEvent)>, arg1: float): void
public "playPageFlipSound"(arg0: $Holder$$Type<($SoundEvent)>, arg1: float): void
public "doLateRendering"(): void
public "isVoidTouched"(): boolean
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
get "pauseScreen"(): boolean
set "voidTouched"(value: boolean)
get "voidTouched"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMalumCodexScreen$$Type = ($AbstractMalumCodexScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractMalumCodexScreen$$Original = $AbstractMalumCodexScreen;}
declare module "com.sammy.malum.client.screen.codex.objects.AbstractSelectableEntryObject" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractMalumCodexScreen, $AbstractMalumCodexScreen$$Type} from "com.sammy.malum.client.screen.codex.screens.AbstractMalumCodexScreen"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$GeasEffectType$$Type} from "com.sammy.malum.core.systems.geas.GeasEffectType"
import {$BookObject} from "com.sammy.malum.client.screen.codex.objects.BookObject"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$BookEntry, $BookEntry$$Type} from "com.sammy.malum.client.screen.codex.BookEntry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$EntryReference$$Type} from "com.sammy.malum.client.screen.codex.pages.EntryReference"

export class $AbstractSelectableEntryObject<T extends $AbstractMalumCodexScreen> extends $BookObject<(T)> {
readonly "posX": integer
readonly "entry": $BookEntry
readonly "posY": integer
 "yOffset": float
 "xOffset": float
readonly "width": integer
 "isHoveredOver": boolean
 "iconStack": $ItemStack
 "isSubspace": boolean
static readonly "WIDGET_FADE_TEXTURE": $ResourceLocation
readonly "height": integer

constructor(arg0: $BookEntry$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer)
constructor(arg0: $EntryReference$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "isValid"(arg0: T): boolean
public "setIcon"(arg0: $ItemStack$$Type): $AbstractSelectableEntryObject<(T)>
public "setIcon"(arg0: $Item$$Type): $AbstractSelectableEntryObject<(T)>
public "setIcon"(arg0: $Supplier$$Type<($Item$$Type)>): $AbstractSelectableEntryObject<(T)>
public "setIcon"(arg0: $Holder$$Type<($GeasEffectType)>): $AbstractSelectableEntryObject<(T)>
public "setCondition"(arg0: $Predicate$$Type<(T)>): $AbstractSelectableEntryObject<(T)>
public "gatherTooltip"(arg0: T): $List<($Component)>
public "click"(arg0: T, arg1: double, arg2: double): boolean
public "renderLate"(arg0: T, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void
set "icon"(value: $ItemStack$$Type)
set "icon"(value: $Item$$Type)
set "icon"(value: $Supplier$$Type<($Item$$Type)>)
set "icon"(value: $Holder$$Type<($GeasEffectType)>)
set "condition"(value: $Predicate$$Type<(T)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSelectableEntryObject$$Type<T> = ($AbstractSelectableEntryObject<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSelectableEntryObject$$Original<T> = $AbstractSelectableEntryObject<(T)>;}
declare module "com.sammy.malum.client.screen.codex.screens.progression.AbstractProgressionCodexScreen" {
import {$Collection} from "java.util.Collection"
import {$PlacedEntryAcceptor$$Interface} from "com.sammy.malum.client.screen.codex.PlacedEntryAcceptor"
import {$PlacedBookEntryBuilder$$Type} from "com.sammy.malum.client.screen.codex.PlacedBookEntryBuilder"
import {$Color} from "java.awt.Color"
import {$EntryObjectHandler} from "com.sammy.malum.client.screen.codex.handlers.EntryObjectHandler"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$AbstractMalumCodexScreen} from "com.sammy.malum.client.screen.codex.screens.AbstractMalumCodexScreen"
import {$List} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$BookObject$$Type} from "com.sammy.malum.client.screen.codex.objects.BookObject"
import {$Font} from "net.minecraft.client.gui.Font"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$PlacedBookEntry} from "com.sammy.malum.client.screen.codex.PlacedBookEntry"
import {$Vec2} from "net.minecraft.world.phys.Vec2"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"

export class $AbstractProgressionCodexScreen extends $AbstractMalumCodexScreen implements $PlacedEntryAcceptor$$Interface {
static readonly "MENU_BACKGROUND": $ResourceLocation
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
static readonly "FRAME_TEXTURE": $ResourceLocation
static readonly "FRAME_FADE_TEXTURE": $ResourceLocation
static readonly "BOOK_HEIGHT": integer
static readonly "FOOTER_SEPARATOR": $ResourceLocation
readonly "progressionObjects": $EntryObjectHandler
readonly "entries": $List<($PlacedBookEntry)>
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
static readonly "BOOK_WIDTH": integer
static readonly "BOOK_INSIDE_WIDTH": integer
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "BOOK_INSIDE_HEIGHT": integer
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

public "init"(): void
public "getEntries"(): $Collection
public "onClose"(): void
public "tick"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "isHovering"(arg0: double, arg1: double, arg2: float, arg3: float, arg4: integer, arg5: integer): boolean
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "renderBackground"(arg0: $PoseStack$$Type): void
public "renderBackground"(arg0: $PoseStack$$Type, arg1: $ResourceLocation$$Type, arg2: float, arg3: float): void
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "setupObjects"(): void
public "clampOffsets"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): $Vec2
public "getOutlineColor"(): $Color
public "correctOOBB"(): void
public "getVoidFadeoutDelta"(): float
public "constrictEntryRendering"(): void
public "getVoidFadeoutDuration"(): integer
public "setupEntries"(): void
public "getInsideTop"(): integer
public "getInsideLeft"(): integer
public "isInView"(arg0: double, arg1: double): boolean
public "renderFade"(arg0: $PoseStack$$Type): void
public "faceObject"(arg0: $BookObject$$Type<(never)>): void
public "faceOrigin"(): void
public "addEntry"(arg0: StringJS, arg1: integer, arg2: integer): void
public "addEntry"(arg0: StringJS, arg1: integer, arg2: integer, arg3: $Consumer$$Type<($PlacedBookEntryBuilder)>): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
get "guiLeft"(): integer
get "guiTop"(): integer
get "upObjects"(): void
get "outlineColor"(): $Color
get "voidFadeoutDelta"(): float
get "voidFadeoutDuration"(): integer
get "upEntries"(): void
get "insideTop"(): integer
get "insideLeft"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractProgressionCodexScreen$$Type = ($AbstractProgressionCodexScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractProgressionCodexScreen$$Original = $AbstractProgressionCodexScreen;}
declare module "com.sammy.malum.client.screen.codex.handlers.EntryObjectHandler" {
import {$PlacedBookEntry$$Type} from "com.sammy.malum.client.screen.codex.PlacedBookEntry"
import {$ProgressionEntryObject} from "com.sammy.malum.client.screen.codex.objects.progression.ProgressionEntryObject"
import {$List$$Type} from "java.util.List"
import {$BookObjectHandler} from "com.sammy.malum.client.screen.codex.handlers.BookObjectHandler"
import {$AbstractProgressionCodexScreen, $AbstractProgressionCodexScreen$$Type} from "com.sammy.malum.client.screen.codex.screens.progression.AbstractProgressionCodexScreen"

export class $EntryObjectHandler extends $BookObjectHandler<($AbstractProgressionCodexScreen)> {
constructor()

public "getObject"(arg0: StringJS): $ProgressionEntryObject
public "getObject"(arg0: $PlacedBookEntry$$Type): $ProgressionEntryObject
public "setupEntryObjects"(arg0: $AbstractProgressionCodexScreen$$Type, arg1: $List$$Type<($PlacedBookEntry$$Type)>): void
public "setupEntryObjects"(arg0: $AbstractProgressionCodexScreen$$Type): void
public "getOriginObject"(): $ProgressionEntryObject
set "upEntryObjects"(value: $AbstractProgressionCodexScreen$$Type)
get "originObject"(): $ProgressionEntryObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryObjectHandler$$Type = ($EntryObjectHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntryObjectHandler$$Original = $EntryObjectHandler;}
declare module "com.sammy.malum.client.screen.codex.PlacedBookEntry$BookEntryWidgetPlacementData" {
import {$ProgressionEntryObject, $ProgressionEntryObject$$Type} from "com.sammy.malum.client.screen.codex.objects.progression.ProgressionEntryObject"
import {$PlacedBookEntry$WidgetSupplier, $PlacedBookEntry$WidgetSupplier$$Type} from "com.sammy.malum.client.screen.codex.PlacedBookEntry$WidgetSupplier"
import {$Record} from "java.lang.Record"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $PlacedBookEntry$BookEntryWidgetPlacementData extends $Record {
constructor(xOffset: integer, yOffset: integer, widgetSupplier: $PlacedBookEntry$WidgetSupplier$$Type, widgetConfig: $Consumer$$Type<($ProgressionEntryObject)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "xOffset"(): integer
public "yOffset"(): integer
public "widgetConfig"(): $Consumer<($ProgressionEntryObject)>
public "widgetSupplier"(): $PlacedBookEntry$WidgetSupplier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacedBookEntry$BookEntryWidgetPlacementData$$Type = ({"widgetConfig"?: $Consumer$$Type<($ProgressionEntryObject$$Type)>, "yOffset"?: integer, "xOffset"?: integer, "widgetSupplier"?: $PlacedBookEntry$WidgetSupplier$$Type}) | ([widgetConfig?: $Consumer$$Type<($ProgressionEntryObject$$Type)>, yOffset?: integer, xOffset?: integer, widgetSupplier?: $PlacedBookEntry$WidgetSupplier$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacedBookEntry$BookEntryWidgetPlacementData$$Original = $PlacedBookEntry$BookEntryWidgetPlacementData;}
declare module "com.sammy.malum.client.screen.codex.objects.progression.ProgressionEntryObject" {
import {$WidgetDesign, $WidgetDesign$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesign"
import {$AbstractSelectableEntryObject} from "com.sammy.malum.client.screen.codex.objects.AbstractSelectableEntryObject"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$WidgetDesignType$FrameType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType$FrameType"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$WidgetDesignType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType"
import {$AbstractMalumCodexScreen$$Type} from "com.sammy.malum.client.screen.codex.screens.AbstractMalumCodexScreen"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$AbstractProgressionCodexScreen, $AbstractProgressionCodexScreen$$Type} from "com.sammy.malum.client.screen.codex.screens.progression.AbstractProgressionCodexScreen"
import {$Int2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookEntry, $BookEntry$$Type} from "com.sammy.malum.client.screen.codex.BookEntry"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$WidgetDesignType$FillingType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType$FillingType"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export class $ProgressionEntryObject extends $AbstractSelectableEntryObject<($AbstractProgressionCodexScreen)> {
 "yOffset": float
 "xOffset": float
 "isSubspace": boolean
readonly "posX": integer
readonly "entry": $BookEntry
readonly "posY": integer
 "design": $WidgetDesign
readonly "width": integer
 "isHoveredOver": boolean
 "iconStack": $ItemStack
static readonly "WIDGET_FADE_TEXTURE": $ResourceLocation
 "isOrigin": boolean
readonly "height": integer

constructor(arg0: $BookEntry$$Type, arg1: integer, arg2: integer)

public "tick"(arg0: $AbstractMalumCodexScreen$$Type, arg1: double, arg2: double): void
public "tick"(arg0: $AbstractProgressionCodexScreen$$Type, arg1: double, arg2: double): void
public "setIcon"(arg0: $ItemStack$$Type): $AbstractSelectableEntryObject
public "setIcon"(arg0: $Holder$$Type): $AbstractSelectableEntryObject
public "setIcon"(arg0: $Supplier$$Type<($Item$$Type)>): $ProgressionEntryObject
public "setIcon"(arg0: $Item$$Type): $ProgressionEntryObject
public "render"(arg0: $AbstractProgressionCodexScreen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void
public "render"(arg0: $AbstractMalumCodexScreen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void
public "getCenterX"(): integer
public "renderOutline"(arg0: $PoseStack$$Type, arg1: float, arg2: float, arg3: $Function$$Type<($WidgetDesignType), ($ResourceLocation$$Type)>, arg4: $Int2ObjectFunction$$Type<($Color$$Type)>): void
public "setCondition"(arg0: $Predicate$$Type<($AbstractProgressionCodexScreen)>): $ProgressionEntryObject
public "gatherTooltip"(arg0: $AbstractMalumCodexScreen$$Type): $List
public "gatherTooltip"(arg0: $AbstractProgressionCodexScreen$$Type): $List<($Component)>
public "applyTransforms"(arg0: $AbstractProgressionCodexScreen$$Type, arg1: $PoseStack$$Type, arg2: integer, arg3: integer, arg4: float): void
public "applyTransforms"(arg0: $AbstractMalumCodexScreen$$Type, arg1: $PoseStack$$Type, arg2: integer, arg3: integer, arg4: float): void
public "getSpiritColor"(arg0: integer): $Color
public "getCenterY"(): integer
public "setOrigin"(): $ProgressionEntryObject
public "isInView"(arg0: $AbstractMalumCodexScreen$$Type): boolean
public "isInView"(arg0: $AbstractProgressionCodexScreen$$Type): boolean
public "setDesign"(arg0: $WidgetDesignType$$Type, arg1: $WidgetDesignType$FrameType$$Type, arg2: $WidgetDesignType$FillingType$$Type): $ProgressionEntryObject
public "setDesign"(arg0: $WidgetDesign$$Type): $ProgressionEntryObject
set "icon"(value: $ItemStack$$Type)
set "icon"(value: $Holder$$Type)
set "icon"(value: $Supplier$$Type<($Item$$Type)>)
set "icon"(value: $Item$$Type)
get "centerX"(): integer
set "condition"(value: $Predicate$$Type<($AbstractProgressionCodexScreen)>)
get "centerY"(): integer
get "origin"(): $ProgressionEntryObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressionEntryObject$$Type = ($ProgressionEntryObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressionEntryObject$$Original = $ProgressionEntryObject;}
declare module "com.sammy.malum.client.screen.codex.pages.BookPage" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$CodexEntryScreen$$Type} from "com.sammy.malum.client.screen.codex.screens.CodexEntryScreen"

export class $BookPage {
static "isVoidThemed": boolean
static readonly "TEXT": StringJS
static readonly "HEADLINE": StringJS

constructor(arg0: $ResourceLocation$$Type)

public "isValid"(): boolean
public "getBackground"(arg0: boolean): $ResourceLocation
public "render"(arg0: $CodexEntryScreen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: boolean): void
public static "getRecipeInfoHeadlineKey"(arg0: StringJS): StringJS
public static "getRecipeInfoKey"(arg0: StringJS): StringJS
public "click"(arg0: $CodexEntryScreen$$Type, arg1: integer, arg2: integer, arg3: double, arg4: double, arg5: double, arg6: double): void
public "renderLate"(arg0: $CodexEntryScreen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: boolean): void
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPage$$Type = ($BookPage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookPage$$Original = $BookPage;}
declare module "com.sammy.malum.client.screen.codex.WidgetDesignType" {
import {$WidgetDesign} from "com.sammy.malum.client.screen.codex.WidgetDesign"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$WidgetDesignType$FrameType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType$FrameType"
import {$WidgetDesignType$FillingType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType$FillingType"
import {$WidgetDesignType$WidgetDesignBuilder$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType$WidgetDesignBuilder"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $WidgetDesignType {
static readonly "TOTEMIC": $WidgetDesignType
static readonly "SMALL": $WidgetDesignType
static readonly "GRAND": $WidgetDesignType
static readonly "SUBENTRY": $WidgetDesignType
static readonly "GILDED": $WidgetDesignType
static readonly "EMPTY": $WidgetDesignType
static readonly "DEFAULT": $WidgetDesignType

public "getId"(): StringJS
public "getGlowTexture"(): $ResourceLocation
public "createDesign"(arg0: $WidgetDesignType$FrameType$$Type, arg1: $WidgetDesignType$FillingType$$Type): $WidgetDesign
public "createDesign"(arg0: $Consumer$$Type<($WidgetDesignType$WidgetDesignBuilder)>): $WidgetDesign
public "getOutlineTexture"(): $ResourceLocation
get "id"(): StringJS
get "glowTexture"(): $ResourceLocation
get "outlineTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetDesignType$$Type = ($WidgetDesignType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetDesignType$$Original = $WidgetDesignType;}
declare module "com.sammy.malum.client.screen.codex.handlers.BookObjectHandler" {
import {$ArrayList} from "java.util.ArrayList"
import {$Collection$$Type} from "java.util.Collection"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractMalumCodexScreen, $AbstractMalumCodexScreen$$Type} from "com.sammy.malum.client.screen.codex.screens.AbstractMalumCodexScreen"
import {$BookObject, $BookObject$$Type} from "com.sammy.malum.client.screen.codex.objects.BookObject"

export class $BookObjectHandler<T extends $AbstractMalumCodexScreen> {
constructor()

public "remove"(arg0: $BookObject$$Type<(T)>): void
public "get"(arg0: integer): $BookObject<(T)>
public "isEmpty"(): boolean
public "add"(arg0: $BookObject$$Type<(T)>): void
public "addAll"(arg0: $Collection$$Type<($BookObject$$Type<(T)>)>): void
public "getFirst"(): $BookObject<(T)>
public "tick"(arg0: T, arg1: double, arg2: double): void
public "tick"(arg0: T): void
public "renderObjectsLate"(arg0: T, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void
public "hasVisibleObject"(arg0: T): boolean
public "renderObject"(arg0: T, arg1: $GuiGraphics$$Type, arg2: $BookObject$$Type<(T)>, arg3: integer, arg4: integer, arg5: float): void
public "renderObjects"(arg0: T, arg1: $GuiGraphics$$Type, arg2: float, arg3: float, arg4: integer, arg5: integer, arg6: float): void
public "click"(arg0: T, arg1: double, arg2: double): boolean
public "getObjects"(): $ArrayList<($BookObject<(T)>)>
get "empty"(): boolean
get "first"(): $BookObject<(T)>
get "objects"(): $ArrayList<($BookObject<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookObjectHandler$$Type<T> = ($BookObjectHandler<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookObjectHandler$$Original<T> = $BookObjectHandler<(T)>;}
declare module "com.sammy.malum.client.screen.codex.pages.EntryReference" {
import {$BookEntryBuilder$$Type} from "com.sammy.malum.client.screen.codex.BookEntryBuilder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BookEntry, $BookEntry$$Type} from "com.sammy.malum.client.screen.codex.BookEntry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export class $EntryReference {
readonly "entry": $BookEntry
readonly "icon": $ItemStack

constructor(arg0: $Supplier$$Type<($Item$$Type)>, arg1: $BookEntryBuilder$$Type)
constructor(arg0: $Item$$Type, arg1: $BookEntryBuilder$$Type)
constructor(arg0: $Supplier$$Type<($Item$$Type)>, arg1: $BookEntry$$Type)
constructor(arg0: $ItemStack$$Type, arg1: $BookEntryBuilder$$Type)
constructor(arg0: $Item$$Type, arg1: $BookEntry$$Type)
constructor(arg0: $ItemStack$$Type, arg1: $BookEntry$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryReference$$Type = ($EntryReference);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntryReference$$Original = $EntryReference;}
declare module "com.sammy.malum.client.screen.codex.PlacedBookEntry" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$BookPage, $BookPage$$Type} from "com.sammy.malum.client.screen.codex.pages.BookPage"
import {$PlacedBookEntry$BookEntryWidgetPlacementData, $PlacedBookEntry$BookEntryWidgetPlacementData$$Type} from "com.sammy.malum.client.screen.codex.PlacedBookEntry$BookEntryWidgetPlacementData"
import {$BookEntry} from "com.sammy.malum.client.screen.codex.BookEntry"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$EntryReference, $EntryReference$$Type} from "com.sammy.malum.client.screen.codex.pages.EntryReference"
import {$SpiritLike, $SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export class $PlacedBookEntry extends $BookEntry {
readonly "isFragment": boolean
readonly "identifier": StringJS
static readonly "AFTER_VOID_READER": $BooleanSupplier
readonly "references": $ImmutableList<($EntryReference)>
readonly "subtitleStyle": $UnaryOperator<($Style)>
readonly "condition": $BooleanSupplier
readonly "pages": $ImmutableList<($BookPage)>
readonly "isVoid": boolean
readonly "associatedSpirit": $SpiritLike
static readonly "AFTER_UMBRAL_CRYSTAL": $BooleanSupplier
readonly "titleStyle": $UnaryOperator<($Style)>
static readonly "AFTER_SOME_TIME": $BooleanSupplier

constructor(arg0: StringJS, arg1: boolean, arg2: $PlacedBookEntry$BookEntryWidgetPlacementData$$Type, arg3: $ImmutableList$$Type<($BookPage$$Type)>, arg4: $ImmutableList$$Type<($EntryReference$$Type)>, arg5: $BooleanSupplier$$Type, arg6: $SpiritLike$$Type, arg7: boolean, arg8: $UnaryOperator$$Type<($Style)>, arg9: $UnaryOperator$$Type<($Style)>, arg10: boolean)

public "getWidgetData"(): $PlacedBookEntry$BookEntryWidgetPlacementData
get "widgetData"(): $PlacedBookEntry$BookEntryWidgetPlacementData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacedBookEntry$$Type = ($PlacedBookEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacedBookEntry$$Original = $PlacedBookEntry;}
declare module "com.sammy.malum.client.screen.codex.WidgetDesignType$WidgetDesignBuilder" {
import {$WidgetDesign} from "com.sammy.malum.client.screen.codex.WidgetDesign"
import {$WidgetDesignType$FrameType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType$FrameType"
import {$WidgetDesignType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType"
import {$WidgetDesignType$FillingType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType$FillingType"

export class $WidgetDesignType$WidgetDesignBuilder {
constructor(arg0: $WidgetDesignType$$Type)

public "build"(): $WidgetDesign
public "withFilling"(arg0: $WidgetDesignType$FillingType$$Type): $WidgetDesignType$WidgetDesignBuilder
public "withFrame"(arg0: $WidgetDesignType$FrameType$$Type): $WidgetDesignType$WidgetDesignBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetDesignType$WidgetDesignBuilder$$Type = ($WidgetDesignType$WidgetDesignBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetDesignType$WidgetDesignBuilder$$Original = $WidgetDesignType$WidgetDesignBuilder;}
declare module "com.sammy.malum.client.screen.codex.screens.CodexEntryScreen" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BookEntry$$Type} from "com.sammy.malum.client.screen.codex.BookEntry"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractMalumCodexScreen, $AbstractMalumCodexScreen$$Type} from "com.sammy.malum.client.screen.codex.screens.AbstractMalumCodexScreen"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$List} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"

export class $CodexEntryScreen extends $AbstractMalumCodexScreen {
static readonly "MENU_BACKGROUND": $ResourceLocation
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
static readonly "BOOK_TEXTURE": $ResourceLocation
static readonly "FOOTER_SEPARATOR": $ResourceLocation
static "textJump": float
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
static readonly "ITEM_SOCKET": $ResourceLocation
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

constructor(arg0: $BookEntry$$Type)
constructor(arg0: $AbstractMalumCodexScreen$$Type, arg1: $BookEntry$$Type)

public "close"(arg0: boolean): void
public "onClose"(): void
public "tick"(): void
public static "openScreen"(arg0: $BookEntry$$Type): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "nextPage"(): void
public "getSweetenerPitch"(): float
public "previousPage"(arg0: boolean): void
public "hasNextPage"(): boolean
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
get "guiLeft"(): integer
get "guiTop"(): integer
get "sweetenerPitch"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodexEntryScreen$$Type = ($CodexEntryScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CodexEntryScreen$$Original = $CodexEntryScreen;}
declare module "com.sammy.malum.client.screen.codex.PlacedBookEntryBuilder" {
import {$BookEntryBuilder} from "com.sammy.malum.client.screen.codex.BookEntryBuilder"
import {$PlacedBookEntry} from "com.sammy.malum.client.screen.codex.PlacedBookEntry"
import {$WidgetDesignType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType"
import {$ProgressionEntryObject$$Type} from "com.sammy.malum.client.screen.codex.objects.progression.ProgressionEntryObject"
import {$PlacedBookEntry$WidgetSupplier$$Type} from "com.sammy.malum.client.screen.codex.PlacedBookEntry$WidgetSupplier"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $PlacedBookEntryBuilder extends $BookEntryBuilder {
static readonly "SPACING": integer

constructor(arg0: StringJS, arg1: integer, arg2: integer)

public "build"(): $PlacedBookEntry
public "withTraceFragmentEntry"(): $PlacedBookEntryBuilder
public "withEmptyFragmentEntry"(arg0: $WidgetDesignType$$Type): $PlacedBookEntryBuilder
public "configureWidget"(arg0: $Consumer$$Type<($ProgressionEntryObject)>): $PlacedBookEntryBuilder
public "setWidgetSupplier"(arg0: $PlacedBookEntry$WidgetSupplier$$Type): $PlacedBookEntryBuilder
public "withFragmentEntry"(arg0: $Consumer$$Type<($PlacedBookEntryBuilder)>): $PlacedBookEntryBuilder
public "hasFragment"(): boolean
public "buildFragment"(): $PlacedBookEntry
set "widgetSupplier"(value: $PlacedBookEntry$WidgetSupplier$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacedBookEntryBuilder$$Type = ($PlacedBookEntryBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacedBookEntryBuilder$$Original = $PlacedBookEntryBuilder;}
declare module "com.sammy.malum.client.screen.codex.objects.BookObject" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractMalumCodexScreen, $AbstractMalumCodexScreen$$Type} from "com.sammy.malum.client.screen.codex.screens.AbstractMalumCodexScreen"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"

export class $BookObject<T extends $AbstractMalumCodexScreen> {
readonly "posX": integer
readonly "posY": integer
 "yOffset": float
 "xOffset": float
readonly "width": integer
 "isHoveredOver": boolean
 "isSubspace": boolean
static readonly "WIDGET_FADE_TEXTURE": $ResourceLocation
readonly "height": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "exit"(arg0: T): void
public "tick"(arg0: T, arg1: double, arg2: double): void
public "isValid"(arg0: T): boolean
public "render"(arg0: T, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void
public "isHovering"(arg0: T, arg1: double, arg2: double): boolean
public "getOffsetYPosition"(): integer
public "getOffsetXPosition"(): integer
public "applyTransforms"(arg0: T, arg1: $PoseStack$$Type, arg2: integer, arg3: integer, arg4: float): void
public "click"(arg0: T, arg1: double, arg2: double): boolean
public "hasPriority"(arg0: T): boolean
public "isInView"(arg0: T): boolean
public "renderLate"(arg0: T, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void
public "tryClick"(arg0: T, arg1: double, arg2: double): boolean
get "offsetYPosition"(): integer
get "offsetXPosition"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookObject$$Type<T> = ($BookObject<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookObject$$Original<T> = $BookObject<(T)>;}
declare module "com.sammy.malum.client.screen.codex.BookEntryBuilder" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$BookPage$$Type} from "com.sammy.malum.client.screen.codex.pages.BookPage"
import {$BookEntry} from "com.sammy.malum.client.screen.codex.BookEntry"
import {$Style$$Type} from "net.minecraft.network.chat.Style"
import {$SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$EntryReference$$Type} from "com.sammy.malum.client.screen.codex.pages.EntryReference"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export class $BookEntryBuilder {
constructor(arg0: StringJS)

public "build"(): $BookEntry
public "addReference"(arg0: $EntryReference$$Type): $BookEntryBuilder
public "setAssociatedSpirit"(arg0: $SpiritLike$$Type): $BookEntryBuilder
public "addPage"(arg0: $BookPage$$Type): $BookEntryBuilder
public "setEntryCondition"(arg0: $BooleanSupplier$$Type): $BookEntryBuilder
public "afterVoidReader"(): $BookEntryBuilder
public "withSubtitleStyle"(arg0: $UnaryOperator$$Type<($Style)>): $BookEntryBuilder
public "afterUmbralCrystal"(): $BookEntryBuilder
public "afterSomeTime"(): $BookEntryBuilder
public "withTitleStyle"(arg0: $UnaryOperator$$Type<($Style)>): $BookEntryBuilder
public "disableTooltip"(): $BookEntryBuilder
set "associatedSpirit"(value: $SpiritLike$$Type)
set "entryCondition"(value: $BooleanSupplier$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookEntryBuilder$$Type = ($BookEntryBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookEntryBuilder$$Original = $BookEntryBuilder;}
declare module "com.sammy.malum.client.screen.codex.BookEntry" {
import {$BookEntryBuilder} from "com.sammy.malum.client.screen.codex.BookEntryBuilder"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$BookPage, $BookPage$$Type} from "com.sammy.malum.client.screen.codex.pages.BookPage"
import {$PlacedBookEntryBuilder} from "com.sammy.malum.client.screen.codex.PlacedBookEntryBuilder"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$EntryReference, $EntryReference$$Type} from "com.sammy.malum.client.screen.codex.pages.EntryReference"
import {$SpiritLike, $SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export class $BookEntry {
readonly "isFragment": boolean
readonly "identifier": StringJS
static readonly "AFTER_VOID_READER": $BooleanSupplier
readonly "references": $ImmutableList<($EntryReference)>
readonly "subtitleStyle": $UnaryOperator<($Style)>
readonly "condition": $BooleanSupplier
readonly "pages": $ImmutableList<($BookPage)>
readonly "isVoid": boolean
readonly "associatedSpirit": $SpiritLike
static readonly "AFTER_UMBRAL_CRYSTAL": $BooleanSupplier
readonly "titleStyle": $UnaryOperator<($Style)>
static readonly "AFTER_SOME_TIME": $BooleanSupplier

constructor(arg0: StringJS, arg1: boolean, arg2: $ImmutableList$$Type<($BookPage$$Type)>, arg3: $ImmutableList$$Type<($EntryReference$$Type)>, arg4: $BooleanSupplier$$Type, arg5: $SpiritLike$$Type, arg6: boolean, arg7: $UnaryOperator$$Type<($Style)>, arg8: $UnaryOperator$$Type<($Style)>, arg9: boolean)

public static "create"(arg0: StringJS, arg1: integer, arg2: integer): $PlacedBookEntryBuilder
public static "create"(arg0: StringJS): $BookEntryBuilder
public "hasContents"(): boolean
public "hasTooltip"(): boolean
public "translationKey"(): StringJS
public "shouldShow"(): boolean
public "descriptionTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookEntry$$Type = ($BookEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookEntry$$Original = $BookEntry;}
declare module "com.sammy.malum.client.screen.codex.PlacedEntryAcceptor" {
import {$PlacedBookEntry, $PlacedBookEntry$$Type} from "com.sammy.malum.client.screen.codex.PlacedBookEntry"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$PlacedBookEntryBuilder$$Type} from "com.sammy.malum.client.screen.codex.PlacedBookEntryBuilder"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $PlacedEntryAcceptor$$Interface {

(): $Collection$$Type<($PlacedBookEntry$$Type)>
get "entries"(): $Collection<($PlacedBookEntry)>
}

export class $PlacedEntryAcceptor implements $PlacedEntryAcceptor$$Interface {
 "addEntry"(arg0: StringJS, arg1: integer, arg2: integer): void
 "addEntry"(arg0: StringJS, arg1: integer, arg2: integer, arg3: $Consumer$$Type<($PlacedBookEntryBuilder)>): void
 "getEntries"(): $Collection<($PlacedBookEntry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacedEntryAcceptor$$Type = (() => $Collection$$Type<($PlacedBookEntry$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacedEntryAcceptor$$Original = $PlacedEntryAcceptor;}
declare module "com.sammy.malum.client.screen.codex.WidgetDesign" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$WidgetDesignType$FrameType, $WidgetDesignType$FrameType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType$FrameType"
import {$Optional} from "java.util.Optional"
import {$WidgetDesignType, $WidgetDesignType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType"
import {$WidgetDesignType$FillingType, $WidgetDesignType$FillingType$$Type} from "com.sammy.malum.client.screen.codex.WidgetDesignType$FillingType"

export class $WidgetDesign {
constructor(arg0: $WidgetDesignType$$Type, arg1: $WidgetDesignType$FrameType$$Type, arg2: $WidgetDesignType$FillingType$$Type, arg3: $ResourceLocation$$Type, arg4: $ResourceLocation$$Type)
constructor(arg0: $WidgetDesignType$$Type, arg1: $WidgetDesignType$FrameType$$Type, arg2: $WidgetDesignType$FillingType$$Type)

public "getFrame"(): $WidgetDesignType$FrameType
public "getFrameTexture"(): $Optional<($ResourceLocation)>
public "getDesignType"(): $WidgetDesignType
public "getFillingTexture"(): $Optional<($ResourceLocation)>
public "getFilling"(): $WidgetDesignType$FillingType
get "frame"(): $WidgetDesignType$FrameType
get "frameTexture"(): $Optional<($ResourceLocation)>
get "designType"(): $WidgetDesignType
get "fillingTexture"(): $Optional<($ResourceLocation)>
get "filling"(): $WidgetDesignType$FillingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetDesign$$Type = ($WidgetDesign);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetDesign$$Original = $WidgetDesign;}
declare module "com.sammy.malum.client.screen.codex.PlacedBookEntry$WidgetSupplier" {
import {$BookEntry, $BookEntry$$Type} from "com.sammy.malum.client.screen.codex.BookEntry"
import {$ProgressionEntryObject, $ProgressionEntryObject$$Type} from "com.sammy.malum.client.screen.codex.objects.progression.ProgressionEntryObject"

export interface $PlacedBookEntry$WidgetSupplier$$Interface {

(arg0: $BookEntry, arg1: integer, arg2: integer): $ProgressionEntryObject$$Type
}

export class $PlacedBookEntry$WidgetSupplier implements $PlacedBookEntry$WidgetSupplier$$Interface {
 "getBookObject"(arg0: $BookEntry$$Type, arg1: integer, arg2: integer): $ProgressionEntryObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacedBookEntry$WidgetSupplier$$Type = ((arg0: $BookEntry, arg1: integer, arg2: integer) => $ProgressionEntryObject$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacedBookEntry$WidgetSupplier$$Original = $PlacedBookEntry$WidgetSupplier;}
declare module "com.sammy.malum.client.screen.codex.WidgetDesignType$FrameType" {
import {$Enum} from "java.lang.Enum"

export class $WidgetDesignType$FrameType extends $Enum<($WidgetDesignType$FrameType)> {
static readonly "SOULWOOD": $WidgetDesignType$FrameType
static readonly "RUNEWOOD": $WidgetDesignType$FrameType
static readonly "WITHERED": $WidgetDesignType$FrameType

public static "values"(): ($WidgetDesignType$FrameType)[]
public static "valueOf"(arg0: StringJS): $WidgetDesignType$FrameType
public "getId"(): StringJS
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetDesignType$FrameType$$Type = (("runewood") | ("soulwood") | ("withered"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetDesignType$FrameType$$Original = $WidgetDesignType$FrameType;}
