declare module "io.redspace.ironsspellbooks.spells.ice.IceTombSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $IceTombSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "getDuration"(arg0: integer, arg1: $LivingEntity$$Type): float
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getHealing"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IceTombSpell$$Type = ($IceTombSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IceTombSpell$$Original = $IceTombSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.SunbeamSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SunbeamSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SunbeamSpell$$Type = ($SunbeamSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SunbeamSpell$$Original = $SunbeamSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.OakskinSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $OakskinSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OakskinSpell$$Type = ($OakskinSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OakskinSpell$$Original = $OakskinSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.DivineSmiteSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $DivineSmiteSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "canBeInterrupted"(arg0: $Player$$Type): boolean
public "getCastType"(): $CastType
public "getEffectiveCastTime"(arg0: integer, arg1: $LivingEntity$$Type): integer
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DivineSmiteSpell$$Type = ($DivineSmiteSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DivineSmiteSpell$$Original = $DivineSmiteSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.BlazeStormSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $BlazeStormSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "shootBlazeFireball"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type): void
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getCastTime"(arg0: integer): integer
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
public "onServerCastTick"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): void
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeStormSpell$$Type = ($BlazeStormSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlazeStormSpell$$Original = $BlazeStormSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.FireBreathSpell" {
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FireBreathSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBreathSpell$$Type = ($FireBreathSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireBreathSpell$$Original = $FireBreathSpell;}
declare module "io.redspace.ironsspellbooks.spells.NoneSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $NoneSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoneSpell$$Type = ($NoneSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoneSpell$$Original = $NoneSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.PoisonArrowSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $PoisonArrowSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
public "getArrowDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getAOEDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoisonArrowSpell$$Type = ($PoisonArrowSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoisonArrowSpell$$Original = $PoisonArrowSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.PoisonBreathSpell" {
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $PoisonBreathSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoisonBreathSpell$$Type = ($PoisonBreathSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoisonBreathSpell$$Original = $PoisonBreathSpell;}
declare module "io.redspace.ironsspellbooks.spells.ice.RayOfFrostSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $RayOfFrostSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public static "getRange"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RayOfFrostSpell$$Type = ($RayOfFrostSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RayOfFrostSpell$$Original = $RayOfFrostSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.FlamingBarrageSpell" {
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $FlamingBarrageSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlamingBarrageSpell$$Type = ($FlamingBarrageSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlamingBarrageSpell$$Original = $FlamingBarrageSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.SummonVexSpell" {
import {$Optional} from "java.util.Optional"
import {$RecastInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$RecastResult$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable, $ICastDataSerializable$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $SummonVexSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "onRecastFinished"(arg0: $ServerPlayer$$Type, arg1: $RecastInstance$$Type, arg2: $RecastResult$$Type, arg3: $ICastDataSerializable$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getSummonCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonVexSpell$$Type = ($SummonVexSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonVexSpell$$Original = $SummonVexSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.GuidingBoltSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $GuidingBoltSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuidingBoltSpell$$Type = ($GuidingBoltSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuidingBoltSpell$$Original = $GuidingBoltSpell;}
declare module "io.redspace.ironsspellbooks.spells.eldritch.TelekinesisSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f} from "org.joml.Vector3f"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $TelekinesisSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getCastTime"(arg0: integer): integer
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getTargetingColor"(): $Vector3f
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
public "onServerCastTick"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): void
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "targetingColor"(): $Vector3f
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TelekinesisSpell$$Type = ($TelekinesisSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TelekinesisSpell$$Original = $TelekinesisSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.MagicMissileSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $MagicMissileSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicMissileSpell$$Type = ($MagicMissileSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicMissileSpell$$Original = $MagicMissileSpell;}
declare module "io.redspace.ironsspellbooks.spells.lightning.ChainLightningSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ChainLightningSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getRange"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getMaxConnections"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChainLightningSpell$$Type = ($ChainLightningSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChainLightningSpell$$Original = $ChainLightningSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.SummonEnderChestSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SummonEnderChestSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonEnderChestSpell$$Type = ($SummonEnderChestSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonEnderChestSpell$$Original = $SummonEnderChestSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.SummonHorseSpell" {
import {$Optional} from "java.util.Optional"
import {$RecastInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import {$Style} from "net.minecraft.network.chat.Style"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$RecastResult$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable, $ICastDataSerializable$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $SummonHorseSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "onRecastFinished"(arg0: $ServerPlayer$$Type, arg1: $RecastInstance$$Type, arg2: $RecastResult$$Type, arg3: $ICastDataSerializable$$Type): void
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonHorseSpell$$Type = ($SummonHorseSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonHorseSpell$$Original = $SummonHorseSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.GluttonySpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $GluttonySpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GluttonySpell$$Type = ($GluttonySpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GluttonySpell$$Original = $GluttonySpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.BlackHoleSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $BlackHoleSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "stopSoundOnCancel"(): boolean
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackHoleSpell$$Type = ($BlackHoleSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlackHoleSpell$$Original = $BlackHoleSpell;}
declare module "io.redspace.ironsspellbooks.spells.blood.HeartstopSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $HeartstopSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeartstopSpell$$Type = ($HeartstopSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeartstopSpell$$Original = $HeartstopSpell;}
declare module "io.redspace.ironsspellbooks.spells.ice.FrostwaveSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FrostwaveSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "getDuration"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "getRadius"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostwaveSpell$$Type = ($FrostwaveSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrostwaveSpell$$Original = $FrostwaveSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.FangStrikeSpell" {
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FangStrikeSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FangStrikeSpell$$Type = ($FangStrikeSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FangStrikeSpell$$Original = $FangStrikeSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.ShieldSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ShieldSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldSpell$$Type = ($ShieldSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShieldSpell$$Original = $ShieldSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.SlowSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f} from "org.joml.Vector3f"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SlowSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "getDuration"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getTargetingColor"(): $Vector3f
public "getAmplifier"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "targetingColor"(): $Vector3f
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlowSpell$$Type = ($SlowSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlowSpell$$Original = $SlowSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.HealSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $HealSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HealSpell$$Type = ($HealSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HealSpell$$Original = $HealSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.CleanseSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $CleanseSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CleanseSpell$$Type = ($CleanseSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CleanseSpell$$Original = $CleanseSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.StarfallSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $StarfallSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public static "particleTrail"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type, arg3: $ParticleOptions$$Type): void
public "shootComet"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $Vec3$$Type, arg4: $Vec3$$Type): void
public "getCastType"(): $CastType
public "onServerCastTick"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): void
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarfallSpell$$Type = ($StarfallSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StarfallSpell$$Original = $StarfallSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.StompSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $StompSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastStartAnimation"(): $AnimationHolder
public "canBeInterrupted"(arg0: $Player$$Type): boolean
public "getCastType"(): $CastType
public "getEffectiveCastTime"(arg0: integer, arg1: $LivingEntity$$Type): integer
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StompSpell$$Type = ($StompSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StompSpell$$Original = $StompSpell;}
declare module "io.redspace.ironsspellbooks.spells.lightning.ShockwaveSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ShockwaveSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "getRadius"(arg0: integer, arg1: $LivingEntity$$Type): float
public "playSound"(arg0: ($SoundEvent$$Type)?, arg1: $Entity$$Type): void
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShockwaveSpell$$Type = ($ShockwaveSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShockwaveSpell$$Original = $ShockwaveSpell;}
declare module "io.redspace.ironsspellbooks.spells.ice.FrostStepSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FrostStepSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public static "particleCloud"(arg0: $Level$$Type, arg1: $Vec3$$Type): void
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostStepSpell$$Type = ($FrostStepSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrostStepSpell$$Original = $FrostStepSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.MagmaBombSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $MagmaBombSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getRadius"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getAoeDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagmaBombSpell$$Type = ($MagmaBombSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagmaBombSpell$$Original = $MagmaBombSpell;}
declare module "io.redspace.ironsspellbooks.spells.lightning.ThunderstormSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ThunderstormSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "getDurationTicks"(arg0: integer, arg1: $LivingEntity$$Type): integer
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThunderstormSpell$$Type = ($ThunderstormSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThunderstormSpell$$Original = $ThunderstormSpell;}
declare module "io.redspace.ironsspellbooks.spells.eldritch.SonicBoomSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SonicBoomSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public static "getRange"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getCastStartAnimation"(): $AnimationHolder
public "playSound"(arg0: ($SoundEvent$$Type)?, arg1: $Entity$$Type): void
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SonicBoomSpell$$Type = ($SonicBoomSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SonicBoomSpell$$Original = $SonicBoomSpell;}
declare module "io.redspace.ironsspellbooks.spells.blood.DevourSpell" {
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $DevourSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getHpBonus"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DevourSpell$$Type = ($DevourSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DevourSpell$$Original = $DevourSpell;}
declare module "io.redspace.ironsspellbooks.spells.blood.BloodStepSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $BloodStepSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
public "onClientPreCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type, arg4: $MagicData$$Type): void
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodStepSpell$$Type = ($BloodStepSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BloodStepSpell$$Original = $BloodStepSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.HeatSurgeSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $HeatSurgeSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "getDuration"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getRendAmplifier"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "getRadius"(arg0: integer, arg1: $LivingEntity$$Type): float
public "stopSoundOnCancel"(): boolean
public "getCastType"(): $CastType
public "onServerCastComplete"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type, arg4: boolean): void
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatSurgeSpell$$Type = ($HeatSurgeSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatSurgeSpell$$Original = $HeatSurgeSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.GustSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $GustSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "getStrength"(arg0: integer, arg1: $LivingEntity$$Type): float
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getRange"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getCastFinishAnimation"(): $AnimationHolder
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GustSpell$$Type = ($GustSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GustSpell$$Original = $GustSpell;}
declare module "io.redspace.ironsspellbooks.spells.lightning.LightningLanceSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $LightningLanceSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningLanceSpell$$Type = ($LightningLanceSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightningLanceSpell$$Original = $LightningLanceSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.InvisibilitySpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $InvisibilitySpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibilitySpell$$Type = ($InvisibilitySpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InvisibilitySpell$$Original = $InvisibilitySpell;}
declare module "io.redspace.ironsspellbooks.spells.eldritch.SculkTentaclesSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SculkTentaclesSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SculkTentaclesSpell$$Type = ($SculkTentaclesSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SculkTentaclesSpell$$Original = $SculkTentaclesSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.WallOfFireSpell$FireWallData" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List} from "java.util.List"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ICastDataSerializable$$Interface} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $WallOfFireSpell$FireWallData implements $ICastDataSerializable$$Interface {
 "accumulatedDistance": float
 "ticks": integer
 "anchorPoints": $List<($Vec3)>
 "maxTotalDistance": float

public "reset"(): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "readFromBuffer"(arg0: $FriendlyByteBuf$$Type): void
public "writeToBuffer"(arg0: $FriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallOfFireSpell$FireWallData$$Type = ($WallOfFireSpell$FireWallData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WallOfFireSpell$FireWallData$$Original = $WallOfFireSpell$FireWallData;}
declare module "io.redspace.ironsspellbooks.spells.evocation.ChainCreeperSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ChainCreeperSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public static "summonCreeperRing"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: float, arg4: integer): void
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChainCreeperSpell$$Type = ($ChainCreeperSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChainCreeperSpell$$Original = $ChainCreeperSpell;}
declare module "io.redspace.ironsspellbooks.spells.blood.BloodNeedlesSpell" {
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $BloodNeedlesSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodNeedlesSpell$$Type = ($BloodNeedlesSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BloodNeedlesSpell$$Original = $BloodNeedlesSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.ShadowSlashSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICastData$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ShadowSlashSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "onClientCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $ICastData$$Type): void
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadowSlashSpell$$Type = ($ShadowSlashSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShadowSlashSpell$$Original = $ShadowSlashSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.AngelWingsSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $AngelWingsSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AngelWingsSpell$$Type = ($AngelWingsSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AngelWingsSpell$$Original = $AngelWingsSpell;}
declare module "io.redspace.ironsspellbooks.spells.lightning.ElectrocuteSpell" {
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ElectrocuteSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrocuteSpell$$Type = ($ElectrocuteSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectrocuteSpell$$Original = $ElectrocuteSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.ThrowSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ThrowSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
public "getEffectiveCastTime"(arg0: integer, arg1: $LivingEntity$$Type): integer
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThrowSpell$$Type = ($ThrowSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThrowSpell$$Original = $ThrowSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.SummonSwordsSpell" {
import {$Optional} from "java.util.Optional"
import {$RecastInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$RecastResult$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable, $ICastDataSerializable$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $SummonSwordsSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "onRecastFinished"(arg0: $ServerPlayer$$Type, arg1: $RecastInstance$$Type, arg2: $RecastResult$$Type, arg3: $ICastDataSerializable$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getDamageBonus"(arg0: integer, arg1: $LivingEntity$$Type): double
public "getHealthBonus"(arg0: integer, arg1: $LivingEntity$$Type): double
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonSwordsSpell$$Type = ($SummonSwordsSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonSwordsSpell$$Original = $SummonSwordsSpell;}
declare module "io.redspace.ironsspellbooks.spells.lightning.BallLightningSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $BallLightningSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BallLightningSpell$$Type = ($BallLightningSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BallLightningSpell$$Original = $BallLightningSpell;}
declare module "io.redspace.ironsspellbooks.spells.lightning.ChargeSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ChargeSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeSpell$$Type = ($ChargeSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargeSpell$$Original = $ChargeSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.TeleportSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $TeleportSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public static "solveTeleportDestination"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $Vec3
public static "findTeleportLocation"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: float): $Vec3
public static "particleCloud"(arg0: $Level$$Type, arg1: $Vec3$$Type): void
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportSpell$$Type = ($TeleportSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeleportSpell$$Original = $TeleportSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.BlightSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $BlightSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "getDuration"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getAmplifier"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlightSpell$$Type = ($BlightSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlightSpell$$Original = $BlightSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.SpiderAspectSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpiderAspectSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiderAspectSpell$$Type = ($SpiderAspectSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiderAspectSpell$$Original = $SpiderAspectSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.FireflySwarmSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FireflySwarmSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireflySwarmSpell$$Type = ($FireflySwarmSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireflySwarmSpell$$Original = $FireflySwarmSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.FirecrackerSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FirecrackerSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirecrackerSpell$$Type = ($FirecrackerSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FirecrackerSpell$$Original = $FirecrackerSpell;}
declare module "io.redspace.ironsspellbooks.spells.blood.RaiseDeadSpell" {
import {$Optional} from "java.util.Optional"
import {$RecastInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$RecastResult$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable, $ICastDataSerializable$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $RaiseDeadSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "onRecastFinished"(arg0: $ServerPlayer$$Type, arg1: $RecastInstance$$Type, arg2: $RecastResult$$Type, arg3: $ICastDataSerializable$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getSummonCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RaiseDeadSpell$$Type = ($RaiseDeadSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RaiseDeadSpell$$Original = $RaiseDeadSpell;}
declare module "io.redspace.ironsspellbooks.spells.ice.IcicleSpell" {
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $IcicleSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IcicleSpell$$Type = ($IcicleSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IcicleSpell$$Original = $IcicleSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.AcidOrbSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $AcidOrbSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "getRendAmplifier"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastStartAnimation"(): $AnimationHolder
public "getRadius"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getCastType"(): $CastType
public "getRendDuration"(arg0: integer, arg1: $LivingEntity$$Type): integer
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcidOrbSpell$$Type = ($AcidOrbSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AcidOrbSpell$$Original = $AcidOrbSpell;}
declare module "io.redspace.ironsspellbooks.spells.lightning.LightningBoltSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $LightningBoltSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningBoltSpell$$Type = ($LightningBoltSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightningBoltSpell$$Original = $LightningBoltSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.WispSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $WispSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public static "getImpactSound"(): $SoundEvent
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
public static get "impactSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WispSpell$$Type = ($WispSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WispSpell$$Original = $WispSpell;}
declare module "io.redspace.ironsspellbooks.spells.ice.ConeOfColdSpell" {
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ConeOfColdSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConeOfColdSpell$$Type = ($ConeOfColdSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConeOfColdSpell$$Original = $ConeOfColdSpell;}
declare module "io.redspace.ironsspellbooks.spells.ice.IceBlockSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $IceBlockSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IceBlockSpell$$Type = ($IceBlockSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IceBlockSpell$$Original = $IceBlockSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.HasteSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $HasteSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "getDuration"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getAmplifier"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HasteSpell$$Type = ($HasteSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HasteSpell$$Original = $HasteSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.FlamingStrikeSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FlamingStrikeSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "canBeInterrupted"(arg0: $Player$$Type): boolean
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
public "getEffectiveCastTime"(arg0: integer, arg1: $LivingEntity$$Type): integer
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlamingStrikeSpell$$Type = ($FlamingStrikeSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlamingStrikeSpell$$Original = $FlamingStrikeSpell;}
declare module "io.redspace.ironsspellbooks.spells.eldritch.EldritchBlastSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $EldritchBlastSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public static "getRange"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EldritchBlastSpell$$Type = ($EldritchBlastSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EldritchBlastSpell$$Original = $EldritchBlastSpell;}
declare module "io.redspace.ironsspellbooks.spells.eldritch.PlanarSightSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $PlanarSightSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanarSightSpell$$Type = ($PlanarSightSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlanarSightSpell$$Original = $PlanarSightSpell;}
declare module "io.redspace.ironsspellbooks.spells.blood.BloodSlashSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $BloodSlashSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodSlashSpell$$Type = ($BloodSlashSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BloodSlashSpell$$Original = $BloodSlashSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.CounterspellSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $CounterspellSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterspellSpell$$Type = ($CounterspellSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CounterspellSpell$$Original = $CounterspellSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.DragonBreathSpell" {
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $DragonBreathSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonBreathSpell$$Type = ($DragonBreathSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DragonBreathSpell$$Original = $DragonBreathSpell;}
declare module "io.redspace.ironsspellbooks.spells.lightning.VoltStrikeSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $VoltStrikeSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoltStrikeSpell$$Type = ($VoltStrikeSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoltStrikeSpell$$Original = $VoltStrikeSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.WallOfFireSpell" {
import {$RecastInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$RecastResult$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$WallOfFireSpell$FireWallData$$Type} from "io.redspace.ironsspellbooks.spells.fire.WallOfFireSpell$FireWallData"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable, $ICastDataSerializable$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $WallOfFireSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "onRecastFinished"(arg0: $ServerPlayer$$Type, arg1: $RecastInstance$$Type, arg2: $RecastResult$$Type, arg3: $ICastDataSerializable$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
public "addAnchor"(arg0: $WallOfFireSpell$FireWallData$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $RecastInstance$$Type): void
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallOfFireSpell$$Type = ($WallOfFireSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WallOfFireSpell$$Original = $WallOfFireSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.FireboltSpell" {
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FireboltSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireboltSpell$$Type = ($FireboltSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireboltSpell$$Original = $FireboltSpell;}
declare module "io.redspace.ironsspellbooks.spells.ice.SummonPolarBearSpell" {
import {$Optional} from "java.util.Optional"
import {$RecastInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$RecastResult$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable, $ICastDataSerializable$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $SummonPolarBearSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "onRecastFinished"(arg0: $ServerPlayer$$Type, arg1: $RecastInstance$$Type, arg2: $RecastResult$$Type, arg3: $ICastDataSerializable$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonPolarBearSpell$$Type = ($SummonPolarBearSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonPolarBearSpell$$Original = $SummonPolarBearSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.GreaterHealSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $GreaterHealSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GreaterHealSpell$$Type = ($GreaterHealSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GreaterHealSpell$$Original = $GreaterHealSpell;}
declare module "io.redspace.ironsspellbooks.spells.blood.WitherSkullSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $WitherSkullSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitherSkullSpell$$Type = ($WitherSkullSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WitherSkullSpell$$Original = $WitherSkullSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.RootSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $RootSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "getDuration"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootSpell$$Type = ($RootSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RootSpell$$Original = $RootSpell;}
declare module "io.redspace.ironsspellbooks.spells.lightning.AscensionSpell" {
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICastData$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $AscensionSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "onClientCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $ICastData$$Type): void
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AscensionSpell$$Type = ($AscensionSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AscensionSpell$$Original = $AscensionSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.FireballSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FireballSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getRadius"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireballSpell$$Type = ($FireballSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireballSpell$$Original = $FireballSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.EchoingStrikesSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $EchoingStrikesSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style
static readonly "radius": float

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EchoingStrikesSpell$$Type = ($EchoingStrikesSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EchoingStrikesSpell$$Original = $EchoingStrikesSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.FireArrowSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FireArrowSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "getRadius"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getCastType"(): $CastType
public "getDamage"(arg0: integer, arg1: $LivingEntity$$Type): float
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireArrowSpell$$Type = ($FireArrowSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireArrowSpell$$Original = $FireArrowSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.RecallSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SyncedSpellData$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $RecallSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "stopSoundOnCancel"(): boolean
public static "ambientParticles"(arg0: $LivingEntity$$Type, arg1: $SyncedSpellData$$Type): void
public "playSound"(arg0: ($SoundEvent$$Type)?, arg1: $Entity$$Type): void
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
public "getEffectiveCastTime"(arg0: integer, arg1: $LivingEntity$$Type): integer
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecallSpell$$Type = ($RecallSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecallSpell$$Original = $RecallSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.WololoSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $WololoSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WololoSpell$$Type = ($WololoSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WololoSpell$$Original = $WololoSpell;}
declare module "io.redspace.ironsspellbooks.spells.ice.FrostbiteSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FrostbiteSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostbiteSpell$$Type = ($FrostbiteSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrostbiteSpell$$Original = $FrostbiteSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.LobCreeperSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $LobCreeperSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LobCreeperSpell$$Type = ($LobCreeperSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LobCreeperSpell$$Original = $LobCreeperSpell;}
declare module "io.redspace.ironsspellbooks.spells.ice.SnowballSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SnowballSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "getDuration"(arg0: integer, arg1: $LivingEntity$$Type): float
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getRadius"(arg0: integer, arg1: $LivingEntity$$Type): float
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnowballSpell$$Type = ($SnowballSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SnowballSpell$$Original = $SnowballSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.ScorchSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ScorchSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScorchSpell$$Type = ($ScorchSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScorchSpell$$Original = $ScorchSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.HealingCircleSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f} from "org.joml.Vector3f"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $HealingCircleSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getTargetingColor"(): $Vector3f
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "targetingColor"(): $Vector3f
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HealingCircleSpell$$Type = ($HealingCircleSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HealingCircleSpell$$Original = $HealingCircleSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.EvasionSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $EvasionSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvasionSpell$$Type = ($EvasionSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EvasionSpell$$Original = $EvasionSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.MagicArrowSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $MagicArrowSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicArrowSpell$$Type = ($MagicArrowSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicArrowSpell$$Original = $MagicArrowSpell;}
declare module "io.redspace.ironsspellbooks.spells.eldritch.AbyssalShroudSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $AbyssalShroudSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbyssalShroudSpell$$Type = ($AbyssalShroudSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbyssalShroudSpell$$Original = $AbyssalShroudSpell;}
declare module "io.redspace.ironsspellbooks.spells.blood.RayOfSiphoningSpell" {
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $RayOfSiphoningSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public static "getRange"(arg0: integer): float
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
public "onServerCastTick"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): void
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RayOfSiphoningSpell$$Type = ($RayOfSiphoningSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RayOfSiphoningSpell$$Original = $RayOfSiphoningSpell;}
declare module "io.redspace.ironsspellbooks.spells.eldritch.PocketDimensionSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $PocketDimensionSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
public "getEffectiveCastTime"(arg0: integer, arg1: $LivingEntity$$Type): integer
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketDimensionSpell$$Type = ($PocketDimensionSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PocketDimensionSpell$$Original = $PocketDimensionSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.SpectralHammerSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpectralHammerSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectralHammerSpell$$Type = ($SpectralHammerSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectralHammerSpell$$Original = $SpectralHammerSpell;}
declare module "io.redspace.ironsspellbooks.spells.blood.SacrificeSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SacrificeSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SacrificeSpell$$Type = ($SacrificeSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SacrificeSpell$$Original = $SacrificeSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.EarthquakeSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $EarthquakeSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthquakeSpell$$Type = ($EarthquakeSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EarthquakeSpell$$Original = $EarthquakeSpell;}
declare module "io.redspace.ironsspellbooks.spells.ice.IceSpikesSpell" {
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $IceSpikesSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IceSpikesSpell$$Type = ($IceSpikesSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IceSpikesSpell$$Original = $IceSpikesSpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.BurningDashSpell" {
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICastData$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $BurningDashSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "onClientCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $ICastData$$Type): void
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public static "ambientParticles"(arg0: $ClientLevel$$Type, arg1: $LivingEntity$$Type): void
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BurningDashSpell$$Type = ($BurningDashSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BurningDashSpell$$Original = $BurningDashSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.TouchDigSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $TouchDigSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TouchDigSpell$$Type = ($TouchDigSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TouchDigSpell$$Original = $TouchDigSpell;}
declare module "io.redspace.ironsspellbooks.spells.ender.PortalSpell" {
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$RecastInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$RecastResult$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import {$ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$ICastDataSerializable, $ICastDataSerializable$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $PortalSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style
static readonly "PORTAL_RECAST_COUNT": integer

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "onRecastFinished"(arg0: $ServerPlayer$$Type, arg1: $RecastInstance$$Type, arg2: $RecastResult$$Type, arg3: $ICastDataSerializable$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getEmptyCastData"(): $ICastDataSerializable
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getRecastDuration"(arg0: integer, arg1: $LivingEntity$$Type): integer
public static "getTargetBlock"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ClipContext$Fluid$$Type, arg3: double): $BlockHitResult
public "getPortalDuration"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalSpell$$Type = ($PortalSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortalSpell$$Original = $PortalSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.FortifySpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FortifySpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style
static readonly "radius": float

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "onServerPreCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): void
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FortifySpell$$Type = ($FortifySpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FortifySpell$$Original = $FortifySpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.BlessingOfLifeSpell" {
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f} from "org.joml.Vector3f"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $BlessingOfLifeSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getTargetingColor"(): $Vector3f
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "targetingColor"(): $Vector3f
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlessingOfLifeSpell$$Type = ($BlessingOfLifeSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlessingOfLifeSpell$$Original = $BlessingOfLifeSpell;}
declare module "io.redspace.ironsspellbooks.spells.nature.PoisonSplashSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $PoisonSplashSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoisonSplashSpell$$Type = ($PoisonSplashSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoisonSplashSpell$$Original = $PoisonSplashSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.ArrowVolleySpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ArrowVolleySpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastType"(): $CastType
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrowVolleySpell$$Type = ($ArrowVolleySpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArrowVolleySpell$$Original = $ArrowVolleySpell;}
declare module "io.redspace.ironsspellbooks.spells.fire.RaiseHellSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SyncedSpellData$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $RaiseHellSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "getCastFinishAnimation"(): $AnimationHolder
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastStartAnimation"(): $AnimationHolder
public "canBeInterrupted"(arg0: $Player$$Type): boolean
public "allowLooting"(): boolean
public static "ambientParticles"(arg0: $LivingEntity$$Type, arg1: $SyncedSpellData$$Type): void
public "getCastType"(): $CastType
public "getEffectiveCastTime"(arg0: integer, arg1: $LivingEntity$$Type): integer
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RaiseHellSpell$$Type = ($RaiseHellSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RaiseHellSpell$$Original = $RaiseHellSpell;}
declare module "io.redspace.ironsspellbooks.spells.evocation.FangWardSpell" {
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $FangWardSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastType"(): $CastType
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FangWardSpell$$Type = ($FangWardSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FangWardSpell$$Original = $FangWardSpell;}
declare module "io.redspace.ironsspellbooks.spells.holy.CloudOfRegenerationSpell" {
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $CloudOfRegenerationSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style
static readonly "radius": float

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CloudOfRegenerationSpell$$Type = ($CloudOfRegenerationSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CloudOfRegenerationSpell$$Original = $CloudOfRegenerationSpell;}
declare module "io.redspace.ironsspellbooks.spells.blood.AcupunctureSpell" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $AcupunctureSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcupunctureSpell$$Type = ($AcupunctureSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AcupunctureSpell$$Original = $AcupunctureSpell;}
