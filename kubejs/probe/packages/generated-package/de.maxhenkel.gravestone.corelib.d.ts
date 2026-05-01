declare module "de.maxhenkel.gravestone.corelib.death.PlayerDeathEvent" {
import {$Death, $Death$$Type} from "de.maxhenkel.gravestone.corelib.death.Death"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerDeathEvent extends $Event {
constructor(arg0: $Death$$Type, arg1: $ServerPlayer$$Type, arg2: $DamageSource$$Type)

public "getSource"(): $DamageSource
public "getPlayer"(): $ServerPlayer
public "removeDrops"(): void
public "storeDeath"(): void
public "getDeath"(): $Death
get "source"(): $DamageSource
get "player"(): $ServerPlayer
get "death"(): $Death
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
declare module "de.maxhenkel.gravestone.corelib.block.IItemBlock" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $IItemBlock$$Interface {

(): $Item$$Type
}

export class $IItemBlock implements $IItemBlock$$Interface {
 "toItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemBlock$$Type = (() => $Item$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemBlock$$Original = $IItemBlock;}
declare module "de.maxhenkel.gravestone.corelib.death.Death" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$UUID} from "java.util.UUID"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $Death {
public "toString"(): StringJS
public "getId"(): $UUID
public "getTimestamp"(): long
public "getPosX"(): double
public "getPosY"(): double
public "getPlayerUUID"(): $UUID
public "getBlockPos"(): $BlockPos
public "processDrops"(arg0: $Collection$$Type<($ItemEntity$$Type)>): void
public "getDimension"(): StringJS
public "toNBT"(arg0: $HolderLookup$Provider$$Type, arg1: boolean): $CompoundTag
public "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getOffHandInventory"(): $NonNullList<($ItemStack)>
public "getPlayerName"(): StringJS
public "getAllItems"(): $NonNullList<($ItemStack)>
public "getMainInventory"(): $NonNullList<($ItemStack)>
public "getAdditionalItems"(): $NonNullList<($ItemStack)>
public "getArmorInventory"(): $NonNullList<($ItemStack)>
public static "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $Death
public "getModel"(): byte
public "getExperience"(): integer
public "getEquipment"(): $NonNullList<($ItemStack)>
public static "fromPlayer"(arg0: $Player$$Type): $Death
public "getPosZ"(): double
get "id"(): $UUID
get "timestamp"(): long
get "posX"(): double
get "posY"(): double
get "playerUUID"(): $UUID
get "blockPos"(): $BlockPos
get "dimension"(): StringJS
get "offHandInventory"(): $NonNullList<($ItemStack)>
get "playerName"(): StringJS
get "allItems"(): $NonNullList<($ItemStack)>
get "mainInventory"(): $NonNullList<($ItemStack)>
get "additionalItems"(): $NonNullList<($ItemStack)>
get "armorInventory"(): $NonNullList<($ItemStack)>
get "model"(): byte
get "experience"(): integer
get "equipment"(): $NonNullList<($ItemStack)>
get "posZ"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Death$$Type = ($Death);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Death$$Original = $Death;}
