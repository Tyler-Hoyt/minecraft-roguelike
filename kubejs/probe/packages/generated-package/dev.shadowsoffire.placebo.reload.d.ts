declare module "dev.shadowsoffire.placebo.reload.DynamicHolder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$CodecProvider} from "dev.shadowsoffire.placebo.codec.CodecProvider"
import {$Supplier$$Interface} from "java.util.function.Supplier"

export class $DynamicHolder<R extends $CodecProvider<(object)>> implements $Supplier$$Interface<(R)> {
static readonly "EMPTY": $ResourceLocation

public "get"(): R
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getId"(): $ResourceLocation
public "is"(arg0: $ResourceLocation$$Type): boolean
public "isBound"(): boolean
public "getRegistryPath"(): StringJS
public "getOptional"(): $Optional<(R)>
get "id"(): $ResourceLocation
get "bound"(): boolean
get "registryPath"(): StringJS
get "optional"(): $Optional<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicHolder$$Type<R> = ($DynamicHolder<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicHolder$$Original<R> = $DynamicHolder<(R)>;}
