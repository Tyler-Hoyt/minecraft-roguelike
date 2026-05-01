declare module "dev.shadowsoffire.apotheosis.mixin.LivingEntityInvoker" {
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $LivingEntityInvoker$$Interface {
}

export class $LivingEntityInvoker implements $LivingEntityInvoker$$Interface {
 "callOnEffectUpdated"(arg0: $MobEffectInstance$$Type, arg1: boolean, arg2: $Entity$$Type): void
 "callCheckTotemDeathProtection"(arg0: $DamageSource$$Type): boolean
 "callGetDeathSound"(): $SoundEvent
 "callActuallyHurt"(arg0: $DamageSource$$Type, arg1: float): void
 "callGetSoundVolume"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityInvoker$$Type = ($LivingEntityInvoker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityInvoker$$Original = $LivingEntityInvoker;}
declare module "dev.shadowsoffire.apotheosis.mixin.client.GuiGraphicsAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $GuiGraphicsAccessor$$Interface {
get "tooltipStack"(): $ItemStack
set "tooltipStack"(value: $ItemStack$$Type)
}

export class $GuiGraphicsAccessor implements $GuiGraphicsAccessor$$Interface {
 "getTooltipStack"(): $ItemStack
 "setTooltipStack"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGraphicsAccessor$$Type = ($GuiGraphicsAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiGraphicsAccessor$$Original = $GuiGraphicsAccessor;}
declare module "dev.shadowsoffire.apotheosis.mixin.BaseSpawnerAccessor" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SpawnData, $SpawnData$$Type} from "net.minecraft.world.level.SpawnData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $BaseSpawnerAccessor$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $SpawnData): void
}

export class $BaseSpawnerAccessor implements $BaseSpawnerAccessor$$Interface {
 "callSetNextSpawnData"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $SpawnData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSpawnerAccessor$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $SpawnData) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseSpawnerAccessor$$Original = $BaseSpawnerAccessor;}
