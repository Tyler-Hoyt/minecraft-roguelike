declare module "net.minecraft.client.Options" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$File, $File$$Type} from "java.io.File"
import {$List} from "java.util.List"
import {$NarratorStatus} from "net.minecraft.client.NarratorStatus"
import {$TutorialSteps} from "net.minecraft.client.tutorial.TutorialSteps"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$ParticleStatus} from "net.minecraft.client.ParticleStatus"
import {$PrioritizeChunkUpdates} from "net.minecraft.client.PrioritizeChunkUpdates"
import {$CameraType, $CameraType$$Type} from "net.minecraft.client.CameraType"
import {$PlayerModelPart$$Type} from "net.minecraft.world.entity.player.PlayerModelPart"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ClientInformation} from "net.minecraft.server.level.ClientInformation"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$ChatVisiblity} from "net.minecraft.world.entity.player.ChatVisiblity"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
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

public "load"(): void
public "load"(arg0: boolean): void
public "save"(): void
public "getFile"(): $File
public "telemetryOptInExtra"(): $OptionInstance<(boolean)>
public "dumpOptionsForReport"(): StringJS
public "getEffectiveRenderDistance"(): integer
public "operatorItemsTab"(): $OptionInstance<(boolean)>
public "narrator"(): $OptionInstance<($NarratorStatus)>
public "fullscreen"(): $OptionInstance<(boolean)>
public "chatDelay"(): $OptionInstance<(double)>
public "guiScale"(): $OptionInstance<(integer)>
public "particles"(): $OptionInstance<($ParticleStatus)>
public "chatColors"(): $OptionInstance<(boolean)>
public "mainHand"(): $OptionInstance<($HumanoidArm)>
public "cloudStatus"(): $OptionInstance<($CloudStatus)>
public "biomeBlendRadius"(): $OptionInstance<(integer)>
public "graphicsMode"(): $OptionInstance<($GraphicsStatus)>
public "setCameraType"(arg0: $CameraType$$Type): void
public "getCameraType"(): $CameraType
public "chatVisibility"(): $OptionInstance<($ChatVisiblity)>
public "ambientOcclusion"(): $OptionInstance<(boolean)>
public "renderDistance"(): $OptionInstance<(integer)>
public "reducedDebugInfo"(): $OptionInstance<(boolean)>
public "prioritizeChunkUpdates"(): $OptionInstance<($PrioritizeChunkUpdates)>
public "getCloudsType"(): $CloudStatus
public "darkMojangStudiosBackground"(): $OptionInstance<(boolean)>
public "hideSplashTexts"(): $OptionInstance<(boolean)>
public "hideLightningFlash"(): $OptionInstance<(boolean)>
public "simulationDistance"(): $OptionInstance<(integer)>
public "onboardingAccessibilityFinished"(): void
public "glintStrength"(): $OptionInstance<(double)>
public "framerateLimit"(): $OptionInstance<(integer)>
public "rawMouseInput"(): $OptionInstance<(boolean)>
public "enableVsync"(): $OptionInstance<(boolean)>
public "mipmapLevels"(): $OptionInstance<(integer)>
public "forceUnicodeFont"(): $OptionInstance<(boolean)>
public "gamma"(): $OptionInstance<(double)>
public "allowServerListing"(): $OptionInstance<(boolean)>
public "useNativeTransport"(): boolean
public "toggleSprint"(): $OptionInstance<(boolean)>
public "chatLineSpacing"(): $OptionInstance<(double)>
public "onlyShowSecureChat"(): $OptionInstance<(boolean)>
public "toggleCrouch"(): $OptionInstance<(boolean)>
public "chatHeightFocused"(): $OptionInstance<(double)>
public "soundDevice"(): $OptionInstance<(StringJS)>
public "autoSuggestions"(): $OptionInstance<(boolean)>
public "showSubtitles"(): $OptionInstance<(boolean)>
public "attackIndicator"(): $OptionInstance<($AttackIndicatorStatus)>
public "panoramaSpeed"(): $OptionInstance<(double)>
public "narratorHotkey"(): $OptionInstance<(boolean)>
public "highContrast"(): $OptionInstance<(boolean)>
public "directionalAudio"(): $OptionInstance<(boolean)>
public "entityShadows"(): $OptionInstance<(boolean)>
public "sensitivity"(): $OptionInstance<(double)>
public "hideMatchedNames"(): $OptionInstance<(boolean)>
public "invertYMouse"(): $OptionInstance<(boolean)>
public "broadcastOptions"(): void
public "isModelPartEnabled"(arg0: $PlayerModelPart$$Type): boolean
public "toggleModelPart"(arg0: $PlayerModelPart$$Type, arg1: boolean): void
public static "genericValueLabel"(arg0: $Component$$Type, arg1: $Component$$Type): $Component
public static "genericValueLabel"(arg0: $Component$$Type, arg1: integer): $Component
public "setKey"(arg0: $KeyMapping$$Type, arg1: $InputConstants$Key$$Type): void
public "chatOpacity"(): $OptionInstance<(double)>
public "chatWidth"(): $OptionInstance<(double)>
public "chatScale"(): $OptionInstance<(double)>
public "getSoundSourceOptionInstance"(arg0: $SoundSource$$Type): $OptionInstance<(double)>
public "chatLinks"(): $OptionInstance<(boolean)>
public "getMenuBackgroundBlurriness"(): integer
public "menuBackgroundBlurriness"(): $OptionInstance<(integer)>
public "loadSelectedResourcePacks"(arg0: $PackRepository$$Type): void
public "screenEffectScale"(): $OptionInstance<(double)>
public "damageTiltStrength"(): $OptionInstance<(double)>
public "fovEffectScale"(): $OptionInstance<(double)>
public "getBackgroundColor"(arg0: float): integer
public "getBackgroundColor"(arg0: integer): integer
public "notificationDisplayTime"(): $OptionInstance<(double)>
public "backgroundForChatOnly"(): $OptionInstance<(boolean)>
public "entityDistanceScaling"(): $OptionInstance<(double)>
public "showAutosaveIndicator"(): $OptionInstance<(boolean)>
public static "genericValueOrOffLabel"(arg0: $Component$$Type, arg1: integer): $Component
public "updateResourcePacks"(arg0: $PackRepository$$Type): void
public "discreteMouseScroll"(): $OptionInstance<(boolean)>
public "japaneseGlyphVariants"(): $OptionInstance<(boolean)>
public "chatHeightUnfocused"(): $OptionInstance<(double)>
public "mouseWheelSensitivity"(): $OptionInstance<(double)>
public "getSoundSourceVolume"(arg0: $SoundSource$$Type): float
public "darknessEffectScale"(): $OptionInstance<(double)>
public "realmsNotifications"(): $OptionInstance<(boolean)>
public "getBackgroundOpacity"(arg0: float): float
public "setServerRenderDistance"(arg0: integer): void
public "buildPlayerInformation"(): $ClientInformation
public "chatLinksPrompt"(): $OptionInstance<(boolean)>
public "autoJump"(): $OptionInstance<(boolean)>
public "textBackgroundOpacity"(): $OptionInstance<(double)>
public "fov"(): $OptionInstance<(integer)>
public "touchscreen"(): $OptionInstance<(boolean)>
public "bobView"(): $OptionInstance<(boolean)>
public "glintSpeed"(): $OptionInstance<(double)>
get "file"(): $File
get "effectiveRenderDistance"(): integer
set "cameraType"(value: $CameraType$$Type)
get "cameraType"(): $CameraType
get "cloudsType"(): $CloudStatus
set "serverRenderDistance"(value: integer)
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
declare module "net.minecraft.client.CommandHistory" {
import {$Collection} from "java.util.Collection"
import {$Path$$Type} from "java.nio.file.Path"

export class $CommandHistory {
constructor(arg0: $Path$$Type)

public "addCommand"(arg0: StringJS): void
public "history"(): $Collection<(StringJS)>
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
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$OptionInstance$CycleableValueSet$$Interface} from "net.minecraft.client.OptionInstance$CycleableValueSet"
import {$Record} from "java.lang.Record"

export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet$$Interface<(T)> {
constructor(arg0: $List$$Type<(T)>, arg1: $Codec$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $List<(T)>
public "hashCode"(): integer
public "codec"(): $Codec<(T)>
public "valueListSupplier"(): $CycleButton$ValueListSupplier<(T)>
public "validateValue"(arg0: T): $Optional<(T)>
public "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$Enum$$Type<T> = ({"codec"?: $Codec$$Type<(T)>, "values"?: $List$$Type<(T)>}) | ([codec?: $Codec$$Type<(T)>, values?: $List$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$Enum$$Original<T> = $OptionInstance$Enum<(T)>;}
declare module "net.minecraft.client.MouseHandler" {
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $MouseHandler {
constructor(arg0: $Minecraft$$Type)

public "setup"(arg0: long): void
public "grabMouse"(): void
public "getXVelocity"(): double
public "getYVelocity"(): double
public "setIgnoreFirstMove"(): void
public "cursorEntered"(): void
public "isMouseGrabbed"(): boolean
public "releaseMouse"(): void
public "ypos"(): double
public "xpos"(): double
public "handleAccumulatedMovement"(): void
public "isRightPressed"(): boolean
public "isMiddlePressed"(): boolean
public "isLeftPressed"(): boolean
set "up"(value: long)
get "XVelocity"(): double
get "YVelocity"(): double
get "ignoreFirstMove"(): void
get "mouseGrabbed"(): boolean
get "rightPressed"(): boolean
get "middlePressed"(): boolean
get "leftPressed"(): boolean
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
public "isFirstPerson"(): boolean
public "cycle"(): $CameraType
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
public static "byId"(arg0: integer): $NarratorStatus
public "shouldNarrateChat"(): boolean
public "shouldNarrateSystem"(): boolean
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
declare module "net.minecraft.client.ParticleStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"

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

public "plainIndexAtWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public static "getWordPosition"(arg0: StringJS, arg1: integer, arg2: integer, arg3: boolean): integer
public "findLineBreak"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "componentStyleAtWidth"(arg0: $FormattedText$$Type, arg1: integer): $Style
public "componentStyleAtWidth"(arg0: $FormattedCharSequence$$Type, arg1: integer): $Style
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $BiConsumer$$Type<($FormattedText), (boolean)>): void
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type, arg3: boolean, arg4: $StringSplitter$LinePosConsumer$$Type): void
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $FormattedText$$Type): $List<($FormattedText)>
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "stringWidth"(arg0: $FormattedCharSequence$$Type): float
public "stringWidth"(arg0: $FormattedText$$Type): float
public "stringWidth"(arg0: StringJS): float
public "formattedIndexByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "formattedHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "headByWidth"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $FormattedText
public "plainHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "plainTailByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
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
import {$RecipeBookType$$Type} from "net.minecraft.world.inventory.RecipeBookType"
import {$List} from "java.util.List"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $RecipeBookCategories extends $Enum<($RecipeBookCategories)> implements $IExtensibleEnum$$Interface {
static readonly "CRAFTING_REDSTONE": $RecipeBookCategories
static readonly "UNDERGARDEN_INFUSER_SEARCH": $RecipeBookCategories
static readonly "AETHER_FREEZABLE_SEARCH": $RecipeBookCategories
static readonly "CRAFTING_SEARCH": $RecipeBookCategories
static readonly "BLAST_FURNACE_MISC": $RecipeBookCategories
static readonly "SMOKER_FOOD": $RecipeBookCategories
static readonly "UNDERGARDEN_INFUSER_MISC": $RecipeBookCategories
static readonly "CRAFTING_BUILDING_BLOCKS": $RecipeBookCategories
static readonly "AETHER_FREEZABLE_MISC": $RecipeBookCategories
static readonly "SMOKER_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "SMOKER_SEARCH": $RecipeBookCategories
static readonly "STONECUTTER": $RecipeBookCategories
static readonly "AETHER_ENCHANTING_MISC": $RecipeBookCategories
static readonly "UNDERGARDEN_INFUSER_CORRUPTING": $RecipeBookCategories
static readonly "UNDERGARDEN_INFUSER_PURIFYING": $RecipeBookCategories
static readonly "AGGREGATE_CATEGORIES": $Map<($RecipeBookCategories), ($List<($RecipeBookCategories)>)>
static readonly "CRAFTING_EQUIPMENT": $RecipeBookCategories
static readonly "BLAST_FURNACE_BLOCKS": $RecipeBookCategories
static readonly "AETHER_INCUBATION_MISC": $RecipeBookCategories
static readonly "BLAST_FURNACE_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "AETHER_INCUBATION_SEARCH": $RecipeBookCategories
static readonly "CRAFTING_MISC": $RecipeBookCategories
static readonly "CAMPFIRE": $RecipeBookCategories
static readonly "FURNACE_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "CRAFTING_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "SMITHING": $RecipeBookCategories
static readonly "AETHER_ENCHANTING_REPAIR": $RecipeBookCategories
static readonly "FURNACE_FOOD": $RecipeBookCategories
static readonly "FURNACE_BLOCKS": $RecipeBookCategories
static readonly "AETHER_FREEZABLE_BLOCKS": $RecipeBookCategories
static readonly "AETHER_ENCHANTING_FOOD": $RecipeBookCategories
static readonly "AETHER_ENCHANTING_SEARCH": $RecipeBookCategories
static readonly "FURNACE_SEARCH": $RecipeBookCategories
static readonly "AETHER_ENCHANTING_BLOCKS": $RecipeBookCategories
static readonly "BLAST_FURNACE_SEARCH": $RecipeBookCategories
static readonly "UNKNOWN": $RecipeBookCategories
static readonly "FURNACE_MISC": $RecipeBookCategories

public static "values"(): ($RecipeBookCategories)[]
public static "valueOf"(arg0: StringJS): $RecipeBookCategories
public static "getExtensionInfo"(): $ExtensionInfo
public "getIconItems"(): $List<($ItemStack)>
public static "getCategories"(arg0: $RecipeBookType$$Type): $List<($RecipeBookCategories)>
public static get "extensionInfo"(): $ExtensionInfo
get "iconItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookCategories$$Type = (("crafting_search") | ("crafting_building_blocks") | ("crafting_redstone") | ("crafting_equipment") | ("crafting_misc") | ("furnace_search") | ("furnace_food") | ("furnace_blocks") | ("furnace_misc") | ("blast_furnace_search") | ("blast_furnace_blocks") | ("blast_furnace_misc") | ("smoker_search") | ("smoker_food") | ("stonecutter") | ("smithing") | ("campfire") | ("unknown") | ("aether_enchanting_blocks") | ("aether_enchanting_food") | ("aether_enchanting_misc") | ("aether_enchanting_repair") | ("aether_enchanting_search") | ("aether_freezable_blocks") | ("aether_freezable_misc") | ("aether_freezable_search") | ("aether_incubation_misc") | ("aether_incubation_search") | ("undergarden_infuser_corrupting") | ("undergarden_infuser_misc") | ("undergarden_infuser_purifying") | ("undergarden_infuser_search"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookCategories$$Original = $RecipeBookCategories;}
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
declare module "net.minecraft.client.Minecraft" {
import {$RenderBuffers} from "net.minecraft.client.renderer.RenderBuffers"
import {$MultiPlayerGameMode} from "net.minecraft.client.multiplayer.MultiPlayerGameMode"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PlayerSocialManager} from "net.minecraft.client.gui.screens.social.PlayerSocialManager"
import {$MobEffectTextureManager} from "net.minecraft.client.resources.MobEffectTextureManager"
import {$ClientPacketListener} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$Minecraft$ChatStatus} from "net.minecraft.client.Minecraft$ChatStatus"
import {$WeaponAttributes$Attack} from "net.bettercombat.api.WeaponAttributes$Attack"
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
import {$Thread} from "java.lang.Thread"
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$Options, $Options$$Type} from "net.minecraft.client.Options"
import {$Tutorial} from "net.minecraft.client.tutorial.Tutorial"
import {$TextureManager} from "net.minecraft.client.renderer.texture.TextureManager"
import {$Window} from "com.mojang.blaze3d.platform.Window"
import {$Music} from "net.minecraft.sounds.Music"
import {$ResourceManager} from "net.minecraft.server.packs.resources.ResourceManager"
import {$EntityModelSet} from "net.minecraft.client.model.geom.EntityModelSet"
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
import {$MinecraftAccessor$$Interface} from "com.aetherteam.cumulus.mixin.mixins.client.accessor.MinecraftAccessor"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$ScheduledEvents$Callback$$Type} from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import {$GameProfile} from "com.mojang.authlib.GameProfile"
import {$RealmsDataFetcher} from "com.mojang.realmsclient.gui.RealmsDataFetcher"
import {$ParticleEngine} from "net.minecraft.client.particle.ParticleEngine"
import {$ToastComponent} from "net.minecraft.client.gui.components.toasts.ToastComponent"
import {$DataFixer} from "com.mojang.datafixers.DataFixer"
import {$ItemRenderer} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$Overlay, $Overlay$$Type} from "net.minecraft.client.gui.screens.Overlay"
import {$ProfilerFiller} from "net.minecraft.util.profiling.ProfilerFiller"
import {$VanillaPackResources} from "net.minecraft.server.packs.VanillaPackResources"
import {$MinecraftClientAccessor$$Interface} from "net.bettercombat.mixin.client.MinecraftClientAccessor"
import {$MinecraftAccessor$$Interface as $MinecraftAccessor$1$$Interface} from "com.aetherteam.aether.mixin.mixins.client.accessor.MinecraftAccessor"
import {$ReceivingLevelScreen$Reason$$Type} from "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason"
import {$TickDuration$$Type} from "dev.latvian.mods.kubejs.util.TickDuration"
import {$Gui} from "net.minecraft.client.gui.Gui"
import {$CommandHistory} from "net.minecraft.client.CommandHistory"
import {$SignatureValidator} from "net.minecraft.util.SignatureValidator"
import {$TimerQuery$FrameProfile, $TimerQuery$FrameProfile$$Type} from "com.mojang.blaze3d.systems.TimerQuery$FrameProfile"
import {$File, $File$$Type} from "java.io.File"
import {$Locale} from "java.util.Locale"
import {$HitResult} from "net.minecraft.world.phys.HitResult"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$GameNarrator} from "net.minecraft.client.GameNarrator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockEntityRenderDispatcher} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$HotbarManager} from "net.minecraft.client.HotbarManager"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$GuiSpriteManager} from "net.minecraft.client.gui.GuiSpriteManager"
import {$IntegratedServer} from "net.minecraft.client.server.IntegratedServer"
import {$MinecraftClient_BetterCombat$$Interface} from "net.bettercombat.api.MinecraftClient_BetterCombat"
import {$LevelStorageSource} from "net.minecraft.world.level.storage.LevelStorageSource"
import {$StoringChunkProgressListener} from "net.minecraft.server.level.progress.StoringChunkProgressListener"
import {$BanDetails} from "com.mojang.authlib.minecraft.BanDetails"
import {$DeltaTracker} from "net.minecraft.client.DeltaTracker"
import {$DownloadedPackSource} from "net.minecraft.client.resources.server.DownloadedPackSource"
import {$Path} from "java.nio.file.Path"
import {$MinecraftAccessor$$Interface as $MinecraftAccessor$0$$Interface} from "org.embeddedt.embeddium.impl.mixin.core.render.MinecraftAccessor"
import {$UUID$$Type} from "java.util.UUID"
import {$ScheduledEvents} from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import {$Runnable} from "java.lang.Runnable"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockRenderDispatcher} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$DebugRenderer} from "net.minecraft.client.renderer.debug.DebugRenderer"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Throwable$$Type} from "java.lang.Throwable"
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
import {$AttackHand} from "net.bettercombat.api.AttackHand"
import {$ReportEnvironment$$Type} from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment"
import {$ClientTelemetryManager} from "net.minecraft.client.telemetry.ClientTelemetryManager"

