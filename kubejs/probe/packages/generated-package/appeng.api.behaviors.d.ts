declare module "appeng.api.behaviors.GenericInternalInventory" {
import {$AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"

export interface $GenericInternalInventory$$Interface {
}

export class $GenericInternalInventory implements $GenericInternalInventory$$Interface {
 "size"(): integer
 "extract"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
 "insert"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
 "getKey"(arg0: integer): $AEKey
 "getStack"(arg0: integer): $GenericStack
 "canInsert"(): boolean
 "beginBatch"(): void
 "onChange"(): void
 "canExtract"(): boolean
 "getAmount"(arg0: integer): long
 "setStack"(arg0: integer, arg1: $GenericStack$$Type): void
 "endBatch"(): void
 "endBatchSuppressed"(): void
 "isAllowedIn"(arg0: integer, arg1: $AEKey$$Type): boolean
 "isSupportedType"(arg0: $AEKey$$Type): boolean
 "isSupportedType"(arg0: $AEKeyType$$Type): boolean
 "getMaxAmount"(arg0: $AEKey$$Type): long
 "getCapacity"(arg0: $AEKeyType$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericInternalInventory$$Type = ($GenericInternalInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericInternalInventory$$Original = $GenericInternalInventory;}
