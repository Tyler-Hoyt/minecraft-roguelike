declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$Hotbar" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InventoryUpdateEvent} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$Hotbar extends $InventoryUpdateEvent {
constructor(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$Hotbar$$Type = ($InventoryUpdateEvent$Hotbar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryUpdateEvent$Hotbar$$Original = $InventoryUpdateEvent$Hotbar;}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$Offhand" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InventoryUpdateEvent} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$Offhand extends $InventoryUpdateEvent {
constructor(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$Offhand$$Type = ($InventoryUpdateEvent$Offhand);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryUpdateEvent$Offhand$$Original = $InventoryUpdateEvent$Offhand;}
declare module "com.leclowndu93150.baguettelib.event.entity.CreativeFlightEvent" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Event} from "net.neoforged.bus.api.Event"

export class $CreativeFlightEvent extends $Event {
public "getPlayer"(): $Player
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeFlightEvent$$Type = ($CreativeFlightEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeFlightEvent$$Original = $CreativeFlightEvent;}
declare module "com.leclowndu93150.baguettelib.event.entity.death.PlayerDeathEvent" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$LivingDeathEvent} from "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent"

export class $PlayerDeathEvent extends $LivingDeathEvent {
public "getPlayer"(): $Player
public "getEntity"(): $Player
get "player"(): $Player
get "entity"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDeathEvent$$Type = ($PlayerDeathEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerDeathEvent$$Original = $PlayerDeathEvent;}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"

export class $InventoryUpdateEvent extends $Event {
public "getSlot"(): integer
public "getPlayer"(): $Player
public "getNewStack"(): $ItemStack
public "getOldStack"(): $ItemStack
get "slot"(): integer
get "player"(): $Player
get "newStack"(): $ItemStack
get "oldStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$$Type = ($InventoryUpdateEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryUpdateEvent$$Original = $InventoryUpdateEvent;}
declare module "com.leclowndu93150.baguettelib.event.entity.CreativeFlightEvent$Changed" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CreativeFlightEvent} from "com.leclowndu93150.baguettelib.event.entity.CreativeFlightEvent"

export class $CreativeFlightEvent$Changed extends $CreativeFlightEvent {
constructor(arg0: $Player$$Type, arg1: boolean, arg2: boolean)

public "getPreviousFlightState"(): boolean
public "getNewFlightState"(): boolean
public "wasFlightDisabled"(): boolean
public "wasFlightEnabled"(): boolean
get "previousFlightState"(): boolean
get "newFlightState"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeFlightEvent$Changed$$Type = ($CreativeFlightEvent$Changed);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeFlightEvent$Changed$$Original = $CreativeFlightEvent$Changed;}
declare module "com.leclowndu93150.baguettelib.event.entity.death.PlayerDeathEvent$Pre" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerDeathEvent} from "com.leclowndu93150.baguettelib.event.entity.death.PlayerDeathEvent"

export class $PlayerDeathEvent$Pre extends $PlayerDeathEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $DamageSource$$Type)

public "getEntity"(): $LivingEntity
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "entity"(): $LivingEntity
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDeathEvent$Pre$$Type = ($PlayerDeathEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerDeathEvent$Pre$$Original = $PlayerDeathEvent$Pre;}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$Armor" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$InventoryUpdateEvent} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$Armor extends $InventoryUpdateEvent {
constructor(arg0: $Player$$Type, arg1: $EquipmentSlot$$Type, arg2: integer, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "getEquipmentSlot"(): $EquipmentSlot
get "equipmentSlot"(): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$Armor$$Type = ($InventoryUpdateEvent$Armor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryUpdateEvent$Armor$$Original = $InventoryUpdateEvent$Armor;}
declare module "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent$Post" {
import {$LivingDeathEvent} from "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDeathEvent$Post extends $LivingDeathEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDeathEvent$Post$$Type = ($LivingDeathEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingDeathEvent$Post$$Original = $LivingDeathEvent$Post;}
declare module "com.leclowndu93150.baguettelib.event.entity.death.PlayerDeathEvent$Post" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerDeathEvent} from "com.leclowndu93150.baguettelib.event.entity.death.PlayerDeathEvent"

export class $PlayerDeathEvent$Post extends $PlayerDeathEvent {
constructor(arg0: $Player$$Type, arg1: $DamageSource$$Type)

public "getEntity"(): $LivingEntity
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDeathEvent$Post$$Type = ($PlayerDeathEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerDeathEvent$Post$$Original = $PlayerDeathEvent$Post;}
declare module "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent$Pre" {
import {$LivingDeathEvent} from "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDeathEvent$Pre extends $LivingDeathEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDeathEvent$Pre$$Type = ($LivingDeathEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingDeathEvent$Pre$$Original = $LivingDeathEvent$Pre;}
declare module "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent" {
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$Event} from "net.neoforged.bus.api.Event"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDeathEvent extends $Event {
public "getSource"(): $DamageSource
public "getEntity"(): $LivingEntity
get "source"(): $DamageSource
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDeathEvent$$Type = ($LivingDeathEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingDeathEvent$$Original = $LivingDeathEvent;}
declare module "com.leclowndu93150.baguettelib.event.entity.CreativeFlightEvent$Toggle" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CreativeFlightEvent} from "com.leclowndu93150.baguettelib.event.entity.CreativeFlightEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"

export class $CreativeFlightEvent$Toggle extends $CreativeFlightEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: boolean)

public "setFlightState"(arg0: boolean): void
public "getFlightState"(): boolean
public "isEnablingFlight"(): boolean
public "isDisablingFlight"(): boolean
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "flightState"(value: boolean)
get "flightState"(): boolean
get "enablingFlight"(): boolean
get "disablingFlight"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeFlightEvent$Toggle$$Type = ($CreativeFlightEvent$Toggle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeFlightEvent$Toggle$$Original = $CreativeFlightEvent$Toggle;}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$Hands" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$InventoryUpdateEvent} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$Hands extends $InventoryUpdateEvent {
constructor(arg0: $Player$$Type, arg1: $EquipmentSlot$$Type, arg2: integer, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "getEquipmentSlot"(): $EquipmentSlot
get "equipmentSlot"(): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$Hands$$Type = ($InventoryUpdateEvent$Hands);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryUpdateEvent$Hands$$Original = $InventoryUpdateEvent$Hands;}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$All" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InventoryUpdateEvent} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$All extends $InventoryUpdateEvent {
constructor(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$All$$Type = ($InventoryUpdateEvent$All);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryUpdateEvent$All$$Original = $InventoryUpdateEvent$All;}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$MainInventory" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InventoryUpdateEvent} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$MainInventory extends $InventoryUpdateEvent {
constructor(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$MainInventory$$Type = ($InventoryUpdateEvent$MainInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryUpdateEvent$MainInventory$$Original = $InventoryUpdateEvent$MainInventory;}
