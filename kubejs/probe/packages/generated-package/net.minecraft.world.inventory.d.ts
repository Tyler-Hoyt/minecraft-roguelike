declare module "net.minecraft.world.inventory.BeaconMenu" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"

export class $BeaconMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Container$$Type)
constructor(arg0: integer, arg1: $Container$$Type, arg2: $ContainerData$$Type, arg3: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "getLevels"(): integer
public "stillValid"(arg0: $Player$$Type): boolean
public "setData"(arg0: integer, arg1: integer): void
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public static "encodeEffect"(arg0: $Holder$$Type<($MobEffect)>): integer
public "getPrimaryEffect"(): $Holder<($MobEffect)>
public static "decodeEffect"(arg0: integer): $Holder<($MobEffect)>
public "updateEffects"(arg0: ($Holder$$Type<($MobEffect$$Type)>)?, arg1: ($Holder$$Type<($MobEffect$$Type)>)?): void
public "getSecondaryEffect"(): $Holder<($MobEffect)>
public "hasPayment"(): boolean
get "levels"(): integer
get "primaryEffect"(): $Holder<($MobEffect)>
get "secondaryEffect"(): $Holder<($MobEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeaconMenu$$Type = ($BeaconMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeaconMenu$$Original = $BeaconMenu;}
declare module "net.minecraft.world.inventory.GrindstoneMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $GrindstoneMenu extends $AbstractContainerMenu {
static readonly "INPUT_SLOT": integer
static readonly "ADDITIONAL_SLOT": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "MAX_NAME_LENGTH": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindstoneMenu$$Type = ($GrindstoneMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrindstoneMenu$$Original = $GrindstoneMenu;}
declare module "net.minecraft.world.inventory.RecipeBookType" {
import {$Enum} from "java.lang.Enum"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $RecipeBookType extends $Enum<($RecipeBookType)> implements $IExtensibleEnum$$Interface {
static readonly "FURNACE": $RecipeBookType
static readonly "BLAST_FURNACE": $RecipeBookType
static readonly "AETHER_FREEZER": $RecipeBookType
static readonly "SMOKER": $RecipeBookType
static readonly "CRAFTING": $RecipeBookType
static readonly "AETHER_INCUBATOR": $RecipeBookType
static readonly "UNDERGARDEN_INFUSER": $RecipeBookType
static readonly "AETHER_ALTAR": $RecipeBookType

public static "values"(): ($RecipeBookType)[]
public static "valueOf"(arg0: StringJS): $RecipeBookType
public static "getExtensionInfo"(): $ExtensionInfo
public static get "extensionInfo"(): $ExtensionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookType$$Type = (("crafting") | ("furnace") | ("blast_furnace") | ("smoker") | ("aether_altar") | ("aether_freezer") | ("aether_incubator") | ("undergarden_infuser"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookType$$Original = $RecipeBookType;}
declare module "net.minecraft.world.inventory.RecipeBookMenu" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RecipeBookCategories} from "net.minecraft.client.RecipeBookCategories"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<(object)>> extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer)

public "getSize"(): integer
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "clearCraftingContent"(): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "getRecipeBookCategories"(): $List<($RecipeBookCategories)>
public "handlePlacement"(arg0: boolean, arg1: $RecipeHolder$$Type<(never)>, arg2: $ServerPlayer$$Type): void
public "getGridWidth"(): integer
public "getResultSlotIndex"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "recipeMatches"(arg0: $RecipeHolder$$Type<(R)>): boolean
public "getGridHeight"(): integer
get "size"(): integer
get "recipeBookCategories"(): $List<($RecipeBookCategories)>
get "gridWidth"(): integer
get "resultSlotIndex"(): integer
get "recipeBookType"(): $RecipeBookType
get "gridHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookMenu$$Type<I, R> = ($RecipeBookMenu<(I), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookMenu$$Original<I, R> = $RecipeBookMenu<(I), (R)>;}
declare module "net.minecraft.world.inventory.ClickType" {
import {$Enum} from "java.lang.Enum"

export class $ClickType extends $Enum<($ClickType)> {
static readonly "QUICK_MOVE": $ClickType
static readonly "SWAP": $ClickType
static readonly "PICKUP_ALL": $ClickType
static readonly "THROW": $ClickType
static readonly "QUICK_CRAFT": $ClickType
static readonly "PICKUP": $ClickType
static readonly "CLONE": $ClickType

public static "values"(): ($ClickType)[]
public static "valueOf"(arg0: StringJS): $ClickType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickType$$Type = (("pickup") | ("quick_move") | ("swap") | ("clone") | ("throw") | ("quick_craft") | ("pickup_all"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClickType$$Original = $ClickType;}
declare module "net.minecraft.world.inventory.ContainerSynchronizer" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $ContainerSynchronizer$$Interface {
}

export class $ContainerSynchronizer implements $ContainerSynchronizer$$Interface {
 "sendInitialData"(arg0: $AbstractContainerMenu$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $ItemStack$$Type, arg3: (integer)[]): void
 "sendSlotChange"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "sendDataChange"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer): void
 "sendCarriedChange"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerSynchronizer$$Type = ($ContainerSynchronizer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerSynchronizer$$Original = $ContainerSynchronizer;}
declare module "net.minecraft.world.inventory.StonecutterMenu" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$StonecutterRecipe} from "net.minecraft.world.item.crafting.StonecutterRecipe"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"

export class $StonecutterMenu extends $AbstractContainerMenu {
static readonly "INPUT_SLOT": integer
readonly "container": $Container
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "getType"(): $MenuType<(never)>
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "getSelectedRecipeIndex"(): integer
public "registerUpdateListener"(arg0: $Runnable$$Type): void
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getRecipes"(): $List<($RecipeHolder<($StonecutterRecipe)>)>
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getNumRecipes"(): integer
public "hasInputItem"(): boolean
get "type"(): $MenuType<(never)>
get "selectedRecipeIndex"(): integer
get "recipes"(): $List<($RecipeHolder<($StonecutterRecipe)>)>
get "numRecipes"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterMenu$$Type = ($StonecutterMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StonecutterMenu$$Original = $StonecutterMenu;}
declare module "net.minecraft.world.inventory.AbstractFurnaceMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $AbstractFurnaceMenu extends $RecipeBookMenu<($SingleRecipeInput), ($AbstractCookingRecipe)> {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

public "getSize"(): integer
public "isLit"(): boolean
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "clearCraftingContent"(): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getGridWidth"(): integer
public "getResultSlotIndex"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "recipeMatches"(arg0: $RecipeHolder$$Type<($AbstractCookingRecipe$$Type)>): boolean
public "getGridHeight"(): integer
public "getBurnProgress"(): float
public "getLitProgress"(): float
get "size"(): integer
get "lit"(): boolean
get "gridWidth"(): integer
get "resultSlotIndex"(): integer
get "recipeBookType"(): $RecipeBookType
get "gridHeight"(): integer
get "burnProgress"(): float
get "litProgress"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFurnaceMenu$$Type = ($AbstractFurnaceMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFurnaceMenu$$Original = $AbstractFurnaceMenu;}
declare module "net.minecraft.world.inventory.DataSlot" {
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"

export class $DataSlot {
constructor()

public "get"(): integer
public "set"(arg0: integer): void
public static "shared"(arg0: (integer)[], arg1: integer): $DataSlot
public static "standalone"(): $DataSlot
public static "forContainer"(arg0: $ContainerData$$Type, arg1: integer): $DataSlot
public "checkAndClearUpdateFlag"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataSlot$$Type = ($DataSlot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataSlot$$Original = $DataSlot;}
declare module "net.minecraft.world.inventory.BlastFurnaceMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceMenu$$Type = ($BlastFurnaceMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastFurnaceMenu$$Original = $BlastFurnaceMenu;}
declare module "net.minecraft.world.inventory.HopperMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $HopperMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "CONTAINER_SIZE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)

public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HopperMenu$$Type = ($HopperMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HopperMenu$$Original = $HopperMenu;}
declare module "net.minecraft.world.inventory.DispenserMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $DispenserMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)

public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserMenu$$Type = ($DispenserMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispenserMenu$$Original = $DispenserMenu;}
declare module "net.minecraft.world.inventory.Slot" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$OwoSlotExtension$$Interface} from "io.wispforest.owo.util.pond.OwoSlotExtension"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Optional} from "java.util.Optional"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$SlotAccessor$$Interface} from "io.wispforest.accessories.mixin.SlotAccessor"
import {$SlotAccessor$$Interface as $SlotAccessor$0$$Interface} from "io.wispforest.owo.mixin.ui.SlotAccessor"

export class $Slot implements $SlotAccessor$0$$Interface, $OwoSlotExtension$$Interface, $SlotAccessor$$Interface {
readonly "container": $Container
 "x": integer
 "index": integer
 "y": integer
readonly "slot": integer

constructor(arg0: $Container$$Type, arg1: integer, arg2: integer, arg3: integer)

public "remove"(arg0: integer): $ItemStack
public "set"(arg0: $ItemStack$$Type): void
public "isActive"(): boolean
public "getItem"(): $ItemStack
public "isFake"(): boolean
public "tryRemove"(arg0: integer, arg1: integer, arg2: $Player$$Type): $Optional<($ItemStack)>
public "safeInsert"(arg0: $ItemStack$$Type): $ItemStack
public "safeInsert"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
public "onTake"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "safeTake"(arg0: integer, arg1: integer, arg2: $Player$$Type): $ItemStack
public "getSlotIndex"(): integer
public "isHighlightable"(): boolean
public "isSameInventory"(arg0: $Slot$$Type): boolean
public "owo$getScissorArea"(): $PositionedRectangle
public "setChanged"(): void
public "owo$setScissorArea"(scissor: $PositionedRectangle$$Type): void
public "setBackground"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $Slot
public "accessories$setY"(arg0: integer): void
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "getMaxStackSize"(): integer
public "mayPickup"(arg0: $Player$$Type): boolean
public "mayPlace"(arg0: $ItemStack$$Type): boolean
public "allowModification"(arg0: $Player$$Type): boolean
public "owo$setX"(arg0: integer): void
public "owo$setY"(arg0: integer): void
public "getNoItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
public "owo$setDisabledOverride"(disabled: boolean): void
public "owo$getDisabledOverride"(): boolean
public "setByPlayer"(arg0: $ItemStack$$Type): void
public "setByPlayer"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "getContainerSlot"(): integer
public "onQuickCraft"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "hasItem"(): boolean
get "active"(): boolean
get "item"(): $ItemStack
get "fake"(): boolean
get "slotIndex"(): integer
get "highlightable"(): boolean
get "changed"(): void
get "maxStackSize"(): integer
get "noItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
set "byPlayer"(value: $ItemStack$$Type)
get "containerSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Slot$$Type = ($Slot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Slot$$Original = $Slot;}
declare module "net.minecraft.world.inventory.AnvilMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ItemCombinerMenu} from "net.minecraft.world.inventory.ItemCombinerMenu"

export class $AnvilMenu extends $ItemCombinerMenu {
static readonly "INPUT_SLOT": integer
 "repairItemCountCost": integer
readonly "access": $ContainerLevelAccess
static readonly "ADDITIONAL_SLOT": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "MAX_NAME_LENGTH": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
 "itemName": StringJS
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "constant$chf000$apothic_enchanting$apoth_removeLevelCap"(arg0: integer): integer
public static "calculateIncreasedRepairCost"(arg0: integer): integer
public "redirect$chf000$apothic_enchanting$apoth_chargeOptimalLevels"(arg0: $Player$$Type, arg1: integer): void
public "modifyExpressionValue$zgd000$ae2$setAnnihilationPlaneThreadLocal"(arg0: boolean): boolean
public "getCost"(): integer
public "createResult"(): void
public "setItemName"(arg0: StringJS): boolean
public "setMaximumCost"(arg0: long): void
get "cost"(): integer
set "maximumCost"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilMenu$$Type = ($AnvilMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnvilMenu$$Original = $AnvilMenu;}
declare module "net.minecraft.world.inventory.CraftingMenu" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$CraftingMenuAccessor$$Interface as $CraftingMenuAccessor$0$$Interface} from "com.aetherteam.aether.mixin.mixins.common.accessor.CraftingMenuAccessor"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$CraftingMenuAccessor$$Interface} from "io.wispforest.accessories.mixin.CraftingMenuAccessor"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"
import {$ResultContainer$$Type} from "net.minecraft.world.inventory.ResultContainer"

export class $CraftingMenu extends $RecipeBookMenu<($CraftingInput), ($CraftingRecipe)> implements $CraftingMenuAccessor$0$$Interface, $CraftingMenuAccessor$$Interface {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "getSize"(): integer
public "removed"(arg0: $Player$$Type): void
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public static "callSlotChangedCraftingGrid$aether_$md$447b7b$0"(arg0: $AbstractContainerMenu$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $CraftingContainer$$Type, arg4: $ResultContainer$$Type, arg5: $RecipeHolder$$Type): void
public static "slotChangedCraftingGrid$accessories_$md$447b7b$1"(arg0: $AbstractContainerMenu$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $CraftingContainer$$Type, arg4: $ResultContainer$$Type, arg5: $RecipeHolder$$Type): void
public "clearCraftingContent"(): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "finishPlacingRecipe"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getGridWidth"(): integer
public "getResultSlotIndex"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "recipeMatches"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): boolean
public "getGridHeight"(): integer
public "beginPlacingRecipe"(): void
public static "callSlotChangedCraftingGrid"(arg0: $AbstractContainerMenu$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $CraftingContainer$$Type, arg4: $ResultContainer$$Type, arg5: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
public static "accessories$slotChangedCraftingGrid"(abstractContainerMenu: $AbstractContainerMenu$$Type, level: $Level$$Type, player: $Player$$Type, craftingContainer: $CraftingContainer$$Type, resultContainer: $ResultContainer$$Type, recipeHolder: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
get "size"(): integer
get "gridWidth"(): integer
get "resultSlotIndex"(): integer
get "recipeBookType"(): $RecipeBookType
get "gridHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMenu$$Type = ($CraftingMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingMenu$$Original = $CraftingMenu;}
declare module "net.minecraft.world.inventory.AbstractContainerMenu" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$ScreenInternals$LocalPacket$$Type} from "io.wispforest.owo.client.screens.ScreenInternals$LocalPacket"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$OwoScreenHandlerExtension$$Interface} from "io.wispforest.owo.util.pond.OwoScreenHandlerExtension"
import {$Set$$Type} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$SyncedProperty} from "io.wispforest.owo.client.screens.SyncedProperty"
import {$ScreenHandlerInvoker$$Interface} from "io.wispforest.owo.mixin.ScreenHandlerInvoker"
import {$OwoScreenHandler$$Interface} from "io.wispforest.owo.client.screens.OwoScreenHandler"
import {$ContainerSynchronizer$$Type} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ScreenInternals$SyncPropertiesPacket$$Type} from "io.wispforest.owo.client.screens.ScreenInternals$SyncPropertiesPacket"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ReflectiveEndecBuilder} from "io.wispforest.endec.impl.ReflectiveEndecBuilder"
import {$OptionalInt} from "java.util.OptionalInt"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$AbstractContainerMenuAccessor$$Interface} from "com.aetherteam.aether.mixin.mixins.common.accessor.AbstractContainerMenuAccessor"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AbstractContainerMenu implements $ScreenHandlerInvoker$$Interface, $OwoScreenHandlerExtension$$Interface, $OwoScreenHandler$$Interface, $AbstractContainerMenuAccessor$$Interface {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

public "getType"(): $MenuType<(never)>
public "getSlot"(arg0: integer): $Slot
public "removed"(arg0: $Player$$Type): void
public "getCarried"(): $ItemStack
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public "wrapOperation$zdh000$geckolib$forceGeckolibSlotChange"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Operation$$Type): boolean
public "wrapOperation$zdh000$geckolib$removeGeckolibIdOnCopy"(arg0: $ItemStack$$Type, arg1: integer, arg2: $Operation$$Type): $ItemStack
public "findSlot"(arg0: $Container$$Type, arg1: integer): $OptionalInt
public "canDragTo"(arg0: $Slot$$Type): boolean
public "getStateId"(): integer
public "getItems"(): $NonNullList<($ItemStack)>
public "broadcastChanges"(): void
public "player"(): $Player
public "createProperty"(clazz: $Class$$Type, endec: $Endec$$Type, initial: any): $SyncedProperty
public static "getQuickcraftMask"(arg0: integer, arg1: integer): integer
public "setCarried"(arg0: $ItemStack$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "setData"(arg0: integer, arg1: integer): void
public "setItem"(arg0: integer, arg1: integer, arg2: $ItemStack$$Type): void
public static "canItemQuickReplace"(arg0: $Slot$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "getQuickCraftPlaceCount"(arg0: $Set$$Type<($Slot$$Type)>, arg1: integer, arg2: $ItemStack$$Type): integer
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "wrapOperation$zdh000$geckolib$forceGeckolibIdSync"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Operation$$Type): boolean
public "setRemoteSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "owo$attachToPlayer"(player: $Player$$Type): void
public "addSlotListener"(arg0: $ContainerListener$$Type): void
public "setSynchronizer"(arg0: $ContainerSynchronizer$$Type): void
public "transferState"(arg0: $AbstractContainerMenu$$Type): void
public "updateDataSlotListeners"(arg0: integer, arg1: integer): void
public "sendAllDataToRemote"(): void
public "setRemoteSlotNoCopy"(arg0: integer, arg1: $ItemStack$$Type): void
public static "isValidQuickcraftType"(arg0: integer, arg1: $Player$$Type): boolean
public "resumeRemoteUpdates"(): void
public "aether$getRemoteSlots"(): $NonNullList
public "addClientboundMessage"(messageClass: $Class$$Type, endec: $Endec$$Type, handler: $Consumer$$Type): void
public "aether$setContainerId"(arg0: integer): void
public "addServerboundMessage"(messageClass: $Class$$Type, endec: $Endec$$Type, handler: $Consumer$$Type): void
public "aether$getLastSlots"(): $NonNullList
public "owo$readPropertySync"(packet: $ScreenInternals$SyncPropertiesPacket$$Type): void
public "suppressRemoteUpdates"(): void
public static "getQuickcraftHeader"(arg0: integer): integer
public static "getRedstoneSignalFromBlockEntity"(arg0: $BlockEntity$$Type): integer
public "removeSlotListener"(arg0: $ContainerListener$$Type): void
public "broadcastFullState"(): void
public "isValidSlotIndex"(arg0: integer): boolean
public "setRemoteCarried"(arg0: $ItemStack$$Type): void
public static "getQuickcraftType"(arg0: integer): integer
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "endecBuilder"(): $ReflectiveEndecBuilder
public "owo$handlePacket"(packet: $ScreenInternals$LocalPacket$$Type, clientbound: boolean): void
public "owo$insertItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
public "aether$setMenuType"(arg0: $MenuType$$Type): void
public "incrementStateId"(): integer
public "sendMessage"(message: $Record$$Type): void
public "initializeContents"(arg0: integer, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $ItemStack$$Type): void
public static "getRedstoneSignalFromContainer"(arg0: $Container$$Type): integer
public "createProperty"<T>(clazz: $Class$$Type<(T)>, initial: T): $SyncedProperty<(T)>
public "addClientboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
public "addServerboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
get "type"(): $MenuType<(never)>
get "carried"(): $ItemStack
get "items"(): $NonNullList<($ItemStack)>
set "carried"(value: $ItemStack$$Type)
set "synchronizer"(value: $ContainerSynchronizer$$Type)
set "remoteCarried"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenu$$Type = ($AbstractContainerMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerMenu$$Original = $AbstractContainerMenu;}
declare module "net.minecraft.world.inventory.MerchantMenu" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Merchant$$Type} from "net.minecraft.world.item.trading.Merchant"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $MerchantMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Merchant$$Type)

