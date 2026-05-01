declare module "tictim.paraglider.api.bargain.Bargain$NoInput" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"

export class $Bargain$NoInput implements $RecipeInput$$Interface {
constructor()

public "size"(): integer
public "getItem"(arg0: integer): $ItemStack
public "isEmpty"(): boolean
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bargain$NoInput$$Type = ($Bargain$NoInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Bargain$NoInput$$Original = $Bargain$NoInput;}
declare module "tictim.paraglider.api.bargain.BargainDialog" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$BargainDialog$Dialog, $BargainDialog$Dialog$$Type} from "tictim.paraglider.api.bargain.BargainDialog$Dialog"
import {$List, $List$$Type} from "java.util.List"
import {$Set$$Type} from "java.util.Set"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Random$$Type} from "java.util.Random"
import {$Record} from "java.lang.Record"

export class $BargainDialog extends $Record {
static readonly "CODEC": $Codec<($BargainDialog)>
static readonly "EMPTY": $BargainDialog

constructor(initialDialog: $List$$Type<($BargainDialog$Dialog$$Type)>, initialDialogFallback: $BargainDialog$Dialog$$Type, successDialog: $List$$Type<($BargainDialog$Dialog$$Type)>, successDialogFallback: $BargainDialog$Dialog$$Type, failDialog: $List$$Type<($BargainDialog$Dialog$$Type)>, failDialogFallback: $BargainDialog$Dialog$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "randomFailDialog"(arg0: $Random$$Type, arg1: $Set$$Type<(StringJS)>, arg2: $Set$$Type<(StringJS)>): $Component
public "failDialogFallback"(): $BargainDialog$Dialog
public "initialDialog"(): $List<($BargainDialog$Dialog)>
public "successDialog"(): $List<($BargainDialog$Dialog)>
public "failDialog"(): $List<($BargainDialog$Dialog)>
public "successDialogFallback"(): $BargainDialog$Dialog
public "initialDialogFallback"(): $BargainDialog$Dialog
public "randomSuccessDialog"(arg0: $Random$$Type, arg1: $Set$$Type<(StringJS)>): $Component
public "randomInitialDialog"(arg0: $Random$$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BargainDialog$$Type = ({"successDialogFallback"?: $BargainDialog$Dialog$$Type, "failDialogFallback"?: $BargainDialog$Dialog$$Type, "successDialog"?: $List$$Type<($BargainDialog$Dialog$$Type)>, "failDialog"?: $List$$Type<($BargainDialog$Dialog$$Type)>, "initialDialog"?: $List$$Type<($BargainDialog$Dialog$$Type)>, "initialDialogFallback"?: $BargainDialog$Dialog$$Type}) | ([successDialogFallback?: $BargainDialog$Dialog$$Type, failDialogFallback?: $BargainDialog$Dialog$$Type, successDialog?: $List$$Type<($BargainDialog$Dialog$$Type)>, failDialog?: $List$$Type<($BargainDialog$Dialog$$Type)>, initialDialog?: $List$$Type<($BargainDialog$Dialog$$Type)>, initialDialogFallback?: $BargainDialog$Dialog$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BargainDialog$$Original = $BargainDialog;}
declare module "tictim.paraglider.api.bargain.BargainDialog$Dialog" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $BargainDialog$Dialog extends $Record {
static readonly "CODEC": $Codec<($BargainDialog$Dialog)>

constructor(text: $Component$$Type, weight: integer, tagFilter: $Set$$Type<(StringJS)>, failReasonFilter: $Set$$Type<(StringJS)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "create"(arg0: StringJS, arg1: integer): $BargainDialog$Dialog
public static "create"(arg0: StringJS): $BargainDialog$Dialog
public "text"(): $Component
public "weight"(): integer
public static "createForTag"(arg0: StringJS, arg1: integer, ...arg2: (StringJS)[]): $BargainDialog$Dialog
public static "createForTag"(arg0: StringJS, ...arg1: (StringJS)[]): $BargainDialog$Dialog
public "failReasonFilter"(): $Set<(StringJS)>
public "tagFilter"(): $Set<(StringJS)>
public static "createForFailReason"(arg0: StringJS, ...arg1: (StringJS)[]): $BargainDialog$Dialog
public static "createForFailReason"(arg0: StringJS, arg1: integer, ...arg2: (StringJS)[]): $BargainDialog$Dialog
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BargainDialog$Dialog$$Type = ({"text"?: $Component$$Type, "failReasonFilter"?: $Set$$Type<(StringJS)>, "tagFilter"?: $Set$$Type<(StringJS)>, "weight"?: integer}) | ([text?: $Component$$Type, failReasonFilter?: $Set$$Type<(StringJS)>, tagFilter?: $Set$$Type<(StringJS)>, weight?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BargainDialog$Dialog$$Original = $BargainDialog$Dialog;}
declare module "tictim.paraglider.api.bargain.BargainResult" {
import {$Set, $Set$$Type} from "java.util.Set"

export class $BargainResult {
constructor()

public static "fail"(arg0: $Set$$Type<(StringJS)>): $BargainResult
public static "fail"(...arg0: (StringJS)[]): $BargainResult
public static "success"(): $BargainResult
public "isSuccess"(): boolean
public "failReasons"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BargainResult$$Type = ($BargainResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BargainResult$$Original = $BargainResult;}
declare module "tictim.paraglider.api.bargain.BargainType" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$BargainDialog, $BargainDialog$$Type} from "tictim.paraglider.api.bargain.BargainDialog"
import {$Record} from "java.lang.Record"

export class $BargainType extends $Record {
static readonly "CODEC": $Codec<($BargainType)>

constructor(dialog: $BargainDialog$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "dialog"(): $BargainDialog
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ParagliderBargainTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ParagliderBargainTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BargainType$$Type = (Special.ParagliderBargainTypes) | ({"dialog"?: $BargainDialog$$Type}) | ([dialog?: $BargainDialog$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BargainType$$Original = $BargainType;}
declare module "tictim.paraglider.api.bargain.BargainPreview$Type" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record} from "java.lang.Record"
import {$BargainPreview} from "tictim.paraglider.api.bargain.BargainPreview"

export class $BargainPreview$Type<T extends $BargainPreview<(object)>> extends $Record {
constructor(streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ParagliderBargainPreviewType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ParagliderBargainPreviewTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BargainPreview$Type$$Type<T> = (Special.ParagliderBargainPreviewType) | ({"streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>}) | ([streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BargainPreview$Type$$Original<T> = $BargainPreview$Type<(T)>;}
declare module "tictim.paraglider.api.bargain.Bargain" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Bargain$NoInput, $Bargain$NoInput$$Type} from "tictim.paraglider.api.bargain.Bargain$NoInput"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Set} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BargainResult} from "tictim.paraglider.api.bargain.BargainResult"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BargainPreview} from "tictim.paraglider.api.bargain.BargainPreview"

export interface $Bargain$$Interface extends $Recipe$$Interface<($Bargain$NoInput)> {
get "special"(): boolean
get "bargainType"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "bargainTags"(): $Set<(StringJS)>
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
}

export class $Bargain implements $Bargain$$Interface {
/**
 * 
 * @deprecated
 */
 "matches"(arg0: $Bargain$NoInput$$Type, arg1: $Level$$Type): boolean
/**
 * 
 * @deprecated
 */
 "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
/**
 * 
 * @deprecated
 */
 "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
/**
 * 
 * @deprecated
 */
 "assemble"(arg0: $Bargain$NoInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
/**
 * 
 * @deprecated
 */
 "isSpecial"(): boolean
 "getBargainType"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
/**
 * 
 * @deprecated
 */
 "getIngredients"(): $NonNullList<($Ingredient)>
/**
 * 
 * @deprecated
 */
 "getRemainingItems"(arg0: $Bargain$NoInput$$Type): $NonNullList<($ItemStack)>
/**
 * 
 * @deprecated
 */
 "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
 "bargain"(arg0: $Player$$Type, arg1: boolean): $BargainResult
/**
 * 
 * @deprecated
 */
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "previewDemands"(): $List<($BargainPreview<(never)>)>
 "getBargainTags"(): $Set<(StringJS)>
 "countDemands"(arg0: $Player$$Type): (integer)[]
 "isAvailableFor"(arg0: $Player$$Type, arg1: $BlockPos$$Type): boolean
 "previewOffers"(): $List<($BargainPreview<(never)>)>
 "getType"(): $RecipeType<(never)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(never)>
 "getGroup"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bargain$$Type = ($Bargain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Bargain$$Original = $Bargain;}
declare module "tictim.paraglider.api.bargain.BargainPreview" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$BargainPreview$Type} from "tictim.paraglider.api.bargain.BargainPreview$Type"
import {$Registry} from "net.minecraft.core.Registry"
import {$List} from "java.util.List"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $BargainPreview$$Interface<T extends $BargainPreview<(object)>> {
get "tooltip"(): $List<($Component)>
}

export class $BargainPreview<T extends $BargainPreview<(object)>> implements $BargainPreview$$Interface {
static readonly "TYPE_REGISTRY_KEY": $ResourceKey<($Registry<($BargainPreview$Type<(never)>)>)>

 "type"(): $BargainPreview$Type<(T)>
 "display"(): $List<($ItemStack)>
 "getTooltip"(): $List<($Component)>
 "quantity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BargainPreview$$Type<T> = ($BargainPreview<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BargainPreview$$Original<T> = $BargainPreview<(T)>;}
