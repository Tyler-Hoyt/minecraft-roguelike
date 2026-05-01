declare module "vazkii.patchouli.client.book.EntryDisplayState" {
import {$Enum} from "java.lang.Enum"

export class $EntryDisplayState extends $Enum<($EntryDisplayState)> {
static readonly "UNREAD": $EntryDisplayState
static readonly "COMPLETED": $EntryDisplayState
readonly "u": integer
readonly "hasIcon": boolean
readonly "hasAnimation": boolean
static readonly "DEFAULT_TYPE": $EntryDisplayState
static readonly "PENDING": $EntryDisplayState
readonly "showInInventory": boolean
static readonly "NEUTRAL": $EntryDisplayState

public static "values"(): ($EntryDisplayState)[]
public static "valueOf"(arg0: StringJS): $EntryDisplayState
public static "fromOrdinal"(arg0: integer): $EntryDisplayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryDisplayState$$Type = (("unread") | ("pending") | ("neutral") | ("completed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntryDisplayState$$Original = $EntryDisplayState;}
declare module "vazkii.patchouli.client.book.BookContents" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemStackUtil$StackWrapper$$Type} from "vazkii.patchouli.common.util.ItemStackUtil$StackWrapper"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$BookCategory, $BookCategory$$Type} from "vazkii.patchouli.client.book.BookCategory"
import {$ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$GuiBook, $GuiBook$$Type} from "vazkii.patchouli.client.book.gui.GuiBook"
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier} from "java.util.function.Supplier"
import {$Deque} from "java.util.Deque"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$AbstractReadStateHolder} from "vazkii.patchouli.client.book.AbstractReadStateHolder"
import {$Book$$Type} from "vazkii.patchouli.common.book.Book"
import {$BookTemplate} from "vazkii.patchouli.client.book.template.BookTemplate"

