declare module "software.bernie.geckolib.animatable.client.GeoRenderProvider" {
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntityWithoutLevelRenderer} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"

export interface $GeoRenderProvider$$Interface {
get "geoItemRenderer"(): $BlockEntityWithoutLevelRenderer
}

export class $GeoRenderProvider implements $GeoRenderProvider$$Interface {
static readonly "DEFAULT": $GeoRenderProvider

static "of"(arg0: $ItemStack$$Type): $GeoRenderProvider
static "of"(arg0: $Item$$Type): $GeoRenderProvider
 "getGeoItemRenderer"(): $BlockEntityWithoutLevelRenderer
 "getGeoArmorRenderer"<T extends $LivingEntity>(arg0: T, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(T)>): $HumanoidModel<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderProvider$$Type = ($GeoRenderProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoRenderProvider$$Original = $GeoRenderProvider;}
declare module "software.bernie.geckolib.animatable.GeoEntity" {
import {$GeoAnimatable$$Interface} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"

export interface $GeoEntity$$Interface extends $GeoAnimatable$$Interface {
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}

export class $GeoEntity implements $GeoEntity$$Interface {
 "getTick"(arg0: any): double
 "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
 "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
 "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
 "triggerAnim"(arg0: StringJS, arg1: StringJS): void
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "getBoneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoEntity$$Type = ($GeoEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoEntity$$Original = $GeoEntity;}
declare module "software.bernie.geckolib.animatable.GeoItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$SingletonGeoAnimatable$$Interface} from "software.bernie.geckolib.animatable.SingletonGeoAnimatable"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"

export interface $GeoItem$$Interface extends $SingletonGeoAnimatable$$Interface {
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}

export class $GeoItem implements $GeoItem$$Interface {
static "getId"(arg0: $ItemStack$$Type): long
static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "isPerspectiveAware"(): boolean
static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
 "getTick"(arg0: any): double
 "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "getRenderProvider"(): any
 "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
 "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
 "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "getBoneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoItem$$Type = ($GeoItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoItem$$Original = $GeoItem;}
declare module "software.bernie.geckolib.animatable.GeoBlockEntity" {
import {$GeoAnimatable$$Interface} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"

export interface $GeoBlockEntity$$Interface extends $GeoAnimatable$$Interface {
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}

export class $GeoBlockEntity implements $GeoBlockEntity$$Interface {
 "getTick"(arg0: any): double
 "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
 "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
 "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
 "triggerAnim"(arg0: StringJS, arg1: StringJS): void
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "getBoneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBlockEntity$$Type = ($GeoBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoBlockEntity$$Original = $GeoBlockEntity;}
declare module "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$AnimatableManager} from "software.bernie.geckolib.animation.AnimatableManager"

export class $AnimatableInstanceCache {
constructor(arg0: $GeoAnimatable$$Type)

public "getDataPoint"<D>(arg0: long, arg1: $DataTicket$$Type<(D)>): D
public "addDataPoint"<D>(arg0: long, arg1: $DataTicket$$Type<(D)>, arg2: D): void
public "getRenderProvider"(): any
public "getManagerForId"<T extends $GeoAnimatable>(arg0: long): $AnimatableManager<(T)>
get "renderProvider"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableInstanceCache$$Type = ($AnimatableInstanceCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimatableInstanceCache$$Original = $AnimatableInstanceCache;}
declare module "software.bernie.geckolib.animatable.GeoAnimatable" {
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"

export interface $GeoAnimatable$$Interface {
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}

export class $GeoAnimatable implements $GeoAnimatable$$Interface {
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "getTick"(arg0: any): double
 "getBoneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoAnimatable$$Type = ($GeoAnimatable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoAnimatable$$Original = $GeoAnimatable;}
declare module "software.bernie.geckolib.animatable.SingletonGeoAnimatable" {
import {$GeoAnimatable$$Type, $GeoAnimatable$$Interface} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"

export interface $SingletonGeoAnimatable$$Interface extends $GeoAnimatable$$Interface {
get "renderProvider"(): any
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
}

export class $SingletonGeoAnimatable implements $SingletonGeoAnimatable$$Interface {
static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
 "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "getRenderProvider"(): any
 "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
 "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
 "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "getTick"(arg0: any): double
 "getBoneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonGeoAnimatable$$Type = ($SingletonGeoAnimatable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingletonGeoAnimatable$$Original = $SingletonGeoAnimatable;}
