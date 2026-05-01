declare module "appeng.util.prioritylist.IPartitionList$Builder" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$IPartitionList} from "appeng.util.prioritylist.IPartitionList"
import {$FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"

export class $IPartitionList$Builder {
public "add"(arg0: $AEKey$$Type): void
public "addAll"(arg0: $Iterable$$Type<($AEKey$$Type)>): void
public "build"(): $IPartitionList
public "fuzzyMode"(arg0: $FuzzyMode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartitionList$Builder$$Type = ($IPartitionList$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartitionList$Builder$$Original = $IPartitionList$Builder;}
declare module "appeng.util.prioritylist.IPartitionList" {
import {$Iterable} from "java.lang.Iterable"
import {$IPartitionList$Builder} from "appeng.util.prioritylist.IPartitionList$Builder"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$IncludeExclude$$Type} from "appeng.api.config.IncludeExclude"

export interface $IPartitionList$$Interface {
get "empty"(): boolean
get "items"(): $Iterable<($AEKey)>
}

export class $IPartitionList implements $IPartitionList$$Interface {
 "isEmpty"(): boolean
static "builder"(): $IPartitionList$Builder
 "isListed"(arg0: $AEKey$$Type): boolean
 "getItems"(): $Iterable<($AEKey)>
 "matchesFilter"(arg0: $AEKey$$Type, arg1: $IncludeExclude$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartitionList$$Type = ($IPartitionList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartitionList$$Original = $IPartitionList;}
