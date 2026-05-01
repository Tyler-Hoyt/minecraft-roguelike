declare module "io.redspace.ironsspellbooks.gui.overlays.SpellSelection" {
import {$ISerializable$$Interface} from "io.redspace.ironsspellbooks.api.network.ISerializable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SpellSelection implements $ISerializable$$Interface, $INBTSerializable$$Interface<($CompoundTag)> {
 "lastEquipmentSlot": StringJS
 "equipmentSlot": StringJS
 "index": integer
 "lastIndex": integer

constructor(arg0: StringJS, arg1: integer, arg2: StringJS, arg3: integer)
constructor(arg0: StringJS, arg1: integer)
constructor()

public "toString"(): StringJS
public "isEmpty"(): boolean
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "readFromBuffer"(arg0: $FriendlyByteBuf$$Type): void
public "writeToBuffer"(arg0: $FriendlyByteBuf$$Type): void
public "makeSelection"(arg0: StringJS, arg1: integer): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelection$$Type = ($SpellSelection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSelection$$Original = $SpellSelection;}
