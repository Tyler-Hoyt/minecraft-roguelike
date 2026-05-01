declare module "dev.kosmx.playerAnim.core.util.SetableSupplier" {
import {$Supplier$$Interface} from "java.util.function.Supplier"

export class $SetableSupplier<T> implements $Supplier$$Interface<(T)> {
constructor()

public "get"(): T
public "set"(object: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetableSupplier$$Type<T> = ($SetableSupplier<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SetableSupplier$$Original<T> = $SetableSupplier<(T)>;}
declare module "dev.kosmx.playerAnim.core.util.Vector3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vector3<N extends number> {
constructor(x: N, y: N, z: N)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getY"(): N
public "getZ"(): N
public "getX"(): N
get "y"(): N
get "z"(): N
get "x"(): N
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vector3$$Type<N> = ($Vector3<(N)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Vector3$$Original<N> = $Vector3<(N)>;}
declare module "dev.kosmx.playerAnim.core.util.Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<L, R> {
constructor(left: L, right: R)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLeft"(): L
public "getRight"(): R
get "left"(): L
get "right"(): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<L, R> = ($Pair<(L), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pair$$Original<L, R> = $Pair<(L), (R)>;}
declare module "dev.kosmx.playerAnim.core.util.Vec3d" {
import {$Vector3} from "dev.kosmx.playerAnim.core.util.Vector3"

export class $Vec3d extends $Vector3<(double)> {
constructor(x: double, y: double, z: double)

public "scale"(scalar: double): $Vec3d
public "add"(other: $Vec3d$$Type): $Vec3d
public "subtract"(rhs: $Vec3d$$Type): $Vec3d
public "dotProduct"(other: $Vec3d$$Type): double
public "squaredDistanceTo"(vec3d: $Vec3d$$Type): double
public "distanceTo"(vec3d: $Vec3d$$Type): double
public "crossProduct"(other: $Vec3d$$Type): $Vec3d
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3d$$Type = ($Vec3d);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Vec3d$$Original = $Vec3d;}
declare module "dev.kosmx.playerAnim.core.util.Vec3f" {
import {$Vector3} from "dev.kosmx.playerAnim.core.util.Vector3"
import {$Vec3d$$Type} from "dev.kosmx.playerAnim.core.util.Vec3d"

export class $Vec3f extends $Vector3<(float)> {
static readonly "ZERO": $Vec3f

constructor(x: float, y: float, z: float)

public "scale"(scalar: float): $Vec3f
public "add"(other: $Vec3f$$Type): $Vec3f
public "subtract"(rhs: $Vec3f$$Type): $Vec3f
public "dotProduct"(other: $Vec3f$$Type): float
public "squaredDistanceTo"(vec3d: $Vec3d$$Type): double
public "distanceTo"(vec3d: $Vec3d$$Type): double
public "crossProduct"(other: $Vec3f$$Type): $Vec3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3f$$Type = ($Vec3f);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Vec3f$$Original = $Vec3f;}
declare module "dev.kosmx.playerAnim.core.impl.AnimationProcessor" {
import {$Pair} from "dev.kosmx.playerAnim.core.util.Pair"
import {$FirstPersonMode} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode"
import {$FirstPersonConfiguration} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration"
import {$IAnimation$$Type} from "dev.kosmx.playerAnim.api.layered.IAnimation"
import {$TransformType$$Type} from "dev.kosmx.playerAnim.api.TransformType"
import {$Vec3f, $Vec3f$$Type} from "dev.kosmx.playerAnim.core.util.Vec3f"

export class $AnimationProcessor {
constructor(animation: $IAnimation$$Type)

public "isActive"(): boolean
public "tick"(): void
public "getBend"(modelName: StringJS): $Pair<(float), (float)>
public "get3DTransform"(modelName: StringJS, type: $TransformType$$Type, value0: $Vec3f$$Type): $Vec3f
public "getFirstPersonMode"(): $FirstPersonMode
public "isFirstPersonAnimationDisabled"(): boolean
public "getFirstPersonConfiguration"(): $FirstPersonConfiguration
public "setTickDelta"(tickDelta: float): void
get "active"(): boolean
get "firstPersonMode"(): $FirstPersonMode
get "firstPersonAnimationDisabled"(): boolean
get "firstPersonConfiguration"(): $FirstPersonConfiguration
set "tickDelta"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$$Type = ($AnimationProcessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationProcessor$$Original = $AnimationProcessor;}