export class $Minecraft extends $ReentrantBlockableEventLoop<($Runnable)> implements $WindowEventHandler$$Interface, $IMinecraftExtension$$Interface, $MinecraftAccessor$1$$Interface, $MinecraftClientKJS$$Interface, $MinecraftClientAccessor$$Interface, $MinecraftClient_BetterCombat$$Interface, $MinecraftAccessor$$Interface, $MinecraftAccessor$0$$Interface {
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
 "clientTickCount": long
readonly "gui": $Gui
 "gameMode": $MultiPlayerGameMode
static readonly "ALT_FONT": $ResourceLocation
 "hitResult": $HitResult
 "smartCull": boolean
readonly "font": $Font

constructor(arg0: $GameConfig$$Type)

public "run"(): void
public static "getInstance"(): $Minecraft
public "stop"(): void
public "destroy"(): void
public "close"(): void
public "tick"(): void
public "setLevel"(arg0: $ClientLevel$$Type, arg1: $ReceivingLevelScreen$Reason$$Type): void
public "extraTelemetryAvailable"(): boolean
public static "useShaderTransparency"(): boolean
public "getTelemetryManager"(): $ClientTelemetryManager
public static "useAmbientOcclusion"(): boolean
public "getSingleplayerServer"(): $IntegratedServer
public "getGpuWarnlistManager"(): $GpuWarnlistManager
public "updateReportEnvironment"(arg0: $ReportEnvironment$$Type): void
public "debugFpsMeterKeyPress"(arg0: integer): void
public "telemetryOptInExtra"(): boolean
public "createWorldOpenFlows"(): $WorldOpenFlows
public "getProfileKeyPairManager"(): $ProfileKeyPairManager
public "shouldEntityAppearGlowing"(arg0: $Entity$$Type): boolean
public "getMinecraftSessionService"(): $MinecraftSessionService
public "prepareForMultiplayer"(): void
public "getResourcePackDirectory"(): $Path
public "getScheduledEvents"(): $ScheduledEvents
public "getReportingContext"(): $ReportingContext
public "getProgressListener"(): $StoringChunkProgressListener
public "canValidateProfileKeys"(): boolean
public "getMapDecorationTextures"(): $MapDecorationTextureManager
public "showOnlyReducedInfo"(): boolean
public "getPaintingTextures"(): $PaintingTextureManager
public "getMobEffectTextures"(): $MobEffectTextureManager
public "getPlayerSocialManager"(): $PlayerSocialManager
public "getDownloadedPackSource"(): $DownloadedPackSource
public "getResourcePackRepository"(): $PackRepository
public "grabPanoramixScreenshot"(arg0: $File$$Type, arg1: integer, arg2: integer): $Component
public "getSituationalMusic"(): $Music
public "isTextFilteringEnabled"(): boolean
public "aether$setIsLocalServer"(arg0: boolean): void
public "getCurrentAttackHand"(): $AttackHand
public "cumulus$setIsLocalServer"(arg0: boolean): void
public "embeddium$getGameThread"(): $Thread
public "disconnect"(arg0: $Screen$$Type): void
public "disconnect"(arg0: $Screen$$Type, arg1: boolean): void
public "disconnect"(): void
public static "fillReport"(arg0: $Minecraft$$Type, arg1: $LanguageManager$$Type, arg2: StringJS, arg3: $Options$$Type, arg4: $CrashReport$$Type): void
public "fillReport"(arg0: $CrashReport$$Type): $CrashReport
public "setScreen"(arg0: $Screen$$Type): void
public "delayCrash"(arg0: $CrashReport$$Type): void
public "getToasts"(): $ToastComponent
public "getFps"(): integer
public "getUser"(): $User
public "pauseGame"(arg0: boolean): void
public "isBlocked"(arg0: $UUID$$Type): boolean
public "isDemo"(): boolean
public "isPaused"(): boolean
public "getOverlay"(): $Overlay
public "getFrameTimeNs"(): long
public "cursorEntered"(): void
public "getMusicManager"(): $MusicManager
public "getCameraEntity"(): $Entity
public static "renderNames"(): boolean
public "doWorldLoad"(arg0: $LevelStorageSource$LevelStorageAccess$$Type, arg1: $PackRepository$$Type, arg2: $WorldStem$$Type, arg3: boolean): void
public static "getLauncherBrand"(): StringJS
public static "useFancyGraphics"(): boolean
public "allowsRealms"(): boolean
public "clearClientLevel"(arg0: $Screen$$Type): void
public "forceSetScreen"(arg0: $Screen$$Type): void
public "getGpuUtilization"(): double
public "allowsTelemetry"(): boolean
public "isNameBanned"(): boolean
public "updateMaxMipLevel"(arg0: integer): void
public "setCameraEntity"(arg0: $Entity$$Type): void
public "delayTextureReload"(): $CompletableFuture<(void)>
public "getItemColors"(): $ItemColors
public "getEntityModels"(): $EntityModelSet
public "getHotbarManager"(): $HotbarManager
public "isSingleplayer"(): boolean
public "getTextureAtlas"(arg0: $ResourceLocation$$Type): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "getSplashManager"(): $SplashManager
public "isWindowActive"(): boolean
public "getLastInputType"(): $InputType
public "getNarrator"(): $GameNarrator
public "getGameProfile"(): $GameProfile
public "getSoundManager"(): $SoundManager
public "getFixerUpper"(): $DataFixer
public "getLanguageManager"(): $LanguageManager
public "getBlockColors"(): $BlockColors
public "isLocalPlayer"(arg0: $UUID$$Type): boolean
public "getSkinManager"(): $SkinManager
public "getTutorial"(): $Tutorial
public "getTitle"(): StringJS
public "hasTargetsInReach"(): boolean
public "getComboCount"(): integer
public "getChatListener"(): $ChatListener
public "getMissTime"(): integer
public "getSwingProgress"(): float
public "cancelUpswing"(): void
public "getUpswingTicks"(): integer
public "setAttackCooldown"(arg0: integer): void
public "getProfiler"(): $ProfilerFiller
public "realmsDataFetcher"(): $RealmsDataFetcher
public "quickPlayLog"(): $QuickPlayLog
public "commandHistory"(): $CommandHistory
public "directoryValidator"(): $DirectoryValidator
public "isLocalServer"(): boolean
public "setWindowActive"(arg0: boolean): void
public "getBlockRenderer"(): $BlockRenderDispatcher
public static "checkModStatus"(): $ModCheck
public "resizeDisplay"(): void
public "isGameLoadFinished"(): boolean
public "multiplayerBan"(): $BanDetails
public "updateTitle"(): void
public "getModelManager"(): $ModelManager
public "getLevelSource"(): $LevelStorageSource
public "delayCrashRaw"(arg0: $CrashReport$$Type): void
public "getVersionType"(): StringJS
public "getChatStatus"(): $Minecraft$ChatStatus
public "getDebugOverlay"(): $DebugScreenOverlay
public "isEnforceUnicode"(): boolean
public "getLaunchedVersion"(): StringJS
public "setLastInputType"(arg0: $InputType$$Type): void
public "allowsMultiplayer"(): boolean
public "renderBuffers"(): $RenderBuffers
public static "crash"(arg0: $Minecraft$$Type, arg1: $File$$Type, arg2: $CrashReport$$Type): void
public "getTimer"(): $DeltaTracker
public "handler$zgm000$ae2$pickColor"(arg0: $CallbackInfo$$Type): void
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "clearDownloadedResourcePacks"(): void
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "getVanillaPackResources"(): $VanillaPackResources
public "isRunning"(): boolean
public "reloadResourcePacks"(): $CompletableFuture<(void)>
public "getMainRenderTarget"(): $RenderTarget
public "emergencySaveAndCrash"(arg0: $CrashReport$$Type): void
public "clearResourcePacksOnError"(arg0: $Throwable$$Type, arg1: $Component$$Type, arg2: $Minecraft$GameLoadCookie$$Type): void
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "hasSingleplayerServer"(): boolean
public "debugClientMetricsStart"(arg0: $Consumer$$Type<($Component)>): boolean
public "getGuiSprites"(): $GuiSpriteManager
public "getItemRenderer"(): $ItemRenderer
public "setOverlay"(arg0: $Overlay$$Type): void
public "getWindow"(): $Window
public "getCurrentServer"(): $ServerData
public "handler$bom000$irons_spellbooks$changeGlowOutline"(arg0: $Entity$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getProxy"(): $Proxy
public "getTextureManager"(): $TextureManager
public "getResourceManager"(): $ResourceManager
public "cumulus$setCurrentFrameProfile"(arg0: $TimerQuery$FrameProfile$$Type): void
public "cumulus$getCurrentFrameProfile"(): $TimerQuery$FrameProfile
public "handler$cjc000$transition$fillReport"(theCrash: $CrashReport$$Type, ci: $CallbackInfoReturnable$$Type): void
public "getConnection"(): $ClientPacketListener
public "getLocale"(): $Locale
public "pushGuiLayer"(arg0: $Screen$$Type): void
public "popGuiLayer"(): void
public "setCurrentScreen"(gui: $Screen$$Type): void
public "getCurrentScreen"(): $Screen
public "setStatusMessage"(message: $Component$$Type): void
public "isKeyMappingDown"(key: $KeyMapping$$Type): boolean
/**
 * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
 * 
 * @param command - The console command. Slash at the beginning is optional.
 */
public "runCommandSilent"(command: StringJS): void
public "getKeyBindPressedTicks"(id: StringJS): integer
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "getCurrentWorldName"(): StringJS
public "getBlockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "self"(): $Minecraft
public "tell"(message: $Component$$Type): void
/**
 * Runs the specified console command client-side with the player's permission level.
 * 
 * @param command - The console command. Slash at the beginning is optional.
 */
public "runCommand"(command: StringJS): void
public "getName"(): $Component
public "isCtrlDown"(): boolean
public "isShiftDown"(): boolean
public "setTitle"(t: StringJS): void
public "isKeyBindDown"(id: StringJS): boolean
public "isAltDown"(): boolean
public "isKeyDown"(keyName: StringJS): boolean
public "isKeyDown"(key: integer): boolean
public "getParticleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "isWeaponSwingInProgress"(): boolean
public "getCurrentAttack"(): $WeaponAttributes$Attack
public "getCursorTarget"(): $Entity
public "scheduleInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "getDisplayName"(): $Component
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
public static get "instance"(): $Minecraft
get "telemetryManager"(): $ClientTelemetryManager
get "singleplayerServer"(): $IntegratedServer
get "gpuWarnlistManager"(): $GpuWarnlistManager
get "profileKeyPairManager"(): $ProfileKeyPairManager
get "minecraftSessionService"(): $MinecraftSessionService
get "resourcePackDirectory"(): $Path
get "scheduledEvents"(): $ScheduledEvents
get "reportingContext"(): $ReportingContext
get "progressListener"(): $StoringChunkProgressListener
get "mapDecorationTextures"(): $MapDecorationTextureManager
get "paintingTextures"(): $PaintingTextureManager
get "mobEffectTextures"(): $MobEffectTextureManager
get "playerSocialManager"(): $PlayerSocialManager
get "downloadedPackSource"(): $DownloadedPackSource
get "resourcePackRepository"(): $PackRepository
get "situationalMusic"(): $Music
get "textFilteringEnabled"(): boolean
get "currentAttackHand"(): $AttackHand
get "toasts"(): $ToastComponent
get "fps"(): integer
get "user"(): $User
get "demo"(): boolean
get "paused"(): boolean
get "overlay"(): $Overlay
get "frameTimeNs"(): long
get "musicManager"(): $MusicManager
public static get "launcherBrand"(): StringJS
get "gpuUtilization"(): double
get "nameBanned"(): boolean
get "itemColors"(): $ItemColors
get "entityModels"(): $EntityModelSet
get "hotbarManager"(): $HotbarManager
get "singleplayer"(): boolean
get "splashManager"(): $SplashManager
get "windowActive"(): boolean
get "lastInputType"(): $InputType
get "narrator"(): $GameNarrator
get "gameProfile"(): $GameProfile
get "soundManager"(): $SoundManager
get "fixerUpper"(): $DataFixer
get "languageManager"(): $LanguageManager
get "blockColors"(): $BlockColors
get "skinManager"(): $SkinManager
get "tutorial"(): $Tutorial
get "title"(): StringJS
get "comboCount"(): integer
get "chatListener"(): $ChatListener
get "missTime"(): integer
get "swingProgress"(): float
get "upswingTicks"(): integer
set "attackCooldown"(value: integer)
get "profiler"(): $ProfilerFiller
get "localServer"(): boolean
set "windowActive"(value: boolean)
get "blockRenderer"(): $BlockRenderDispatcher
get "gameLoadFinished"(): boolean
get "modelManager"(): $ModelManager
get "levelSource"(): $LevelStorageSource
get "versionType"(): StringJS
get "chatStatus"(): $Minecraft$ChatStatus
get "debugOverlay"(): $DebugScreenOverlay
get "enforceUnicode"(): boolean
get "launchedVersion"(): StringJS
set "lastInputType"(value: $InputType$$Type)
get "timer"(): $DeltaTracker
get "profileKeySignatureValidator"(): $SignatureValidator
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "vanillaPackResources"(): $VanillaPackResources
get "running"(): boolean
get "mainRenderTarget"(): $RenderTarget
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "guiSprites"(): $GuiSpriteManager
get "itemRenderer"(): $ItemRenderer
set "overlay"(value: $Overlay$$Type)
get "window"(): $Window
get "currentServer"(): $ServerData
get "proxy"(): $Proxy
get "textureManager"(): $TextureManager
get "resourceManager"(): $ResourceManager
get "connection"(): $ClientPacketListener
get "locale"(): $Locale
set "currentScreen"(value: $Screen$$Type)
get "currentScreen"(): $Screen
set "statusMessage"(value: $Component$$Type)
set "activePostShader"(value: $ResourceLocation$$Type)
get "currentWorldName"(): StringJS
get "blockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
get "name"(): $Component
get "ctrlDown"(): boolean
get "shiftDown"(): boolean
set "title"(value: StringJS)
get "altDown"(): boolean
get "particleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
get "weaponSwingInProgress"(): boolean
get "currentAttack"(): $WeaponAttributes$Attack
get "cursorTarget"(): $Entity
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
import {$Quaternionf} from "org.joml.Quaternionf"
import {$Camera$NearPlane} from "net.minecraft.client.Camera$NearPlane"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$FogType} from "net.minecraft.world.level.material.FogType"
import {$CameraAccessor$$Interface} from "dev.kosmx.playerAnim.mixin.firstPerson.CameraAccessor"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $Camera implements $CameraAccessor$$Interface {
static readonly "FOG_DISTANCE_SCALE": float

constructor()

public "reset"(): void
public "setup"(arg0: $BlockGetter$$Type, arg1: $Entity$$Type, arg2: boolean, arg3: boolean, arg4: float): void
public "tick"(): void
public "getYRot"(): float
public "getXRot"(): float
public "isInitialized"(): boolean
public "getLookVector"(): $Vector3f
public "getEntity"(): $Entity
public "getBlockPosition"(): $BlockPos
public "getUpVector"(): $Vector3f
public "setDetached"(arg0: boolean): void
public "rotation"(): $Quaternionf
public "getFluidInCamera"(): $FogType
public "getPartialTickTime"(): float
public "getRoll"(): float
public "isDetached"(): boolean
public "getBlockAtCamera"(): $BlockState
public "getNearPlane"(): $Camera$NearPlane
public "getLeftVector"(): $Vector3f
public "getPosition"(): $Vec3
get "YRot"(): float
get "XRot"(): float
get "initialized"(): boolean
get "lookVector"(): $Vector3f
get "entity"(): $Entity
get "blockPosition"(): $BlockPos
get "upVector"(): $Vector3f
set "detached"(value: boolean)
get "fluidInCamera"(): $FogType
get "partialTickTime"(): float
get "roll"(): float
get "detached"(): boolean
get "blockAtCamera"(): $BlockState
get "nearPlane"(): $Camera$NearPlane
get "leftVector"(): $Vector3f
get "position"(): $Vec3
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
declare module "net.minecraft.client.Camera$NearPlane" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"

export class $Camera$NearPlane {
public "getBottomRight"(): $Vec3
public "getTopRight"(): $Vec3
public "getBottomLeft"(): $Vec3
public "getPointOnPlane"(arg0: float, arg1: float): $Vec3
public "getTopLeft"(): $Vec3
get "bottomRight"(): $Vec3
get "topRight"(): $Vec3
get "bottomLeft"(): $Vec3
get "topLeft"(): $Vec3
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
declare module "net.minecraft.client.KeyboardHandler" {
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $KeyboardHandler {
static readonly "DEBUG_CRASH_TIME": integer

constructor(arg0: $Minecraft$$Type)

public "setup"(arg0: long): void
public "tick"(): void
public "keyPress"(arg0: long, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "getClipboard"(): StringJS
public "setClipboard"(arg0: StringJS): void
set "up"(value: long)
get "clipboard"(): StringJS
set "clipboard"(value: StringJS)
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

public "queryEntityTag"(arg0: integer, arg1: $Consumer$$Type<($CompoundTag)>): void
public "queryBlockEntityTag"(arg0: $BlockPos$$Type, arg1: $Consumer$$Type<($CompoundTag)>): void
public "handleResponse"(arg0: integer, arg1: $CompoundTag$$Type): boolean
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
declare module "net.minecraft.client.GuiMessage$Line" {
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$GuiMessageTag, $GuiMessageTag$$Type} from "net.minecraft.client.GuiMessageTag"
import {$Record} from "java.lang.Record"

export class $GuiMessage$Line extends $Record {
constructor(arg0: integer, arg1: $FormattedCharSequence$$Type, arg2: $GuiMessageTag$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "tag"(): $GuiMessageTag
public "content"(): $FormattedCharSequence
public "endOfEntry"(): boolean
public "addedTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessage$Line$$Type = ({"addedTime"?: integer, "tag"?: $GuiMessageTag$$Type, "content"?: $FormattedCharSequence$$Type, "endOfEntry"?: boolean}) | ([addedTime?: integer, tag?: $GuiMessageTag$$Type, content?: $FormattedCharSequence$$Type, endOfEntry?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessage$Line$$Original = $GuiMessage$Line;}
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
declare module "net.minecraft.client.AttackIndicatorStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"

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
declare module "net.minecraft.client.PrioritizeChunkUpdates" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"

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
declare module "net.minecraft.client.GraphicsStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"

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
public "createButton"(arg0: $Options$$Type): $AbstractWidget
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Consumer$$Type<(T)>): $AbstractWidget
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer): $AbstractWidget
public static "createBoolean"(arg0: StringJS, arg1: boolean, arg2: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean, arg3: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(boolean)>, arg3: boolean, arg4: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: boolean): $OptionInstance<(boolean)>
public "codec"(): $Codec<(T)>
public static "forOptionEnum"<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<(T)>
public static "noTooltip"<T>(): $OptionInstance$TooltipSupplier<(T)>
public static "cachedConstantTooltip"<T>(arg0: $Component$$Type): $OptionInstance$TooltipSupplier<(T)>
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
declare module "net.minecraft.client.User" {
import {$User$Type, $User$Type$$Type} from "net.minecraft.client.User$Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"

export class $User {
constructor(arg0: StringJS, arg1: $UUID$$Type, arg2: StringJS, arg3: (StringJS)?, arg4: (StringJS)?, arg5: $User$Type$$Type)

public "getName"(): StringJS
public "getType"(): $User$Type
public "getProfileId"(): $UUID
public "getAccessToken"(): StringJS
public "getSessionId"(): StringJS
public "getClientId"(): $Optional<(StringJS)>
public "getXuid"(): $Optional<(StringJS)>
get "name"(): StringJS
get "type"(): $User$Type
get "profileId"(): $UUID
get "accessToken"(): StringJS
get "sessionId"(): StringJS
get "clientId"(): $Optional<(StringJS)>
get "xuid"(): $Optional<(StringJS)>
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
public "sayNow"(arg0: StringJS): void
public "sayNow"(arg0: $Component$$Type): void
public "say"(arg0: $Component$$Type): void
public "updateNarratorStatus"(arg0: $NarratorStatus$$Type): void
public "checkStatus"(arg0: boolean): void
public "sayChat"(arg0: $Component$$Type): void
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
declare module "net.minecraft.client.Minecraft$GameLoadCookie" {
import {$RealmsClient, $RealmsClient$$Type} from "com.mojang.realmsclient.client.RealmsClient"
import {$GameConfig$QuickPlayData, $GameConfig$QuickPlayData$$Type} from "net.minecraft.client.main.GameConfig$QuickPlayData"
import {$Record} from "java.lang.Record"

export class $Minecraft$GameLoadCookie extends $Record {
constructor(realmsClient: $RealmsClient$$Type, quickPlayData: $GameConfig$QuickPlayData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "realmsClient"(): $RealmsClient
public "quickPlayData"(): $GameConfig$QuickPlayData
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
public static "systemSinglePlayer"(): $GuiMessageTag
public "logTag"(): StringJS
public static "chatError"(): $GuiMessageTag
public "indicatorColor"(): integer
public static "chatNotSecure"(): $GuiMessageTag
public static "chatModified"(arg0: StringJS): $GuiMessageTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessageTag$$Type = ({"logTag"?: StringJS, "text"?: $Component$$Type, "indicatorColor"?: integer, "icon"?: $GuiMessageTag$Icon$$Type}) | ([logTag?: StringJS, text?: $Component$$Type, indicatorColor?: integer, icon?: $GuiMessageTag$Icon$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessageTag$$Original = $GuiMessageTag;}
declare module "net.minecraft.client.KeyMapping" {
import {$KeyMappingAccessor$$Interface} from "com.hollingsworth.nuggets.mixin.KeyMappingAccessor"
import {$Map} from "java.util.Map"
import {$KeyModifier, $KeyModifier$$Type} from "net.neoforged.neoforge.client.settings.KeyModifier"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Supplier} from "java.util.function.Supplier"
import {$IKeyConflictContext, $IKeyConflictContext$$Type} from "net.neoforged.neoforge.client.settings.IKeyConflictContext"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$AccessorKeyMapping$$Interface} from "vazkii.patchouli.mixin.client.AccessorKeyMapping"
import {$InputConstants$Type$$Type} from "com.mojang.blaze3d.platform.InputConstants$Type"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IKeyMappingExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IKeyMappingExtension"

export class $KeyMapping implements $Comparable$$Interface<($KeyMapping)>, $IKeyMappingExtension$$Interface, $KeyMappingAccessor$$Interface, $AccessorKeyMapping$$Interface {
static readonly "ALL": $Map<(StringJS), ($KeyMapping)>
static readonly "CATEGORY_INTERFACE": StringJS
static readonly "CATEGORY_MULTIPLAYER": StringJS
static readonly "CATEGORY_CREATIVE": StringJS
static readonly "CATEGORY_MOVEMENT": StringJS
static readonly "CATEGORY_GAMEPLAY": StringJS
static readonly "CATEGORY_MISC": StringJS
 "key": $InputConstants$Key
static readonly "CATEGORY_INVENTORY": StringJS

constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Key$$Type, arg3: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Type$$Type, arg3: integer, arg4: StringJS)
constructor(arg0: StringJS, arg1: integer, arg2: StringJS)
constructor(arg0: StringJS, arg1: $InputConstants$Type$$Type, arg2: integer, arg3: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Type$$Type, arg4: integer, arg5: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Key$$Type, arg4: StringJS)

public "getName"(): StringJS
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $KeyMapping$$Type): integer
public "matches"(arg0: integer, arg1: integer): boolean
public "getKey"(): $InputConstants$Key
public static "set"(arg0: $InputConstants$Key$$Type, arg1: boolean): void
public "isDefault"(): boolean
public static "setAll"(): void
public static "releaseAll"(): void
public "isDown"(): boolean
public "isUnbound"(): boolean
public "consumeClick"(): boolean
public static "resetToggleKeys"(): void
public "getCategory"(): StringJS
public static "createNameSupplier"(arg0: StringJS): $Supplier<($Component)>
public "getKeyModifier"(): $KeyModifier
public static "resetMapping"(): void
public "setKey"(arg0: $InputConstants$Key$$Type): void
public "saveString"(): StringJS
public "setDown"(arg0: boolean): void
public "setKeyModifierAndCode"(arg0: $KeyModifier$$Type, arg1: $InputConstants$Key$$Type): void
public "setKeyConflictContext"(arg0: $IKeyConflictContext$$Type): void
public "getTranslatedKeyMessage"(): $Component
public "getDefaultKeyModifier"(): $KeyModifier
public "getKeyConflictContext"(): $IKeyConflictContext
public "same"(arg0: $KeyMapping$$Type): boolean
public "getDefaultKey"(): $InputConstants$Key
public "matchesMouse"(arg0: integer): boolean
public static "getAllKeyMappings$patchouli_$md$447b7b$0"(): $Map
public static "click"(arg0: $InputConstants$Key$$Type): void
public "getDisplayName"(): $Component
public "setToDefault"(): void
public "hasKeyModifierConflict"(arg0: $KeyMapping$$Type): boolean
public "isActiveAndMatches"(arg0: $InputConstants$Key$$Type): boolean
public "isConflictContextAndModifierActive"(): boolean
public static "getAllKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
get "name"(): StringJS
get "default"(): boolean
public static get "all"(): void
get "down"(): boolean
get "unbound"(): boolean
get "category"(): StringJS
get "keyModifier"(): $KeyModifier
set "down"(value: boolean)
set "keyConflictContext"(value: $IKeyConflictContext$$Type)
get "translatedKeyMessage"(): $Component
get "defaultKeyModifier"(): $KeyModifier
get "keyConflictContext"(): $IKeyConflictContext
get "defaultKey"(): $InputConstants$Key
public static get "allKeyMappings$patchouli_$md$447b7b$0"(): $Map
get "displayName"(): $Component
get "toDefault"(): void
get "conflictContextAndModifierActive"(): boolean
public static get "allKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
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
 "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
 "codec"(): $Codec<(T)>
 "validateValue"(arg0: T): $Optional<(T)>
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
 "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
 "codec"(): $Codec<(T)>
 "validateValue"(arg0: T): $Optional<(T)>
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
declare module "net.minecraft.client.CloudStatus" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Component} from "net.minecraft.network.chat.Component"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
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
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
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
export type $GuiMessage$$Type = ({"addedTime"?: integer, "tag"?: $GuiMessageTag$$Type, "content"?: $Component$$Type, "signature"?: $MessageSignature$$Type}) | ([addedTime?: integer, tag?: $GuiMessageTag$$Type, content?: $Component$$Type, signature?: $MessageSignature$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessage$$Original = $GuiMessage;}
