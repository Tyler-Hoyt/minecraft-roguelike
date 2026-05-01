declare module "net.p3pp3rf1y.sophisticatedcore.settings.main.MainSettingsCategory" {
import {$MainSetting$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.MainSetting"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$ISettingsCategory$$Type, $ISettingsCategory$$Interface} from "net.p3pp3rf1y.sophisticatedcore.settings.ISettingsCategory"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $MainSettingsCategory<T extends $MainSettingsCategory<(object)>> implements $ISettingsCategory$$Interface<(T)> {
static readonly "NAME": StringJS

constructor(arg0: $CompoundTag$$Type, arg1: $Consumer$$Type<($CompoundTag)>, arg2: StringJS)

public "reloadFrom"(arg0: $CompoundTag$$Type): void
public "getPlayerSettingsTagName"(): StringJS
public "deleteSlotSettingsFrom"(arg0: integer): void
public "isLargerThanNumberOfSlots"(arg0: integer): boolean
public "removeSetting"<S>(arg0: $MainSetting$$Type<(S)>): void
public "setSettingValue"<S>(arg0: $MainSetting$$Type<(S)>, arg1: S): void
public "overwriteWith"(arg0: $ISettingsCategory$$Type): void
public "overwriteWith"(arg0: T): void
public "getSettingValue"<S>(arg0: $MainSetting$$Type<(S)>): $Optional<(S)>
public "copyTo"(arg0: T, arg1: integer, arg2: integer): void
public "copyTo"(arg0: $ISettingsCategory$$Type, arg1: integer, arg2: integer): void
get "playerSettingsTagName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainSettingsCategory$$Type<T> = ($MainSettingsCategory<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MainSettingsCategory$$Original<T> = $MainSettingsCategory<(T)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.settings.SettingsHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"
import {$ISettingsCategory} from "net.p3pp3rf1y.sophisticatedcore.settings.ISettingsCategory"
import {$MainSettingsCategory} from "net.p3pp3rf1y.sophisticatedcore.settings.main.MainSettingsCategory"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $SettingsHandler {
public "reloadFrom"(arg0: $CompoundTag$$Type): void
public "getNbt"(): $CompoundTag
public "getGlobalSettingsCategory"(): $MainSettingsCategory<(never)>
public "getCategoriesThatImplement"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
public "getSettingsCategories"(): $Map<(StringJS), ($ISettingsCategory<(never)>)>
public "getTypeCategory"<T extends $ISettingsCategory<(object)>>(arg0: $Class$$Type<(T)>): T
public "instantiateGlobalSettingsCategory"(arg0: $CompoundTag$$Type, arg1: $Consumer$$Type<($CompoundTag)>): $ISettingsCategory<(never)>
public "getGlobalSettingsCategoryName"(): StringJS
get "nbt"(): $CompoundTag
get "globalSettingsCategory"(): $MainSettingsCategory<(never)>
get "settingsCategories"(): $Map<(StringJS), ($ISettingsCategory<(never)>)>
get "globalSettingsCategoryName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsHandler$$Type = ($SettingsHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SettingsHandler$$Original = $SettingsHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.settings.ISettingsCategory" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $ISettingsCategory$$Interface<T extends $ISettingsCategory<(object)>> {
}

export class $ISettingsCategory<T extends $ISettingsCategory<(object)>> implements $ISettingsCategory$$Interface {
 "reloadFrom"(arg0: $CompoundTag$$Type): void
 "deleteSlotSettingsFrom"(arg0: integer): void
 "isLargerThanNumberOfSlots"(arg0: integer): boolean
 "overwriteWith"(arg0: T): void
 "copyTo"(arg0: T, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingsCategory$$Type<T> = ($ISettingsCategory<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISettingsCategory$$Original<T> = $ISettingsCategory<(T)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.settings.MainSetting" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TriConsumer$$Type} from "org.apache.logging.log4j.util.TriConsumer"

export class $MainSetting<T> {
constructor(arg0: StringJS, arg1: $BiFunction$$Type<($CompoundTag), (StringJS), ((T)?)>, arg2: $TriConsumer$$Type<($CompoundTag$$Type), (StringJS), (T)>, arg3: T)

public "getName"(): StringJS
public "getValue"(arg0: $CompoundTag$$Type): $Optional<(T)>
public "setValue"(arg0: $CompoundTag$$Type, arg1: T): void
public "getDefaultValue"(): T
public "removeFrom"(arg0: $CompoundTag$$Type): void
get "name"(): StringJS
get "defaultValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainSetting$$Type<T> = ($MainSetting<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MainSetting$$Original<T> = $MainSetting<(T)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.settings.memory.MemorySettingsCategory" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$ISettingsCategory$$Type, $ISettingsCategory$$Interface} from "net.p3pp3rf1y.sophisticatedcore.settings.ISettingsCategory"
import {$ItemStackKey$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $MemorySettingsCategory implements $ISettingsCategory$$Interface<($MemorySettingsCategory)> {
static readonly "NAME": StringJS

constructor(arg0: $Supplier$$Type<($InventoryHandler$$Type)>, arg1: $CompoundTag$$Type, arg2: $Consumer$$Type<($CompoundTag)>)

public "setFilter"(arg0: integer, arg1: $ItemStack$$Type): void
public "reloadFrom"(arg0: $CompoundTag$$Type): void
public "getFilterItemSlots"(): $Map<($Item), ($Set<(integer)>)>
public "setIgnoreNbt"(arg0: boolean): void
public "matchesFilter"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "matchesFilter"(arg0: $ItemStack$$Type): boolean
public "deleteSlotSettingsFrom"(arg0: integer): void
public "isLargerThanNumberOfSlots"(arg0: integer): boolean
public "unregisterListeners"(): void
public "getFilterStackSlots"(): $Map<(integer), ($Set<(integer)>)>
public "getSlotFilterStack"(arg0: integer, arg1: boolean): $Optional<($ItemStack)>
public "selectSlot"(arg0: integer): void
public "registerListeners"(arg0: $Consumer$$Type<($Item)>, arg1: $Consumer$$Type<($Item)>, arg2: $Consumer$$Type<(integer)>, arg3: $Consumer$$Type<(integer)>): void
public "selectSlots"(arg0: integer, arg1: integer): void
public "unselectAllSlots"(): void
public "overwriteWith"(arg0: $MemorySettingsCategory$$Type): void
public "overwriteWith"(arg0: $ISettingsCategory$$Type): void
public "ignoresNbt"(): boolean
public "getSlotIndexes"(): $Set<(integer)>
public "isSlotSelected"(arg0: integer): boolean
public "copyTo"(arg0: $MemorySettingsCategory$$Type, arg1: integer, arg2: integer): void
public "copyTo"(arg0: $ISettingsCategory$$Type, arg1: integer, arg2: integer): void
public "unselectSlot"(arg0: integer): void
public "matchesStackKey"(arg0: $ItemStackKey$$Type): boolean
public "matchesItem"(arg0: $Item$$Type): boolean
get "filterItemSlots"(): $Map<($Item), ($Set<(integer)>)>
set "ignoreNbt"(value: boolean)
get "filterStackSlots"(): $Map<(integer), ($Set<(integer)>)>
get "slotIndexes"(): $Set<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemorySettingsCategory$$Type = ($MemorySettingsCategory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemorySettingsCategory$$Original = $MemorySettingsCategory;}
