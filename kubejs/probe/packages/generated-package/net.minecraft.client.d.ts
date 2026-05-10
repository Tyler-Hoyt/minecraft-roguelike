declare module "net.minecraft.client.Options" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$File, $File$$Type} from "java.io.File"
import {$List} from "java.util.List"
import {$TutorialSteps} from "net.minecraft.client.tutorial.TutorialSteps"
import {$NarratorStatus} from "net.minecraft.client.NarratorStatus"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$PrioritizeChunkUpdates} from "net.minecraft.client.PrioritizeChunkUpdates"
import {$ParticleStatus} from "net.minecraft.client.ParticleStatus"
import {$CameraType, $CameraType$$Type} from "net.minecraft.client.CameraType"
import {$PlayerModelPart$$Type} from "net.minecraft.world.entity.player.PlayerModelPart"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ClientInformation} from "net.minecraft.server.level.ClientInformation"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$ChatVisiblity} from "net.minecraft.world.entity.player.ChatVisiblity"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$AttackIndicatorStatus} from "net.minecraft.client.AttackIndicatorStatus"
import {$CloudStatus} from "net.minecraft.client.CloudStatus"
import {$GraphicsStatus} from "net.minecraft.client.GraphicsStatus"

export class $Options {
 "tutorialStep": $TutorialSteps
static readonly "RENDER_DISTANCE_REALLY_FAR": integer
static readonly "DEFAULT_SOUND_DEVICE": StringJS
readonly "keyChat": $KeyMapping
 "resourcePacks": $List<(StringJS)>
readonly "keyInventory": $KeyMapping
readonly "keyCommand": $KeyMapping
readonly "keySwapOffhand": $KeyMapping
readonly "keyHotbarSlots": ($KeyMapping)[]
readonly "keySpectatorOutlines": $KeyMapping
static readonly "RENDER_DISTANCE_NORMAL": integer
readonly "keySprint": $KeyMapping
readonly "keyAdvancements": $KeyMapping
static readonly "RENDER_DISTANCE_EXTREME": integer
readonly "keySaveHotbarActivator": $KeyMapping
 "advancedItemTooltips": boolean
 "fullscreenVideoModeString": StringJS
readonly "keyFullscreen": $KeyMapping
 "incompatibleResourcePacks": $List<(StringJS)>
 "languageCode": StringJS
static readonly "RENDER_DISTANCE_SHORT": integer
readonly "keyDrop": $KeyMapping
 "overrideHeight": integer
 "keyMappings": ($KeyMapping)[]
readonly "keyAttack": $KeyMapping
 "skipMultiplayerWarning": boolean
static readonly "RENDER_DISTANCE_FAR": integer
readonly "keyUp": $KeyMapping
readonly "keyJump": $KeyMapping
readonly "keyLoadHotbarActivator": $KeyMapping
 "onboardAccessibility": boolean
readonly "keyShift": $KeyMapping
 "smoothCamera": boolean
readonly "keyScreenshot": $KeyMapping
static readonly "AUTO_GUI_SCALE": integer
readonly "keyTogglePerspective": $KeyMapping
readonly "keySocialInteractions": $KeyMapping
 "pauseOnLostFocus": boolean
readonly "keyRight": $KeyMapping
 "lastMpIp": StringJS
 "syncWrites": boolean
readonly "keySmoothCamera": $KeyMapping
 "overrideWidth": integer
readonly "keyLeft": $KeyMapping
 "hideServerAddress": boolean
 "glDebugVerbosity": integer
static readonly "RENDER_DISTANCE_TINY": integer
readonly "keyPlayerList": $KeyMapping
static readonly "UNLIMITED_FRAMERATE_CUTOFF": integer
 "joinedFirstServer": boolean
 "hideBundleTutorial": boolean
readonly "keyUse": $KeyMapping
readonly "keyPickItem": $KeyMapping
readonly "keyDown": $KeyMapping
 "hideGui": boolean

constructor(arg0: $Minecraft$$Type, arg1: $File$$Type)

public "load"(arg0: boolean): void
public "load"(): void
public "save"(): void
public "getFile"(): $File
public "darkMojangStudiosBackground"(): $OptionInstance<(boolean)>
public "menuBackgroundBlurriness"(): $OptionInstance<(integer)>
public "setKey"(arg0: $KeyMapping$$Type, arg1: $InputConstants$Key$$Type): void
public "mainHand"(): $OptionInstance<($HumanoidArm)>
public "chatColors"(): $OptionInstance<(boolean)>
public "chatLinksPrompt"(): $OptionInstance<(boolean)>
public "touchscreen"(): $OptionInstance<(boolean)>
public "telemetryOptInExtra"(): $OptionInstance<(boolean)>
public "getEffectiveRenderDistance"(): integer
public "dumpOptionsForReport"(): StringJS
public "autoJump"(): $OptionInstance<(boolean)>
public "gamma"(): $OptionInstance<(double)>
public "rawMouseInput"(): $OptionInstance<(boolean)>
public "enableVsync"(): $OptionInstance<(boolean)>
public "mipmapLevels"(): $OptionInstance<(integer)>
public "chatScale"(): $OptionInstance<(double)>
public "fov"(): $OptionInstance<(integer)>
public "chatWidth"(): $OptionInstance<(double)>
public "glintSpeed"(): $OptionInstance<(double)>
public "bobView"(): $OptionInstance<(boolean)>
public "textBackgroundOpacity"(): $OptionInstance<(double)>
public "fullscreen"(): $OptionInstance<(boolean)>
public "narrator"(): $OptionInstance<($NarratorStatus)>
public "chatDelay"(): $OptionInstance<(double)>
public "simulationDistance"(): $OptionInstance<(integer)>
public "getBackgroundColor"(arg0: float): integer
public "getBackgroundColor"(arg0: integer): integer
public "chatOpacity"(): $OptionInstance<(double)>
public "hideSplashTexts"(): $OptionInstance<(boolean)>
public "operatorItemsTab"(): $OptionInstance<(boolean)>
public "hideLightningFlash"(): $OptionInstance<(boolean)>
public "onboardingAccessibilityFinished"(): void
public "particles"(): $OptionInstance<($ParticleStatus)>
public "guiScale"(): $OptionInstance<(integer)>
public "attackIndicator"(): $OptionInstance<($AttackIndicatorStatus)>
public "directionalAudio"(): $OptionInstance<(boolean)>
public "chatLineSpacing"(): $OptionInstance<(double)>
public "panoramaSpeed"(): $OptionInstance<(double)>
public "invertYMouse"(): $OptionInstance<(boolean)>
public "showSubtitles"(): $OptionInstance<(boolean)>
public "toggleSprint"(): $OptionInstance<(boolean)>
public "entityShadows"(): $OptionInstance<(boolean)>
public "sensitivity"(): $OptionInstance<(double)>
public "hideMatchedNames"(): $OptionInstance<(boolean)>
public "toggleCrouch"(): $OptionInstance<(boolean)>
public "onlyShowSecureChat"(): $OptionInstance<(boolean)>
public "chatHeightFocused"(): $OptionInstance<(double)>
public "autoSuggestions"(): $OptionInstance<(boolean)>
public "allowServerListing"(): $OptionInstance<(boolean)>
public "highContrast"(): $OptionInstance<(boolean)>
public "narratorHotkey"(): $OptionInstance<(boolean)>
public "useNativeTransport"(): boolean
public "screenEffectScale"(): $OptionInstance<(double)>
public "soundDevice"(): $OptionInstance<(StringJS)>
public "fovEffectScale"(): $OptionInstance<(double)>
public "damageTiltStrength"(): $OptionInstance<(double)>
public "isModelPartEnabled"(arg0: $PlayerModelPart$$Type): boolean
public "toggleModelPart"(arg0: $PlayerModelPart$$Type, arg1: boolean): void
public static "genericValueLabel"(arg0: $Component$$Type, arg1: $Component$$Type): $Component
public static "genericValueLabel"(arg0: $Component$$Type, arg1: integer): $Component
public "broadcastOptions"(): void
public "getCloudsType"(): $CloudStatus
public "loadSelectedResourcePacks"(arg0: $PackRepository$$Type): void
public "reducedDebugInfo"(): $OptionInstance<(boolean)>
public "renderDistance"(): $OptionInstance<(integer)>
public "notificationDisplayTime"(): $OptionInstance<(double)>
public "mouseWheelSensitivity"(): $OptionInstance<(double)>
public "showAutosaveIndicator"(): $OptionInstance<(boolean)>
public static "genericValueOrOffLabel"(arg0: $Component$$Type, arg1: integer): $Component
public "chatHeightUnfocused"(): $OptionInstance<(double)>
public "backgroundForChatOnly"(): $OptionInstance<(boolean)>
public "realmsNotifications"(): $OptionInstance<(boolean)>
public "updateResourcePacks"(arg0: $PackRepository$$Type): void
public "darknessEffectScale"(): $OptionInstance<(double)>
public "discreteMouseScroll"(): $OptionInstance<(boolean)>
public "getSoundSourceVolume"(arg0: $SoundSource$$Type): float
public "japaneseGlyphVariants"(): $OptionInstance<(boolean)>
public "prioritizeChunkUpdates"(): $OptionInstance<($PrioritizeChunkUpdates)>
public "entityDistanceScaling"(): $OptionInstance<(double)>
public "setServerRenderDistance"(arg0: integer): void
public "buildPlayerInformation"(): $ClientInformation
public "getBackgroundOpacity"(arg0: float): float
public "getMenuBackgroundBlurriness"(): integer
public "getSoundSourceOptionInstance"(arg0: $SoundSource$$Type): $OptionInstance<(double)>
public "chatLinks"(): $OptionInstance<(boolean)>
public "setCameraType"(arg0: $CameraType$$Type): void
public "getCameraType"(): $CameraType
public "chatVisibility"(): $OptionInstance<($ChatVisiblity)>
public "ambientOcclusion"(): $OptionInstance<(boolean)>
public "framerateLimit"(): $OptionInstance<(integer)>
public "glintStrength"(): $OptionInstance<(double)>
public "biomeBlendRadius"(): $OptionInstance<(integer)>
public "graphicsMode"(): $OptionInstance<($GraphicsStatus)>
public "cloudStatus"(): $OptionInstance<($CloudStatus)>
public "forceUnicodeFont"(): $OptionInstance<(boolean)>
get "file"(): $File
get "effectiveRenderDistance"(): integer
get "cloudsType"(): $CloudStatus
set "serverRenderDistance"(value: integer)
set "cameraType"(value: $CameraType$$Type)
get "cameraType"(): $CameraType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Options$$Type = ($Options);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Options$$Original = $Options;}
declare module "net.minecraft.client.OptionInstance$TooltipSupplier" {
import {$Tooltip, $Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"

export interface $OptionInstance$TooltipSupplier$$Interface<T> {

(arg0: T): $Tooltip$$Type
}

export class $OptionInstance$TooltipSupplier<T> implements $OptionInstance$TooltipSupplier$$Interface {
 "apply"(arg0: T): $Tooltip
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$TooltipSupplier$$Type<T> = ((arg0: T) => $Tooltip$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$TooltipSupplier$$Original<T> = $OptionInstance$TooltipSupplier<(T)>;}
declare module "net.minecraft.client.AttackIndicatorStatus" {
import {$Enum} from "java.lang.Enum"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $AttackIndicatorStatus extends $Enum<($AttackIndicatorStatus)> implements $OptionEnum$$Interface {
static readonly "CROSSHAIR": $AttackIndicatorStatus
static readonly "HOTBAR": $AttackIndicatorStatus
static readonly "OFF": $AttackIndicatorStatus

public static "values"(): ($AttackIndicatorStatus)[]
public static "valueOf"(arg0: StringJS): $AttackIndicatorStatus
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $AttackIndicatorStatus
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackIndicatorStatus$$Type = (("off") | ("crosshair") | ("hotbar"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttackIndicatorStatus$$Original = $AttackIndicatorStatus;}
declare module "net.minecraft.client.CommandHistory" {
import {$Collection} from "java.util.Collection"
import {$Path$$Type} from "java.nio.file.Path"

export class $CommandHistory {
constructor(arg0: $Path$$Type)

public "history"(): $Collection<(StringJS)>
public "addCommand"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandHistory$$Type = ($CommandHistory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandHistory$$Original = $CommandHistory;}
declare module "net.minecraft.client.User$Type" {
import {$Enum} from "java.lang.Enum"

export class $User$Type extends $Enum<($User$Type)> {
static readonly "MOJANG": $User$Type
static readonly "LEGACY": $User$Type
static readonly "MSA": $User$Type

public "getName"(): StringJS
public static "values"(): ($User$Type)[]
public static "valueOf"(arg0: StringJS): $User$Type
public static "byName"(arg0: StringJS): $User$Type
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $User$Type$$Type = (("legacy") | ("mojang") | ("msa"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $User$Type$$Original = $User$Type;}
declare module "net.minecraft.client.OptionInstance$Enum" {
import {$Optional} from "java.util.Optional"
import {$CycleButton$ValueListSupplier} from "net.minecraft.client.gui.components.CycleButton$ValueListSupplier"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function} from "java.util.function.Function"
import {$OptionInstance$CycleableValueSet$$Interface} from "net.minecraft.client.OptionInstance$CycleableValueSet"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$Record} from "java.lang.Record"

export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet$$Interface<(T)> {
constructor(arg0: $List$$Type<(T)>, arg1: $Codec$$Type<(T)>)

public "validateValue"(arg0: T): $Optional<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $List<(T)>
public "hashCode"(): integer
public "valueListSupplier"(): $CycleButton$ValueListSupplier<(T)>
public "codec"(): $Codec<(T)>
public "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$Enum$$Type<T> = ({"values"?: $List$$Type<(T)>, "codec"?: $Codec$$Type<(T)>}) | ([values?: $List$$Type<(T)>, codec?: $Codec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$Enum$$Original<T> = $OptionInstance$Enum<(T)>;}
declare module "net.minecraft.client.PrioritizeChunkUpdates" {
import {$Enum} from "java.lang.Enum"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $PrioritizeChunkUpdates extends $Enum<($PrioritizeChunkUpdates)> implements $OptionEnum$$Interface {
static readonly "NEARBY": $PrioritizeChunkUpdates
static readonly "NONE": $PrioritizeChunkUpdates
static readonly "PLAYER_AFFECTED": $PrioritizeChunkUpdates

public static "values"(): ($PrioritizeChunkUpdates)[]
public static "valueOf"(arg0: StringJS): $PrioritizeChunkUpdates
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $PrioritizeChunkUpdates
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrioritizeChunkUpdates$$Type = (("none") | ("player_affected") | ("nearby"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrioritizeChunkUpdates$$Original = $PrioritizeChunkUpdates;}
declare module "net.minecraft.client.MouseHandler" {
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $MouseHandler {
constructor(arg0: $Minecraft$$Type)

public "setup"(arg0: long): void
public "handleAccumulatedMovement"(): void
public "xpos"(): double
public "ypos"(): double
public "grabMouse"(): void
public "isMouseGrabbed"(): boolean
public "isRightPressed"(): boolean
public "isMiddlePressed"(): boolean
public "isLeftPressed"(): boolean
public "getYVelocity"(): double
public "getXVelocity"(): double
public "setIgnoreFirstMove"(): void
public "cursorEntered"(): void
public "releaseMouse"(): void
set "up"(value: long)
get "mouseGrabbed"(): boolean
get "rightPressed"(): boolean
get "middlePressed"(): boolean
get "leftPressed"(): boolean
get "YVelocity"(): double
get "XVelocity"(): double
get "ignoreFirstMove"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandler$$Type = ($MouseHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseHandler$$Original = $MouseHandler;}
declare module "net.minecraft.client.CameraType" {
import {$Enum} from "java.lang.Enum"

export class $CameraType extends $Enum<($CameraType)> {
static readonly "THIRD_PERSON_BACK": $CameraType
static readonly "THIRD_PERSON_FRONT": $CameraType
static readonly "FIRST_PERSON": $CameraType

public static "values"(): ($CameraType)[]
public static "valueOf"(arg0: StringJS): $CameraType
public "isMirrored"(): boolean
public "cycle"(): $CameraType
public "isFirstPerson"(): boolean
get "mirrored"(): boolean
get "firstPerson"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraType$$Type = (("first_person") | ("third_person_back") | ("third_person_front"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CameraType$$Original = $CameraType;}
declare module "net.minecraft.client.ClientRecipeBook" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$List} from "java.util.List"
import {$RecipeCollection} from "net.minecraft.client.gui.screens.recipebook.RecipeCollection"
import {$RecipeBook} from "net.minecraft.stats.RecipeBook"
import {$RecipeBookCategories$$Type} from "net.minecraft.client.RecipeBookCategories"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $ClientRecipeBook extends $RecipeBook {
constructor()

public "getCollections"(): $List<($RecipeCollection)>
public "setupCollections"(arg0: $Iterable$$Type<($RecipeHolder$$Type<(never)>)>, arg1: $RegistryAccess$$Type): void
public "getCollection"(arg0: $RecipeBookCategories$$Type): $List<($RecipeCollection)>
get "collections"(): $List<($RecipeCollection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeBook$$Type = ($ClientRecipeBook);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientRecipeBook$$Original = $ClientRecipeBook;}
declare module "net.minecraft.client.GraphicsStatus" {
import {$Enum} from "java.lang.Enum"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $GraphicsStatus extends $Enum<($GraphicsStatus)> implements $OptionEnum$$Interface {
static readonly "FANCY": $GraphicsStatus
static readonly "FABULOUS": $GraphicsStatus
static readonly "FAST": $GraphicsStatus

public "toString"(): StringJS
public static "values"(): ($GraphicsStatus)[]
public static "valueOf"(arg0: StringJS): $GraphicsStatus
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $GraphicsStatus
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphicsStatus$$Type = (("fast") | ("fancy") | ("fabulous"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GraphicsStatus$$Original = $GraphicsStatus;}
declare module "net.minecraft.client.NarratorStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $NarratorStatus extends $Enum<($NarratorStatus)> {
static readonly "SYSTEM": $NarratorStatus
static readonly "ALL": $NarratorStatus
static readonly "CHAT": $NarratorStatus
static readonly "OFF": $NarratorStatus

public "getName"(): $Component
public static "values"(): ($NarratorStatus)[]
public static "valueOf"(arg0: StringJS): $NarratorStatus
public "getId"(): integer
public "shouldNarrateSystem"(): boolean
public static "byId"(arg0: integer): $NarratorStatus
public "shouldNarrateChat"(): boolean
get "name"(): $Component
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratorStatus$$Type = (("off") | ("all") | ("chat") | ("system"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratorStatus$$Original = $NarratorStatus;}
declare module "net.minecraft.client.OptionInstance" {
import {$OptionInstance$TooltipSupplier, $OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$OptionInstance$CaptionBasedToString, $OptionInstance$CaptionBasedToString$$Type} from "net.minecraft.client.OptionInstance$CaptionBasedToString"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$OptionInstance$ValueSet, $OptionInstance$ValueSet$$Type} from "net.minecraft.client.OptionInstance$ValueSet"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$OptionEnum} from "net.minecraft.util.OptionEnum"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$OptionInstance$Enum} from "net.minecraft.client.OptionInstance$Enum"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $OptionInstance<T> {
readonly "caption": $Component
static readonly "BOOLEAN_VALUES": $OptionInstance$Enum<(boolean)>
static readonly "BOOLEAN_TO_STRING": $OptionInstance$CaptionBasedToString<(boolean)>

constructor(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(T)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(T)>, arg3: $OptionInstance$ValueSet$$Type<(T)>, arg4: $Codec$$Type<(T)>, arg5: T, arg6: $Consumer$$Type<(T)>)
constructor(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(T)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(T)>, arg3: $OptionInstance$ValueSet$$Type<(T)>, arg4: T, arg5: $Consumer$$Type<(T)>)

public "get"(): T
public "toString"(): StringJS
public "values"(): $OptionInstance$ValueSet<(T)>
public "set"(arg0: T): void
public static "noTooltip"<T>(): $OptionInstance$TooltipSupplier<(T)>
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Consumer$$Type<(T)>): $AbstractWidget
public "createButton"(arg0: $Options$$Type): $AbstractWidget
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer): $AbstractWidget
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(boolean)>, arg3: boolean, arg4: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean, arg3: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: boolean): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: boolean, arg2: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "forOptionEnum"<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<(T)>
public static "cachedConstantTooltip"<T>(arg0: $Component$$Type): $OptionInstance$TooltipSupplier<(T)>
public "codec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$$Type<T> = ($OptionInstance<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$$Original<T> = $OptionInstance<(T)>;}
declare module "net.minecraft.client.StringSplitter$LinePosConsumer" {
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"

export interface $StringSplitter$LinePosConsumer$$Interface {

(arg0: $Style, arg1: integer, arg2: integer): void
}

export class $StringSplitter$LinePosConsumer implements $StringSplitter$LinePosConsumer$$Interface {
 "accept"(arg0: $Style$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitter$LinePosConsumer$$Type = ((arg0: $Style, arg1: integer, arg2: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringSplitter$LinePosConsumer$$Original = $StringSplitter$LinePosConsumer;}
declare module "net.minecraft.client.ParticleStatus" {
import {$Enum} from "java.lang.Enum"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $ParticleStatus extends $Enum<($ParticleStatus)> implements $OptionEnum$$Interface {
static readonly "ALL": $ParticleStatus
static readonly "DECREASED": $ParticleStatus
static readonly "MINIMAL": $ParticleStatus

public static "values"(): ($ParticleStatus)[]
public static "valueOf"(arg0: StringJS): $ParticleStatus
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $ParticleStatus
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleStatus$$Type = (("all") | ("decreased") | ("minimal"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleStatus$$Original = $ParticleStatus;}
declare module "net.minecraft.client.InputType" {
import {$Enum} from "java.lang.Enum"

export class $InputType extends $Enum<($InputType)> {
static readonly "MOUSE": $InputType
static readonly "KEYBOARD_TAB": $InputType
static readonly "NONE": $InputType
static readonly "KEYBOARD_ARROW": $InputType

public static "values"(): ($InputType)[]
public static "valueOf"(arg0: StringJS): $InputType
public "isMouse"(): boolean
public "isKeyboard"(): boolean
get "mouse"(): boolean
get "keyboard"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputType$$Type = (("none") | ("mouse") | ("keyboard_arrow") | ("keyboard_tab"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputType$$Original = $InputType;}
declare module "net.minecraft.client.StringSplitter" {
import {$StringSplitter$WidthProvider$$Type} from "net.minecraft.client.StringSplitter$WidthProvider"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List} from "java.util.List"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$StringSplitter$LinePosConsumer$$Type} from "net.minecraft.client.StringSplitter$LinePosConsumer"

export class $StringSplitter {
constructor(arg0: $StringSplitter$WidthProvider$$Type)

public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type, arg3: boolean, arg4: $StringSplitter$LinePosConsumer$$Type): void
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $FormattedText$$Type): $List<($FormattedText)>
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $BiConsumer$$Type<($FormattedText), (boolean)>): void
public "stringWidth"(arg0: StringJS): float
public "stringWidth"(arg0: $FormattedCharSequence$$Type): float
public "stringWidth"(arg0: $FormattedText$$Type): float
public "formattedHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "formattedIndexByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "headByWidth"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $FormattedText
public "plainTailByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "plainHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "componentStyleAtWidth"(arg0: $FormattedCharSequence$$Type, arg1: integer): $Style
public "componentStyleAtWidth"(arg0: $FormattedText$$Type, arg1: integer): $Style
public "findLineBreak"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public static "getWordPosition"(arg0: StringJS, arg1: integer, arg2: integer, arg3: boolean): integer
public "plainIndexAtWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitter$$Type = ($StringSplitter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringSplitter$$Original = $StringSplitter;}
declare module "net.minecraft.client.RecipeBookCategories" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Enum} from "java.lang.Enum"
import {$List} from "java.util.List"
import {$RecipeBookType$$Type} from "net.minecraft.world.inventory.RecipeBookType"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $RecipeBookCategories extends $Enum<($RecipeBookCategories)> implements $IExtensibleEnum$$Interface {
static readonly "CRAFTING_EQUIPMENT": $RecipeBookCategories
static readonly "BLAST_FURNACE_BLOCKS": $RecipeBookCategories
static readonly "BLAST_FURNACE_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "CRAFTING_REDSTONE": $RecipeBookCategories
static readonly "CRAFTING_MISC": $RecipeBookCategories
static readonly "CAMPFIRE": $RecipeBookCategories
static readonly "FURNACE_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "CRAFTING_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "SMITHING": $RecipeBookCategories
static readonly "FURNACE_FOOD": $RecipeBookCategories
static readonly "CRAFTING_SEARCH": $RecipeBookCategories
static readonly "BLAST_FURNACE_MISC": $RecipeBookCategories
static readonly "SMOKER_FOOD": $RecipeBookCategories
static readonly "CRAFTING_BUILDING_BLOCKS": $RecipeBookCategories
static readonly "SMOKER_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "FURNACE_BLOCKS": $RecipeBookCategories
static readonly "SMOKER_SEARCH": $RecipeBookCategories
static readonly "STONECUTTER": $RecipeBookCategories
static readonly "FURNACE_SEARCH": $RecipeBookCategories
static readonly "BLAST_FURNACE_SEARCH": $RecipeBookCategories
static readonly "UNKNOWN": $RecipeBookCategories
static readonly "FURNACE_MISC": $RecipeBookCategories
static readonly "AGGREGATE_CATEGORIES": $Map<($RecipeBookCategories), ($List<($RecipeBookCategories)>)>

public static "values"(): ($RecipeBookCategories)[]
public static "valueOf"(arg0: StringJS): $RecipeBookCategories
public "getIconItems"(): $List<($ItemStack)>
public static "getExtensionInfo"(): $ExtensionInfo
public static "getCategories"(arg0: $RecipeBookType$$Type): $List<($RecipeBookCategories)>
get "iconItems"(): $List<($ItemStack)>
public static get "extensionInfo"(): $ExtensionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookCategories$$Type = (("crafting_search") | ("crafting_building_blocks") | ("crafting_redstone") | ("crafting_equipment") | ("crafting_misc") | ("furnace_search") | ("furnace_food") | ("furnace_blocks") | ("furnace_misc") | ("blast_furnace_search") | ("blast_furnace_blocks") | ("blast_furnace_misc") | ("smoker_search") | ("smoker_food") | ("stonecutter") | ("smithing") | ("campfire") | ("unknown"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookCategories$$Original = $RecipeBookCategories;}
declare module "net.minecraft.client.User" {
import {$User$Type, $User$Type$$Type} from "net.minecraft.client.User$Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"

export class $User {
constructor(arg0: StringJS, arg1: $UUID$$Type, arg2: StringJS, arg3: (StringJS)?, arg4: (StringJS)?, arg5: $User$Type$$Type)

public "getName"(): StringJS
public "getType"(): $User$Type
public "getClientId"(): $Optional<(StringJS)>
public "getAccessToken"(): StringJS
public "getXuid"(): $Optional<(StringJS)>
public "getSessionId"(): StringJS
public "getProfileId"(): $UUID
get "name"(): StringJS
get "type"(): $User$Type
get "clientId"(): $Optional<(StringJS)>
get "accessToken"(): StringJS
get "xuid"(): $Optional<(StringJS)>
get "sessionId"(): StringJS
get "profileId"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $User$$Type = ($User);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $User$$Original = $User;}
declare module "net.minecraft.client.GameNarrator" {
import {$NarratorStatus$$Type} from "net.minecraft.client.NarratorStatus"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $GameNarrator {
static readonly "NO_TITLE": $Component

constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "destroy"(): void
public "isActive"(): boolean
public "say"(arg0: $Component$$Type): void
public "checkStatus"(arg0: boolean): void
public "sayNow"(arg0: $Component$$Type): void
public "sayNow"(arg0: StringJS): void
public "sayChat"(arg0: $Component$$Type): void
public "updateNarratorStatus"(arg0: $NarratorStatus$$Type): void
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameNarrator$$Type = ($GameNarrator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameNarrator$$Original = $GameNarrator;}
declare module "net.minecraft.client.StringSplitter$WidthProvider" {
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"

export interface $StringSplitter$WidthProvider$$Interface {

(arg0: integer, arg1: $Style): float
}

export class $StringSplitter$WidthProvider implements $StringSplitter$WidthProvider$$Interface {
 "getWidth"(arg0: integer, arg1: $Style$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitter$WidthProvider$$Type = ((arg0: integer, arg1: $Style) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringSplitter$WidthProvider$$Original = $StringSplitter$WidthProvider;}
declare module "net.minecraft.client.Minecraft$GameLoadCookie" {
import {$RealmsClient, $RealmsClient$$Type} from "com.mojang.realmsclient.client.RealmsClient"
import {$GameConfig$QuickPlayData, $GameConfig$QuickPlayData$$Type} from "net.minecraft.client.main.GameConfig$QuickPlayData"
import {$Record} from "java.lang.Record"

export class $Minecraft$GameLoadCookie extends $Record {
constructor(realmsClient: $RealmsClient$$Type, quickPlayData: $GameConfig$QuickPlayData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "quickPlayData"(): $GameConfig$QuickPlayData
public "realmsClient"(): $RealmsClient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minecraft$GameLoadCookie$$Type = ({"quickPlayData"?: $GameConfig$QuickPlayData$$Type, "realmsClient"?: $RealmsClient$$Type}) | ([quickPlayData?: $GameConfig$QuickPlayData$$Type, realmsClient?: $RealmsClient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minecraft$GameLoadCookie$$Original = $Minecraft$GameLoadCookie;}
declare module "net.minecraft.client.GuiMessageTag$Icon" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Enum} from "java.lang.Enum"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $GuiMessageTag$Icon extends $Enum<($GuiMessageTag$Icon)> {
static readonly "CHAT_MODIFIED": $GuiMessageTag$Icon
readonly "sprite": $ResourceLocation
readonly "width": integer
readonly "height": integer

public static "values"(): ($GuiMessageTag$Icon)[]
public static "valueOf"(arg0: StringJS): $GuiMessageTag$Icon
public "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessageTag$Icon$$Type = (("chat_modified"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessageTag$Icon$$Original = $GuiMessageTag$Icon;}
declare module "net.minecraft.client.GuiMessageTag" {
import {$GuiMessageTag$Icon, $GuiMessageTag$Icon$$Type} from "net.minecraft.client.GuiMessageTag$Icon"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $GuiMessageTag extends $Record {
constructor(arg0: integer, arg1: $GuiMessageTag$Icon$$Type, arg2: $Component$$Type, arg3: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "system"(): $GuiMessageTag
public "text"(): $Component
public "icon"(): $GuiMessageTag$Icon
public static "chatNotSecure"(): $GuiMessageTag
public static "chatModified"(arg0: StringJS): $GuiMessageTag
public "indicatorColor"(): integer
public static "systemSinglePlayer"(): $GuiMessageTag
public "logTag"(): StringJS
public static "chatError"(): $GuiMessageTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessageTag$$Type = ({"icon"?: $GuiMessageTag$Icon$$Type, "logTag"?: StringJS, "text"?: $Component$$Type, "indicatorColor"?: integer}) | ([icon?: $GuiMessageTag$Icon$$Type, logTag?: StringJS, text?: $Component$$Type, indicatorColor?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessageTag$$Original = $GuiMessageTag;}
declare module "net.minecraft.client.KeyMapping" {
import {$KeyModifier, $KeyModifier$$Type} from "net.neoforged.neoforge.client.settings.KeyModifier"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Supplier} from "java.util.function.Supplier"
import {$IKeyConflictContext, $IKeyConflictContext$$Type} from "net.neoforged.neoforge.client.settings.IKeyConflictContext"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$InputConstants$Type$$Type} from "com.mojang.blaze3d.platform.InputConstants$Type"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IKeyMappingExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IKeyMappingExtension"

export class $KeyMapping implements $Comparable$$Interface<($KeyMapping)>, $IKeyMappingExtension$$Interface {
static readonly "CATEGORY_INTERFACE": StringJS
static readonly "CATEGORY_MULTIPLAYER": StringJS
static readonly "CATEGORY_CREATIVE": StringJS
static readonly "CATEGORY_MOVEMENT": StringJS
static readonly "CATEGORY_GAMEPLAY": StringJS
static readonly "CATEGORY_MISC": StringJS
 "key": $InputConstants$Key
static readonly "CATEGORY_INVENTORY": StringJS

constructor(arg0: StringJS, arg1: $InputConstants$Type$$Type, arg2: integer, arg3: StringJS)
constructor(arg0: StringJS, arg1: integer, arg2: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Key$$Type, arg4: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Type$$Type, arg4: integer, arg5: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Type$$Type, arg3: integer, arg4: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Key$$Type, arg3: StringJS)

public "getName"(): StringJS
public "compareTo"(arg0: $KeyMapping$$Type): integer
public "compareTo"(arg0: any): integer
public "matches"(arg0: integer, arg1: integer): boolean
public "getKey"(): $InputConstants$Key
public static "set"(arg0: $InputConstants$Key$$Type, arg1: boolean): void
public "isDefault"(): boolean
public static "setAll"(): void
public static "click"(arg0: $InputConstants$Key$$Type): void
public "getCategory"(): StringJS
public "getDefaultKey"(): $InputConstants$Key
public "setKey"(arg0: $InputConstants$Key$$Type): void
public static "resetToggleKeys"(): void
public "matchesMouse"(arg0: integer): boolean
public "same"(arg0: $KeyMapping$$Type): boolean
public "setDown"(arg0: boolean): void
public "saveString"(): StringJS
public static "releaseAll"(): void
public "isDown"(): boolean
public static "resetMapping"(): void
public "getKeyModifier"(): $KeyModifier
public "setKeyModifierAndCode"(arg0: $KeyModifier$$Type, arg1: $InputConstants$Key$$Type): void
public "getDefaultKeyModifier"(): $KeyModifier
public "getKeyConflictContext"(): $IKeyConflictContext
public "getTranslatedKeyMessage"(): $Component
public "setKeyConflictContext"(arg0: $IKeyConflictContext$$Type): void
public "isUnbound"(): boolean
public "consumeClick"(): boolean
public static "createNameSupplier"(arg0: StringJS): $Supplier<($Component)>
public "getDisplayName"(): $Component
public "setToDefault"(): void
public "isActiveAndMatches"(arg0: $InputConstants$Key$$Type): boolean
public "isConflictContextAndModifierActive"(): boolean
public "hasKeyModifierConflict"(arg0: $KeyMapping$$Type): boolean
get "name"(): StringJS
get "default"(): boolean
public static get "all"(): void
get "category"(): StringJS
get "defaultKey"(): $InputConstants$Key
set "down"(value: boolean)
get "down"(): boolean
get "keyModifier"(): $KeyModifier
get "defaultKeyModifier"(): $KeyModifier
get "keyConflictContext"(): $IKeyConflictContext
get "translatedKeyMessage"(): $Component
set "keyConflictContext"(value: $IKeyConflictContext$$Type)
get "unbound"(): boolean
get "displayName"(): $Component
get "toDefault"(): void
get "conflictContextAndModifierActive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMapping$$Type = ($KeyMapping);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyMapping$$Original = $KeyMapping;}
declare module "net.minecraft.client.OptionInstance$ValueSet" {
import {$OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function} from "java.util.function.Function"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionInstance$ValueSet$$Interface<T> {
}

export class $OptionInstance$ValueSet<T> implements $OptionInstance$ValueSet$$Interface {
 "validateValue"(arg0: T): $Optional<(T)>
 "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
 "codec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$ValueSet$$Type<T> = ($OptionInstance$ValueSet<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$ValueSet$$Original<T> = $OptionInstance$ValueSet<(T)>;}
declare module "net.minecraft.client.Minecraft" {
import {$MultiPlayerGameMode} from "net.minecraft.client.multiplayer.MultiPlayerGameMode"
import {$RenderBuffers} from "net.minecraft.client.renderer.RenderBuffers"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$PlayerSocialManager} from "net.minecraft.client.gui.screens.social.PlayerSocialManager"
import {$MobEffectTextureManager} from "net.minecraft.client.resources.MobEffectTextureManager"
import {$ClientPacketListener} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$Minecraft$ChatStatus} from "net.minecraft.client.Minecraft$ChatStatus"
import {$ServerData} from "net.minecraft.client.multiplayer.ServerData"
import {$LocalPlayer} from "net.minecraft.client.player.LocalPlayer"
import {$Proxy} from "java.net.Proxy"
import {$MinecraftClientKJS$$Interface} from "dev.latvian.mods.kubejs.core.MinecraftClientKJS"
import {$InputType, $InputType$$Type} from "net.minecraft.client.InputType"
import {$MusicManager} from "net.minecraft.client.sounds.MusicManager"
import {$PaintingTextureManager} from "net.minecraft.client.resources.PaintingTextureManager"
import {$GameConfig$$Type} from "net.minecraft.client.main.GameConfig"
import {$ChatListener} from "net.minecraft.client.multiplayer.chat.ChatListener"
import {$ScheduledEvents$ScheduledEvent} from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"
import {$MouseHandler} from "net.minecraft.client.MouseHandler"
import {$ProfileKeyPairManager} from "net.minecraft.client.multiplayer.ProfileKeyPairManager"
import {$GameRenderer} from "net.minecraft.client.renderer.GameRenderer"
import {$WindowEventHandler$$Interface} from "com.mojang.blaze3d.platform.WindowEventHandler"
import {$CrashReport, $CrashReport$$Type} from "net.minecraft.CrashReport"
import {$SkinManager} from "net.minecraft.client.resources.SkinManager"
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$Options, $Options$$Type} from "net.minecraft.client.Options"
import {$Tutorial} from "net.minecraft.client.tutorial.Tutorial"
import {$TextureManager} from "net.minecraft.client.renderer.texture.TextureManager"
import {$Window} from "com.mojang.blaze3d.platform.Window"
import {$Music} from "net.minecraft.sounds.Music"
import {$EntityModelSet} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ResourceManager} from "net.minecraft.server.packs.resources.ResourceManager"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$DirectoryValidator} from "net.minecraft.world.level.validation.DirectoryValidator"
import {$ReportingContext} from "net.minecraft.client.multiplayer.chat.report.ReportingContext"
import {$IMinecraftExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IMinecraftExtension"
import {$Font} from "net.minecraft.client.gui.Font"
import {$FontManager} from "net.minecraft.client.gui.font.FontManager"
import {$Minecraft$GameLoadCookie$$Type} from "net.minecraft.client.Minecraft$GameLoadCookie"
import {$DebugScreenOverlay} from "net.minecraft.client.gui.components.DebugScreenOverlay"
import {$WorldStem$$Type} from "net.minecraft.server.WorldStem"
import {$Function} from "java.util.function.Function"
import {$SoundManager} from "net.minecraft.client.sounds.SoundManager"
import {$KeyboardHandler} from "net.minecraft.client.KeyboardHandler"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$RenderTarget} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$User} from "net.minecraft.client.User"
import {$SplashManager} from "net.minecraft.client.resources.SplashManager"
import {$LevelRenderer} from "net.minecraft.client.renderer.LevelRenderer"
import {$GpuWarnlistManager} from "net.minecraft.client.renderer.GpuWarnlistManager"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$ScheduledEvents$Callback$$Type} from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import {$GameProfile} from "com.mojang.authlib.GameProfile"
import {$RealmsDataFetcher} from "com.mojang.realmsclient.gui.RealmsDataFetcher"
import {$ParticleEngine} from "net.minecraft.client.particle.ParticleEngine"
import {$ToastComponent} from "net.minecraft.client.gui.components.toasts.ToastComponent"
import {$DataFixer} from "com.mojang.datafixers.DataFixer"
import {$Overlay, $Overlay$$Type} from "net.minecraft.client.gui.screens.Overlay"
import {$ItemRenderer} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$ProfilerFiller} from "net.minecraft.util.profiling.ProfilerFiller"
import {$VanillaPackResources} from "net.minecraft.server.packs.VanillaPackResources"
import {$ReceivingLevelScreen$Reason$$Type} from "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason"
import {$TickDuration$$Type} from "dev.latvian.mods.kubejs.util.TickDuration"
import {$Gui} from "net.minecraft.client.gui.Gui"
import {$CommandHistory} from "net.minecraft.client.CommandHistory"
import {$SignatureValidator} from "net.minecraft.util.SignatureValidator"
import {$File, $File$$Type} from "java.io.File"
import {$HitResult} from "net.minecraft.world.phys.HitResult"
import {$Locale} from "java.util.Locale"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$GameNarrator} from "net.minecraft.client.GameNarrator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockEntityRenderDispatcher} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$HotbarManager} from "net.minecraft.client.HotbarManager"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$GuiSpriteManager} from "net.minecraft.client.gui.GuiSpriteManager"
import {$IntegratedServer} from "net.minecraft.client.server.IntegratedServer"
import {$LevelStorageSource} from "net.minecraft.world.level.storage.LevelStorageSource"
import {$BanDetails} from "com.mojang.authlib.minecraft.BanDetails"
import {$DeltaTracker} from "net.minecraft.client.DeltaTracker"
import {$DownloadedPackSource} from "net.minecraft.client.resources.server.DownloadedPackSource"
import {$StoringChunkProgressListener} from "net.minecraft.server.level.progress.StoringChunkProgressListener"
import {$Path} from "java.nio.file.Path"
import {$UUID$$Type} from "java.util.UUID"
import {$ScheduledEvents} from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import {$Runnable} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockRenderDispatcher} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$DebugRenderer} from "net.minecraft.client.renderer.debug.DebugRenderer"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MapDecorationTextureManager} from "net.minecraft.client.resources.MapDecorationTextureManager"
import {$QuickPlayLog} from "net.minecraft.client.quickplay.QuickPlayLog"
import {$PackRepository, $PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$LanguageManager, $LanguageManager$$Type} from "net.minecraft.client.resources.language.LanguageManager"
import {$KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$ModelManager} from "net.minecraft.client.resources.model.ModelManager"
import {$BlockColors} from "net.minecraft.client.color.block.BlockColors"
import {$WorldOpenFlows} from "net.minecraft.client.gui.screens.worldselection.WorldOpenFlows"
import {$ItemColors} from "net.minecraft.client.color.item.ItemColors"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$ReportEnvironment$$Type} from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment"
import {$ClientTelemetryManager} from "net.minecraft.client.telemetry.ClientTelemetryManager"

export class $Minecraft extends $ReentrantBlockableEventLoop<($Runnable)> implements $WindowEventHandler$$Interface, $IMinecraftExtension$$Interface, $MinecraftClientKJS$$Interface {
 "crosshairPickEntity": $Entity
 "screen": $Screen
 "cameraEntity": $Entity
 "sectionVisibility": boolean
static readonly "ON_OSX": boolean
readonly "mouseHandler": $MouseHandler
static readonly "UNIFORM_FONT": $ResourceLocation
readonly "gameRenderer": $GameRenderer
 "wireframe": boolean
readonly "options": $Options
readonly "levelRenderer": $LevelRenderer
 "player": $LocalPlayer
readonly "fontFilterFishy": $Font
 "level": $ClientLevel
readonly "gameDirectory": $File
 "sectionPath": boolean
readonly "debugRenderer": $DebugRenderer
 "noRender": boolean
static readonly "DEFAULT_FONT": $ResourceLocation
 "fpsString": StringJS
readonly "keyboardHandler": $KeyboardHandler
readonly "fontManager": $FontManager
static readonly "UPDATE_DRIVERS_ADVICE": StringJS
readonly "particleEngine": $ParticleEngine
readonly "gui": $Gui
 "gameMode": $MultiPlayerGameMode
static readonly "ALT_FONT": $ResourceLocation
 "hitResult": $HitResult
 "smartCull": boolean
readonly "font": $Font

constructor(arg0: $GameConfig$$Type)

public "getConnection"(): $ClientPacketListener
public "run"(): void
public static "getInstance"(): $Minecraft
public "stop"(): void
public "destroy"(): void
public "close"(): void
public "tick"(): void
public "setLevel"(arg0: $ClientLevel$$Type, arg1: $ReceivingLevelScreen$Reason$$Type): void
public static "crash"(arg0: $Minecraft$$Type, arg1: $File$$Type, arg2: $CrashReport$$Type): void
public "isRunning"(): boolean
public "getResourcePackDirectory"(): $Path
public "getPaintingTextures"(): $PaintingTextureManager
public "getMobEffectTextures"(): $MobEffectTextureManager
public "telemetryOptInExtra"(): boolean
public "shouldEntityAppearGlowing"(arg0: $Entity$$Type): boolean
public "grabPanoramixScreenshot"(arg0: $File$$Type, arg1: integer, arg2: integer): $Component
public "getTelemetryManager"(): $ClientTelemetryManager
public static "useAmbientOcclusion"(): boolean
public "extraTelemetryAvailable"(): boolean
public "getMinecraftSessionService"(): $MinecraftSessionService
public "getProfileKeyPairManager"(): $ProfileKeyPairManager
public "showOnlyReducedInfo"(): boolean
public "getMapDecorationTextures"(): $MapDecorationTextureManager
public "getResourcePackRepository"(): $PackRepository
public static "useShaderTransparency"(): boolean
public "getSituationalMusic"(): $Music
public "createWorldOpenFlows"(): $WorldOpenFlows
public "getGpuWarnlistManager"(): $GpuWarnlistManager
public "updateReportEnvironment"(arg0: $ReportEnvironment$$Type): void
public "getDownloadedPackSource"(): $DownloadedPackSource
public "debugFpsMeterKeyPress"(arg0: integer): void
public "getSingleplayerServer"(): $IntegratedServer
public "debugClientMetricsStart"(arg0: $Consumer$$Type<($Component)>): boolean
public "hasSingleplayerServer"(): boolean
public "getProfiler"(): $ProfilerFiller
public "getResourceManager"(): $ResourceManager
public "getBlockRenderer"(): $BlockRenderDispatcher
public "resizeDisplay"(): void
public "isGameLoadFinished"(): boolean
public "multiplayerBan"(): $BanDetails
public static "checkModStatus"(): $ModCheck
public "getCurrentServer"(): $ServerData
public "updateTitle"(): void
public "clearDownloadedResourcePacks"(): void
public "handler$zfl000$transition$fillReport"(theCrash: $CrashReport$$Type, ci: $CallbackInfoReturnable$$Type): void
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "disconnect"(arg0: $Screen$$Type): void
public "disconnect"(arg0: $Screen$$Type, arg1: boolean): void
public "disconnect"(): void
public "getToasts"(): $ToastComponent
public "setScreen"(arg0: $Screen$$Type): void
public "delayCrash"(arg0: $CrashReport$$Type): void
public "fillReport"(arg0: $CrashReport$$Type): $CrashReport
public static "fillReport"(arg0: $Minecraft$$Type, arg1: $LanguageManager$$Type, arg2: StringJS, arg3: $Options$$Type, arg4: $CrashReport$$Type): void
public "getProxy"(): $Proxy
public "getGuiSprites"(): $GuiSpriteManager
public "getFps"(): integer
public "pauseGame"(arg0: boolean): void
public "isBlocked"(arg0: $UUID$$Type): boolean
public "getUser"(): $User
public "isDemo"(): boolean
public "isPaused"(): boolean
public "renderBuffers"(): $RenderBuffers
public "allowsMultiplayer"(): boolean
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "getMainRenderTarget"(): $RenderTarget
public "clearResourcePacksOnError"(arg0: $Throwable$$Type, arg1: $Component$$Type, arg2: $Minecraft$GameLoadCookie$$Type): void
public "reloadResourcePacks"(): $CompletableFuture<(void)>
public "emergencySaveAndCrash"(arg0: $CrashReport$$Type): void
public "getTimer"(): $DeltaTracker
public "getTextureManager"(): $TextureManager
public "getChatListener"(): $ChatListener
public "getNarrator"(): $GameNarrator
public "getLastInputType"(): $InputType
public "getTitle"(): StringJS
public "getSoundManager"(): $SoundManager
public "setCameraEntity"(arg0: $Entity$$Type): void
public "getFixerUpper"(): $DataFixer
public "getTextureAtlas"(arg0: $ResourceLocation$$Type): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public static "getLauncherBrand"(): StringJS
public "updateMaxMipLevel"(arg0: integer): void
public "isSingleplayer"(): boolean
public "getItemColors"(): $ItemColors
public "getEntityModels"(): $EntityModelSet
public "getSkinManager"(): $SkinManager
public "getTutorial"(): $Tutorial
public "getBlockColors"(): $BlockColors
public "isWindowActive"(): boolean
public "delayTextureReload"(): $CompletableFuture<(void)>
public "getLanguageManager"(): $LanguageManager
public "getHotbarManager"(): $HotbarManager
public "getSplashManager"(): $SplashManager
public "isLocalPlayer"(arg0: $UUID$$Type): boolean
public "getGameProfile"(): $GameProfile
public "getItemRenderer"(): $ItemRenderer
public "getOverlay"(): $Overlay
public "getCameraEntity"(): $Entity
public "getMusicManager"(): $MusicManager
public "getGpuUtilization"(): double
public static "useFancyGraphics"(): boolean
public "allowsTelemetry"(): boolean
public "forceSetScreen"(arg0: $Screen$$Type): void
public "isNameBanned"(): boolean
public static "renderNames"(): boolean
public "allowsRealms"(): boolean
public "clearClientLevel"(arg0: $Screen$$Type): void
public "doWorldLoad"(arg0: $LevelStorageSource$LevelStorageAccess$$Type, arg1: $PackRepository$$Type, arg2: $WorldStem$$Type, arg3: boolean): void
public "setOverlay"(arg0: $Overlay$$Type): void
public "getWindow"(): $Window
public "setWindowActive"(arg0: boolean): void
public "isLocalServer"(): boolean
public "directoryValidator"(): $DirectoryValidator
public "realmsDataFetcher"(): $RealmsDataFetcher
public "quickPlayLog"(): $QuickPlayLog
public "commandHistory"(): $CommandHistory
public "prepareForMultiplayer"(): void
public "getReportingContext"(): $ReportingContext
public "getPlayerSocialManager"(): $PlayerSocialManager
public "canValidateProfileKeys"(): boolean
public "getScheduledEvents"(): $ScheduledEvents
public "isTextFilteringEnabled"(): boolean
public "getProgressListener"(): $StoringChunkProgressListener
public "cursorEntered"(): void
public "getFrameTimeNs"(): long
public "getLaunchedVersion"(): StringJS
public "getChatStatus"(): $Minecraft$ChatStatus
public "getModelManager"(): $ModelManager
public "setLastInputType"(arg0: $InputType$$Type): void
public "getDebugOverlay"(): $DebugScreenOverlay
public "delayCrashRaw"(arg0: $CrashReport$$Type): void
public "isEnforceUnicode"(): boolean
public "getLevelSource"(): $LevelStorageSource
public "getVersionType"(): StringJS
public "getVanillaPackResources"(): $VanillaPackResources
public "getLocale"(): $Locale
public "popGuiLayer"(): void
public "pushGuiLayer"(arg0: $Screen$$Type): void
public "getParticleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "isKeyDown"(keyName: StringJS): boolean
public "isKeyDown"(key: integer): boolean
public "setTitle"(t: StringJS): void
public "getName"(): $Component
public "isAltDown"(): boolean
public "isShiftDown"(): boolean
/**
 * Runs the specified console command client-side with the player's permission level.
 * 
 * @param command - The console command. Slash at the beginning is optional.
 */
public "runCommand"(command: StringJS): void
public "isKeyBindDown"(id: StringJS): boolean
public "isCtrlDown"(): boolean
public "self"(): $Minecraft
public "tell"(message: $Component$$Type): void
public "getKeyBindPressedTicks"(id: StringJS): integer
/**
 * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
 * 
 * @param command - The console command. Slash at the beginning is optional.
 */
public "runCommandSilent"(command: StringJS): void
public "setCurrentScreen"(gui: $Screen$$Type): void
public "getCurrentWorldName"(): StringJS
public "isKeyMappingDown"(key: $KeyMapping$$Type): boolean
public "getCurrentScreen"(): $Screen
public "getBlockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "getDisplayName"(): $Component
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "connection"(): $ClientPacketListener
public static get "instance"(): $Minecraft
get "running"(): boolean
get "resourcePackDirectory"(): $Path
get "paintingTextures"(): $PaintingTextureManager
get "mobEffectTextures"(): $MobEffectTextureManager
get "telemetryManager"(): $ClientTelemetryManager
get "minecraftSessionService"(): $MinecraftSessionService
get "profileKeyPairManager"(): $ProfileKeyPairManager
get "mapDecorationTextures"(): $MapDecorationTextureManager
get "resourcePackRepository"(): $PackRepository
get "situationalMusic"(): $Music
get "gpuWarnlistManager"(): $GpuWarnlistManager
get "downloadedPackSource"(): $DownloadedPackSource
get "singleplayerServer"(): $IntegratedServer
get "profiler"(): $ProfilerFiller
get "resourceManager"(): $ResourceManager
get "blockRenderer"(): $BlockRenderDispatcher
get "gameLoadFinished"(): boolean
get "currentServer"(): $ServerData
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "profileKeySignatureValidator"(): $SignatureValidator
get "toasts"(): $ToastComponent
get "proxy"(): $Proxy
get "guiSprites"(): $GuiSpriteManager
get "fps"(): integer
get "user"(): $User
get "demo"(): boolean
get "paused"(): boolean
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "mainRenderTarget"(): $RenderTarget
get "timer"(): $DeltaTracker
get "textureManager"(): $TextureManager
get "chatListener"(): $ChatListener
get "narrator"(): $GameNarrator
get "lastInputType"(): $InputType
get "title"(): StringJS
get "soundManager"(): $SoundManager
get "fixerUpper"(): $DataFixer
public static get "launcherBrand"(): StringJS
get "singleplayer"(): boolean
get "itemColors"(): $ItemColors
get "entityModels"(): $EntityModelSet
get "skinManager"(): $SkinManager
get "tutorial"(): $Tutorial
get "blockColors"(): $BlockColors
get "windowActive"(): boolean
get "languageManager"(): $LanguageManager
get "hotbarManager"(): $HotbarManager
get "splashManager"(): $SplashManager
get "gameProfile"(): $GameProfile
get "itemRenderer"(): $ItemRenderer
get "overlay"(): $Overlay
get "musicManager"(): $MusicManager
get "gpuUtilization"(): double
get "nameBanned"(): boolean
set "overlay"(value: $Overlay$$Type)
get "window"(): $Window
set "windowActive"(value: boolean)
get "localServer"(): boolean
get "reportingContext"(): $ReportingContext
get "playerSocialManager"(): $PlayerSocialManager
get "scheduledEvents"(): $ScheduledEvents
get "textFilteringEnabled"(): boolean
get "progressListener"(): $StoringChunkProgressListener
get "frameTimeNs"(): long
get "launchedVersion"(): StringJS
get "chatStatus"(): $Minecraft$ChatStatus
get "modelManager"(): $ModelManager
set "lastInputType"(value: $InputType$$Type)
get "debugOverlay"(): $DebugScreenOverlay
get "enforceUnicode"(): boolean
get "levelSource"(): $LevelStorageSource
get "versionType"(): StringJS
get "vanillaPackResources"(): $VanillaPackResources
get "locale"(): $Locale
get "particleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
set "title"(value: StringJS)
get "name"(): $Component
get "altDown"(): boolean
get "shiftDown"(): boolean
get "ctrlDown"(): boolean
set "currentScreen"(value: $Screen$$Type)
get "currentWorldName"(): StringJS
get "currentScreen"(): $Screen
get "blockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
set "activePostShader"(value: $ResourceLocation$$Type)
set "statusMessage"(value: $Component$$Type)
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minecraft$$Type = ($Minecraft);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minecraft$$Original = $Minecraft;}
declare module "net.minecraft.client.Camera" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Vector3f} from "org.joml.Vector3f"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Camera$NearPlane} from "net.minecraft.client.Camera$NearPlane"
import {$Quaternionf} from "org.joml.Quaternionf"
import {$FogType} from "net.minecraft.world.level.material.FogType"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $Camera {
static readonly "FOG_DISTANCE_SCALE": float

constructor()

public "getPosition"(): $Vec3
public "reset"(): void
public "setup"(arg0: $BlockGetter$$Type, arg1: $Entity$$Type, arg2: boolean, arg3: boolean, arg4: float): void
public "tick"(): void
public "getEntity"(): $Entity
public "getRoll"(): float
public "getBlockAtCamera"(): $BlockState
public "getLeftVector"(): $Vector3f
public "getNearPlane"(): $Camera$NearPlane
public "isInitialized"(): boolean
public "getPartialTickTime"(): float
public "getFluidInCamera"(): $FogType
public "getLookVector"(): $Vector3f
public "isDetached"(): boolean
public "getXRot"(): float
public "getYRot"(): float
public "getBlockPosition"(): $BlockPos
public "rotation"(): $Quaternionf
public "getUpVector"(): $Vector3f
get "position"(): $Vec3
get "entity"(): $Entity
get "roll"(): float
get "blockAtCamera"(): $BlockState
get "leftVector"(): $Vector3f
get "nearPlane"(): $Camera$NearPlane
get "initialized"(): boolean
get "partialTickTime"(): float
get "fluidInCamera"(): $FogType
get "lookVector"(): $Vector3f
get "detached"(): boolean
get "XRot"(): float
get "YRot"(): float
get "blockPosition"(): $BlockPos
get "upVector"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Camera$$Type = ($Camera);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Camera$$Original = $Camera;}
declare module "net.minecraft.client.OptionInstance$CycleableValueSet" {
import {$OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function} from "java.util.function.Function"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$OptionInstance$ValueSet$$Interface} from "net.minecraft.client.OptionInstance$ValueSet"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionInstance$CycleableValueSet$$Interface<T> extends $OptionInstance$ValueSet$$Interface<(T)> {
}

export class $OptionInstance$CycleableValueSet<T> implements $OptionInstance$CycleableValueSet$$Interface {
 "validateValue"(arg0: T): $Optional<(T)>
 "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
 "codec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$CycleableValueSet$$Type<T> = ($OptionInstance$CycleableValueSet<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$CycleableValueSet$$Original<T> = $OptionInstance$CycleableValueSet<(T)>;}
declare module "net.minecraft.client.Camera$NearPlane" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"

export class $Camera$NearPlane {
public "getPointOnPlane"(arg0: float, arg1: float): $Vec3
public "getTopLeft"(): $Vec3
public "getBottomLeft"(): $Vec3
public "getTopRight"(): $Vec3
public "getBottomRight"(): $Vec3
get "topLeft"(): $Vec3
get "bottomLeft"(): $Vec3
get "topRight"(): $Vec3
get "bottomRight"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Camera$NearPlane$$Type = ($Camera$NearPlane);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Camera$NearPlane$$Original = $Camera$NearPlane;}
declare module "net.minecraft.client.CloudStatus" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $CloudStatus extends $Enum<($CloudStatus)> implements $OptionEnum$$Interface, $StringRepresentable$$Interface {
static readonly "FANCY": $CloudStatus
static readonly "CODEC": $Codec<($CloudStatus)>
static readonly "FAST": $CloudStatus
static readonly "OFF": $CloudStatus

public static "values"(): ($CloudStatus)[]
public static "valueOf"(arg0: StringJS): $CloudStatus
public "getKey"(): StringJS
public "getId"(): integer
public "getSerializedName"(): StringJS
public "getCaption"(): $Component
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "key"(): StringJS
get "id"(): integer
get "serializedName"(): StringJS
get "caption"(): $Component
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CloudStatus$$Type = (("false") | ("fast") | ("true"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CloudStatus$$Original = $CloudStatus;}
declare module "net.minecraft.client.KeyboardHandler" {
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $KeyboardHandler {
static readonly "DEBUG_CRASH_TIME": integer

constructor(arg0: $Minecraft$$Type)

public "setup"(arg0: long): void
public "tick"(): void
public "setClipboard"(arg0: StringJS): void
public "keyPress"(arg0: long, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "getClipboard"(): StringJS
set "up"(value: long)
set "clipboard"(value: StringJS)
get "clipboard"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyboardHandler$$Type = ($KeyboardHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyboardHandler$$Original = $KeyboardHandler;}
declare module "net.minecraft.client.DebugQueryHandler" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $DebugQueryHandler {
constructor(arg0: $ClientPacketListener$$Type)

public "handleResponse"(arg0: integer, arg1: $CompoundTag$$Type): boolean
public "queryBlockEntityTag"(arg0: $BlockPos$$Type, arg1: $Consumer$$Type<($CompoundTag)>): void
public "queryEntityTag"(arg0: integer, arg1: $Consumer$$Type<($CompoundTag)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugQueryHandler$$Type = ($DebugQueryHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugQueryHandler$$Original = $DebugQueryHandler;}
declare module "net.minecraft.client.Minecraft$ChatStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $Minecraft$ChatStatus extends $Enum<($Minecraft$ChatStatus)> {
static readonly "DISABLED_BY_OPTIONS": $Minecraft$ChatStatus
static readonly "DISABLED_BY_PROFILE": $Minecraft$ChatStatus
static readonly "ENABLED": $Minecraft$ChatStatus
static readonly "DISABLED_BY_LAUNCHER": $Minecraft$ChatStatus

public static "values"(): ($Minecraft$ChatStatus)[]
public static "valueOf"(arg0: StringJS): $Minecraft$ChatStatus
public "getMessage"(): $Component
public "isChatAllowed"(arg0: boolean): boolean
get "message"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minecraft$ChatStatus$$Type = (("enabled") | ("disabled_by_options") | ("disabled_by_launcher") | ("disabled_by_profile"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minecraft$ChatStatus$$Original = $Minecraft$ChatStatus;}
declare module "net.minecraft.client.HotbarManager" {
import {$Hotbar} from "net.minecraft.client.player.inventory.Hotbar"
import {$Path$$Type} from "java.nio.file.Path"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"

export class $HotbarManager {
static readonly "NUM_HOTBAR_GROUPS": integer

constructor(arg0: $Path$$Type, arg1: $DataFixer$$Type)

public "get"(arg0: integer): $Hotbar
public "save"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HotbarManager$$Type = ($HotbarManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HotbarManager$$Original = $HotbarManager;}
declare module "net.minecraft.client.GuiMessage" {
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$GuiMessageTag$Icon} from "net.minecraft.client.GuiMessageTag$Icon"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GuiMessageTag, $GuiMessageTag$$Type} from "net.minecraft.client.GuiMessageTag"
import {$Record} from "java.lang.Record"

export class $GuiMessage extends $Record {
constructor(arg0: integer, arg1: $Component$$Type, arg2: $MessageSignature$$Type, arg3: $GuiMessageTag$$Type)

public "signature"(): $MessageSignature
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "tag"(): $GuiMessageTag
public "content"(): $Component
public "icon"(): $GuiMessageTag$Icon
public "addedTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessage$$Type = ({"content"?: $Component$$Type, "signature"?: $MessageSignature$$Type, "addedTime"?: integer, "tag"?: $GuiMessageTag$$Type}) | ([content?: $Component$$Type, signature?: $MessageSignature$$Type, addedTime?: integer, tag?: $GuiMessageTag$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessage$$Original = $GuiMessage;}
declare module "net.minecraft.client.DeltaTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DeltaTracker$$Interface {
get "gameTimeDeltaTicks"(): float
get "realtimeDeltaTicks"(): float
}

export class $DeltaTracker implements $DeltaTracker$$Interface {
static readonly "ZERO": $DeltaTracker
static readonly "ONE": $DeltaTracker

 "getGameTimeDeltaPartialTick"(arg0: boolean): float
 "getGameTimeDeltaTicks"(): float
 "getRealtimeDeltaTicks"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeltaTracker$$Type = ($DeltaTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeltaTracker$$Original = $DeltaTracker;}
declare module "net.minecraft.client.OptionInstance$CaptionBasedToString" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $OptionInstance$CaptionBasedToString$$Interface<T> {

(arg0: $Component, arg1: T): $Component$$Type
}

export class $OptionInstance$CaptionBasedToString<T> implements $OptionInstance$CaptionBasedToString$$Interface {
 "toString"(arg0: $Component$$Type, arg1: T): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$CaptionBasedToString$$Type<T> = ((arg0: $Component, arg1: T) => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$CaptionBasedToString$$Original<T> = $OptionInstance$CaptionBasedToString<(T)>;}
