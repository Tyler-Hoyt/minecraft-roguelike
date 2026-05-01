declare module "net.bettercombat.api.fx.TrailAppearance" {
import {$TrailAppearance$Part, $TrailAppearance$Part$$Type} from "net.bettercombat.api.fx.TrailAppearance$Part"

export class $TrailAppearance {
 "secondary": $TrailAppearance$Part
static readonly "DEFAULT": $TrailAppearance
 "primary": $TrailAppearance$Part

constructor()
constructor(primary: $TrailAppearance$Part$$Type, secondary: $TrailAppearance$Part$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailAppearance$$Type = ($TrailAppearance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrailAppearance$$Original = $TrailAppearance;}
declare module "net.bettercombat.api.fx.TrailAppearance$Part" {
import {$Record} from "java.lang.Record"

export class $TrailAppearance$Part extends $Record {
static readonly "DEFAULT_PRIMARY": $TrailAppearance$Part
static readonly "DEFAULT_SECONDARY": $TrailAppearance$Part

constructor(color_rgba: long, glows: boolean)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "color_rgba"(): long
public "glows"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailAppearance$Part$$Type = ({"glows"?: boolean, "color_rgba"?: long}) | ([glows?: boolean, color_rgba?: long]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrailAppearance$Part$$Original = $TrailAppearance$Part;}
declare module "net.bettercombat.api.fx.ConditionalTrailAppearance" {
import {$TrailAppearance, $TrailAppearance$$Type} from "net.bettercombat.api.fx.TrailAppearance"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LinkedHashMap, $LinkedHashMap$$Type} from "java.util.LinkedHashMap"
import {$Record} from "java.lang.Record"

export class $ConditionalTrailAppearance extends $Record {
constructor(default_appearance: $TrailAppearance$$Type, conditional: $LinkedHashMap$$Type<(StringJS), ($TrailAppearance$$Type)>)
constructor()
constructor(default_appearance: $TrailAppearance$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "merge"(override: $ConditionalTrailAppearance$$Type): $ConditionalTrailAppearance
public "resolve"(itemStack: $ItemStack$$Type): $TrailAppearance
public "default_appearance"(): $TrailAppearance
public "conditional"(): $LinkedHashMap<(StringJS), ($TrailAppearance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalTrailAppearance$$Type = ({"conditional"?: $LinkedHashMap$$Type<(StringJS), ($TrailAppearance$$Type)>, "default_appearance"?: $TrailAppearance$$Type}) | ([conditional?: $LinkedHashMap$$Type<(StringJS), ($TrailAppearance$$Type)>, default_appearance?: $TrailAppearance$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConditionalTrailAppearance$$Original = $ConditionalTrailAppearance;}
declare module "net.bettercombat.api.fx.ParticlePlacement" {
import {$Record} from "java.lang.Record"

export class $ParticlePlacement extends $Record {
static readonly "DEFAULT": $ParticlePlacement

constructor(particle_type: StringJS, x_addition: float, y_addition: float, z_addition: float, local_yaw: float, pitch_addition: float, roll_set: float)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x_addition"(): float
public "local_yaw"(): float
public "y_addition"(): float
public "roll_set"(): float
public "z_addition"(): float
public "pitch_addition"(): float
public "particle_type"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticlePlacement$$Type = ({"z_addition"?: float, "y_addition"?: float, "x_addition"?: float, "roll_set"?: float, "particle_type"?: StringJS, "local_yaw"?: float, "pitch_addition"?: float}) | ([z_addition?: float, y_addition?: float, x_addition?: float, roll_set?: float, particle_type?: StringJS, local_yaw?: float, pitch_addition?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticlePlacement$$Original = $ParticlePlacement;}
