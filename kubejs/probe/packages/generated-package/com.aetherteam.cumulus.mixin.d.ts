declare module "com.aetherteam.cumulus.mixin.mixins.client.accessor.MinecraftAccessor" {
import {$TimerQuery$FrameProfile, $TimerQuery$FrameProfile$$Type} from "com.mojang.blaze3d.systems.TimerQuery$FrameProfile"

export interface $MinecraftAccessor$$Interface {
}

export class $MinecraftAccessor implements $MinecraftAccessor$$Interface {
 "cumulus$setIsLocalServer"(arg0: boolean): void
 "cumulus$setCurrentFrameProfile"(arg0: $TimerQuery$FrameProfile$$Type): void
 "cumulus$getCurrentFrameProfile"(): $TimerQuery$FrameProfile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$$Type = ($MinecraftAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftAccessor$$Original = $MinecraftAccessor;}
declare module "com.aetherteam.cumulus.mixin.mixins.client.accessor.EntityRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityRendererAccessor$$Interface {
}

export class $EntityRendererAccessor implements $EntityRendererAccessor$$Interface {
 "cumulus$getShadowRadius"(): float
 "cumulus$setShadowRadius"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererAccessor$$Type = ($EntityRendererAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRendererAccessor$$Original = $EntityRendererAccessor;}
declare module "com.aetherteam.cumulus.mixin.mixins.common.accessor.MinecraftServerAccessor" {
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"

export interface $MinecraftServerAccessor$$Interface {

(): $LevelStorageSource$LevelStorageAccess$$Type
}

export class $MinecraftServerAccessor implements $MinecraftServerAccessor$$Interface {
 "cumulus$getStorageSource"(): $LevelStorageSource$LevelStorageAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerAccessor$$Type = (() => $LevelStorageSource$LevelStorageAccess$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServerAccessor$$Original = $MinecraftServerAccessor;}
declare module "com.aetherteam.cumulus.mixin.mixins.common.accessor.IntegratedServerAccessor" {
import {$LanServerPinger, $LanServerPinger$$Type} from "net.minecraft.client.server.LanServerPinger"
import {$UUID} from "java.util.UUID"

export interface $IntegratedServerAccessor$$Interface {
}

export class $IntegratedServerAccessor implements $IntegratedServerAccessor$$Interface {
 "cumulus$getUUID"(): $UUID
 "cumulus$setLanPinger"(arg0: $LanServerPinger$$Type): void
 "cumulus$getLanPinger"(): $LanServerPinger
 "cumulus$setPublishedPort"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServerAccessor$$Type = ($IntegratedServerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntegratedServerAccessor$$Original = $IntegratedServerAccessor;}
declare module "com.aetherteam.cumulus.mixin.mixins.client.accessor.ScreenAccessor" {
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"

export interface $ScreenAccessor$$Interface {
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
static "cumulus$getPanorama"(): $PanoramaRenderer
static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
static "cumulus$getCubeMap"(): $CubeMap
static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = ($ScreenAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAccessor$$Original = $ScreenAccessor;}
declare module "com.aetherteam.cumulus.mixin.mixins.client.accessor.SplashRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SplashRendererAccessor$$Interface {
}

export class $SplashRendererAccessor implements $SplashRendererAccessor$$Interface {
 "cumulus$getSplash"(): StringJS
 "cumulus$setSplash"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplashRendererAccessor$$Type = ($SplashRendererAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SplashRendererAccessor$$Original = $SplashRendererAccessor;}
