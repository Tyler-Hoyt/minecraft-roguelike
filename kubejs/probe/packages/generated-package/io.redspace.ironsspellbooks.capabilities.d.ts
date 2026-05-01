declare module "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$SpinAttackType, $SpinAttackType$$Type} from "io.redspace.ironsspellbooks.player.SpinAttackType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SpellSelection, $SpellSelection$$Type} from "io.redspace.ironsspellbooks.gui.overlays.SpellSelection"

export class $SyncedSpellData {
constructor(arg0: $LivingEntity$$Type)
constructor(arg0: integer)

public "toString"(): StringJS
public static "write"(arg0: $FriendlyByteBuf$$Type, arg1: $SyncedSpellData$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $SyncedSpellData
public "getCastingEquipmentSlot"(): StringJS
public "setEvasionHitsRemaining"(arg0: integer): void
public "getEvasionHitsRemaining"(): integer
public "setSpinAttackType"(arg0: $SpinAttackType$$Type): void
public "getSpinAttackType"(): $SpinAttackType
public "isCasting"(): boolean
public "syncToPlayer"(arg0: $ServerPlayer$$Type): void
public "getPersistentData"(arg0: $ServerPlayer$$Type): $SyncedSpellData
public "isSpellLearned"(arg0: $AbstractSpell$$Type): boolean
public "subtractEvasionHit"(): void
public "doSync"(): void
public "getCastingSpellLevel"(): integer
public "setHeartstopAccumulatedDamage"(arg0: float): void
public "getHeartstopAccumulatedDamage"(): float
public "learnSpell"(arg0: $AbstractSpell$$Type): void
public "learnSpell"(arg0: $AbstractSpell$$Type, arg1: boolean): void
public "getServerPlayerId"(): integer
public "getSpellSelection"(): $SpellSelection
public "setSpellSelection"(arg0: $SpellSelection$$Type): void
public "forgetAllSpells"(): void
public "loadNBTData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCastingSpellId"(): StringJS
public "saveNBTData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addHeartstopDamage"(arg0: float): void
public "setIsCasting"(arg0: boolean, arg1: StringJS, arg2: integer, arg3: StringJS): void
get "castingEquipmentSlot"(): StringJS
set "evasionHitsRemaining"(value: integer)
get "evasionHitsRemaining"(): integer
set "spinAttackType"(value: $SpinAttackType$$Type)
get "spinAttackType"(): $SpinAttackType
get "casting"(): boolean
get "castingSpellLevel"(): integer
set "heartstopAccumulatedDamage"(value: float)
get "heartstopAccumulatedDamage"(): float
get "serverPlayerId"(): integer
get "spellSelection"(): $SpellSelection
set "spellSelection"(value: $SpellSelection$$Type)
get "castingSpellId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedSpellData$$Type = ($SyncedSpellData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedSpellData$$Original = $SyncedSpellData;}
declare module "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance" {
import {$ISerializable$$Interface} from "io.redspace.ironsspellbooks.api.network.ISerializable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ICastDataSerializable, $ICastDataSerializable$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $RecastInstance implements $ISerializable$$Interface, $INBTSerializable$$Interface<($CompoundTag)> {
constructor()
constructor(arg0: StringJS, arg1: integer, arg2: integer, arg3: integer, arg4: $CastSource$$Type, arg5: $ICastDataSerializable$$Type)

public "getRemainingRecasts"(): integer
public "getCastSource"(): $CastSource
public "getSpellLevel"(): integer
public "getSpellId"(): StringJS
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "getCastData"(): $ICastDataSerializable
public "getTotalRecasts"(): integer
public "getTicksRemaining"(): integer
public "getTicksToLive"(): integer
public "readFromBuffer"(arg0: $FriendlyByteBuf$$Type): void
public "writeToBuffer"(arg0: $FriendlyByteBuf$$Type): void
get "remainingRecasts"(): integer
get "castSource"(): $CastSource
get "spellLevel"(): integer
get "spellId"(): StringJS
get "castData"(): $ICastDataSerializable
get "totalRecasts"(): integer
get "ticksRemaining"(): integer
get "ticksToLive"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecastInstance$$Type = ($RecastInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecastInstance$$Original = $RecastInstance;}
declare module "io.redspace.ironsspellbooks.capabilities.magic.TargetEntityCastData" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$UUID} from "java.util.UUID"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ICastData$$Interface} from "io.redspace.ironsspellbooks.api.spells.ICastData"

export class $TargetEntityCastData implements $ICastData$$Interface {
constructor(arg0: $LivingEntity$$Type)

public "reset"(): void
public "getTarget"(arg0: $ServerLevel$$Type): $LivingEntity
public "getTargetPosition"(arg0: $ServerLevel$$Type): $Vec3
public "getTargetUUID"(): $UUID
get "targetUUID"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetEntityCastData$$Type = ($TargetEntityCastData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TargetEntityCastData$$Original = $TargetEntityCastData;}
declare module "io.redspace.ironsspellbooks.capabilities.magic.RecastResult" {
import {$Enum} from "java.lang.Enum"

export class $RecastResult extends $Enum<($RecastResult)> {
static readonly "USER_CANCEL": $RecastResult
static readonly "DEATH": $RecastResult
static readonly "COMMAND": $RecastResult
static readonly "TIMEOUT": $RecastResult
static readonly "COUNTERSPELL": $RecastResult
static readonly "USED_ALL_RECASTS": $RecastResult

public static "values"(): ($RecastResult)[]
public static "valueOf"(arg0: StringJS): $RecastResult
public "isFailure"(): boolean
public "isSuccess"(): boolean
get "failure"(): boolean
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecastResult$$Type = (("timeout") | ("counterspell") | ("death") | ("used_all_recasts") | ("command") | ("user_cancel"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecastResult$$Original = $RecastResult;}
declare module "io.redspace.ironsspellbooks.capabilities.magic.PlayerCooldowns" {
import {$Map} from "java.util.Map"
import {$CooldownInstance, $CooldownInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.CooldownInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $PlayerCooldowns {
static readonly "SPELL_ID": StringJS
static readonly "COOLDOWN_REMAINING": StringJS
static readonly "SPELL_COOLDOWN": StringJS

constructor()

public "tick"(arg0: integer): void
public "clearCooldowns"(): void
public "syncToPlayer"(arg0: $ServerPlayer$$Type): void
public "isOnCooldown"(arg0: $AbstractSpell$$Type): boolean
public "addCooldown"(arg0: StringJS, arg1: integer): void
public "addCooldown"(arg0: StringJS, arg1: integer, arg2: integer): void
public "addCooldown"(arg0: $AbstractSpell$$Type, arg1: integer, arg2: integer): void
public "addCooldown"(arg0: $AbstractSpell$$Type, arg1: integer): void
public "getCooldownPercent"(arg0: $AbstractSpell$$Type): float
public "setTickBuffer"(arg0: integer): void
public "getSpellCooldowns"(): $Map<(StringJS), ($CooldownInstance)>
public "loadNBTData"(arg0: $ListTag$$Type): void
public "saveNBTData"(): $ListTag
public "decrementCooldown"(arg0: $CooldownInstance$$Type, arg1: integer): boolean
public "hasCooldownsActive"(): boolean
public "removeCooldown"(arg0: StringJS): boolean
set "tickBuffer"(value: integer)
get "spellCooldowns"(): $Map<(StringJS), ($CooldownInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerCooldowns$$Type = ($PlayerCooldowns);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerCooldowns$$Original = $PlayerCooldowns;}
declare module "io.redspace.ironsspellbooks.capabilities.magic.CooldownInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CooldownInstance {
constructor(arg0: integer)
constructor(arg0: integer, arg1: integer)

public "decrement"(): void
public "getSpellCooldown"(): integer
public "getCooldownPercent"(): float
public "getCooldownRemaining"(): integer
public "decrementBy"(arg0: integer): void
get "spellCooldown"(): integer
get "cooldownPercent"(): float
get "cooldownRemaining"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CooldownInstance$$Type = ($CooldownInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CooldownInstance$$Original = $CooldownInstance;}
declare module "io.redspace.ironsspellbooks.capabilities.magic.PlayerRecasts" {
import {$Map$$Type} from "java.util.Map"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$RecastInstance, $RecastInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import {$List} from "java.util.List"
import {$RecastResult$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PlayerRecasts {
constructor(arg0: $Map$$Type<(StringJS), ($RecastInstance$$Type)>)
constructor(arg0: $ServerPlayer$$Type)
constructor()

public "toString"(): StringJS
public "removeAll"(arg0: $RecastResult$$Type): void
public "tick"(arg0: integer): void
public "removeRecast"(arg0: $RecastInstance$$Type, arg1: $RecastResult$$Type): void
public "removeRecast"(arg0: StringJS): void
public "tickRecasts"(): void
public "hasRecastForSpell"(arg0: StringJS): boolean
public "hasRecastForSpell"(arg0: $AbstractSpell$$Type): boolean
public "syncToPlayer"(arg0: $RecastInstance$$Type): void
public "decrementRecastCount"(arg0: $AbstractSpell$$Type): void
public "decrementRecastCount"(arg0: StringJS): void
public "getRecastInstance"(arg0: StringJS): $RecastInstance
public "addRecast"(arg0: $RecastInstance$$Type, arg1: $MagicData$$Type): boolean
public "getActiveRecasts"(): $List<($RecastInstance)>
public "isRecastActive"(arg0: $RecastInstance$$Type): boolean
public "syncRemoveToPlayer"(arg0: StringJS): void
public "getAllRecasts"(): $List<($RecastInstance)>
public "loadNBTData"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveNBTData"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "forceAddRecast"(arg0: $RecastInstance$$Type): void
public "hasRecastsActive"(): boolean
public "syncAllToPlayer"(): void
public "getRemainingRecastsForSpell"(arg0: $AbstractSpell$$Type): integer
public "getRemainingRecastsForSpell"(arg0: StringJS): integer
get "activeRecasts"(): $List<($RecastInstance)>
get "allRecasts"(): $List<($RecastInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRecasts$$Type = ($PlayerRecasts);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerRecasts$$Original = $PlayerRecasts;}
