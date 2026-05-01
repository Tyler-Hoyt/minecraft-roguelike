declare module "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer" {
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$List} from "java.util.List"
import {$GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$GeoRenderer$$Interface} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$Color} from "software.bernie.geckolib.util.Color"
import {$GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $GeoReplacedEntityRenderer<E extends $Entity, T extends $GeoAnimatable> extends $EntityRenderer<(E)> implements $GeoRenderer$$Interface<(T)> {
static readonly "LEASH_RENDER_STEPS": integer

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: $GeoModel$$Type<(T)>, arg2: T)

public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoReplacedEntityRenderer<(E), (T)>
public "shouldShowName"(arg0: E): boolean
public "getCurrentEntity"(): E
public "getTextureLocation"(arg0: E): $ResourceLocation
public "render"(arg0: E, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "withScale"(arg0: float, arg1: float): $GeoReplacedEntityRenderer<(E), (T)>
public "withScale"(arg0: float): $GeoReplacedEntityRenderer<(E), (T)>
public "isShaking"(arg0: T): boolean
public "renderLeash"<H extends $Entity, M extends $Mob>(arg0: M, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: H): void
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "updateAnimatedTextureFrame"(arg0: T): void
public "doPostRenderCleanup"(): void
public "getNameRenderCutoffDistance"(arg0: E, arg1: T): double
public "fireCompileRenderLayersEvent"(): void
public "getInstanceId"(arg0: T): long
public "getGeoModel"(): $GeoModel<(T)>
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "getAnimatable"(): T
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "getTextureLocation"(arg0: T): $ResourceLocation
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
get "currentEntity"(): E
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): T
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoReplacedEntityRenderer$$Type<E, T> = ($GeoReplacedEntityRenderer<(E), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoReplacedEntityRenderer$$Original<E, T> = $GeoReplacedEntityRenderer<(E), (T)>;}
declare module "software.bernie.geckolib.renderer.GeoRenderer" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$GeoRenderLayer} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoModel} from "software.bernie.geckolib.model.GeoModel"
import {$Color} from "software.bernie.geckolib.util.Color"
import {$GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $GeoRenderer$$Interface<T extends $GeoAnimatable> {
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): T
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
}

