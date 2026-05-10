declare module "com.mojang.blaze3d.platform.MonitorCreator" {
import {$Monitor, $Monitor$$Type} from "com.mojang.blaze3d.platform.Monitor"

export interface $MonitorCreator$$Interface {

(arg0: long): $Monitor$$Type
}

export class $MonitorCreator implements $MonitorCreator$$Interface {
 "createMonitor"(arg0: long): $Monitor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonitorCreator$$Type = ((arg0: long) => $Monitor$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MonitorCreator$$Original = $MonitorCreator;}
declare module "com.mojang.blaze3d.platform.NativeImage" {
import {$NativeImageAccessor$$Interface} from "net.caffeinemc.mods.sodium.mixin.features.textures.NativeImageAccessor"
import {$IntUnaryOperator$$Type} from "java.util.function.IntUnaryOperator"
import {$File$$Type} from "java.io.File"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$NativeImage$Format, $NativeImage$Format$$Type} from "com.mojang.blaze3d.platform.NativeImage$Format"
import {$InputStream$$Type} from "java.io.InputStream"
import {$Path$$Type} from "java.nio.file.Path"
import {$FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $NativeImage implements $AutoCloseable$$Interface, $NativeImageAccessor$$Interface {
 "pixels": long

constructor(arg0: $NativeImage$Format$$Type, arg1: integer, arg2: integer, arg3: boolean)
constructor(arg0: integer, arg1: integer, arg2: boolean)

public "toString"(): StringJS
public "format"(): $NativeImage$Format
public static "read"(arg0: (byte)[]): $NativeImage
public static "read"(arg0: $NativeImage$Format$$Type, arg1: $ByteBuffer$$Type): $NativeImage
public static "read"(arg0: $InputStream$$Type): $NativeImage
public static "read"(arg0: $NativeImage$Format$$Type, arg1: $InputStream$$Type): $NativeImage
public static "read"(arg0: $ByteBuffer$$Type): $NativeImage
public "close"(): void
public "copyFrom"(arg0: $NativeImage$$Type): void
public "writeToFile"(arg0: $File$$Type): void
public "writeToFile"(arg0: $Path$$Type): void
public "getLuminanceOrAlpha"(arg0: integer, arg1: integer): byte
public "getGreenOrLuminance"(arg0: integer, arg1: integer): byte
public "downloadDepthBuffer"(arg0: float): void
public "getPixelsRGBA"(): (integer)[]
public "getWidth"(): integer
public "mappedCopy"(arg0: $IntUnaryOperator$$Type): $NativeImage
public "drawPixels"(): void
public "blendPixel"(arg0: integer, arg1: integer, arg2: integer): void
public "untrack"(): void
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean): void
public "upload"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "fillRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "copyRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean, arg7: boolean): void
public "copyRect"(arg0: $NativeImage$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "getHeight"(): integer
public "getPixels"(): long
public "flipY"(): void
public "getRedOrLuminance"(arg0: integer, arg1: integer): byte
/**
 * 
 * @deprecated
 */
public "makePixelArray"(): (integer)[]
public "downloadTexture"(arg0: integer, arg1: boolean): void
public "copyFromFont"(arg0: $FT_Face$$Type, arg1: integer): boolean
public "setPixelRGBA"(arg0: integer, arg1: integer, arg2: integer): void
public "getBlueOrLuminance"(arg0: integer, arg1: integer): byte
public "getPixelRGBA"(arg0: integer, arg1: integer): integer
public "resizeSubRectTo"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $NativeImage$$Type): void
public "setPixelLuminance"(arg0: integer, arg1: integer, arg2: byte): void
public "applyToAllPixels"(arg0: $IntUnaryOperator$$Type): void
public "asByteArray"(): (byte)[]
get "pixelsRGBA"(): (integer)[]
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImage$$Type = ($NativeImage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NativeImage$$Original = $NativeImage;}
declare module "com.mojang.blaze3d.platform.ScreenManager" {
import {$MonitorCreator$$Type} from "com.mojang.blaze3d.platform.MonitorCreator"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$Monitor} from "com.mojang.blaze3d.platform.Monitor"

export class $ScreenManager {
constructor(arg0: $MonitorCreator$$Type)

public "shutdown"(): void
public static "clamp"(arg0: integer, arg1: integer, arg2: integer): integer
public "findBestMonitor"(arg0: $Window$$Type): $Monitor
public "getMonitor"(arg0: long): $Monitor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenManager$$Type = ($ScreenManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenManager$$Original = $ScreenManager;}
declare module "com.mojang.blaze3d.platform.Monitor" {
import {$Optional$$Type} from "java.util.Optional"
import {$VideoMode, $VideoMode$$Type} from "com.mojang.blaze3d.platform.VideoMode"

export class $Monitor {
constructor(arg0: long)

public "toString"(): StringJS
public "refreshVideoModes"(): void
public "getCurrentMode"(): $VideoMode
public "getVideoModeIndex"(arg0: $VideoMode$$Type): integer
public "getModeCount"(): integer
public "getY"(): integer
public "getMonitor"(): long
public "getMode"(arg0: integer): $VideoMode
public "getX"(): integer
public "getPreferredVidMode"(arg0: ($VideoMode$$Type)?): $VideoMode
get "currentMode"(): $VideoMode
get "modeCount"(): integer
get "y"(): integer
get "monitor"(): long
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Monitor$$Type = ($Monitor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Monitor$$Original = $Monitor;}
declare module "com.mojang.blaze3d.platform.InputConstants$Key" {
import {$OptionalInt} from "java.util.OptionalInt"
import {$InputConstants$Type} from "com.mojang.blaze3d.platform.InputConstants$Type"
import {$Component} from "net.minecraft.network.chat.Component"

export class $InputConstants$Key {
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): integer
public "getType"(): $InputConstants$Type
public "getDisplayName"(): $Component
public "getNumericKeyValue"(): $OptionalInt
get "name"(): StringJS
get "value"(): integer
get "type"(): $InputConstants$Type
get "displayName"(): $Component
get "numericKeyValue"(): $OptionalInt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputConstants$Key$$Type = ($InputConstants$Key);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputConstants$Key$$Original = $InputConstants$Key;}
declare module "com.mojang.blaze3d.platform.NativeImage$Format" {
import {$Enum} from "java.lang.Enum"

export class $NativeImage$Format extends $Enum<($NativeImage$Format)> {
static readonly "LUMINANCE_ALPHA": $NativeImage$Format
static readonly "RGBA": $NativeImage$Format
static readonly "LUMINANCE": $NativeImage$Format
static readonly "RGB": $NativeImage$Format

public static "values"(): ($NativeImage$Format)[]
public static "valueOf"(arg0: StringJS): $NativeImage$Format
public "luminanceOrBlueOffset"(): integer
public "hasLuminanceOrGreen"(): boolean
public "luminanceOrAlphaOffset"(): integer
public "setPackPixelStoreState"(): void
public "luminanceOrGreenOffset"(): integer
public "luminanceOrRedOffset"(): integer
public "hasLuminanceOrAlpha"(): boolean
public "hasAlpha"(): boolean
public "glFormat"(): integer
public "setUnpackPixelStoreState"(): void
public "components"(): integer
public "hasGreen"(): boolean
public "hasRed"(): boolean
public "redOffset"(): integer
public "blueOffset"(): integer
public "hasBlue"(): boolean
public "hasLuminanceOrBlue"(): boolean
public "hasLuminance"(): boolean
public "luminanceOffset"(): integer
public "hasLuminanceOrRed"(): boolean
public "alphaOffset"(): integer
public "greenOffset"(): integer
public "supportedByStb"(): boolean
get "packPixelStoreState"(): void
get "unpackPixelStoreState"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImage$Format$$Type = (("rgba") | ("rgb") | ("luminance_alpha") | ("luminance"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NativeImage$Format$$Original = $NativeImage$Format;}
declare module "com.mojang.blaze3d.platform.DisplayData" {
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"

export class $DisplayData {
readonly "fullscreenHeight": $OptionalInt
readonly "fullscreenWidth": $OptionalInt
readonly "width": integer
readonly "height": integer
readonly "isFullscreen": boolean

constructor(arg0: integer, arg1: integer, arg2: $OptionalInt$$Type, arg3: $OptionalInt$$Type, arg4: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayData$$Type = ($DisplayData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisplayData$$Original = $DisplayData;}
declare module "com.mojang.blaze3d.platform.VideoMode" {
import {$GLFWVidMode$Buffer$$Type} from "org.lwjgl.glfw.GLFWVidMode$Buffer"
import {$Optional} from "java.util.Optional"
import {$GLFWVidMode$$Type} from "org.lwjgl.glfw.GLFWVidMode"

export class $VideoMode {
constructor(arg0: $GLFWVidMode$$Type)
constructor(arg0: $GLFWVidMode$Buffer$$Type)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(): StringJS
public static "read"(arg0: StringJS): $Optional<($VideoMode)>
public "getGreenBits"(): integer
public "getBlueBits"(): integer
public "getRefreshRate"(): integer
public "getWidth"(): integer
public "getRedBits"(): integer
public "getHeight"(): integer
get "greenBits"(): integer
get "blueBits"(): integer
get "refreshRate"(): integer
get "width"(): integer
get "redBits"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VideoMode$$Type = ($VideoMode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VideoMode$$Original = $VideoMode;}
declare module "com.mojang.blaze3d.platform.WindowEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WindowEventHandler$$Interface {
set "windowActive"(value: boolean)
}

export class $WindowEventHandler implements $WindowEventHandler$$Interface {
 "resizeDisplay"(): void
 "setWindowActive"(arg0: boolean): void
 "cursorEntered"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindowEventHandler$$Type = ($WindowEventHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindowEventHandler$$Original = $WindowEventHandler;}
declare module "com.mojang.blaze3d.platform.Window" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$WindowEventHandler$$Type} from "com.mojang.blaze3d.platform.WindowEventHandler"
import {$List, $List$$Type} from "java.util.List"
import {$PackResources$$Type} from "net.minecraft.server.packs.PackResources"
import {$IconSet$$Type} from "com.mojang.blaze3d.platform.IconSet"
import {$IoSupplier, $IoSupplier$$Type} from "net.minecraft.server.packs.resources.IoSupplier"
import {$Monitor} from "com.mojang.blaze3d.platform.Monitor"
import {$DisplayData$$Type} from "com.mojang.blaze3d.platform.DisplayData"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$ScreenManager$$Type} from "com.mojang.blaze3d.platform.ScreenManager"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$NativeWindowHandle$$Interface} from "net.caffeinemc.mods.sodium.client.platform.NativeWindowHandle"
import {$VideoMode, $VideoMode$$Type} from "com.mojang.blaze3d.platform.VideoMode"
import {$WindowKJS$$Interface} from "dev.latvian.mods.kubejs.core.WindowKJS"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export class $Window implements $AutoCloseable$$Interface, $NativeWindowHandle$$Interface, $WindowKJS$$Interface {
static readonly "BASE_HEIGHT": integer
static readonly "BASE_WIDTH": integer

constructor(arg0: $WindowEventHandler$$Type, arg1: $ScreenManager$$Type, arg2: $DisplayData$$Type, arg3: StringJS, arg4: StringJS)

public static "checkGlfwError"(arg0: $BiConsumer$$Type<(integer), (StringJS)>): void
public "close"(): void
public "getY"(): integer
public "getRefreshRate"(): integer
public "getScreenWidth"(): integer
public "getScreenHeight"(): integer
public "getWin32Handle"(): long
public "findBestMonitor"(): $Monitor
public "getWidth"(): integer
public static "getPlatform"(): StringJS
public "setPreferredFullscreenVideoMode"(arg0: ($VideoMode$$Type)?): void
public "setWindowed"(arg0: integer, arg1: integer): void
public "updateVsync"(arg0: boolean): void
public "toggleFullScreen"(): void
public "setFramerateLimit"(arg0: integer): void
public "setErrorSection"(arg0: StringJS): void
public "setIcon"(arg0: $PackResources$$Type, arg1: $IconSet$$Type): void
public "setTitle"(arg0: StringJS): void
public "getX"(): integer
public "getGuiScale"(): double
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "updateRawMouseInput"(arg0: boolean): void
public "setDefaultErrorCallback"(): void
public "defaultErrorCallback"(arg0: integer, arg1: long): void
public "changeFullscreenVideoMode"(): void
public "getGuiScaledHeight"(): integer
public "getGuiScaledWidth"(): integer
public "getPreferredFullscreenVideoMode"(): $Optional<($VideoMode)>
public "getHeight"(): integer
public "getWindow"(): long
public "isFullscreen"(): boolean
public "updateDisplay"(): void
public "setGuiScale"(arg0: double): void
public "getFramerateLimit"(): integer
public "calculateScale"(arg0: integer, arg1: boolean): integer
public "shouldClose"(): boolean
public "wrapOperation$zfo000$sodium$setAdditionalWindowHints"(arg0: integer, arg1: integer, arg2: charseq, arg3: long, arg4: long, arg5: $Operation$$Type): long
public "kjs$loadIcons"(original: $List$$Type<($IoSupplier$$Type<($InputStream$$Type)>)>): $List<($IoSupplier<($InputStream)>)>
get "y"(): integer
get "refreshRate"(): integer
get "screenWidth"(): integer
get "screenHeight"(): integer
get "win32Handle"(): long
get "width"(): integer
public static get "platform"(): StringJS
set "preferredFullscreenVideoMode"(value: ($VideoMode$$Type)?)
set "framerateLimit"(value: integer)
set "errorSection"(value: StringJS)
set "title"(value: StringJS)
get "x"(): integer
get "guiScale"(): double
set "width"(value: integer)
set "height"(value: integer)
get "guiScaledHeight"(): integer
get "guiScaledWidth"(): integer
get "preferredFullscreenVideoMode"(): $Optional<($VideoMode)>
get "height"(): integer
get "window"(): long
get "fullscreen"(): boolean
set "guiScale"(value: double)
get "framerateLimit"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Window$$Type = ($Window);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Window$$Original = $Window;}
declare module "com.mojang.blaze3d.platform.InputConstants$Type" {
import {$Enum} from "java.lang.Enum"
import {$InputConstants$Key} from "com.mojang.blaze3d.platform.InputConstants$Key"

export class $InputConstants$Type extends $Enum<($InputConstants$Type)> {
static readonly "SCANCODE": $InputConstants$Type
static readonly "MOUSE": $InputConstants$Type
static readonly "KEYSYM": $InputConstants$Type

public "getOrCreate"(arg0: integer): $InputConstants$Key
public static "values"(): ($InputConstants$Type)[]
public static "valueOf"(arg0: StringJS): $InputConstants$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputConstants$Type$$Type = (("keysym") | ("scancode") | ("mouse"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputConstants$Type$$Original = $InputConstants$Type;}
declare module "com.mojang.blaze3d.platform.IconSet" {
import {$Enum} from "java.lang.Enum"
import {$List} from "java.util.List"
import {$PackResources$$Type} from "net.minecraft.server.packs.PackResources"
import {$IoSupplier} from "net.minecraft.server.packs.resources.IoSupplier"
import {$InputStream} from "java.io.InputStream"

export class $IconSet extends $Enum<($IconSet)> {
static readonly "SNAPSHOT": $IconSet
static readonly "RELEASE": $IconSet

public static "values"(): ($IconSet)[]
public static "valueOf"(arg0: StringJS): $IconSet
public "getStandardIcons"(arg0: $PackResources$$Type): $List<($IoSupplier<($InputStream)>)>
public "getMacIcon"(arg0: $PackResources$$Type): $IoSupplier<($InputStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IconSet$$Type = (("release") | ("snapshot"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IconSet$$Original = $IconSet;}
