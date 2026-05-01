declare module "com.almostreliable.lootjs.kube.LootTableEventJS" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$LootTableEvent} from "com.almostreliable.lootjs.loot.LootTableEvent"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"

export class $LootTableEventJS extends $LootTableEvent implements $KubeEvent$$Interface {
constructor(arg0: $WritableRegistry$$Type<($LootTable$$Type)>)

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
export type $LootTableEventJS$$Type = ($LootTableEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableEventJS$$Original = $LootTableEventJS;}
declare module "com.almostreliable.lootjs.kube.wrappers.NumberProviderWrapper" {
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export class $NumberProviderWrapper {
constructor()

public static "constant"(arg0: integer): $NumberProvider
public static "uniform"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $NumberProvider
public static "binomial"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $NumberProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberProviderWrapper$$Type = ($NumberProviderWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NumberProviderWrapper$$Original = $NumberProviderWrapper;}
declare module "com.almostreliable.lootjs.kube.LootModificationEventJS" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$LootModificationEvent} from "com.almostreliable.lootjs.loot.LootModificationEvent"
import {$IGlobalLootModifier$$Type} from "net.neoforged.neoforge.common.loot.IGlobalLootModifier"

export class $LootModificationEventJS extends $LootModificationEvent implements $KubeEvent$$Interface {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($IGlobalLootModifier$$Type)>)

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
export type $LootModificationEventJS$$Type = ($LootModificationEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootModificationEventJS$$Original = $LootModificationEventJS;}
