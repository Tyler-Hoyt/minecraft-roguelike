declare module "net.bettercombat.client.collision.OrientedBoundingBox" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Matrix3f} from "org.joml.Matrix3f"

export class $OrientedBoundingBox {
 "extent": $Vec3
 "vertex8": $Vec3
 "vertex5": $Vec3
 "vertex4": $Vec3
 "vertices": ($Vec3)[]
 "vertex7": $Vec3
 "center": $Vec3
 "rotation": $Matrix3f
 "vertex6": $Vec3
 "scaledAxisY": $Vec3
 "scaledAxisZ": $Vec3
 "scaledAxisX": $Vec3
 "axisZ": $Vec3
 "axisY": $Vec3
 "axisX": $Vec3
 "vertex1": $Vec3
 "vertex3": $Vec3
 "vertex2": $Vec3

constructor(obb: $OrientedBoundingBox$$Type)
constructor(box: $AABB$$Type)
constructor(center: $Vec3$$Type, size: $Vec3$$Type, yaw: float, pitch: float)
constructor(center: $Vec3$$Type, width: double, height: double, depth: double, yaw: float, pitch: float)

public "scale"(scale: double): $OrientedBoundingBox
public "offset"(offset: $Vec3$$Type): $OrientedBoundingBox
public "contains"(point: $Vec3$$Type): boolean
public "copy"(): $OrientedBoundingBox
public "intersects"(boundingBox: $AABB$$Type): boolean
public "intersects"(otherOBB: $OrientedBoundingBox$$Type): boolean
public "updateVertex"(): $OrientedBoundingBox
public "offsetAlongAxisX"(offset: double): $OrientedBoundingBox
public "offsetAlongAxisY"(offset: double): $OrientedBoundingBox
public "offsetAlongAxisZ"(offset: double): $OrientedBoundingBox
public static "Intersects"(a: $OrientedBoundingBox$$Type, b: $OrientedBoundingBox$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrientedBoundingBox$$Type = ($OrientedBoundingBox);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OrientedBoundingBox$$Original = $OrientedBoundingBox;}
