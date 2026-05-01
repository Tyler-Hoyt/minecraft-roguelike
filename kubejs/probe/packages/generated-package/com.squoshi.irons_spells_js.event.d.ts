declare module "com.squoshi.irons_spells_js.event.SpellPreCastEventJS" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$SchoolType, $SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$Level} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$KubeEntityEvent$$Interface} from "dev.latvian.mods.kubejs.entity.KubeEntityEvent"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $SpellPreCastEventJS extends $Event implements $KubeEntityEvent$$Interface, $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $SchoolType$$Type, arg4: $CastSource$$Type)

/**
 *     Returns the player that cast the spell.
 */
public "getEntity"(): $Entity
/**
 *     Returns the cast source.
 */
public "getCastSource"(): $CastSource
/**
 *     Returns the new spell level of the spell that was cast.
 */
public "getSpellLevel"(): integer
/**
 *     Returns the school type of the spell that was cast.
 */
public "getSchoolType"(): $SchoolType
/**
 *     Returns the spell ID of the spell that was cast.
 */
public "getSpellId"(): StringJS
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
get "entity"(): $Entity
get "castSource"(): $CastSource
get "spellLevel"(): integer
get "schoolType"(): $SchoolType
get "spellId"(): StringJS
get "level"(): $Level
get "player"(): $Player
set "canceled"(value: boolean)
get "canceled"(): boolean
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPreCastEventJS$$Type = ($SpellPreCastEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellPreCastEventJS$$Original = $SpellPreCastEventJS;}
declare module "com.squoshi.irons_spells_js.event.SpellPostCastEventJS" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Level} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$KubeEntityEvent$$Interface} from "dev.latvian.mods.kubejs.entity.KubeEntityEvent"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $SpellPostCastEventJS implements $KubeEntityEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $AbstractSpell$$Type, arg2: integer, arg3: $MagicData$$Type)

public "getLevel"(): $Level
public "getSpell"(): $AbstractSpell
public "getEntity"(): $Entity
public "getSpellLevel"(): integer
public "getMagicData"(): $MagicData
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
get "level"(): $Level
get "spell"(): $AbstractSpell
get "entity"(): $Entity
get "spellLevel"(): integer
get "magicData"(): $MagicData
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPostCastEventJS$$Type = ($SpellPostCastEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellPostCastEventJS$$Original = $SpellPostCastEventJS;}
declare module "com.squoshi.irons_spells_js.event.SpellSelectionEventJS" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$SpellSelectionManager} from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager"
import {$KubePlayerEvent$$Interface} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$SpellSelectionManager$SpellSelectionEvent$$Type} from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SpellSelectionEvent"
import {$Level} from "net.minecraft.world.level.Level"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $SpellSelectionEventJS implements $KubePlayerEvent$$Interface {
constructor(arg0: $SpellSelectionManager$SpellSelectionEvent$$Type)

/**
 *     Returns the player that cast the spell.
 */
public "getEntity"(): $LivingEntity
public "getManager"(): $SpellSelectionManager
/**
 *     Adds spell option to the end of a player's spell bar.
 */
public "addSelectionOption"(arg0: $SpellData$$Type, arg1: StringJS, arg2: integer): void
/**
 *     Adds spell option to the end of a player's spell bar.
 */
public "addSelectionOption"(arg0: $SpellData$$Type, arg1: StringJS, arg2: integer, arg3: integer): void
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
get "entity"(): $LivingEntity
get "manager"(): $SpellSelectionManager
get "player"(): $Player
get "level"(): $Level
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionEventJS$$Type = ($SpellSelectionEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSelectionEventJS$$Original = $SpellSelectionEventJS;}
declare module "com.squoshi.irons_spells_js.event.ChangeManaEventJS" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$MagicData} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$ChangeManaEvent$$Type} from "io.redspace.ironsspellbooks.api.events.ChangeManaEvent"
import {$KubePlayerEvent$$Interface} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$Level} from "net.minecraft.world.level.Level"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $ChangeManaEventJS implements $KubePlayerEvent$$Interface {
constructor(arg0: $ChangeManaEvent$$Type)

public "getEntity"(): $LivingEntity
/**
 *     Changes the value that the mana will change to during the event.
 */
public "setNewMana"(arg0: float): void
/**
 *     Returns the float mana value that the value changed to after it was changed.
 */
public "getNewMana"(): float
/**
 *     Returns the float mana value that the value was before it was changed.
 */
public "getOldMana"(): float
/**
 *     Returns the player's current MagicData.
 */
public "getMagicData"(): $MagicData
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
get "entity"(): $LivingEntity
set "newMana"(value: float)
get "newMana"(): float
get "oldMana"(): float
get "magicData"(): $MagicData
get "player"(): $Player
get "level"(): $Level
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeManaEventJS$$Type = ($ChangeManaEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChangeManaEventJS$$Original = $ChangeManaEventJS;}
declare module "com.squoshi.irons_spells_js.event.SpellOnCastEventJS" {
import {$SpellOnCastEvent$$Type} from "io.redspace.ironsspellbooks.api.events.SpellOnCastEvent"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$KubePlayerEvent$$Interface} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$Level} from "net.minecraft.world.level.Level"
import {$SchoolType} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $SpellOnCastEventJS implements $KubePlayerEvent$$Interface {
constructor(arg0: $SpellOnCastEvent$$Type)

/**
 *     Returns the player that cast the spell.
 */
public "getEntity"(): $LivingEntity
/**
 *     Returns the cast source.
 */
public "getCastSource"(): $CastSource
/**
 *     Returns the new spell level of the spell that was cast.
 */
public "getSpellLevel"(): integer
/**
 *     Returns the school type of the spell that was cast.
 */
public "getSchoolType"(): $SchoolType
/**
 *     Returns the spell ID of the spell that was cast.
 */
public "getSpellId"(): StringJS
/**
 *     Returns the original spell level of the spell that was cast.
 */
public "getOriginalSpellLevel"(): integer
/**
 *     Returns the original mana cost.
 */
public "getOriginalManaCost"(): integer
/**
 *     Returns the new mana cost.
 */
public "getManaCost"(): integer
/**
 *     Sets the new mana cost.
 */
public "setManaCost"(arg0: integer): void
/**
 *     Sets the new spell level of the spell that was cast.
 */
public "setSpellLevel"(arg0: integer): void
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
get "entity"(): $LivingEntity
get "castSource"(): $CastSource
get "spellLevel"(): integer
get "schoolType"(): $SchoolType
get "spellId"(): StringJS
get "originalSpellLevel"(): integer
get "originalManaCost"(): integer
get "manaCost"(): integer
set "manaCost"(value: integer)
set "spellLevel"(value: integer)
get "player"(): $Player
get "level"(): $Level
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellOnCastEventJS$$Type = ($SpellOnCastEventJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellOnCastEventJS$$Original = $SpellOnCastEventJS;}