export class $BookContents extends $AbstractReadStateHolder {
readonly "pamphletCategory": $BookCategory
readonly "entries": $Map<($ResourceLocation), ($BookEntry)>
 "currentGui": $GuiBook
readonly "categories": $Map<($ResourceLocation), ($BookCategory)>
readonly "guiStack": $Deque<($GuiBook)>
static readonly "addonTemplates": $Map<($ResourceLocation), ($Supplier<($BookTemplate)>)>

constructor(arg0: $Book$$Type, arg1: $ImmutableMap$$Type<($ResourceLocation$$Type), ($BookCategory$$Type)>, arg2: $ImmutableMap$$Type<($ResourceLocation$$Type), ($BookEntry$$Type)>, arg3: $ImmutableMap$$Type<($ItemStackUtil$StackWrapper$$Type), ($Pair$$Type<($BookEntry$$Type), (integer)>)>, arg4: $BookCategory$$Type)

public static "empty"(arg0: $Book$$Type, arg1: $Exception$$Type): $BookContents
public "getException"(): $Exception
public "isErrored"(): boolean
public "setTopEntry"(arg0: $ResourceLocation$$Type, arg1: integer): void
public "getEntryForStack"(arg0: $ItemStack$$Type): $Pair<($BookEntry), (integer)>
public "checkValidCurrentEntry"(): void
public "getCurrentGui"(): $GuiBook
public "openLexiconGui"(arg0: $GuiBook$$Type, arg1: boolean): void
get "exception"(): $Exception
get "errored"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContents$$Type = ($BookContents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookContents$$Original = $BookContents;}
declare module "vazkii.patchouli.client.book.template.TemplateInclusion" {
import {$IVariableProvider, $IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IComponentProcessor$$Type} from "vazkii.patchouli.api.IComponentProcessor"
import {$JsonObject} from "com.google.gson.JsonObject"
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $TemplateInclusion {
 "template": StringJS
 "as": StringJS
 "x": integer
 "y": integer
 "localBindings": $JsonObject

constructor()

public "process"(arg0: $Level$$Type, arg1: $IComponentProcessor$$Type): void
public "wrapProvider"(arg0: $IVariableProvider$$Type): $IVariableProvider
public "qualifyName"(arg0: StringJS): StringJS
public "isUpreference"(arg0: $IVariable$$Type): boolean
public "upperMerge"(arg0: $TemplateInclusion$$Type): void
public "attemptVariableLookup"(arg0: StringJS, arg1: $HolderLookup$Provider$$Type): $IVariable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateInclusion$$Type = ($TemplateInclusion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemplateInclusion$$Original = $TemplateInclusion;}
declare module "vazkii.patchouli.client.book.template.BookTemplate" {
import {$BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BookPage$$Type} from "vazkii.patchouli.client.book.BookPage"
import {$TemplateComponent, $TemplateComponent$$Type} from "vazkii.patchouli.client.book.template.TemplateComponent"
import {$HashMap} from "java.util.HashMap"
import {$TemplateInclusion$$Type} from "vazkii.patchouli.client.book.template.TemplateInclusion"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$GuiBookEntry$$Type} from "vazkii.patchouli.client.book.gui.GuiBookEntry"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $BookTemplate {
static readonly "componentTypes": $HashMap<($ResourceLocation), ($Class<($TemplateComponent)>)>

constructor()

public "compile"(arg0: $Level$$Type, arg1: $BookContentsBuilder$$Type, arg2: $IVariableProvider$$Type): void
public "build"(arg0: $BookContentsBuilder$$Type, arg1: $BookPage$$Type, arg2: $BookEntry$$Type, arg3: integer): void
public "render"(arg0: $GuiGraphics$$Type, arg1: $BookPage$$Type, arg2: integer, arg3: integer, arg4: float): void
public static "registerComponent"(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<($TemplateComponent$$Type)>): void
public "mouseClicked"(arg0: $BookPage$$Type, arg1: double, arg2: double, arg3: integer): boolean
public "onDisplayed"(arg0: $BookPage$$Type, arg1: $GuiBookEntry$$Type, arg2: integer, arg3: integer): void
public static "createTemplate"(arg0: $Book$$Type, arg1: $BookContentsBuilder$$Type, arg2: StringJS, arg3: $TemplateInclusion$$Type): $BookTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookTemplate$$Type = ($BookTemplate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookTemplate$$Original = $BookTemplate;}
declare module "vazkii.patchouli.client.book.BookIcon" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $BookIcon$$Interface {

(arg0: $GuiGraphics, arg1: integer, arg2: integer): void
}

export class $BookIcon implements $BookIcon$$Interface {
static "from"(arg0: StringJS, arg1: $HolderLookup$Provider$$Type): $BookIcon
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookIcon$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookIcon$$Original = $BookIcon;}
declare module "vazkii.patchouli.client.book.BookCategory" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookIcon} from "vazkii.patchouli.client.book.BookIcon"
import {$BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$AbstractReadStateHolder} from "vazkii.patchouli.client.book.AbstractReadStateHolder"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BookCategory extends $AbstractReadStateHolder implements $Comparable$$Interface<($BookCategory)> {
constructor(arg0: $JsonObject$$Type, arg1: $ResourceLocation$$Type, arg2: $Book$$Type, arg3: $HolderLookup$Provider$$Type)

public "getName"(): $MutableComponent
public "compareTo"(arg0: $BookCategory$$Type): integer
public "compareTo"(arg0: any): integer
public "getId"(): $ResourceLocation
public "addEntry"(arg0: $BookEntry$$Type): void
public "getEntries"(): $List<($BookEntry)>
public "build"(arg0: $BookContentsBuilder$$Type): void
public "isLocked"(): boolean
public "getBook"(): $Book
public "getIcon"(): $BookIcon
public "canAdd"(): boolean
public "markReadStateDirty"(): void
public "isSecret"(): boolean
public "getDescription"(): StringJS
public "updateLockStatus"(arg0: boolean): void
public "shouldHide"(): boolean
public "isRootCategory"(): boolean
public "getParentCategory"(): $BookCategory
public "addChildCategory"(arg0: $BookCategory$$Type): void
get "name"(): $MutableComponent
get "id"(): $ResourceLocation
get "entries"(): $List<($BookEntry)>
get "locked"(): boolean
get "book"(): $Book
get "icon"(): $BookIcon
get "secret"(): boolean
get "description"(): StringJS
get "rootCategory"(): boolean
get "parentCategory"(): $BookCategory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCategory$$Type = ($BookCategory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookCategory$$Original = $BookCategory;}
declare module "vazkii.patchouli.client.book.gui.GuiBook" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"
import {$Button$$Type} from "net.minecraft.client.gui.components.Button"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"
import {$EntryDisplayState$$Type} from "vazkii.patchouli.client.book.EntryDisplayState"

export class $GuiBook extends $Screen {
static readonly "MENU_BACKGROUND": $ResourceLocation
static readonly "TEXT_LINE_HEIGHT": integer
static readonly "TOP_PADDING": integer
static readonly "MAX_BOOKMARKS": integer
 "ticksInBook": integer
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
static readonly "FULL_HEIGHT": integer
readonly "book": $Book
static readonly "RIGHT_PAGE_X": integer
static readonly "LEFT_PAGE_X": integer
readonly "renderables": $List<($Renderable)>
static readonly "PAGE_HEIGHT": integer
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "maxScale": integer
 "bookLeft": integer
static readonly "PAGE_WIDTH": integer
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "bookTop": integer
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "FULL_WIDTH": integer
 "font": $Font

constructor(arg0: $Book$$Type, arg1: $Component$$Type)

public "init"(): void
public "tick"(): void
public "handleButtonBookmark"(arg0: $Button$$Type): void
public "setTooltip"(...arg0: ($Component$$Type)[]): void
public "setTooltip"(arg0: $List$$Type<($Component$$Type)>): void
public "addRenderableWidget"<T extends $GuiEventListener>(arg0: T): T
public "isMouseInRelativeRange"(arg0: double, arg1: double, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public static "drawSeparator"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer): void
public "getSpread"(): integer
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "setTooltipStack"(arg0: $ItemStack$$Type): void
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "getMinecraft"(): $Minecraft
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "isPauseScreen"(): boolean
public "drawProgressBar"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer, arg4: $Predicate$$Type<($BookEntry)>): void
public "getRelativeY"(arg0: double): double
public "getRelativeX"(arg0: double): double
public "handleButtonArrow"(arg0: $Button$$Type): void
public "addBookmarkButtons"(): void
public static "drawPageFiller"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type): void
public static "drawPageFiller"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer): void
public static "openWebLink"(arg0: $Screen$$Type, arg1: StringJS): void
public static "drawFromTexture"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "drawCenteredStringNoShadow"(arg0: $GuiGraphics$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "drawCenteredStringNoShadow"(arg0: $GuiGraphics$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer): void
public static "drawLock"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer): void
public "removeDrawablesIn"(arg0: $Collection$$Type<(never)>): void
public "removeDrawablesIf"(arg0: $Predicate$$Type<($Renderable)>): void
public "canSeePageButton"(arg0: boolean): boolean
public "canBeOpened"(): boolean
public "onFirstOpened"(): void
public "mouseClickedScaled"(arg0: double, arg1: double, arg2: integer): boolean
public static "playBookFlipSound"(arg0: $Book$$Type): void
public "bookmarkThis"(): void
public "displayLexiconGui"(arg0: $GuiBook$$Type, arg1: boolean): void
public "canSeeBackButton"(): boolean
public static "drawMarking"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $EntryDisplayState$$Type): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
set "tooltip"(value: ($Component$$Type)[])
set "tooltip"(value: $List$$Type<($Component$$Type)>)
get "spread"(): integer
set "tooltipStack"(value: $ItemStack$$Type)
get "minecraft"(): $Minecraft
get "pauseScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiBook$$Type = ($GuiBook);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiBook$$Original = $GuiBook;}
declare module "vazkii.patchouli.client.book.AbstractReadStateHolder" {
import {$Stream$$Type} from "java.util.stream.Stream"
import {$EntryDisplayState, $EntryDisplayState$$Type} from "vazkii.patchouli.client.book.EntryDisplayState"

export class $AbstractReadStateHolder {
constructor()

public "markReadStateDirty"(): void
public static "mostImportantState"(arg0: $Stream$$Type<($EntryDisplayState$$Type)>): $EntryDisplayState
public "getReadState"(): $EntryDisplayState
get "readState"(): $EntryDisplayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReadStateHolder$$Type = ($AbstractReadStateHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractReadStateHolder$$Original = $AbstractReadStateHolder;}
declare module "vazkii.patchouli.client.book.BookContentsBuilder" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStackUtil$StackWrapper$$Type} from "vazkii.patchouli.common.util.ItemStackUtil$StackWrapper"
import {$BookContents} from "vazkii.patchouli.client.book.BookContents"
import {$Supplier} from "java.util.function.Supplier"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$BookCategory} from "vazkii.patchouli.client.book.BookCategory"
import {$Book$$Type} from "vazkii.patchouli.common.book.Book"
import {$BookTemplate} from "vazkii.patchouli.client.book.template.BookTemplate"

export class $BookContentsBuilder {
static readonly "DEFAULT_LANG": StringJS

public "getEntry"(arg0: $ResourceLocation$$Type): $BookEntry
public "getCategory"(arg0: $ResourceLocation$$Type): $BookCategory
public "getTemplate"(arg0: $ResourceLocation$$Type): $Supplier<($BookTemplate)>
public static "loadAndBuildFor"(arg0: $Level$$Type, arg1: $Book$$Type, arg2: boolean): $BookContents
public "addRecipeMapping"(arg0: $ItemStackUtil$StackWrapper$$Type, arg1: $BookEntry$$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContentsBuilder$$Type = ($BookContentsBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookContentsBuilder$$Original = $BookContentsBuilder;}
declare module "vazkii.patchouli.client.book.gui.GuiBookEntry" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Screen} from "net.minecraft.client.gui.screens.Screen"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$GuiBook, $GuiBook$$Type} from "vazkii.patchouli.client.book.gui.GuiBook"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$IComponentRenderContext$$Interface} from "vazkii.patchouli.api.IComponentRenderContext"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Renderable} from "net.minecraft.client.gui.components.Renderable"
import {$Button$$Type} from "net.minecraft.client.gui.components.Button"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $GuiBookEntry extends $GuiBook implements $IComponentRenderContext$$Interface {
static readonly "MENU_BACKGROUND": $ResourceLocation
static readonly "TEXT_LINE_HEIGHT": integer
static readonly "TOP_PADDING": integer
static readonly "MAX_BOOKMARKS": integer
 "ticksInBook": integer
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
static readonly "FULL_HEIGHT": integer
readonly "book": $Book
static readonly "RIGHT_PAGE_X": integer
static readonly "LEFT_PAGE_X": integer
readonly "renderables": $List<($Renderable)>
static readonly "PAGE_HEIGHT": integer
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "maxScale": integer
 "bookLeft": integer
static readonly "PAGE_WIDTH": integer
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "bookTop": integer
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "FULL_WIDTH": integer
 "font": $Font

constructor(arg0: $Book$$Type, arg1: $BookEntry$$Type)
constructor(arg0: $Book$$Type, arg1: $BookEntry$$Type, arg2: integer)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "init"(): void
public "getEntry"(): $BookEntry
public "setHoverTooltipComponents"(arg0: $List$$Type<($Component$$Type)>): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "addWidget"(arg0: $AbstractWidget$$Type, arg1: integer): void
public "getTextColor"(): integer
public "getFont"(): $Style
public "getGui"(): $Screen
public static "displayOrBookmark"(arg0: $GuiBook$$Type, arg1: $BookEntry$$Type): void
public "renderItemStack"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$$Type): void
public "renderIngredient"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$$Type): void
public "canBeOpened"(): boolean
public "onFirstOpened"(): void
public "mouseClickedScaled"(arg0: double, arg1: double, arg2: integer): boolean
public "bookmarkThis"(): void
public "getTicksInBook"(): integer
public "isAreaHovered"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "registerButton"(arg0: $Button$$Type, arg1: integer, arg2: $Runnable$$Type): void
public "getCraftingTexture"(): $ResourceLocation
public "navigateToEntry"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean): boolean
public "setHoverTooltip"(arg0: $List$$Type<(StringJS)>): void
public "getBookTexture"(): $ResourceLocation
public "getHeaderColor"(): integer
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
get "entry"(): $BookEntry
set "hoverTooltipComponents"(value: $List$$Type<($Component$$Type)>)
get "textColor"(): integer
get "gui"(): $Screen
get "craftingTexture"(): $ResourceLocation
set "hoverTooltip"(value: $List$$Type<(StringJS)>)
get "bookTexture"(): $ResourceLocation
get "headerColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiBookEntry$$Type = ($GuiBookEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiBookEntry$$Original = $GuiBookEntry;}
declare module "vazkii.patchouli.client.book.template.TemplateComponent" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$IVariablesAvailableCallback$$Interface} from "vazkii.patchouli.api.IVariablesAvailableCallback"
import {$BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IComponentProcessor$$Type} from "vazkii.patchouli.api.IComponentProcessor"
import {$BookPage$$Type} from "vazkii.patchouli.client.book.BookPage"
import {$IVariable$$Type} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TemplateInclusion$$Type} from "vazkii.patchouli.client.book.template.TemplateInclusion"
import {$IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$GuiBookEntry$$Type} from "vazkii.patchouli.client.book.gui.GuiBookEntry"
import {$BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"

export class $TemplateComponent implements $IVariablesAvailableCallback$$Interface {
 "flag": StringJS
 "advancement": StringJS
 "guard": StringJS
 "x": integer
 "y": integer
 "group": StringJS

constructor()

public "compile"(arg0: $Level$$Type, arg1: $IVariableProvider$$Type, arg2: $IComponentProcessor$$Type, arg3: $TemplateInclusion$$Type): void
public "build"(arg0: $BookContentsBuilder$$Type, arg1: $BookPage$$Type, arg2: $BookEntry$$Type, arg3: integer): void
public "render"(arg0: $GuiGraphics$$Type, arg1: $BookPage$$Type, arg2: integer, arg3: integer, arg4: float): void
public "getVisibleStatus"(arg0: $IComponentProcessor$$Type): boolean
public "mouseClicked"(arg0: $BookPage$$Type, arg1: double, arg2: double, arg3: integer): boolean
public "onVariablesAvailable"(arg0: $UnaryOperator$$Type<($IVariable)>, arg1: $HolderLookup$Provider$$Type): void
public "onDisplayed"(arg0: $BookPage$$Type, arg1: $GuiBookEntry$$Type, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateComponent$$Type = ($TemplateComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemplateComponent$$Original = $TemplateComponent;}
declare module "vazkii.patchouli.client.book.BookEntry" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BookPage} from "vazkii.patchouli.client.book.BookPage"
import {$BookCategory, $BookCategory$$Type} from "vazkii.patchouli.client.book.BookCategory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookIcon} from "vazkii.patchouli.client.book.BookIcon"
import {$Function$$Type} from "java.util.function.Function"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$AbstractReadStateHolder} from "vazkii.patchouli.client.book.AbstractReadStateHolder"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $BookEntry extends $AbstractReadStateHolder implements $Comparable$$Interface<($BookEntry)> {
constructor(arg0: $JsonObject$$Type, arg1: $ResourceLocation$$Type, arg2: $Book$$Type, arg3: StringJS, arg4: $HolderLookup$Provider$$Type)

public "getName"(): $MutableComponent
public "compareTo"(arg0: $BookEntry$$Type): integer
public "compareTo"(arg0: any): integer
public "getId"(): $ResourceLocation
public "build"(arg0: $Level$$Type, arg1: $BookContentsBuilder$$Type): void
public "isLocked"(): boolean
public "getAddedBy"(): StringJS
public "getBook"(): $Book
public "getCategory"(): $BookCategory
public "isPriority"(): boolean
public "getIcon"(): $BookIcon
public "getPages"(): $List<($BookPage)>
public "canAdd"(): boolean
public "markReadStateDirty"(): void
public "addRelevantStack"(arg0: $BookContentsBuilder$$Type, arg1: $ItemStack$$Type, arg2: integer): void
public "isSecret"(): boolean
public "updateLockStatus"(): void
public "shouldHide"(): boolean
public "initCategory"(arg0: $ResourceLocation$$Type, arg1: $Function$$Type<($ResourceLocation), ($BookCategory$$Type)>): void
public "getEntryColor"(): integer
public "getPageFromAnchor"(arg0: StringJS): integer
public "isFoundByQuery"(arg0: StringJS): boolean
get "name"(): $MutableComponent
get "id"(): $ResourceLocation
get "locked"(): boolean
get "addedBy"(): StringJS
get "book"(): $Book
get "category"(): $BookCategory
get "priority"(): boolean
get "icon"(): $BookIcon
get "pages"(): $List<($BookPage)>
get "secret"(): boolean
get "entryColor"(): integer
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
declare module "vazkii.patchouli.client.book.BookPage" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$GuiBookEntry$$Type} from "vazkii.patchouli.client.book.gui.GuiBookEntry"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $BookPage {
constructor()

public "build"(arg0: $Level$$Type, arg1: $BookEntry$$Type, arg2: $BookContentsBuilder$$Type, arg3: integer): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "i18n"(arg0: StringJS): StringJS
public "canAdd"(arg0: $Book$$Type): boolean
public "onHidden"(arg0: $GuiBookEntry$$Type): void
public "i18nText"(arg0: StringJS): $Component
public "isPageUnlocked"(): boolean
public "onDisplayed"(arg0: $GuiBookEntry$$Type, arg1: integer, arg2: integer): void
get "pageUnlocked"(): boolean
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