public "removed"(arg0: $Player$$Type): void
public "getOffers"(): $MerchantOffers
public "stillValid"(arg0: $Player$$Type): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "canRestock"(): boolean
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "tryMoveItems"(arg0: integer): void
public "showProgressBar"(): boolean
public "getTraderXp"(): integer
public "getTraderLevel"(): integer
public "setShowProgressBar"(arg0: boolean): void
public "getFutureTraderXp"(): integer
public "setCanRestock"(arg0: boolean): void
public "setMerchantLevel"(arg0: integer): void
public "setSelectionHint"(arg0: integer): void
public "setOffers"(arg0: $MerchantOffers$$Type): void
public "setXp"(arg0: integer): void
get "offers"(): $MerchantOffers
get "traderXp"(): integer
get "traderLevel"(): integer
get "futureTraderXp"(): integer
set "merchantLevel"(value: integer)
set "selectionHint"(value: integer)
set "offers"(value: $MerchantOffers$$Type)
set "xp"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantMenu$$Type = ($MerchantMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MerchantMenu$$Original = $MerchantMenu;}
declare module "net.minecraft.world.inventory.RecipeCraftingHolder" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $RecipeCraftingHolder$$Interface {
set "recipeUsed"(value: $RecipeHolder$$Type<(never)>)
get "recipeUsed"(): $RecipeHolder<(never)>
}

