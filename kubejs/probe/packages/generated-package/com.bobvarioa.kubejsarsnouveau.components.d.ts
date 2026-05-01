declare module "com.bobvarioa.kubejsarsnouveau.components.ArsComponents$Color" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $ArsComponents$Color extends $Record {
static "CODEC": $Codec<($ArsComponents$Color)>

constructor(id: StringJS, r: integer, g: integer, b: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "b"(): integer
public "id"(): StringJS
public "g"(): integer
public "r"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArsComponents$Color$$Type = ({"id"?: StringJS, "b"?: integer, "r"?: integer, "g"?: integer}) | ([id?: StringJS, b?: integer, r?: integer, g?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArsComponents$Color$$Original = $ArsComponents$Color;}
declare module "com.bobvarioa.kubejsarsnouveau.components.ArsComponents$CrushItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $ArsComponents$CrushItem extends $Record {
static "CODEC": $Codec<($ArsComponents$CrushItem)>

constructor(stack: $ItemStack$$Type, chance: float, maxRange: double)

public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "chance"(): float
public "maxRange"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArsComponents$CrushItem$$Type = ({"maxRange"?: double, "chance"?: float, "stack"?: $ItemStack$$Type}) | ([maxRange?: double, chance?: float, stack?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArsComponents$CrushItem$$Original = $ArsComponents$CrushItem;}
declare module "com.bobvarioa.kubejsarsnouveau.components.ArsComponents$Sound" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $ArsComponents$Sound extends $Record {
static "CODEC": $Codec<($ArsComponents$Sound)>

constructor(family: (StringJS)?, volume: (float)?, pitch: (float)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "family"(): $Optional<(StringJS)>
public "pitch"(): $Optional<(float)>
public "volume"(): $Optional<(float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArsComponents$Sound$$Type = ({"family"?: (StringJS)?, "pitch"?: (float)?, "volume"?: (float)?}) | ([family?: (StringJS)?, pitch?: (float)?, volume?: (float)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArsComponents$Sound$$Original = $ArsComponents$Sound;}
