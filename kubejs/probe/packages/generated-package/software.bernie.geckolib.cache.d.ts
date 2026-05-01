declare module "software.bernie.geckolib.cache.object.GeoBone" {
import {$List} from "java.util.List"
import {$BoneSnapshot} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$GeoCube} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"

export class $GeoBone {
constructor(arg0: $GeoBone$$Type, arg1: StringJS, arg2: boolean, arg3: double, arg4: boolean, arg5: boolean)

public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isHidden"(): boolean
public "getParent"(): $GeoBone
public "getPosX"(): float
public "getPosY"(): float
public "setChildrenHidden"(arg0: boolean): void
public "shouldNeverRender"(): boolean
public "setModelPosition"(arg0: $Vector3d$$Type): void
public "getScaleVector"(): $Vector3d
public "getPositionVector"(): $Vector3d
public "getModelPosition"(): $Vector3d
public "getLocalPosition"(): $Vector3d
public "getRotationVector"(): $Vector3d
public "setHidden"(arg0: boolean): void
public "setTrackingMatrices"(arg0: boolean): void
public "getPivotX"(): float
public "getPivotY"(): float
public "getPivotZ"(): float
public "getWorldPosition"(): $Vector3d
public "getInflate"(): double
public "hasScaleChanged"(): boolean
public "resetStateChanges"(): void
public "hasPositionChanged"(): boolean
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "markScaleAsChanged"(): void
public "getInitialSnapshot"(): $BoneSnapshot
public "hasRotationChanged"(): boolean
public "saveSnapshot"(): $BoneSnapshot
public "setPivotY"(arg0: float): void
public "setPivotZ"(arg0: float): void
public "setPivotX"(arg0: float): void
public "getReset"(): boolean
public "getCubes"(): $List<($GeoCube)>
public "getRotX"(): float
public "setRotY"(arg0: float): void
public "getRotY"(): float
public "setRotX"(arg0: float): void
public "getMirror"(): boolean
public "setModelSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setWorldSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setLocalSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "isTrackingMatrices"(): boolean
public "getChildBones"(): $List<($GeoBone)>
public "isHidingChildren"(): boolean
public "updatePivot"(arg0: float, arg1: float, arg2: float): void
public "saveInitialSnapshot"(): void
public "markRotationAsChanged"(): void
public "markPositionAsChanged"(): void
public "getWorldSpaceNormal"(): $Matrix3f
public "getLocalSpaceMatrix"(): $Matrix4f
public "setWorldSpaceNormal"(arg0: $Matrix3f$$Type): void
public "getModelSpaceMatrix"(): $Matrix4f
public "getWorldSpaceMatrix"(): $Matrix4f
public "getModelRotationMatrix"(): $Matrix4f
public "addRotationOffsetFromBone"(arg0: $GeoBone$$Type): void
public "getPosZ"(): float
public "getScaleX"(): float
public "setRotZ"(arg0: float): void
public "setPosY"(arg0: float): void
public "getScaleY"(): float
public "setScaleX"(arg0: float): void
public "setPosZ"(arg0: float): void
public "getRotZ"(): float
public "setPosX"(arg0: float): void
public "setScaleY"(arg0: float): void
public "setScaleZ"(arg0: float): void
public "getScaleZ"(): float
public "updatePosition"(arg0: float, arg1: float, arg2: float): void
get "name"(): StringJS
get "hidden"(): boolean
get "parent"(): $GeoBone
get "posX"(): float
get "posY"(): float
set "childrenHidden"(value: boolean)
set "modelPosition"(value: $Vector3d$$Type)
get "scaleVector"(): $Vector3d
get "positionVector"(): $Vector3d
get "modelPosition"(): $Vector3d
get "localPosition"(): $Vector3d
get "rotationVector"(): $Vector3d
set "hidden"(value: boolean)
set "trackingMatrices"(value: boolean)
get "pivotX"(): float
get "pivotY"(): float
get "pivotZ"(): float
get "worldPosition"(): $Vector3d
get "inflate"(): double
get "initialSnapshot"(): $BoneSnapshot
set "pivotY"(value: float)
set "pivotZ"(value: float)
set "pivotX"(value: float)
get "reset"(): boolean
get "cubes"(): $List<($GeoCube)>
get "rotX"(): float
set "rotY"(value: float)
get "rotY"(): float
set "rotX"(value: float)
get "mirror"(): boolean
set "modelSpaceMatrix"(value: $Matrix4f$$Type)
set "worldSpaceMatrix"(value: $Matrix4f$$Type)
set "localSpaceMatrix"(value: $Matrix4f$$Type)
get "trackingMatrices"(): boolean
get "childBones"(): $List<($GeoBone)>
get "hidingChildren"(): boolean
get "worldSpaceNormal"(): $Matrix3f
get "localSpaceMatrix"(): $Matrix4f
set "worldSpaceNormal"(value: $Matrix3f$$Type)
get "modelSpaceMatrix"(): $Matrix4f
get "worldSpaceMatrix"(): $Matrix4f
get "modelRotationMatrix"(): $Matrix4f
get "posZ"(): float
get "scaleX"(): float
set "rotZ"(value: float)
set "posY"(value: float)
get "scaleY"(): float
set "scaleX"(value: float)
set "posZ"(value: float)
get "rotZ"(): float
set "posX"(value: float)
set "scaleY"(value: float)
set "scaleZ"(value: float)
get "scaleZ"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBone$$Type = ($GeoBone);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoBone$$Original = $GeoBone;}
declare module "software.bernie.geckolib.cache.object.GeoVertex" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record} from "java.lang.Record"