export class $GeoRenderer<T extends $GeoAnimatable> implements $GeoRenderer$$Interface {
 "getTextureLocation"(arg0: T): $ResourceLocation
 "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
 "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
 "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
 "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
 "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
 "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
 "getMotionAnimThreshold"(arg0: T): float
 "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
 "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
 "updateAnimatedTextureFrame"(arg0: T): void
 "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
 "doPostRenderCleanup"(): void
 "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
 "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
 "fireCompileRenderLayersEvent"(): void
 "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
 "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
 "getInstanceId"(arg0: T): long
 "getGeoModel"(): $GeoModel<(T)>
 "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
 "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
 "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
 "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
 "getAnimatable"(): T
 "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
 "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
 "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
 "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
 "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderer$$Type<T> = ($GeoRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderer$$Original<T> = $GeoRenderer<(T)>;}
declare module "software.bernie.geckolib.renderer.GeoArmorRenderer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$GeoRenderer$$Interface} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Color} from "software.bernie.geckolib.util.Color"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$HumanoidModel$ArmPose} from "net.minecraft.client.model.HumanoidModel$ArmPose"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $GeoArmorRenderer<T extends $Item> extends $HumanoidModel implements $GeoRenderer$$Interface<(T)> {
readonly "scaleHead": boolean
 "young": boolean
readonly "rightArm": $ModelPart
static readonly "OVERLAY_SCALE": float
readonly "leftLeg": $ModelPart
 "riding": boolean
readonly "body": $ModelPart
 "swimAmount": float
readonly "head": $ModelPart
readonly "leftArm": $ModelPart
readonly "babyYHeadOffset": float
static readonly "TOOT_HORN_YROT_BASE": float
readonly "hat": $ModelPart
readonly "bodyYOffset": float
static readonly "TOOT_HORN_XROT_BASE": float
 "leftArmPose": $HumanoidModel$ArmPose
 "attackTime": float
readonly "babyZHeadOffset": float
readonly "babyHeadScale": float
static readonly "LEGGINGS_OVERLAY_SCALE": float
static readonly "HAT_OVERLAY_SCALE": float
 "crouching": boolean
readonly "rightLeg": $ModelPart
readonly "babyBodyScale": float
 "rightArmPose": $HumanoidModel$ArmPose

constructor<I extends $Item>(arg0: I)
constructor(arg0: $GeoModel$$Type<(T)>)

public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoArmorRenderer<(T)>
public "setAllVisible"(arg0: boolean): void
public "getCurrentEntity"(): $Entity
public "renderToBuffer"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "getRightLegBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getBodyBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getLeftBootBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getRightArmBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getLeftArmBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
/**
 * 
 * @deprecated
 */
public "prepForRender"(arg0: $Entity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(never)>): void
public "prepForRender"(arg0: $Entity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(never)>, arg4: $MultiBufferSource$$Type, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
public "scaleModelForBaby"(arg0: $PoseStack$$Type, arg1: T, arg2: float, arg3: boolean): void
public "getRightBootBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getHeadBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getLeftLegBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getRenderType"(arg0: $GeoAnimatable$$Type, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "preRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "withScale"(arg0: float, arg1: float): $GeoArmorRenderer<(T)>
public "withScale"(arg0: float): $GeoArmorRenderer<(T)>
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "updateAnimatedTextureFrame"(arg0: $GeoAnimatable$$Type): void
public "updateAnimatedTextureFrame"(arg0: T): void
public "doPostRenderCleanup"(): void
public "fireCompileRenderLayersEvent"(): void
public "getRenderColor"(arg0: $GeoAnimatable$$Type, arg1: float, arg2: integer): $Color
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "getInstanceId"(arg0: $GeoAnimatable$$Type): long
public "getInstanceId"(arg0: T): long
public "getGeoModel"(): $GeoModel<(T)>
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getAnimatable"(): T
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "applyBoneVisibilityByPart"(arg0: $EquipmentSlot$$Type, arg1: $ModelPart$$Type, arg2: $HumanoidModel$$Type<(never)>): void
/**
 * 
 * @deprecated
 */
public "doArmourPostRenderCleanup"(): void
public "getCurrentSlot"(): $EquipmentSlot
public "getCurrentStack"(): $ItemStack
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "getTextureLocation"(arg0: T): $ResourceLocation
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
set "allVisible"(value: boolean)
get "currentEntity"(): $Entity
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): T
get "currentSlot"(): $EquipmentSlot
get "currentStack"(): $ItemStack
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoArmorRenderer$$Type<T> = ($GeoArmorRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoArmorRenderer$$Original<T> = $GeoArmorRenderer<(T)>;}
declare module "software.bernie.geckolib.renderer.GeoObjectRenderer" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$GeoRenderer$$Interface} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$Color} from "software.bernie.geckolib.util.Color"
import {$GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $GeoObjectRenderer<T extends $GeoAnimatable> implements $GeoRenderer$$Interface<(T)> {
constructor(arg0: $GeoModel$$Type<(T)>)

public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoObjectRenderer<(T)>
public "getTextureLocation"(arg0: T): $ResourceLocation
public "render"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: integer, arg6: float): void
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "withScale"(arg0: float, arg1: float): $GeoObjectRenderer<(T)>
public "withScale"(arg0: float): $GeoObjectRenderer<(T)>
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "updateAnimatedTextureFrame"(arg0: T): void
public "doPostRenderCleanup"(): void
public "fireCompileRenderLayersEvent"(): void
public "getGeoModel"(): $GeoModel<(T)>
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getAnimatable"(): T
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "getInstanceId"(arg0: T): long
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): T
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoObjectRenderer$$Type<T> = ($GeoObjectRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoObjectRenderer$$Original<T> = $GeoObjectRenderer<(T)>;}
declare module "software.bernie.geckolib.renderer.GeoEntityRenderer" {
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$List} from "java.util.List"
import {$GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$GeoRenderer$$Interface} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$Color} from "software.bernie.geckolib.util.Color"
import {$GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $GeoEntityRenderer<T extends $Entity> extends $EntityRenderer<(T)> implements $GeoRenderer$$Interface<(T)> {
static readonly "LEASH_RENDER_STEPS": integer

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: $EntityType$$Type<(T)>)
constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: $GeoModel$$Type<(T)>)

