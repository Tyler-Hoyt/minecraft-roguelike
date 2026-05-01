declare module "software.bernie.geckolib.constant.dataticket.SerializableDataTicket" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Enum} from "java.lang.Enum"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$DataTicket} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$Class$$Type} from "java.lang.Class"

export class $SerializableDataTicket<D> extends $DataTicket<(D)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SerializableDataTicket<(never)>)>

constructor(arg0: StringJS, arg1: $Class$$Type<(D)>)

public static "ofString"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(StringJS)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (D)>
public static "ofDouble"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(double)>
public static "ofFloat"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(float)>
public static "ofBoolean"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(boolean)>
public static "ofInt"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(integer)>
public static "ofEnum"<E extends $Enum<(object)>>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(E)>): $SerializableDataTicket<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializableDataTicket$$Type<D> = ($SerializableDataTicket<(D)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SerializableDataTicket$$Original<D> = $SerializableDataTicket<(D)>;}
declare module "software.bernie.geckolib.constant.dataticket.DataTicket" {
import {$Map$$Type} from "java.util.Map"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $DataTicket<D> {
constructor(arg0: StringJS, arg1: $Class$$Type<(D)>)

public "hashCode"(): integer
public "id"(): StringJS
public "getData"<D>(arg0: $Map$$Type<($DataTicket$$Type<(never)>), (never)>): D
public "objectType"(): $Class<(D)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataTicket$$Type<D> = ($DataTicket<(D)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataTicket$$Original<D> = $DataTicket<(D)>;}