export class $GeoVertex extends $Record {
constructor(arg0: double, arg1: double, arg2: double)
constructor(position: $Vector3f$$Type, texU: float, texV: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $Vector3f
public "texU"(): float
public "texV"(): float
public "withUVs"(arg0: float, arg1: float): $GeoVertex
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoVertex$$Type = ({"position"?: $Vector3f$$Type, "texV"?: float, "texU"?: float}) | ([position?: $Vector3f$$Type, texV?: float, texU?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoVertex$$Original = $GeoVertex;}
declare module "software.bernie.geckolib.cache.object.GeoCube" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$Record} from "java.lang.Record"

export class $GeoCube extends $Record {
constructor(quads: ($GeoQuad$$Type)[], pivot: $Vec3$$Type, rotation: $Vec3$$Type, size: $Vec3$$Type, inflate: double, mirror: boolean)

public "size"(): $Vec3
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "inflate"(): double
public "pivot"(): $Vec3
public "mirror"(): boolean
public "quads"(): ($GeoQuad)[]
public "rotation"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoCube$$Type = ({"quads"?: ($GeoQuad$$Type)[], "rotation"?: $Vec3$$Type, "size"?: $Vec3$$Type, "inflate"?: double, "mirror"?: boolean, "pivot"?: $Vec3$$Type}) | ([quads?: ($GeoQuad$$Type)[], rotation?: $Vec3$$Type, size?: $Vec3$$Type, inflate?: double, mirror?: boolean, pivot?: $Vec3$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoCube$$Original = $GeoCube;}
declare module "software.bernie.geckolib.cache.object.BakedGeoModel" {
import {$ModelProperties, $ModelProperties$$Type} from "software.bernie.geckolib.loading.json.raw.ModelProperties"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Record} from "java.lang.Record"

export class $BakedGeoModel extends $Record {
constructor(topLevelBones: $List$$Type<($GeoBone$$Type)>, properties: $ModelProperties$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $ModelProperties
public "getBone"(arg0: StringJS): $Optional<($GeoBone)>
public "searchForChildBone"(arg0: $GeoBone$$Type, arg1: StringJS): $GeoBone
public "topLevelBones"(): $List<($GeoBone)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGeoModel$$Type = ({"topLevelBones"?: $List$$Type<($GeoBone$$Type)>, "properties"?: $ModelProperties$$Type}) | ([topLevelBones?: $List$$Type<($GeoBone$$Type)>, properties?: $ModelProperties$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedGeoModel$$Original = $BakedGeoModel;}
declare module "software.bernie.geckolib.cache.object.GeoQuad" {
import {$GeoVertex, $GeoVertex$$Type} from "software.bernie.geckolib.cache.object.GeoVertex"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$FaceUV$Rotation$$Type} from "software.bernie.geckolib.loading.json.raw.FaceUV$Rotation"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record} from "java.lang.Record"

export class $GeoQuad extends $Record {
constructor(vertices: ($GeoVertex$$Type)[], normal: $Vector3f$$Type, direction: $Direction$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "direction"(): $Direction
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: (double)[], arg2: (double)[], arg3: $FaceUV$Rotation$$Type, arg4: float, arg5: float, arg6: boolean, arg7: $Direction$$Type): $GeoQuad
/**
 * 
 * @deprecated
 */
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: (double)[], arg2: (double)[], arg3: float, arg4: float, arg5: boolean, arg6: $Direction$$Type): $GeoQuad
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: $FaceUV$Rotation$$Type, arg6: float, arg7: float, arg8: boolean, arg9: $Direction$$Type): $GeoQuad
/**
 * 
 * @deprecated
 */
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: boolean, arg8: $Direction$$Type): $GeoQuad
public "normal"(): $Vector3f
public "vertices"(): ($GeoVertex)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoQuad$$Type = ({"normal"?: $Vector3f$$Type, "vertices"?: ($GeoVertex$$Type)[], "direction"?: $Direction$$Type}) | ([normal?: $Vector3f$$Type, vertices?: ($GeoVertex$$Type)[], direction?: $Direction$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoQuad$$Original = $GeoQuad;}
