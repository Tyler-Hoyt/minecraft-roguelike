declare module "com.texelsaurus.minecraft.chameleon.registry.RegistryEntry" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Interface} from "java.util.function.Supplier"

export interface $RegistryEntry$$Interface<T> extends $Supplier$$Interface<(T)> {
get "id"(): $ResourceLocation
}

export class $RegistryEntry<T> implements $RegistryEntry$$Interface {
 "getId"(): $ResourceLocation
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$$Type<T> = ($RegistryEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryEntry$$Original<T> = $RegistryEntry<(T)>;}
declare module "com.texelsaurus.minecraft.chameleon.capabilities.ChameleonCapability" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ChameleonCapability$$Interface<T> {
}

export class $ChameleonCapability<T> implements $ChameleonCapability$$Interface {
 "id"(): $ResourceLocation
 "getCapability"(arg0: $Level$$Type, arg1: $BlockPos$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChameleonCapability$$Type<T> = ($ChameleonCapability<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChameleonCapability$$Original<T> = $ChameleonCapability<(T)>;}
