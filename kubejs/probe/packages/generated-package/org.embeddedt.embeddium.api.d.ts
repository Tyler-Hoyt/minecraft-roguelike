declare module "org.embeddedt.embeddium.api.ChunkMeshEvent" {
import {$MeshAppender, $MeshAppender$$Type} from "org.embeddedt.embeddium.api.MeshAppender"
import {$List} from "java.util.List"
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$EventHandlerRegistrar} from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import {$EmbeddiumEvent} from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $ChunkMeshEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<($ChunkMeshEvent)>

public static "post"(arg0: $Level$$Type, arg1: $SectionPos$$Type): $List<($MeshAppender)>
public "getWorld"(): $Level
public "getSectionOrigin"(): $SectionPos
public "addMeshAppender"(arg0: $MeshAppender$$Type): void
get "world"(): $Level
get "sectionOrigin"(): $SectionPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMeshEvent$$Type = ($ChunkMeshEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkMeshEvent$$Original = $ChunkMeshEvent;}
declare module "org.embeddedt.embeddium.api.render.chunk.RenderSectionDistanceFilterEvent" {
import {$RenderSectionDistanceFilter, $RenderSectionDistanceFilter$$Type} from "org.embeddedt.embeddium.api.render.chunk.RenderSectionDistanceFilter"
import {$EventHandlerRegistrar} from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import {$EmbeddiumEvent} from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $RenderSectionDistanceFilterEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<($RenderSectionDistanceFilterEvent)>

constructor()

public "getFilter"(): $RenderSectionDistanceFilter
public "setFilter"(arg0: $RenderSectionDistanceFilter$$Type): void
get "filter"(): $RenderSectionDistanceFilter
set "filter"(value: $RenderSectionDistanceFilter$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderSectionDistanceFilterEvent$$Type = ($RenderSectionDistanceFilterEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderSectionDistanceFilterEvent$$Original = $RenderSectionDistanceFilterEvent;}
declare module "org.embeddedt.embeddium.api.vertex.attributes.CommonVertexAttribute" {
import {$Enum} from "java.lang.Enum"
import {$VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"

export class $CommonVertexAttribute extends $Enum<($CommonVertexAttribute)> {
static readonly "POSITION": $CommonVertexAttribute
static readonly "TEXTURE": $CommonVertexAttribute
static readonly "COLOR": $CommonVertexAttribute
static readonly "LIGHT": $CommonVertexAttribute
static readonly "COUNT": integer
static readonly "NORMAL": $CommonVertexAttribute
static readonly "OVERLAY": $CommonVertexAttribute

public static "values"(): ($CommonVertexAttribute)[]
public static "valueOf"(arg0: StringJS): $CommonVertexAttribute
public "getByteLength"(): integer
public static "getCommonType"(arg0: $VertexFormatElement$$Type): $CommonVertexAttribute
get "byteLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonVertexAttribute$$Type = (("position") | ("color") | ("texture") | ("overlay") | ("light") | ("normal"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommonVertexAttribute$$Original = $CommonVertexAttribute;}
declare module "org.embeddedt.embeddium.api.options.structure.OptionGroup$Builder" {
import {$Option$$Type} from "org.embeddedt.embeddium.api.options.structure.Option"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$OptionIdentifier$$Type} from "org.embeddedt.embeddium.api.options.OptionIdentifier"
import {$OptionGroup} from "org.embeddedt.embeddium.api.options.structure.OptionGroup"

export class $OptionGroup$Builder {
constructor()

public "add"(arg0: $Option$$Type<(never)>): $OptionGroup$Builder
public "build"(): $OptionGroup
public "addConditionally"(arg0: boolean, arg1: $Supplier$$Type<($Option$$Type<(never)>)>): $OptionGroup$Builder
public "setId"(arg0: $ResourceLocation$$Type): $OptionGroup$Builder
public "setId"(arg0: $OptionIdentifier$$Type<(void)>): $OptionGroup$Builder
set "id"(value: $ResourceLocation$$Type)
set "id"(value: $OptionIdentifier$$Type<(void)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionGroup$Builder$$Type = ($OptionGroup$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionGroup$Builder$$Original = $OptionGroup$Builder;}
declare module "org.embeddedt.embeddium.api.OptionGroupConstructionEvent" {
import {$Option, $Option$$Type} from "org.embeddedt.embeddium.api.options.structure.Option"
import {$List, $List$$Type} from "java.util.List"
import {$OptionIdentifier, $OptionIdentifier$$Type} from "org.embeddedt.embeddium.api.options.OptionIdentifier"
import {$EventHandlerRegistrar} from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import {$EmbeddiumEvent} from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $OptionGroupConstructionEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<($OptionGroupConstructionEvent)>

constructor(arg0: $OptionIdentifier$$Type<(void)>, arg1: $List$$Type<($Option$$Type<(never)>)>)

public "getId"(): $OptionIdentifier<(void)>
public "getOptions"(): $List<($Option<(never)>)>
get "id"(): $OptionIdentifier<(void)>
get "options"(): $List<($Option<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionGroupConstructionEvent$$Type = ($OptionGroupConstructionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionGroupConstructionEvent$$Original = $OptionGroupConstructionEvent;}
declare module "org.embeddedt.embeddium.api.render.chunk.SectionInfoBuilder" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $SectionInfoBuilder$$Interface {
}

export class $SectionInfoBuilder implements $SectionInfoBuilder$$Interface {
 "addSprite"(arg0: $TextureAtlasSprite$$Type): void
 "addBlockEntity"(arg0: $BlockEntity$$Type, arg1: boolean): void
 "removeBlockEntitiesIf"(arg0: $Predicate$$Type<($BlockEntity)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionInfoBuilder$$Type = ($SectionInfoBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionInfoBuilder$$Original = $SectionInfoBuilder;}
declare module "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar" {
import {$EventHandlerRegistrar$Handler$$Type} from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar$Handler"
import {$EmbeddiumEvent, $EmbeddiumEvent$$Type} from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $EventHandlerRegistrar<T extends $EmbeddiumEvent> {
constructor()

public "post"(arg0: T): boolean
public "addListener"(arg0: $EventHandlerRegistrar$Handler$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventHandlerRegistrar$$Type<T> = ($EventHandlerRegistrar<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventHandlerRegistrar$$Original<T> = $EventHandlerRegistrar<(T)>;}
declare module "org.embeddedt.embeddium.api.OptionGUIConstructionEvent" {
import {$OptionPage, $OptionPage$$Type} from "org.embeddedt.embeddium.api.options.structure.OptionPage"
import {$List, $List$$Type} from "java.util.List"
import {$EventHandlerRegistrar} from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import {$EmbeddiumEvent} from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $OptionGUIConstructionEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<($OptionGUIConstructionEvent)>

constructor(arg0: $List$$Type<($OptionPage$$Type)>)

public "getPages"(): $List<($OptionPage)>
public "addPage"(arg0: $OptionPage$$Type): void
get "pages"(): $List<($OptionPage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionGUIConstructionEvent$$Type = ($OptionGUIConstructionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionGUIConstructionEvent$$Original = $OptionGUIConstructionEvent;}
declare module "org.embeddedt.embeddium.api.options.structure.OptionFlag" {
import {$Enum} from "java.lang.Enum"

export class $OptionFlag extends $Enum<($OptionFlag)> {
static readonly "REQUIRES_GAME_RESTART": $OptionFlag
static readonly "REQUIRES_ASSET_RELOAD": $OptionFlag
static readonly "REQUIRES_RENDERER_UPDATE": $OptionFlag
static readonly "REQUIRES_RENDERER_RELOAD": $OptionFlag

public static "values"(): ($OptionFlag)[]
public static "valueOf"(arg0: StringJS): $OptionFlag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionFlag$$Type = (("requires_renderer_reload") | ("requires_renderer_update") | ("requires_asset_reload") | ("requires_game_restart"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionFlag$$Original = $OptionFlag;}
declare module "org.embeddedt.embeddium.api.options.structure.OptionImpact" {
import {$TextProvider$$Interface} from "org.embeddedt.embeddium.impl.gui.options.TextProvider"
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $OptionImpact extends $Enum<($OptionImpact)> implements $TextProvider$$Interface {
static readonly "HIGH": $OptionImpact
static readonly "MEDIUM": $OptionImpact
static readonly "LOW": $OptionImpact
static readonly "VARIES": $OptionImpact

public static "values"(): ($OptionImpact)[]
public static "valueOf"(arg0: StringJS): $OptionImpact
public "getLocalizedName"(): $Component
get "localizedName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionImpact$$Type = (("low") | ("medium") | ("high") | ("varies"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionImpact$$Original = $OptionImpact;}
declare module "org.embeddedt.embeddium.api.math.Dim2i" {
import {$Point2i$$Type, $Point2i$$Interface} from "org.embeddedt.embeddium.api.math.Point2i"
import {$Record} from "java.lang.Record"

export class $Dim2i extends $Record implements $Point2i$$Interface {
constructor(x: integer, y: integer, width: integer, height: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): integer
public "y"(): integer
public "width"(): integer
public "withHeight"(arg0: integer): $Dim2i
public "withWidth"(arg0: integer): $Dim2i
public "getLimitX"(): integer
public "getLimitY"(): integer
public "getCenterX"(): integer
public "containsCursor"(arg0: double, arg1: double): boolean
public "canFitDimension"(arg0: $Dim2i$$Type): boolean
public "withParentOffset"(arg0: $Point2i$$Type): $Dim2i
public "height"(): integer
public "withX"(arg0: integer): $Dim2i
public "withY"(arg0: integer): $Dim2i
public "getCenterY"(): integer
public "overlapsWith"(arg0: $Dim2i$$Type): boolean
get "limitX"(): integer
get "limitY"(): integer
get "centerX"(): integer
get "centerY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dim2i$$Type = ({"width"?: integer, "y"?: integer, "x"?: integer, "height"?: integer}) | ([width?: integer, y?: integer, x?: integer, height?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dim2i$$Original = $Dim2i;}
declare module "org.embeddedt.embeddium.api.math.Point2i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Point2i$$Interface {
}

export class $Point2i implements $Point2i$$Interface {
static readonly "ZERO": $Point2i

 "x"(): integer
 "y"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Point2i$$Type = ($Point2i);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Point2i$$Original = $Point2i;}
declare module "org.embeddedt.embeddium.api.MeshAppender$Context" {
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Record} from "java.lang.Record"

export class $MeshAppender$Context extends $Record {
constructor(vertexConsumerProvider: $Function$$Type<($RenderType), ($VertexConsumer$$Type)>, blockRenderView: $BlockAndTintGetter$$Type, sectionOrigin: $SectionPos$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "sectionOrigin"(): $SectionPos
public "blockRenderView"(): $BlockAndTintGetter
public "vertexConsumerProvider"(): $Function<($RenderType), ($VertexConsumer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshAppender$Context$$Type = ({"blockRenderView"?: $BlockAndTintGetter$$Type, "sectionOrigin"?: $SectionPos$$Type, "vertexConsumerProvider"?: $Function$$Type<($RenderType$$Type), ($VertexConsumer$$Type)>}) | ([blockRenderView?: $BlockAndTintGetter$$Type, sectionOrigin?: $SectionPos$$Type, vertexConsumerProvider?: $Function$$Type<($RenderType$$Type), ($VertexConsumer$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MeshAppender$Context$$Original = $MeshAppender$Context;}
declare module "org.embeddedt.embeddium.api.MeshAppender" {
import {$MeshAppender$Context, $MeshAppender$Context$$Type} from "org.embeddedt.embeddium.api.MeshAppender$Context"

export interface $MeshAppender$$Interface {

(arg0: $MeshAppender$Context): void
}

export class $MeshAppender implements $MeshAppender$$Interface {
 "render"(arg0: $MeshAppender$Context$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeshAppender$$Type = ((arg0: $MeshAppender$Context) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MeshAppender$$Original = $MeshAppender;}
declare module "org.embeddedt.embeddium.api.ChunkDataBuiltEvent" {
import {$EventHandlerRegistrar} from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import {$SectionInfoBuilder, $SectionInfoBuilder$$Type} from "org.embeddedt.embeddium.api.render.chunk.SectionInfoBuilder"
import {$EmbeddiumEvent} from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $ChunkDataBuiltEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<($ChunkDataBuiltEvent)>

constructor(arg0: $SectionInfoBuilder$$Type)

public "getDataBuilder"(): $SectionInfoBuilder
get "dataBuilder"(): $SectionInfoBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkDataBuiltEvent$$Type = ($ChunkDataBuiltEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkDataBuiltEvent$$Original = $ChunkDataBuiltEvent;}
declare module "org.embeddedt.embeddium.api.vertex.format.VertexFormatDescription" {
import {$CommonVertexAttribute$$Type} from "org.embeddedt.embeddium.api.vertex.attributes.CommonVertexAttribute"

export interface $VertexFormatDescription$$Interface {
get "simpleFormat"(): boolean
}

export class $VertexFormatDescription implements $VertexFormatDescription$$Interface {
 "id"(): integer
 "stride"(): integer
 "containsElement"(arg0: $CommonVertexAttribute$$Type): boolean
 "getElementOffset"(arg0: $CommonVertexAttribute$$Type): integer
 "isSimpleFormat"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatDescription$$Type = ($VertexFormatDescription);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexFormatDescription$$Original = $VertexFormatDescription;}
declare module "org.embeddedt.embeddium.api.OptionPageConstructionEvent" {
import {$List} from "java.util.List"
import {$OptionIdentifier, $OptionIdentifier$$Type} from "org.embeddedt.embeddium.api.options.OptionIdentifier"
import {$EventHandlerRegistrar} from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$OptionGroup, $OptionGroup$$Type} from "org.embeddedt.embeddium.api.options.structure.OptionGroup"
import {$EmbeddiumEvent} from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $OptionPageConstructionEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<($OptionPageConstructionEvent)>

constructor(arg0: $OptionIdentifier$$Type<(void)>, arg1: $Component$$Type)

public "getName"(): $Component
public "getId"(): $OptionIdentifier<(void)>
public "addGroup"(arg0: $OptionGroup$$Type): void
public "getAdditionalGroups"(): $List<($OptionGroup)>
get "name"(): $Component
get "id"(): $OptionIdentifier<(void)>
get "additionalGroups"(): $List<($OptionGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionPageConstructionEvent$$Type = ($OptionPageConstructionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionPageConstructionEvent$$Original = $OptionPageConstructionEvent;}
declare module "org.embeddedt.embeddium.api.options.structure.OptionGroup" {
import {$Option} from "org.embeddedt.embeddium.api.options.structure.Option"
import {$OptionIdentifier} from "org.embeddedt.embeddium.api.options.OptionIdentifier"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$OptionGroup$Builder} from "org.embeddedt.embeddium.api.options.structure.OptionGroup$Builder"

export class $OptionGroup {
readonly "id": $OptionIdentifier<(void)>

public "getId"(): $OptionIdentifier<(void)>
public static "createBuilder"(): $OptionGroup$Builder
public "getOptions"(): $ImmutableList<($Option<(never)>)>
get "options"(): $ImmutableList<($Option<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionGroup$$Type = ($OptionGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionGroup$$Original = $OptionGroup;}
declare module "org.embeddedt.embeddium.api.options.structure.OptionControlElement" {
import {$GuiEventListener$$Interface} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$Option} from "org.embeddedt.embeddium.api.options.structure.Option"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$NarratableEntry$$Interface} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"
import {$Renderable$$Interface} from "net.minecraft.client.gui.components.Renderable"
import {$NarratableEntry$NarrationPriority} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export interface $OptionControlElement$$Interface<T> extends $Renderable$$Interface, $GuiEventListener$$Interface, $NarratableEntry$$Interface {
get "option"(): $Option<(T)>
get "currentFocusPath"(): $ComponentPath
set "focused"(value: boolean)
get "focused"(): boolean
get "rectangle"(): $ScreenRectangle
get "active"(): boolean
get "tabOrderGroup"(): integer
}

export class $OptionControlElement<T> implements $OptionControlElement$$Interface {
 "getOption"(): $Option<(T)>
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
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
 "isActive"(): boolean
 "narrationPriority"(): $NarratableEntry$NarrationPriority
 "getTabOrderGroup"(): integer
 "updateNarration"(arg0: $NarrationElementOutput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionControlElement$$Type<T> = ($OptionControlElement<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionControlElement$$Original<T> = $OptionControlElement<(T)>;}
declare module "org.embeddedt.embeddium.api.options.control.Control" {
import {$Option} from "org.embeddedt.embeddium.api.options.structure.Option"
import {$Dim2i$$Type} from "org.embeddedt.embeddium.api.math.Dim2i"
import {$OptionControlElement} from "org.embeddedt.embeddium.api.options.structure.OptionControlElement"

export interface $Control$$Interface<T> {
get "maxWidth"(): integer
get "option"(): $Option<(T)>
}

export class $Control<T> implements $Control$$Interface {
 "createElement"(arg0: $Dim2i$$Type): $OptionControlElement<(T)>
 "getMaxWidth"(): integer
 "getOption"(): $Option<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Control$$Type<T> = ($Control<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Control$$Original<T> = $Control<(T)>;}
declare module "org.embeddedt.embeddium.api.render.clouds.ModifyCloudRenderingEvent" {
import {$EventHandlerRegistrar} from "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar"
import {$EmbeddiumEvent} from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export class $ModifyCloudRenderingEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<($ModifyCloudRenderingEvent)>

constructor(arg0: integer)

public "setCloudRenderDistance"(arg0: integer): void
public "getCloudRenderDistance"(): integer
set "cloudRenderDistance"(value: integer)
get "cloudRenderDistance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyCloudRenderingEvent$$Type = ($ModifyCloudRenderingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifyCloudRenderingEvent$$Original = $ModifyCloudRenderingEvent;}
declare module "org.embeddedt.embeddium.api.eventbus.EventHandlerRegistrar$Handler" {
import {$EmbeddiumEvent, $EmbeddiumEvent$$Type} from "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent"

export interface $EventHandlerRegistrar$Handler$$Interface<T extends $EmbeddiumEvent> {

(arg0: T): void
}

export class $EventHandlerRegistrar$Handler<T extends $EmbeddiumEvent> implements $EventHandlerRegistrar$Handler$$Interface {
 "acceptEvent"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventHandlerRegistrar$Handler$$Type<T> = ((arg0: T) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventHandlerRegistrar$Handler$$Original<T> = $EventHandlerRegistrar$Handler<(T)>;}
declare module "org.embeddedt.embeddium.api.eventbus.EmbeddiumEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"

export class $EmbeddiumEvent extends $Event implements $ICancellableEvent$$Interface {
constructor()

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "isCancelable"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmbeddiumEvent$$Type = ($EmbeddiumEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmbeddiumEvent$$Original = $EmbeddiumEvent;}
declare module "org.embeddedt.embeddium.api.vertex.buffer.VertexBufferWriter" {
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$VertexFormatDescription, $VertexFormatDescription$$Type} from "org.embeddedt.embeddium.api.vertex.format.VertexFormatDescription"

export interface $VertexBufferWriter$$Interface {

(arg0: $MemoryStack, arg1: long, arg2: integer, arg3: $VertexFormatDescription): void
}

export class $VertexBufferWriter implements $VertexBufferWriter$$Interface {
static "of"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
 "push"(arg0: $MemoryStack$$Type, arg1: long, arg2: integer, arg3: $VertexFormatDescription$$Type): void
static "copyInto"(arg0: $VertexBufferWriter$$Type, arg1: $MemoryStack$$Type, arg2: long, arg3: integer, arg4: $VertexFormatDescription$$Type): void
 "canUseIntrinsics"(): boolean
static "tryOf"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBufferWriter$$Type = ((arg0: $MemoryStack, arg1: long, arg2: integer, arg3: $VertexFormatDescription) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VertexBufferWriter$$Original = $VertexBufferWriter;}
declare module "org.embeddedt.embeddium.api.options.OptionIdentifier" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $OptionIdentifier<T> {
static readonly "EMPTY": $OptionIdentifier<(void)>

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ResourceLocation$$Type): boolean
public "matches"(arg0: $OptionIdentifier$$Type<(never)>): boolean
public static "isPresent"(arg0: $OptionIdentifier$$Type<(never)>): boolean
public "getType"(): $Class<(T)>
public static "create"(arg0: $ResourceLocation$$Type): $OptionIdentifier<(void)>
public static "create"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $OptionIdentifier<(T)>
public static "create"(arg0: StringJS, arg1: StringJS): $OptionIdentifier<(void)>
public static "create"<T>(arg0: StringJS, arg1: StringJS, arg2: $Class$$Type<(T)>): $OptionIdentifier<(T)>
public "getPath"(): StringJS
public "getModId"(): StringJS
get "type"(): $Class<(T)>
get "path"(): StringJS
get "modId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionIdentifier$$Type<T> = ($OptionIdentifier<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionIdentifier$$Original<T> = $OptionIdentifier<(T)>;}
declare module "org.embeddedt.embeddium.api.options.structure.OptionStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $OptionStorage$$Interface<T> {
get "data"(): T
}

export class $OptionStorage<T> implements $OptionStorage$$Interface {
 "save"(): void
 "getData"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionStorage$$Type<T> = ($OptionStorage<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionStorage$$Original<T> = $OptionStorage<(T)>;}
declare module "org.embeddedt.embeddium.api.render.chunk.RenderSectionDistanceFilter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderSectionDistanceFilter$$Interface {

(arg0: float, arg1: float, arg2: float, arg3: float): boolean
}

export class $RenderSectionDistanceFilter implements $RenderSectionDistanceFilter$$Interface {
static readonly "DEFAULT": $RenderSectionDistanceFilter

 "isWithinDistance"(arg0: float, arg1: float, arg2: float, arg3: float): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderSectionDistanceFilter$$Type = ((arg0: float, arg1: float, arg2: float, arg3: float) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderSectionDistanceFilter$$Original = $RenderSectionDistanceFilter;}
declare module "org.embeddedt.embeddium.api.options.structure.Option" {
import {$OptionStorage} from "org.embeddedt.embeddium.api.options.structure.OptionStorage"
import {$Collection} from "java.util.Collection"
import {$OptionFlag} from "org.embeddedt.embeddium.api.options.structure.OptionFlag"
import {$OptionIdentifier} from "org.embeddedt.embeddium.api.options.OptionIdentifier"
import {$Control} from "org.embeddedt.embeddium.api.options.control.Control"
import {$Component} from "net.minecraft.network.chat.Component"
import {$OptionImpact} from "org.embeddedt.embeddium.api.options.structure.OptionImpact"

export interface $Option$$Interface<T> {
get "name"(): $Component
get "value"(): T
get "id"(): $OptionIdentifier<(T)>
set "value"(value: T)
get "control"(): $Control<(T)>
get "flags"(): $Collection<($OptionFlag)>
get "available"(): boolean
get "tooltip"(): $Component
get "storage"(): $OptionStorage<(never)>
get "impact"(): $OptionImpact
}

export class $Option<T> implements $Option$$Interface {
 "getName"(): $Component
 "reset"(): void
 "getValue"(): T
 "getId"(): $OptionIdentifier<(T)>
 "setValue"(arg0: T): void
 "getControl"(): $Control<(T)>
 "getFlags"(): $Collection<($OptionFlag)>
 "isAvailable"(): boolean
 "getTooltip"(): $Component
 "applyChanges"(): void
 "getStorage"(): $OptionStorage<(never)>
 "hasChanged"(): boolean
 "getImpact"(): $OptionImpact
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Option$$Type<T> = ($Option<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Option$$Original<T> = $Option<(T)>;}
declare module "org.embeddedt.embeddium.api.options.structure.OptionPage" {
import {$Option} from "org.embeddedt.embeddium.api.options.structure.Option"
import {$OptionIdentifier, $OptionIdentifier$$Type} from "org.embeddedt.embeddium.api.options.OptionIdentifier"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$OptionGroup, $OptionGroup$$Type} from "org.embeddedt.embeddium.api.options.structure.OptionGroup"

export class $OptionPage {
constructor(arg0: $OptionIdentifier$$Type<(void)>, arg1: $Component$$Type, arg2: $ImmutableList$$Type<($OptionGroup$$Type)>)

public "getName"(): $Component
public "getId"(): $OptionIdentifier<(void)>
public "getOptions"(): $ImmutableList<($Option<(never)>)>
public "getGroups"(): $ImmutableList<($OptionGroup)>
get "name"(): $Component
get "id"(): $OptionIdentifier<(void)>
get "options"(): $ImmutableList<($Option<(never)>)>
get "groups"(): $ImmutableList<($OptionGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionPage$$Type = ($OptionPage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionPage$$Original = $OptionPage;}
