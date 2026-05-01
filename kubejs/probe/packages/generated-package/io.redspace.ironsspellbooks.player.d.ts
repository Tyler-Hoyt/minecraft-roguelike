declare module "io.redspace.ironsspellbooks.player.SpinAttackType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $SpinAttackType extends $Record {
static readonly "RIPTIDE": $SpinAttackType
static readonly "FIRE": $SpinAttackType
static readonly "LIGHTNING": $SpinAttackType

constructor(textureId: $ResourceLocation$$Type, fullbright: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "fullbright"(): boolean
public "textureId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpinAttackType$$Type = ({"textureId"?: $ResourceLocation$$Type, "fullbright"?: boolean}) | ([textureId?: $ResourceLocation$$Type, fullbright?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpinAttackType$$Original = $SpinAttackType;}
