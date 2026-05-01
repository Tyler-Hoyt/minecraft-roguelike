declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$CurioCanUnequip" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$KubeLivingEntityEvent$$Interface} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Level} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$CurioCanUnequip implements $KubeLivingEntityEvent$$Interface {
 "result": $TriState
readonly "stack": $ItemStack
readonly "slotContext": $SlotContext

constructor(arg0: $LivingEntity$$Type, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type, arg3: $TriState$$Type)

public "setResult"(arg0: $TriState$$Type): void
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
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
get "entity"(): $LivingEntity
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$CurioCanUnequip$$Type = ($KubeJSCuriosEventJS$CurioCanUnequip);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KubeJSCuriosEventJS$CurioCanUnequip$$Original = $KubeJSCuriosEventJS$CurioCanUnequip;}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$registerRenderer" {
import {$ClientKubeEvent$$Interface} from "dev.latvian.mods.kubejs.client.ClientKubeEvent"
import {$CurioRenderer$RenderContext$$Type} from "net.zhaiji.kubejscurios.curios.CurioRenderer$RenderContext"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Minecraft} from "net.minecraft.client.Minecraft"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $KubeJSCuriosEventJS$registerRenderer implements $ClientKubeEvent$$Interface {
constructor()

public "remove"(arg0: $Item$$Type): void
public "register"(arg0: $Item$$Type, arg1: $Consumer$$Type<($CurioRenderer$RenderContext)>): void
public "getClient"(): $Minecraft
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
get "client"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$registerRenderer$$Type = ($KubeJSCuriosEventJS$registerRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KubeJSCuriosEventJS$registerRenderer$$Original = $KubeJSCuriosEventJS$registerRenderer;}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$CurioAttributeModifier" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Collection} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Level} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$KubeLivingEntityEvent$$Interface} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$CurioAttributeModifier implements $KubeLivingEntityEvent$$Interface {
readonly "stack": $ItemStack
readonly "originalModifiers": $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
readonly "id": $ResourceLocation
readonly "slotContext": $SlotContext

constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $ResourceLocation$$Type, arg3: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>)

public "getModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "removeAttribute"(arg0: $Holder$$Type<($Attribute)>): $Collection<($AttributeModifier)>
public "removeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
public "getEntity"(): $Entity
public "clearModifiers"(): void
public "addModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
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
get "modifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "entity"(): $Entity
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$CurioAttributeModifier$$Type = ($KubeJSCuriosEventJS$CurioAttributeModifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KubeJSCuriosEventJS$CurioAttributeModifier$$Original = $KubeJSCuriosEventJS$CurioAttributeModifier;}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$SlotModifiersUpdated" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$KubeLivingEntityEvent$$Interface} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Level} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$SlotModifiersUpdated implements $KubeLivingEntityEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $Set$$Type<(StringJS)>)

public "getEntity"(): $Entity
public "getTypes"(): $Set<(StringJS)>
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
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
get "entity"(): $Entity
get "types"(): $Set<(StringJS)>
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$SlotModifiersUpdated$$Type = ($KubeJSCuriosEventJS$SlotModifiersUpdated);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KubeJSCuriosEventJS$SlotModifiersUpdated$$Original = $KubeJSCuriosEventJS$SlotModifiersUpdated;}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$CurioChange" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$KubeLivingEntityEvent$$Interface} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Level} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$CurioChange implements $KubeLivingEntityEvent$$Interface {
readonly "slotType": StringJS
readonly "newStack": $ItemStack
readonly "index": integer
readonly "oldStack": $ItemStack

constructor(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
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
get "entity"(): $LivingEntity
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$CurioChange$$Type = ($KubeJSCuriosEventJS$CurioChange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KubeJSCuriosEventJS$CurioChange$$Original = $KubeJSCuriosEventJS$CurioChange;}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$DropRules" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$List} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Level} from "net.minecraft.world.level.Level"
import {$Tuple} from "net.minecraft.util.Tuple"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$KubeLivingEntityEvent$$Interface} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$DropRules implements $KubeLivingEntityEvent$$Interface {
readonly "curioHandler": $ICuriosItemHandler
readonly "recentlyHit": boolean
readonly "lootingLevel": integer
readonly "source": $DamageSource
readonly "overrides": $List<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>

constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean, arg4: $ICuriosItemHandler$$Type)

public "getEntity"(): $Entity
public "addOverride"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $ICurio$DropRule$$Type): void
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
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
get "entity"(): $Entity
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$DropRules$$Type = ($KubeJSCuriosEventJS$DropRules);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KubeJSCuriosEventJS$DropRules$$Original = $KubeJSCuriosEventJS$DropRules;}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$CurioDrops" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$KubeLivingEntityEvent$$Interface} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Level} from "net.minecraft.world.level.Level"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$CurioDrops implements $KubeLivingEntityEvent$$Interface {
readonly "curioHandler": $ICuriosItemHandler
readonly "drops": $Collection<($ItemEntity)>
readonly "recentlyHit": boolean
readonly "lootingLevel": integer
readonly "source": $DamageSource

constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: $Collection$$Type<($ItemEntity$$Type)>, arg3: integer, arg4: boolean, arg5: $ICuriosItemHandler$$Type)

public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
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
get "entity"(): $LivingEntity
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$CurioDrops$$Type = ($KubeJSCuriosEventJS$CurioDrops);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KubeJSCuriosEventJS$CurioDrops$$Original = $KubeJSCuriosEventJS$CurioDrops;}
declare module "net.zhaiji.kubejscurios.kubejs.KubeJSCuriosEventJS$CurioCanEquip" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$KubeLivingEntityEvent$$Interface} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Level} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $KubeJSCuriosEventJS$CurioCanEquip implements $KubeLivingEntityEvent$$Interface {
 "result": $TriState
readonly "stack": $ItemStack
readonly "slotContext": $SlotContext

constructor(arg0: $LivingEntity$$Type, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type, arg3: $TriState$$Type)

public "setResult"(arg0: $TriState$$Type): void
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
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
get "entity"(): $LivingEntity
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosEventJS$CurioCanEquip$$Type = ($KubeJSCuriosEventJS$CurioCanEquip);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KubeJSCuriosEventJS$CurioCanEquip$$Original = $KubeJSCuriosEventJS$CurioCanEquip;}