public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoEntityRenderer<(T)>
public "shouldShowName"(arg0: T): boolean
public "getTextureLocation"(arg0: T): $ResourceLocation
public "getTextureLocation"(arg0: $GeoAnimatable$$Type): $ResourceLocation
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "getRenderType"(arg0: $GeoAnimatable$$Type, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "preRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "withScale"(arg0: float): $GeoEntityRenderer<(T)>
public "withScale"(arg0: float, arg1: float): $GeoEntityRenderer<(T)>
public "isShaking"(arg0: T): boolean
public "renderLeash"<E extends $Entity, M extends $Mob>(arg0: M, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: E): void
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "updateAnimatedTextureFrame"(arg0: T): void
public "updateAnimatedTextureFrame"(arg0: $GeoAnimatable$$Type): void
public "doPostRenderCleanup"(): void
public "getNameRenderCutoffDistance"(arg0: T): double
public "fireCompileRenderLayersEvent"(): void
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "getRenderColor"(arg0: $GeoAnimatable$$Type, arg1: float, arg2: integer): $Color
public "getInstanceId"(arg0: T): long
public "getInstanceId"(arg0: $GeoAnimatable$$Type): long
public "getGeoModel"(): $GeoModel<(T)>
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "getPackedOverlay"(arg0: $GeoAnimatable$$Type, arg1: float, arg2: float): integer
public "getAnimatable"(): $GeoAnimatable
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
public "renderFinal"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): $GeoAnimatable
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoEntityRenderer$$Type<T> = ($GeoEntityRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoEntityRenderer$$Original<T> = $GeoEntityRenderer<(T)>;}
declare module "software.bernie.geckolib.renderer.GeoBlockRenderer" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$GeoRenderer$$Interface} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Color} from "software.bernie.geckolib.util.Color"
import {$BlockEntityRenderer$$Interface} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $GeoBlockRenderer<T extends $BlockEntity> implements $GeoRenderer$$Interface<(T)>, $BlockEntityRenderer$$Interface<(T)> {
constructor(arg0: $BlockEntityType$$Type<(T)>)
constructor(arg0: $GeoModel$$Type<(T)>)

public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoBlockRenderer<(T)>
public "render"(arg0: T, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "preRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "withScale"(arg0: float, arg1: float): $GeoBlockRenderer<(T)>
public "withScale"(arg0: float): $GeoBlockRenderer<(T)>
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "updateAnimatedTextureFrame"(arg0: T): void
public "updateAnimatedTextureFrame"(arg0: $GeoAnimatable$$Type): void
public "doPostRenderCleanup"(): void
public "fireCompileRenderLayersEvent"(): void
public "getInstanceId"(arg0: T): long
public "getInstanceId"(arg0: $GeoAnimatable$$Type): long
public "getGeoModel"(): $GeoModel<(T)>
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getAnimatable"(): $GeoAnimatable
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "getTextureLocation"(arg0: T): $ResourceLocation
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
public "getViewDistance"(): integer
public "shouldRenderOffScreen"(arg0: T): boolean
public "shouldRender"(arg0: T, arg1: $Vec3$$Type): boolean
public "getRenderBoundingBox"(arg0: T): $AABB
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): $GeoAnimatable
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
get "viewDistance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBlockRenderer$$Type<T> = ($GeoBlockRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoBlockRenderer$$Original<T> = $GeoBlockRenderer<(T)>;}
declare module "software.bernie.geckolib.renderer.layer.GeoRenderLayer" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoModel} from "software.bernie.geckolib.model.GeoModel"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderLayer<T extends $GeoAnimatable> {
constructor(arg0: $GeoRenderer$$Type<(T)>)

public "getDefaultBakedModel"(arg0: T): $BakedGeoModel
public "render"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "getRenderer"(): $GeoRenderer<(T)>
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "getGeoModel"(): $GeoModel<(T)>
public "renderForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
get "renderer"(): $GeoRenderer<(T)>
get "geoModel"(): $GeoModel<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderLayer$$Type<T> = ($GeoRenderLayer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderLayer$$Original<T> = $GeoRenderLayer<(T)>;}
declare module "software.bernie.geckolib.renderer.GeoItemRenderer" {
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$GeoRenderer$$Interface} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$Color} from "software.bernie.geckolib.util.Color"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$BlockEntityWithoutLevelRenderer} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"

export class $GeoItemRenderer<T extends $Item> extends $BlockEntityWithoutLevelRenderer implements $GeoRenderer$$Interface<(T)> {
constructor(arg0: $BlockEntityRenderDispatcher$$Type, arg1: $EntityModelSet$$Type, arg2: $GeoModel$$Type<(T)>)
constructor(arg0: $GeoModel$$Type<(T)>)
constructor<I extends $Item>(arg0: I)

public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoItemRenderer<(T)>
public "getTextureLocation"(arg0: T): $ResourceLocation
public "getTextureLocation"(arg0: $GeoAnimatable$$Type): $ResourceLocation
public "setupLightingForGuiRender"(): void
public "getCurrentItemStack"(): $ItemStack
public "useAlternateGuiLighting"(): $GeoItemRenderer<(T)>
public "preRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "withScale"(arg0: float, arg1: float): $GeoItemRenderer<(T)>
public "withScale"(arg0: float): $GeoItemRenderer<(T)>
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "updateAnimatedTextureFrame"(arg0: T): void
public "updateAnimatedTextureFrame"(arg0: $GeoAnimatable$$Type): void
public "doPostRenderCleanup"(): void
public "renderByItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
public "fireCompileRenderLayersEvent"(): void
public "getInstanceId"(arg0: $GeoAnimatable$$Type): long
public "getInstanceId"(arg0: T): long
public "getGeoModel"(): $GeoModel<(T)>
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getAnimatable"(): T
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
get "upLightingForGuiRender"(): void
get "currentItemStack"(): $ItemStack
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): T
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoItemRenderer$$Type<T> = ($GeoItemRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoItemRenderer$$Original<T> = $GeoItemRenderer<(T)>;}