export class $RecipeCraftingHolder implements $RecipeCraftingHolder$$Interface {
 "setRecipeUsed"(arg0: $Level$$Type, arg1: $ServerPlayer$$Type, arg2: $RecipeHolder$$Type<(never)>): boolean
 "setRecipeUsed"(arg0: $RecipeHolder$$Type<(never)>): void
 "getRecipeUsed"(): $RecipeHolder<(never)>
 "awardUsedRecipes"(arg0: $Player$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftingHolder$$Type = ($RecipeCraftingHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeCraftingHolder$$Original = $RecipeCraftingHolder;}
declare module "net.minecraft.world.inventory.CrafterMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener$$Interface} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener$$Interface {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $CraftingContainer$$Type, arg3: $ContainerData$$Type)

public "getContainer"(): $Container
public "isPowered"(): boolean
public "stillValid"(arg0: $Player$$Type): boolean
public "setSlotState"(arg0: integer, arg1: boolean): void
public "isSlotDisabled"(arg0: integer): boolean
public "dataChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $ItemStack$$Type): void
get "container"(): $Container
get "powered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrafterMenu$$Type = ($CrafterMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrafterMenu$$Original = $CrafterMenu;}
declare module "net.minecraft.world.inventory.SmithingMenu" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ItemCombinerMenu} from "net.minecraft.world.inventory.ItemCombinerMenu"

export class $SmithingMenu extends $ItemCombinerMenu {
readonly "access": $ContainerLevelAccess
static readonly "ADDITIONAL_SLOT": integer
static readonly "TEMPLATE_SLOT": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "ADDITIONAL_SLOT_X_PLACEMENT": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "BASE_SLOT_X_PLACEMENT": integer
static readonly "BASE_SLOT": integer
 "containerId": integer
static readonly "SLOT_Y_PLACEMENT": integer
static readonly "TEMPLATE_SLOT_X_PLACEMENT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "getSlotToQuickMoveTo"(arg0: $ItemStack$$Type): integer
public "canMoveIntoInputSlots"(arg0: $ItemStack$$Type): boolean
public "createResult"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingMenu$$Type = ($SmithingMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingMenu$$Original = $SmithingMenu;}
declare module "net.minecraft.world.inventory.EnchantmentMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$DataSlot} from "net.minecraft.world.inventory.DataSlot"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $EnchantmentMenu extends $AbstractContainerMenu {
readonly "costs": (integer)[]
readonly "access": $ContainerLevelAccess
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "enchantmentSeed": $DataSlot
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
readonly "random": $RandomSource
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "enchantSlots": $Container
readonly "enchantClue": (integer)[]
 "containerId": integer
readonly "levelClue": (integer)[]
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "getEnchantmentSeed"(): integer
public "stillValid"(arg0: $Player$$Type): boolean
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getGoldCount"(): integer
get "goldCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenu$$Type = ($EnchantmentMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentMenu$$Original = $EnchantmentMenu;}
declare module "net.minecraft.world.inventory.SlotRange" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IntList, $IntList$$Type} from "it.unimi.dsi.fastutil.ints.IntList"

export interface $SlotRange$$Interface extends $StringRepresentable$$Interface {
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}

export class $SlotRange implements $SlotRange$$Interface {
 "size"(): integer
static "of"(arg0: StringJS, arg1: $IntList$$Type): $SlotRange
 "slots"(): $IntList
static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
 "getSerializedName"(): StringJS
static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
 "getRemappedEnumConstantName"(): StringJS
static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotRange$$Type = ($SlotRange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotRange$$Original = $SlotRange;}
declare module "net.minecraft.world.inventory.tooltip.TooltipComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TooltipComponent$$Interface {
}

export class $TooltipComponent implements $TooltipComponent$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipComponent$$Type = ($TooltipComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipComponent$$Original = $TooltipComponent;}
declare module "net.minecraft.world.inventory.CartographyTableMenu" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $CartographyTableMenu extends $AbstractContainerMenu {
readonly "container": $Container
static readonly "ADDITIONAL_SLOT": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "MAP_SLOT": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartographyTableMenu$$Type = ($CartographyTableMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CartographyTableMenu$$Original = $CartographyTableMenu;}
declare module "net.minecraft.world.inventory.ClickAction" {
import {$Enum} from "java.lang.Enum"

export class $ClickAction extends $Enum<($ClickAction)> {
static readonly "SECONDARY": $ClickAction
static readonly "PRIMARY": $ClickAction

public static "values"(): ($ClickAction)[]
public static "valueOf"(arg0: StringJS): $ClickAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickAction$$Type = (("primary") | ("secondary"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClickAction$$Original = $ClickAction;}
declare module "net.minecraft.world.inventory.ChestMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $ChestMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: $Container$$Type, arg4: integer)

public "removed"(arg0: $Player$$Type): void
public "getContainer"(): $Container
public static "threeRows"(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type): $ChestMenu
public static "threeRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public "stillValid"(arg0: $Player$$Type): boolean
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public static "fourRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "twoRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "sixRows"(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type): $ChestMenu
public static "sixRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "oneRow"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "fiveRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getRowCount"(): integer
get "container"(): $Container
get "rowCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMenu$$Type = ($ChestMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChestMenu$$Original = $ChestMenu;}
declare module "net.minecraft.world.inventory.ContainerListener" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"

export interface $ContainerListener$$Interface {
}

export class $ContainerListener implements $ContainerListener$$Interface {
 "dataChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer): void
 "slotChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerListener$$Type = ($ContainerListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerListener$$Original = $ContainerListener;}
declare module "net.minecraft.world.inventory.PlayerEnderChestContainer" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EnderChestBlockEntity$$Type} from "net.minecraft.world.level.block.entity.EnderChestBlockEntity"
import {$SimpleContainer} from "net.minecraft.world.SimpleContainer"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PlayerEnderChestContainer extends $SimpleContainer {
constructor()

public "stopOpen"(arg0: $Player$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "setActiveChest"(arg0: $EnderChestBlockEntity$$Type): void
public "fromTag"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "isActiveChest"(arg0: $EnderChestBlockEntity$$Type): boolean
public "createTag"(arg0: $HolderLookup$Provider$$Type): $ListTag
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "tryClear"(arg0: any): void
set "activeChest"(value: $EnderChestBlockEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEnderChestContainer$$Type = ($PlayerEnderChestContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEnderChestContainer$$Original = $PlayerEnderChestContainer;}
declare module "net.minecraft.world.inventory.ResultContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeCraftingHolder$$Interface} from "net.minecraft.world.inventory.RecipeCraftingHolder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ResultContainer implements $Container$$Interface, $RecipeCraftingHolder$$Interface {
constructor()

public "isEmpty"(): boolean
public "getItem"(arg0: integer): $ItemStack
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "setChanged"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "setRecipeUsed"(arg0: $RecipeHolder$$Type<(never)>): void
public "getRecipeUsed"(): $RecipeHolder<(never)>
public "stopOpen"(arg0: $Player$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "getMaxStackSize"(): integer
public "setRecipeUsed"(arg0: $Level$$Type, arg1: $ServerPlayer$$Type, arg2: $RecipeHolder$$Type<(never)>): boolean
public "awardUsedRecipes"(arg0: $Player$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
public static "tryClear"(arg0: any): void
public "self"(): $Container
public "getBlock"(level: $Level$$Type): $LevelBlock
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "isMutable"(): boolean
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "asContainer"(): $Container
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "setChanged"(): void
public "getSlotLimit"(slot: integer): integer
public "clear"(): void
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "clear"(match: $ItemPredicate$$Type): void
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
get "empty"(): boolean
get "containerSize"(): integer
get "changed"(): void
set "recipeUsed"(value: $RecipeHolder$$Type<(never)>)
get "recipeUsed"(): $RecipeHolder<(never)>
get "maxStackSize"(): integer
get "width"(): integer
get "height"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "changed"(): void
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResultContainer$$Type = ($ResultContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResultContainer$$Original = $ResultContainer;}
declare module "net.minecraft.world.inventory.StackedContentsCompatible" {
import {$StackedContents, $StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export interface $StackedContentsCompatible$$Interface {

(arg0: $StackedContents): void
}

export class $StackedContentsCompatible implements $StackedContentsCompatible$$Interface {
 "fillStackedContents"(arg0: $StackedContents$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackedContentsCompatible$$Type = ((arg0: $StackedContents) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StackedContentsCompatible$$Original = $StackedContentsCompatible;}
declare module "net.minecraft.world.inventory.CraftingContainer" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CraftingInput$Positioned} from "net.minecraft.world.item.crafting.CraftingInput$Positioned"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$StackedContentsCompatible$$Interface} from "net.minecraft.world.inventory.StackedContentsCompatible"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export interface $CraftingContainer$$Interface extends $Container$$Interface, $StackedContentsCompatible$$Interface {
get "items"(): $List<($ItemStack)>
get "height"(): integer
get "width"(): integer
get "empty"(): boolean
get "containerSize"(): integer
get "changed"(): void
get "maxStackSize"(): integer
get "width"(): integer
get "height"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "changed"(): void
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $CraftingContainer implements $CraftingContainer$$Interface {
 "getItems"(): $List<($ItemStack)>
 "asCraftInput"(): $CraftingInput
 "getHeight"(): integer
 "asPositionedCraftInput"(): $CraftingInput$Positioned
 "getWidth"(): integer
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "stopOpen"(arg0: $Player$$Type): void
 "startOpen"(arg0: $Player$$Type): void
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "setChanged"(): void
 "stillValid"(arg0: $Player$$Type): boolean
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "getMaxStackSize"(): integer
 "fillStackedContents"(arg0: $StackedContents$$Type): void
static "tryClear"(arg0: any): void
 "clearContent"(): void
 "self"(): $Container
 "getBlock"(level: $Level$$Type): $LevelBlock
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "isMutable"(): boolean
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "asContainer"(): $Container
 "getSlots"(): integer
 "getStackInSlot"(slot: integer): $ItemStack
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "setChanged"(): void
 "getSlotLimit"(slot: integer): integer
 "clear"(): void
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "clear"(match: $ItemPredicate$$Type): void
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingContainer$$Type = ($CraftingContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingContainer$$Original = $CraftingContainer;}
declare module "net.minecraft.world.inventory.MenuType$MenuSupplier" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuType$MenuSupplier$$Interface<T extends $AbstractContainerMenu> {

(arg0: integer, arg1: $Inventory): T
}

export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> implements $MenuType$MenuSupplier$$Interface {
 "create"(arg0: integer, arg1: $Inventory$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuType$MenuSupplier$$Type<T> = ((arg0: integer, arg1: $Inventory) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuType$MenuSupplier$$Original<T> = $MenuType$MenuSupplier<(T)>;}
declare module "net.minecraft.world.inventory.LoomMenu" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Holder} from "net.minecraft.core.Holder"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$BannerPattern} from "net.minecraft.world.level.block.entity.BannerPattern"

export class $LoomMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "getSelectedBannerPatternIndex"(): integer
public "stillValid"(arg0: $Player$$Type): boolean
public "getSelectablePatterns"(): $List<($Holder<($BannerPattern)>)>
public "registerUpdateListener"(arg0: $Runnable$$Type): void
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getDyeSlot"(): $Slot
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getResultSlot"(): $Slot
public "getPatternSlot"(): $Slot
public "getBannerSlot"(): $Slot
get "selectedBannerPatternIndex"(): integer
get "selectablePatterns"(): $List<($Holder<($BannerPattern)>)>
get "dyeSlot"(): $Slot
get "resultSlot"(): $Slot
get "patternSlot"(): $Slot
get "bannerSlot"(): $Slot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoomMenu$$Type = ($LoomMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoomMenu$$Original = $LoomMenu;}
declare module "net.minecraft.world.inventory.ContainerData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ContainerData$$Interface {
get "count"(): integer
}

export class $ContainerData implements $ContainerData$$Interface {
 "get"(arg0: integer): integer
 "set"(arg0: integer, arg1: integer): void
 "getCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerData$$Type = ($ContainerData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerData$$Original = $ContainerData;}
declare module "net.minecraft.world.inventory.SmokerMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $SmokerMenu extends $AbstractFurnaceMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokerMenu$$Type = ($SmokerMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmokerMenu$$Original = $SmokerMenu;}
declare module "net.minecraft.world.inventory.FurnaceMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $FurnaceMenu extends $AbstractFurnaceMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceMenu$$Type = ($FurnaceMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FurnaceMenu$$Original = $FurnaceMenu;}
declare module "net.minecraft.world.inventory.InventoryMenu" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CraftingContainer} from "net.minecraft.world.inventory.CraftingContainer"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export class $InventoryMenu extends $RecipeBookMenu<($CraftingInput), ($CraftingRecipe)> {
static readonly "CRAFT_SLOT_END": integer
static readonly "BLOCK_ATLAS": $ResourceLocation
static readonly "EMPTY_ARMOR_SLOT_BOOTS": $ResourceLocation
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "USE_ROW_SLOT_START": integer
static readonly "EMPTY_ARMOR_SLOT_CHESTPLATE": $ResourceLocation
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "CRAFT_SLOT_COUNT": integer
static readonly "SHIELD_SLOT": integer
static readonly "ARMOR_SLOT_START": integer
static readonly "ARMOR_SLOT_COUNT": integer
static readonly "INV_SLOT_START": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "CRAFT_SLOT_START": integer
readonly "owner": $Player
static readonly "EMPTY_ARMOR_SLOT_HELMET": $ResourceLocation
 "stateId": integer
readonly "active": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "ARMOR_SLOT_END": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "USE_ROW_SLOT_END": integer
static readonly "EMPTY_ARMOR_SLOT_SHIELD": $ResourceLocation
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "INV_SLOT_END": integer
static readonly "EMPTY_ARMOR_SLOT_LEGGINGS": $ResourceLocation
static readonly "CONTAINER_ID": integer

constructor(arg0: $Inventory$$Type, arg1: boolean, arg2: $Player$$Type)

public "getSize"(): integer
public "removed"(arg0: $Player$$Type): void
public static "isHotbarSlot"(arg0: integer): boolean
public "getCraftSlots"(): $CraftingContainer
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public "clearCraftingContent"(): void
public "shouldMoveToInventory"(arg0: integer): boolean
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getGridWidth"(): integer
public "getResultSlotIndex"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "recipeMatches"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): boolean
public "getGridHeight"(): integer
get "size"(): integer
get "craftSlots"(): $CraftingContainer
get "gridWidth"(): integer
get "resultSlotIndex"(): integer
get "recipeBookType"(): $RecipeBookType
get "gridHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryMenu$$Type = ($InventoryMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryMenu$$Original = $InventoryMenu;}
declare module "net.minecraft.world.inventory.MenuType" {
import {$MenuType$MenuSupplier$$Type} from "net.minecraft.world.inventory.MenuType$MenuSupplier"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$LoomMenu} from "net.minecraft.world.inventory.LoomMenu"
import {$List} from "java.util.List"
import {$GrindstoneMenu} from "net.minecraft.world.inventory.GrindstoneMenu"
import {$IMenuTypeExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IMenuTypeExtension"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$MenuTypeKJS$$Interface} from "dev.latvian.mods.kubejs.core.MenuTypeKJS"
import {$CartographyTableMenu} from "net.minecraft.world.inventory.CartographyTableMenu"
import {$Holder} from "net.minecraft.core.Holder"
import {$CraftingMenu} from "net.minecraft.world.inventory.CraftingMenu"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FeatureElement$$Interface} from "net.minecraft.world.flag.FeatureElement"
import {$BeaconMenu} from "net.minecraft.world.inventory.BeaconMenu"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$DispenserMenu} from "net.minecraft.world.inventory.DispenserMenu"
import {$AnvilMenu} from "net.minecraft.world.inventory.AnvilMenu"
import {$LecternMenu} from "net.minecraft.world.inventory.LecternMenu"
import {$EnchantmentMenu} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$SmokerMenu} from "net.minecraft.world.inventory.SmokerMenu"
import {$CrafterMenu} from "net.minecraft.world.inventory.CrafterMenu"
import {$ChestMenu} from "net.minecraft.world.inventory.ChestMenu"
import {$IContainerFactory$$Type} from "net.neoforged.neoforge.network.IContainerFactory"
import {$StonecutterMenu} from "net.minecraft.world.inventory.StonecutterMenu"
import {$Registry} from "net.minecraft.core.Registry"
import {$ShulkerBoxMenu} from "net.minecraft.world.inventory.ShulkerBoxMenu"
import {$BlastFurnaceMenu} from "net.minecraft.world.inventory.BlastFurnaceMenu"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$SmithingMenu} from "net.minecraft.world.inventory.SmithingMenu"
import {$BrewingStandMenu} from "net.minecraft.world.inventory.BrewingStandMenu"
import {$HopperMenu} from "net.minecraft.world.inventory.HopperMenu"
import {$FurnaceMenu} from "net.minecraft.world.inventory.FurnaceMenu"
import {$MerchantMenu} from "net.minecraft.world.inventory.MerchantMenu"

export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement$$Interface, $IMenuTypeExtension$$Interface<(T)>, $MenuTypeKJS$$Interface {
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "CRAFTER_3x3": $MenuType<($CrafterMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>

constructor(arg0: $MenuType$MenuSupplier$$Type<(T)>, arg1: $FeatureFlagSet$$Type)

public "create"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): T
public "create"(arg0: integer, arg1: $Inventory$$Type): T
public "getKey"(): $ResourceKey
public "getId"(): StringJS
public "requiredFeatures"(): $FeatureFlagSet
public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$$Type<(T)>): $MenuType<(T)>
public "getRegistryId"(): $ResourceKey<($Registry<($MenuType<(never)>)>)>
public "getRegistry"(): $Registry<($MenuType<(never)>)>
public "specialEquals"(o: any, shallow: boolean): boolean
public "getMod"(): StringJS
public "hasTag"(tag: $ResourceLocation$$Type): boolean
public "asHolder"(): $Holder<($MenuType<(never)>)>
public "getIdLocation"(): $ResourceLocation
public "getTagKeys"(): $List<($TagKey<($MenuType<(never)>)>)>
public "getTags"(): $List<($ResourceLocation)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "key"(): $ResourceKey
get "id"(): StringJS
get "registryId"(): $ResourceKey<($Registry<($MenuType<(never)>)>)>
get "registry"(): $Registry<($MenuType<(never)>)>
get "mod"(): StringJS
get "idLocation"(): $ResourceLocation
get "tagKeys"(): $List<($TagKey<($MenuType<(never)>)>)>
get "tags"(): $List<($ResourceLocation)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Menu
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MenuTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuType$$Type<T> = (Special.Menu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuType$$Original<T> = $MenuType<(T)>;}
declare module "net.minecraft.world.inventory.ItemCombinerMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $ItemCombinerMenu extends $AbstractContainerMenu {
readonly "access": $ContainerLevelAccess
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: $ContainerLevelAccess$$Type)

public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getSlotToQuickMoveTo"(arg0: $ItemStack$$Type): integer
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "slotsChanged"(arg0: $Container$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "createResult"(): void
public "getResultSlot"(): integer
get "resultSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCombinerMenu$$Type = ($ItemCombinerMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCombinerMenu$$Original = $ItemCombinerMenu;}
declare module "net.minecraft.world.inventory.ShulkerBoxMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $ShulkerBoxMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)

public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxMenu$$Type = ($ShulkerBoxMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerBoxMenu$$Original = $ShulkerBoxMenu;}
declare module "net.minecraft.world.inventory.ContainerLevelAccess" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ContainerLevelAccess$$Interface {

(arg0: $BiFunction<($Level), ($BlockPos), (T)>): (T)?
}

export class $ContainerLevelAccess implements $ContainerLevelAccess$$Interface {
static readonly "NULL": $ContainerLevelAccess

 "execute"(arg0: $BiConsumer$$Type<($Level), ($BlockPos)>): void
static "create"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $ContainerLevelAccess
 "evaluate"<T>(arg0: $BiFunction$$Type<($Level), ($BlockPos), (T)>, arg1: T): T
 "evaluate"<T>(arg0: $BiFunction$$Type<($Level), ($BlockPos), (T)>): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerLevelAccess$$Type = ((arg0: $BiFunction<($Level), ($BlockPos), (T)>) => (T)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerLevelAccess$$Original = $ContainerLevelAccess;}
declare module "net.minecraft.world.inventory.LecternMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $LecternMenu extends $AbstractContainerMenu {
static readonly "BUTTON_PREV_PAGE": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "BUTTON_PAGE_JUMP_RANGE_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "BUTTON_NEXT_PAGE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "BUTTON_TAKE_BOOK": integer
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer)
constructor(arg0: integer, arg1: $Container$$Type, arg2: $ContainerData$$Type)

public "getBook"(): $ItemStack
public "stillValid"(arg0: $Player$$Type): boolean
public "setData"(arg0: integer, arg1: integer): void
public "getPage"(): integer
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
get "book"(): $ItemStack
get "page"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LecternMenu$$Type = ($LecternMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LecternMenu$$Original = $LecternMenu;}
declare module "net.minecraft.world.inventory.BrewingStandMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $BrewingStandMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

public "getFuel"(): integer
public "stillValid"(arg0: $Player$$Type): boolean
public "handler$cfc000$deeperdarker$stillValid"(arg0: $Player$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getBrewingTicks"(): integer
get "fuel"(): integer
get "brewingTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrewingStandMenu$$Type = ($BrewingStandMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrewingStandMenu$$Original = $BrewingStandMenu;}
declare module "net.minecraft.world.inventory.MenuConstructor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuConstructor$$Interface {

(arg0: integer, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu$$Type
}

export class $MenuConstructor implements $MenuConstructor$$Interface {
 "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuConstructor$$Type = ((arg0: integer, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuConstructor$$Original = $MenuConstructor;}
