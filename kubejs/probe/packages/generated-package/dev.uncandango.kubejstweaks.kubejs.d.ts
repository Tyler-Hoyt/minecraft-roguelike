declare module "dev.uncandango.kubejstweaks.kubejs.event.PreRecipeEventJS" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Stream} from "java.util.stream.Stream"
import {$PreRecipeEventJS$RecipeEntry} from "dev.uncandango.kubejstweaks.kubejs.event.PreRecipeEventJS$RecipeEntry"

export class $PreRecipeEventJS implements $KubeEvent$$Interface {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($JsonElement$$Type)>)

public "getEntry"(arg0: any): $Stream<($PreRecipeEventJS$RecipeEntry)>
public "dumpErroringRecipes"(): void
public "disable"(arg0: any): void
public "fixItemAtKey"(arg0: any, arg1: StringJS): void
public "fixCondition"(arg0: any): void
public "ignoreWarning"(arg0: any): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PreRecipeEventJS$$Type = ($PreRecipeEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PreRecipeEventJS$$Original = $PreRecipeEventJS;}
declare module "dev.uncandango.kubejstweaks.kubejs.event.CompatibilityEventJS" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"

export class $CompatibilityEventJS implements $KubeEvent$$Interface {
constructor()

public "addIncompatibility"(arg0: StringJS, arg1: StringJS): void
public "checkModLoaded"(arg0: StringJS, arg1: StringJS): void
public "checkModVersion"(arg0: StringJS, arg1: StringJS, arg2: StringJS): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompatibilityEventJS$$Type = ($CompatibilityEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompatibilityEventJS$$Original = $CompatibilityEventJS;}
declare module "dev.uncandango.kubejstweaks.kubejs.event.PreRecipeEventJS$RecipeEntry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Record} from "java.lang.Record"

export class $PreRecipeEventJS$RecipeEntry extends $Record {
constructor(id: $ResourceLocation$$Type, json: $JsonObject$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "renameKey"(arg0: StringJS, arg1: StringJS, arg2: boolean): void
public "disable"(): void
public "fixItemAtKey"(arg0: StringJS): void
public "fixCondition"(): void
public "ignoreWarning"(): void
public "addItemTagCondition"(arg0: StringJS): void
public "addConditionsFromKey"(arg0: StringJS): void
public "addModConditionFromType"(): void
public "json"(): $JsonObject
public "fromPath"(arg0: StringJS, arg1: StringJS): $Optional<($Pair<($JsonElement), ($JsonElement)>)>
public "fromPath"(arg0: StringJS): $Optional<($Pair<($JsonElement), ($JsonElement)>)>
public "replaceValueAtKey"(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: StringJS): void
public "addItemCondition"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PreRecipeEventJS$RecipeEntry$$Type = ({"json"?: $JsonObject$$Type, "id"?: $ResourceLocation$$Type}) | ([json?: $JsonObject$$Type, id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PreRecipeEventJS$RecipeEntry$$Original = $PreRecipeEventJS$RecipeEntry;}
declare module "dev.uncandango.kubejstweaks.kubejs.plugin.KJSTPluginUtils$KJSTPackType" {
import {$Enum} from "java.lang.Enum"

export class $KJSTPluginUtils$KJSTPackType extends $Enum<($KJSTPluginUtils$KJSTPackType)> {
static readonly "ASSETS": $KJSTPluginUtils$KJSTPackType
static readonly "DATA": $KJSTPluginUtils$KJSTPackType

public static "values"(): ($KJSTPluginUtils$KJSTPackType)[]
public static "valueOf"(arg0: StringJS): $KJSTPluginUtils$KJSTPackType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KJSTPluginUtils$KJSTPackType$$Type = (("assets") | ("data"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KJSTPluginUtils$KJSTPackType$$Original = $KJSTPluginUtils$KJSTPackType;}
declare module "dev.uncandango.kubejstweaks.kubejs.event.NoOpEventJS" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$KubeDataGenerator$$Type} from "dev.latvian.mods.kubejs.generator.KubeDataGenerator"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"

/**
 * Disables an entry at datapack level
 */
export class $NoOpEventJS implements $KubeEvent$$Interface {
constructor(arg0: $KubeDataGenerator$$Type)

/**
 * This is effectively the same event as generateData with "last" argument.
 * Use it to add any kind of json you wish
 */
public "json"(arg0: $ResourceLocation$$Type, arg1: $JsonElement$$Type): void
/**
 * Adds a condition that is always false, which effectively disables it
 */
public "lootTablesBlock"(arg0: Special.Block): void
/**
 * Adds a no-op type, disabling the biome modifier
 */
public "biomeModifiers"(arg0: Special.NeoforgeBiomeModifier): void
/**
 * Adds a condition that is always false, which effectively disables it
 */
public "lootTables"(arg0: Special.LootTable): void
/**
 * Adds a condition that is always false, which effectively disables it
 */
public "recipes"(arg0: Special.RecipeId): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoOpEventJS$$Type = ($NoOpEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoOpEventJS$$Original = $NoOpEventJS;}
declare module "dev.uncandango.kubejstweaks.kubejs.kjs72.event.RegisterCodecEventJS" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$Codec$$Type} from "com.mojang.serialization.Codec"

export class $RegisterCodecEventJS implements $KubeEvent$$Interface {
constructor()

public "registerCodec"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCodecEventJS$$Type = ($RegisterCodecEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterCodecEventJS$$Original = $RegisterCodecEventJS;}
declare module "dev.uncandango.kubejstweaks.kubejs.plugin.KJSTPluginUtils" {
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$KJSTPluginUtils$KJSTPackType$$Type} from "dev.uncandango.kubejstweaks.kubejs.plugin.KJSTPluginUtils$KJSTPackType"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Class} from "java.lang.Class"
import {$CloseableResourceManager} from "net.minecraft.server.packs.resources.CloseableResourceManager"
import {$WeakReference} from "java.lang.ref.WeakReference"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $KJSTPluginUtils {
static "TEMPORARY_SERVER_PACK_RESOURCES": $CloseableResourceManager
static "SERVER_PACK_RESOURCES": $WeakReference<($CloseableResourceManager)>
static "CLIENT_PACK_RESOURCES": $CloseableResourceManager

constructor()

public static "getClass"(arg0: any): $Class<(never)>
public static "getSuperclass"(arg0: any): $Class<(never)>
public static "curseForgeGetEndpoint"(arg0: StringJS, arg1: $Executor$$Type, arg2: $Consumer$$Type<($JsonElement)>): void
public static "runIfModPresent"(arg1: StringJS, arg2: $Callable$$Type<(void)>): void
public static "runIfModPresent"(arg1: StringJS, arg2: StringJS, arg3: $Callable$$Type<(void)>): void
public static "readJsonFromMod"(arg1: StringJS, arg2: StringJS, arg3: $KJSTPluginUtils$KJSTPackType$$Type): $JsonElement
public static "readJsonFromMod"(arg1: StringJS, arg2: StringJS): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KJSTPluginUtils$$Type = ($KJSTPluginUtils);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KJSTPluginUtils$$Original = $KJSTPluginUtils;}
