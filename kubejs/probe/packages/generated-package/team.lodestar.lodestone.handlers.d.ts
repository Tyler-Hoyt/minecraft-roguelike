declare module "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"

export interface $ItemEventHandler$IEventResponder$$Interface {
}

export class $ItemEventHandler$IEventResponder implements $ItemEventHandler$IEventResponder$$Interface {
 "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
 "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEventHandler$IEventResponder$$Type = ($ItemEventHandler$IEventResponder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEventHandler$IEventResponder$$Original = $ItemEventHandler$IEventResponder;}
declare module "team.lodestar.lodestone.handlers.screenparticle.ParticleEmitterHandler$ItemParticleSupplier" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export interface $ParticleEmitterHandler$ItemParticleSupplier$$Interface {
}

export class $ParticleEmitterHandler$ItemParticleSupplier implements $ParticleEmitterHandler$ItemParticleSupplier$$Interface {
 "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
 "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEmitterHandler$ItemParticleSupplier$$Type = ($ParticleEmitterHandler$ItemParticleSupplier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleEmitterHandler$ItemParticleSupplier$$Original = $ParticleEmitterHandler$ItemParticleSupplier;}
