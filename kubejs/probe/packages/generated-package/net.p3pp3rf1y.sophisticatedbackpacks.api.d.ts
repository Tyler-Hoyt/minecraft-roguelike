declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IEntityToolSwapUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IEntityToolSwapUpgrade$$Interface {

(arg0: $Level, arg1: $Entity, arg2: $Player): boolean
}

export class $IEntityToolSwapUpgrade implements $IEntityToolSwapUpgrade$$Interface {
 "onEntityInteract"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $Player$$Type): boolean
 "canProcessEntityInteract"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityToolSwapUpgrade$$Type = ((arg0: $Level, arg1: $Entity, arg2: $Player) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEntityToolSwapUpgrade$$Original = $IEntityToolSwapUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IAttackEntityResponseUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $IAttackEntityResponseUpgrade$$Interface {

(arg0: $Player): boolean
}

export class $IAttackEntityResponseUpgrade implements $IAttackEntityResponseUpgrade$$Interface {
 "onAttackEntity"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttackEntityResponseUpgrade$$Type = ((arg0: $Player) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAttackEntityResponseUpgrade$$Original = $IAttackEntityResponseUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IEnergyStorageUpgradeWrapper" {
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"

export interface $IEnergyStorageUpgradeWrapper$$Interface {

(arg0: $IEnergyStorage): $IEnergyStorage$$Type
}

export class $IEnergyStorageUpgradeWrapper implements $IEnergyStorageUpgradeWrapper$$Interface {
 "wrapStorage"(arg0: $IEnergyStorage$$Type): $IEnergyStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorageUpgradeWrapper$$Type = ((arg0: $IEnergyStorage) => $IEnergyStorage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyStorageUpgradeWrapper$$Original = $IEnergyStorageUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockPickResponseUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IBlockPickResponseUpgrade$$Interface {

(arg0: $Player, arg1: $ItemStack): boolean
}

export class $IBlockPickResponseUpgrade implements $IBlockPickResponseUpgrade$$Interface {
 "pickBlock"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockPickResponseUpgrade$$Type = ((arg0: $Player, arg1: $ItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockPickResponseUpgrade$$Original = $IBlockPickResponseUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IItemHandlerInteractionUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IItemHandlerInteractionUpgrade$$Interface {

(arg0: $IItemHandler, arg1: $Player): void
}

export class $IItemHandlerInteractionUpgrade implements $IItemHandlerInteractionUpgrade$$Interface {
 "onHandlerInteract"(arg0: $IItemHandler$$Type, arg1: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerInteractionUpgrade$$Type = ((arg0: $IItemHandler, arg1: $Player) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemHandlerInteractionUpgrade$$Original = $IItemHandlerInteractionUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockToolSwapUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockToolSwapUpgrade$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $Player): boolean
}

export class $IBlockToolSwapUpgrade implements $IBlockToolSwapUpgrade$$Interface {
 "onBlockInteract"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): boolean
 "canProcessBlockInteract"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockToolSwapUpgrade$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $Player) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockToolSwapUpgrade$$Original = $IBlockToolSwapUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IInventoryWrapperUpgrade" {
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler"

export interface $IInventoryWrapperUpgrade$$Interface {

(arg0: $ITrackedContentsItemHandler): $ITrackedContentsItemHandler$$Type
}

export class $IInventoryWrapperUpgrade implements $IInventoryWrapperUpgrade$$Interface {
 "wrapInventory"(arg0: $ITrackedContentsItemHandler$$Type): $ITrackedContentsItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryWrapperUpgrade$$Type = ((arg0: $ITrackedContentsItemHandler) => $ITrackedContentsItemHandler$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInventoryWrapperUpgrade$$Original = $IInventoryWrapperUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IFluidHandlerWrapperUpgrade" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IStorageFluidHandler, $IStorageFluidHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageFluidHandler"

export interface $IFluidHandlerWrapperUpgrade$$Interface {

(arg0: $IStorageFluidHandler, arg1: $ItemStack): $IStorageFluidHandler$$Type
}

export class $IFluidHandlerWrapperUpgrade implements $IFluidHandlerWrapperUpgrade$$Interface {
 "wrapHandler"(arg0: $IStorageFluidHandler$$Type, arg1: $ItemStack$$Type): $IStorageFluidHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandlerWrapperUpgrade$$Type = ((arg0: $IStorageFluidHandler, arg1: $ItemStack) => $IStorageFluidHandler$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluidHandlerWrapperUpgrade$$Original = $IFluidHandlerWrapperUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockClickResponseUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IBlockClickResponseUpgrade$$Interface {

(arg0: $Player, arg1: $BlockPos): boolean
}

export class $IBlockClickResponseUpgrade implements $IBlockClickResponseUpgrade$$Interface {
 "onBlockClick"(arg0: $Player$$Type, arg1: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockClickResponseUpgrade$$Type = ((arg0: $Player, arg1: $BlockPos) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockClickResponseUpgrade$$Original = $IBlockClickResponseUpgrade;}
