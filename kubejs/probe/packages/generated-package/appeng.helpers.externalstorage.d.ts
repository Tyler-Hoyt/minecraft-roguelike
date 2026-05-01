declare module "appeng.helpers.externalstorage.GenericStackInv" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$GenericStackInv$Mode, $GenericStackInv$Mode$$Type} from "appeng.helpers.externalstorage.GenericStackInv$Mode"
import {$MEStorage$$Interface} from "appeng.api.storage.MEStorage"
import {$AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$List, $List$$Type} from "java.util.List"
import {$AEKeySlotFilter} from "appeng.api.storage.AEKeySlotFilter"
import {$IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$ConfigMenuInventory} from "appeng.util.ConfigMenuInventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$GenericInternalInventory$$Interface} from "appeng.api.behaviors.GenericInternalInventory"
import {$Set$$Type} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"

export class $GenericStackInv implements $MEStorage$$Interface, $GenericInternalInventory$$Interface {
constructor(arg0: $Set$$Type<($AEKeyType$$Type)>, arg1: $Runnable$$Type, arg2: $GenericStackInv$Mode$$Type, arg3: integer)
constructor(arg0: $Runnable$$Type, arg1: $GenericStackInv$Mode$$Type, arg2: integer)
constructor(arg0: $Runnable$$Type, arg1: integer)

public "size"(): integer
public "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
public "extract"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
public "insert"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "clear"(): void
public "isEmpty"(): boolean
public "toList"(): $List<($GenericStack)>
public "getKey"(arg0: integer): $AEKey
public "getStack"(arg0: integer): $GenericStack
public "getFilter"(): $AEKeySlotFilter
public "readFromList"(arg0: $List$$Type<($GenericStack$$Type)>): void
public "writeToTag"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "canInsert"(): boolean
public "beginBatch"(): void
public "getMode"(): $GenericStackInv$Mode
public "writeToChildTag"(arg0: $CompoundTag$$Type, arg1: StringJS, arg2: $HolderLookup$Provider$$Type): void
public "readFromChildTag"(arg0: $CompoundTag$$Type, arg1: StringJS, arg2: $HolderLookup$Provider$$Type): void
public "getAvailableStacks"(arg0: $KeyCounter$$Type): void
public "useRegisteredCapacities"(): void
public "onChange"(): void
public "canExtract"(): boolean
public "getAmount"(arg0: integer): long
public "setCapacity"(arg0: $AEKeyType$$Type, arg1: long): void
public "setStack"(arg0: integer, arg1: $GenericStack$$Type): void
public "endBatch"(): void
public "readFromTag"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setDescription"(arg0: $Component$$Type): void
public "endBatchSuppressed"(): void
public "isAllowedIn"(arg0: integer, arg1: $AEKey$$Type): boolean
public "isSupportedType"(arg0: $AEKeyType$$Type): boolean
public "createMenuWrapper"(): $ConfigMenuInventory
public "getMaxAmount"(arg0: $AEKey$$Type): long
public "getCapacity"(arg0: $AEKeyType$$Type): long
public "getDescription"(): $Component
public "getAvailableStacks"(): $KeyCounter
public static "checkPreconditions"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
public "isPreferredStorageFor"(arg0: $AEKey$$Type, arg1: $IActionSource$$Type): boolean
public "isSupportedType"(arg0: $AEKey$$Type): boolean
get "empty"(): boolean
get "filter"(): $AEKeySlotFilter
get "mode"(): $GenericStackInv$Mode
set "description"(value: $Component$$Type)
get "description"(): $Component
get "availableStacks"(): $KeyCounter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericStackInv$$Type = ($GenericStackInv);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericStackInv$$Original = $GenericStackInv;}
declare module "appeng.helpers.externalstorage.GenericStackInv$Mode" {
import {$Enum} from "java.lang.Enum"

export class $GenericStackInv$Mode extends $Enum<($GenericStackInv$Mode)> {
static readonly "STORAGE": $GenericStackInv$Mode
static readonly "CONFIG_TYPES": $GenericStackInv$Mode
static readonly "CONFIG_STACKS": $GenericStackInv$Mode

public static "values"(): ($GenericStackInv$Mode)[]
public static "valueOf"(arg0: StringJS): $GenericStackInv$Mode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericStackInv$Mode$$Type = (("config_types") | ("config_stacks") | ("storage"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericStackInv$Mode$$Original = $GenericStackInv$Mode;}
