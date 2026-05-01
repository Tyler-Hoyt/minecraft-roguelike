declare module "io.redspace.ironsspellbooks.api.attribute.MagicRangedAttribute" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$IMagicAttribute$$Interface} from "io.redspace.ironsspellbooks.api.attribute.IMagicAttribute"
import {$RangedAttribute} from "net.minecraft.world.entity.ai.attributes.RangedAttribute"
import {$Holder} from "net.minecraft.core.Holder"

export class $MagicRangedAttribute extends $RangedAttribute implements $IMagicAttribute$$Interface {
static readonly "CODEC": $Codec<($Holder<($Attribute)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Attribute)>)>

constructor(arg0: StringJS, arg1: double, arg2: double, arg3: double)

public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicRangedAttribute$$Type = ($MagicRangedAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicRangedAttribute$$Original = $MagicRangedAttribute;}
declare module "io.redspace.ironsspellbooks.api.item.weapons.MagicSwordItem" {
import {$IPresetSpellContainer$$Interface} from "io.redspace.ironsspellbooks.api.spells.IPresetSpellContainer"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ExtendedSwordItem} from "io.redspace.ironsspellbooks.api.item.weapons.ExtendedSwordItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpellDataRegistryHolder$$Type} from "io.redspace.ironsspellbooks.api.registry.SpellDataRegistryHolder"

export class $MagicSwordItem extends $ExtendedSwordItem implements $IPresetSpellContainer$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type, arg2: ($SpellDataRegistryHolder$$Type)[])

public "initializeSpellContainer"(arg0: $ItemStack$$Type): void
public "getSpells"(): $List<($SpellData)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "spells"(): $List<($SpellData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicSwordItem$$Type = ($MagicSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicSwordItem$$Original = $MagicSwordItem;}
declare module "io.redspace.ironsspellbooks.api.events.InscribeSpellEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellData, $SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $InscribeSpellEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $SpellData$$Type)

public "getSpellData"(): $SpellData
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "spellData"(): $SpellData
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscribeSpellEvent$$Type = ($InscribeSpellEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InscribeSpellEvent$$Original = $InscribeSpellEvent;}
declare module "io.redspace.ironsspellbooks.api.config.DefaultConfig" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpellRarity, $SpellRarity$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $DefaultConfig {
 "maxLevel": integer
 "allowCrafting": boolean
 "minRarity": $SpellRarity
 "schoolResource": $ResourceLocation
 "enabled": boolean
 "cooldownInSeconds": double

constructor(arg0: $Consumer$$Type<($DefaultConfig)>)
constructor()

public "build"(): $DefaultConfig
public "setSchoolResource"(arg0: $ResourceLocation$$Type): $DefaultConfig
public "setMaxLevel"(arg0: integer): $DefaultConfig
public "setCooldownSeconds"(arg0: double): $DefaultConfig
public "setMinRarity"(arg0: $SpellRarity$$Type): $DefaultConfig
public "setAllowCrafting"(arg0: boolean): $DefaultConfig
public "setDeprecated"(arg0: boolean): $DefaultConfig
set "cooldownSeconds"(value: double)
set "deprecated"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultConfig$$Type = ($DefaultConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DefaultConfig$$Original = $DefaultConfig;}
declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SelectionOption" {
import {$SpellData, $SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$CastSource} from "io.redspace.ironsspellbooks.api.spells.CastSource"

export class $SpellSelectionManager$SelectionOption {
 "globalIndex": integer
 "spellData": $SpellData
 "slot": StringJS
 "slotIndex": integer

constructor(arg0: $SpellData$$Type, arg1: StringJS, arg2: integer, arg3: integer)

public "getCastSource"(): $CastSource
get "castSource"(): $CastSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionManager$SelectionOption$$Type = ($SpellSelectionManager$SelectionOption);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSelectionManager$SelectionOption$$Original = $SpellSelectionManager$SelectionOption;}
declare module "io.redspace.ironsspellbooks.api.attribute.IMagicAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMagicAttribute$$Interface {
}

export class $IMagicAttribute implements $IMagicAttribute$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagicAttribute$$Type = ($IMagicAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMagicAttribute$$Original = $IMagicAttribute;}
declare module "io.redspace.ironsspellbooks.api.config.SpellConfigHolder" {
import {$Optional} from "java.util.Optional"
import {$SpellConfigParameter$$Type} from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import {$Gson$$Type} from "com.google.gson.Gson"
import {$JsonObject} from "com.google.gson.JsonObject"

export class $SpellConfigHolder {
constructor()

public "get"<T>(arg0: $SpellConfigParameter$$Type<(T)>): T
public "set"<T>(arg0: $SpellConfigParameter$$Type<(T)>, arg1: T): void
public "isDefault"<T>(arg0: $SpellConfigParameter$$Type<(T)>): boolean
public "getDefaultValue"<T>(arg0: $SpellConfigParameter$$Type<(T)>): $Optional<(T)>
public "toJson"<T>(arg0: $Gson$$Type): $JsonObject
public "setDefaultValue"<T>(arg0: $SpellConfigParameter$$Type<(T)>, arg1: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellConfigHolder$$Type = ($SpellConfigHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellConfigHolder$$Original = $SpellConfigHolder;}
declare module "io.redspace.ironsspellbooks.api.events.SpellOnCastEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SchoolType, $SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $SpellOnCastEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: $SchoolType$$Type, arg5: $CastSource$$Type)

public "getCastSource"(): $CastSource
public "getSpellLevel"(): integer
public "getSchoolType"(): $SchoolType
public "getSpellId"(): StringJS
public "getOriginalSpellLevel"(): integer
public "getOriginalManaCost"(): integer
public "getManaCost"(): integer
public "setManaCost"(arg0: integer): void
public "setSpellLevel"(arg0: integer): void
public "getEntity"(): $Entity
get "castSource"(): $CastSource
get "spellLevel"(): integer
get "schoolType"(): $SchoolType
get "spellId"(): StringJS
get "originalSpellLevel"(): integer
get "originalManaCost"(): integer
get "manaCost"(): integer
set "manaCost"(value: integer)
set "spellLevel"(value: integer)
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellOnCastEvent$$Type = ($SpellOnCastEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellOnCastEvent$$Original = $SpellOnCastEvent;}
declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$SpellSelectionManager$SelectionOption} from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SelectionOption"
import {$List} from "java.util.List"
import {$SpellSelection} from "io.redspace.ironsspellbooks.gui.overlays.SpellSelection"

export class $SpellSelectionManager {
static readonly "OFFHAND": StringJS
static readonly "MAINHAND": StringJS

constructor(arg0: $Player$$Type)

public "getSelectedSpellData"(): $SpellData
public "getGlobalSelectionIndex"(): integer
public "getCurrentSelection"(): $SpellSelection
public "getSpellData"(arg0: integer): $SpellData
public "getSelectionIndex"(): integer
public "getSpellSlot"(arg0: integer): $SpellSelectionManager$SelectionOption
public "getSpellCount"(): integer
public "makeSelection"(arg0: integer): void
public "getAllSpells"(): $List<($SpellSelectionManager$SelectionOption)>
public "getSpellsForSlot"(arg0: StringJS): $List<($SpellSelectionManager$SelectionOption)>
public "getSelection"(): $SpellSelectionManager$SelectionOption
public "getSpellForSlot"(arg0: StringJS, arg1: integer): $SpellData
get "selectedSpellData"(): $SpellData
get "globalSelectionIndex"(): integer
get "currentSelection"(): $SpellSelection
get "selectionIndex"(): integer
get "spellCount"(): integer
get "allSpells"(): $List<($SpellSelectionManager$SelectionOption)>
get "selection"(): $SpellSelectionManager$SelectionOption
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionManager$$Type = ($SpellSelectionManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSelectionManager$$Original = $SpellSelectionManager;}
declare module "io.redspace.ironsspellbooks.api.events.SpellPreCastEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$SchoolType, $SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $SpellPreCastEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: StringJS, arg2: integer, arg3: $SchoolType$$Type, arg4: $CastSource$$Type)

public "getCastSource"(): $CastSource
public "getSpellLevel"(): integer
public "getSchoolType"(): $SchoolType
public "getSpellId"(): StringJS
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "castSource"(): $CastSource
get "spellLevel"(): integer
get "schoolType"(): $SchoolType
get "spellId"(): StringJS
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPreCastEvent$$Type = ($SpellPreCastEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellPreCastEvent$$Original = $SpellPreCastEvent;}
declare module "io.redspace.ironsspellbooks.api.config.RegisterConfigParametersEvent" {
import {$SpellConfigParameter$$Type} from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $RegisterConfigParametersEvent extends $Event {
constructor(arg0: $Consumer$$Type<($SpellConfigParameter<(never)>)>)

public "register"(arg0: $SpellConfigParameter$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterConfigParametersEvent$$Type = ($RegisterConfigParametersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterConfigParametersEvent$$Original = $RegisterConfigParametersEvent;}
declare module "io.redspace.ironsspellbooks.api.config.ModifyDefaultConfigValuesEvent" {
import {$SpellConfigHolder$$Type} from "io.redspace.ironsspellbooks.api.config.SpellConfigHolder"
import {$SpellConfigParameter$$Type} from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import {$Event} from "net.neoforged.bus.api.Event"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ModifyDefaultConfigValuesEvent extends $Event {
constructor(arg0: $AbstractSpell$$Type, arg1: $SpellConfigHolder$$Type)

public "getSpell"(): $AbstractSpell
public "setDefaultValue"<T>(arg0: $SpellConfigParameter$$Type<(T)>, arg1: T): void
get "spell"(): $AbstractSpell
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyDefaultConfigValuesEvent$$Type = ($ModifyDefaultConfigValuesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifyDefaultConfigValuesEvent$$Original = $ModifyDefaultConfigValuesEvent;}
declare module "io.redspace.ironsspellbooks.api.events.CounterSpellEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CounterSpellEvent extends $Event implements $ICancellableEvent$$Interface {
readonly "caster": $Entity
readonly "target": $Entity

constructor(arg0: $Entity$$Type, arg1: $Entity$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterSpellEvent$$Type = ($CounterSpellEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CounterSpellEvent$$Original = $CounterSpellEvent;}
declare module "io.redspace.ironsspellbooks.api.registry.SpellRegistry" {
import {$NoneSpell} from "io.redspace.ironsspellbooks.spells.NoneSpell"
import {$IEventBus$$Type} from "net.neoforged.bus.api.IEventBus"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$List} from "java.util.List"
import {$Supplier} from "java.util.function.Supplier"
import {$SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$NewRegistryEvent$$Type} from "net.neoforged.neoforge.registries.NewRegistryEvent"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellRegistry {
static readonly "MAGIC_ARROW_SPELL": $Supplier<($AbstractSpell)>
static readonly "SHOCKWAVE_SPELL": $Supplier<($AbstractSpell)>
static readonly "CLEANSE_SPELL": $Supplier<($AbstractSpell)>
static readonly "HEARTSTOP_SPELL": $Supplier<($AbstractSpell)>
static readonly "CHARGE_SPELL": $Supplier<($AbstractSpell)>
static readonly "SUMMON_HORSE_SPELL": $Supplier<($AbstractSpell)>
static readonly "MAGMA_BOMB_SPELL": $Supplier<($AbstractSpell)>
static readonly "ICE_BLOCK_SPELL": $Supplier<($AbstractSpell)>
static readonly "ABYSSAL_SHROUD_SPELL": $Supplier<($AbstractSpell)>
static readonly "DEVOUR_SPELL": $Supplier<($AbstractSpell)>
static readonly "GUIDING_BOLT_SPELL": $Supplier<($AbstractSpell)>
static readonly "FANG_STRIKE_SPELL": $Supplier<($AbstractSpell)>
static readonly "FLAMING_STRIKE_SPELL": $Supplier<($AbstractSpell)>
static readonly "BURNING_DASH_SPELL": $Supplier<($AbstractSpell)>
static readonly "FROSTWAVE_SPELL": $Supplier<($AbstractSpell)>
static readonly "SACRIFICE_SPELL": $Supplier<($AbstractSpell)>
static readonly "PORTAL_SPELL": $Supplier<($AbstractSpell)>
static readonly "BLOOD_SLASH_SPELL": $Supplier<($AbstractSpell)>
static readonly "ANGEL_WINGS_SPELL": $Supplier<($AbstractSpell)>
static readonly "SUMMON_SWORDS": $Supplier<($AbstractSpell)>
static readonly "SONIC_BOOM_SPELL": $Supplier<($AbstractSpell)>
static readonly "ELDRITCH_BLAST_SPELL": $Supplier<($AbstractSpell)>
static readonly "LOB_CREEPER_SPELL": $Supplier<($AbstractSpell)>
static readonly "WOLOLO_SPELL": $Supplier<($AbstractSpell)>
static readonly "BALL_LIGHTNING_SPELL": $Supplier<($AbstractSpell)>
static readonly "BLOOD_STEP_SPELL": $Supplier<($AbstractSpell)>
static readonly "SHADOW_SLASH": $Supplier<($AbstractSpell)>
static readonly "SCULK_TENTACLES_SPELL": $Supplier<($AbstractSpell)>
static readonly "ACID_ORB_SPELL": $Supplier<($AbstractSpell)>
static readonly "WISP_SPELL": $Supplier<($AbstractSpell)>
static readonly "DRAGON_BREATH_SPELL": $Supplier<($AbstractSpell)>
static readonly "FANG_WARD_SPELL": $Supplier<($AbstractSpell)>
static readonly "SNOWBALL_SPELL": $Supplier<($AbstractSpell)>
static readonly "GREATER_HEAL_SPELL": $Supplier<($AbstractSpell)>
static readonly "HEALING_CIRCLE_SPELL": $Supplier<($AbstractSpell)>
static readonly "FIREBOLT_SPELL": $Supplier<($AbstractSpell)>
static readonly "DIVINE_SMITE_SPELL": $Supplier<($AbstractSpell)>
static readonly "THUNDERSTORM_SPELL": $Supplier<($AbstractSpell)>
static readonly "SPELL_REGISTRY_KEY": $ResourceKey<($Registry<($AbstractSpell)>)>
static readonly "ECHOING_STRIKES_SPELL": $Supplier<($AbstractSpell)>
static readonly "SUMMON_VEX_SPELL": $Supplier<($AbstractSpell)>
static readonly "ICICLE_SPELL": $Supplier<($AbstractSpell)>
static readonly "SUNBEAM_SPELL": $Supplier<($AbstractSpell)>
static readonly "POISON_ARROW_SPELL": $Supplier<($AbstractSpell)>
static readonly "THROW_SPELL": $Supplier<($AbstractSpell)>
static readonly "BLAZE_STORM_SPELL": $Supplier<($AbstractSpell)>
static readonly "FIRE_ARROW_SPELL": $Supplier<($AbstractSpell)>
static readonly "RAY_OF_SIPHONING_SPELL": $Supplier<($AbstractSpell)>
static readonly "ICE_SPIKES_SPELL": $Supplier<($AbstractSpell)>
static readonly "SCORCH_SPELL": $Supplier<($AbstractSpell)>
static readonly "ELECTROCUTE_SPELL": $Supplier<($AbstractSpell)>
static readonly "ACUPUNCTURE_SPELL": $Supplier<($AbstractSpell)>
static readonly "RECALL_SPELL": $Supplier<($AbstractSpell)>
static readonly "CHAIN_CREEPER_SPELL": $Supplier<($AbstractSpell)>
static readonly "GLUTTONY_SPELL": $Supplier<($AbstractSpell)>
static readonly "EVASION_SPELL": $Supplier<($AbstractSpell)>
static readonly "ASCENSION_SPELL": $Supplier<($AbstractSpell)>
static readonly "SUMMON_ENDER_CHEST_SPELL": $Supplier<($AbstractSpell)>
static readonly "HEAL_SPELL": $Supplier<($AbstractSpell)>
static readonly "ARROW_VOLLEY_SPELL": $Supplier<($AbstractSpell)>
static readonly "INVISIBILITY_SPELL": $Supplier<($AbstractSpell)>
static readonly "BLESSING_OF_LIFE_SPELL": $Supplier<($AbstractSpell)>
static readonly "FORTIFY_SPELL": $Supplier<($AbstractSpell)>
static readonly "SHIELD_SPELL": $Supplier<($AbstractSpell)>
static readonly "WITHER_SKULL_SPELL": $Supplier<($AbstractSpell)>
static readonly "SUMMON_POLAR_BEAR_SPELL": $Supplier<($AbstractSpell)>
static readonly "FIREFLY_SWARM_SPELL": $Supplier<($AbstractSpell)>
static readonly "TOUCH_DIG": $Supplier<($AbstractSpell)>
static readonly "VOLT_STRIKE_SPELL": $Supplier<($AbstractSpell)>
static readonly "POCKET_DIMENSION_SPELL": $Supplier<($AbstractSpell)>
static readonly "FIREBALL_SPELL": $Supplier<($AbstractSpell)>
static readonly "WALL_OF_FIRE_SPELL": $Supplier<($AbstractSpell)>
static readonly "MAGIC_MISSILE_SPELL": $Supplier<($AbstractSpell)>
static readonly "CHAIN_LIGHTNING_SPELL": $Supplier<($AbstractSpell)>
static readonly "BLOOD_NEEDLES_SPELL": $Supplier<($AbstractSpell)>
static readonly "RAY_OF_FROST_SPELL": $Supplier<($AbstractSpell)>
static readonly "STOMP_SPELL": $Supplier<($AbstractSpell)>
static readonly "STARFALL_SPELL": $Supplier<($AbstractSpell)>
static readonly "SPECTRAL_HAMMER_SPELL": $Supplier<($AbstractSpell)>
static readonly "FROST_STEP_SPELL": $Supplier<($AbstractSpell)>
static readonly "OAKSKIN_SPELL": $Supplier<($AbstractSpell)>
static readonly "BLIGHT_SPELL": $Supplier<($AbstractSpell)>
static readonly "FLAMING_BARRAGE_SPELL": $Supplier<($AbstractSpell)>
static readonly "CONE_OF_COLD_SPELL": $Supplier<($AbstractSpell)>
static readonly "FIRE_BREATH_SPELL": $Supplier<($AbstractSpell)>
static readonly "LIGHTNING_BOLT_SPELL": $Supplier<($AbstractSpell)>
static readonly "CLOUD_OF_REGENERATION_SPELL": $Supplier<($AbstractSpell)>
static readonly "POISON_SPLASH_SPELL": $Supplier<($AbstractSpell)>
static readonly "SPIDER_ASPECT_SPELL": $Supplier<($AbstractSpell)>
static readonly "REGISTRY": $Registry<($AbstractSpell)>
static readonly "PLANAR_SIGHT_SPELL": $Supplier<($AbstractSpell)>
static readonly "RAISE_DEAD_SPELL": $Supplier<($AbstractSpell)>
static readonly "ICE_TOMB_SPELL": $Supplier<($AbstractSpell)>
static readonly "COUNTERSPELL_SPELL": $Supplier<($AbstractSpell)>
static readonly "RAISE_HELL_SPELL": $Supplier<($AbstractSpell)>
static readonly "POISON_BREATH_SPELL": $Supplier<($AbstractSpell)>
static readonly "HASTE_SPELL": $Supplier<($AbstractSpell)>
static readonly "SLOW_SPELL": $Supplier<($AbstractSpell)>
static readonly "HEAT_SURGE_SPELL": $Supplier<($AbstractSpell)>
static readonly "EARTHQUAKE_SPELL": $Supplier<($AbstractSpell)>
static readonly "ROOT_SPELL": $Supplier<($AbstractSpell)>
static readonly "BLACK_HOLE_SPELL": $Supplier<($AbstractSpell)>
static readonly "LIGHTNING_LANCE_SPELL": $Supplier<($AbstractSpell)>
static readonly "GUST_SPELL": $Supplier<($AbstractSpell)>
static readonly "FROSTBITE_SPELL": $Supplier<($AbstractSpell)>
static readonly "FIRECRACKER_SPELL": $Supplier<($AbstractSpell)>
static readonly "TELEKINESIS_SPELL": $Supplier<($AbstractSpell)>
static readonly "TELEPORT_SPELL": $Supplier<($AbstractSpell)>

constructor()

public static "register"(arg0: $IEventBus$$Type): void
public static "registerRegistry"(arg0: $NewRegistryEvent$$Type): void
public static "getSpell"(arg0: $ResourceLocation$$Type): $AbstractSpell
public static "getSpell"(arg0: StringJS): $AbstractSpell
public static "getSpellsForSchool"(arg0: $SchoolType$$Type): $List<($AbstractSpell)>
public static "getEnabledSpells"(): $List<($AbstractSpell)>
public static "onConfigReload"(): void
public static "none"(): $NoneSpell
public static get "enabledSpells"(): $List<($AbstractSpell)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellRegistry$$Type = ($SpellRegistry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellRegistry$$Original = $SpellRegistry;}
declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Event} from "net.neoforged.bus.api.Event"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellCooldownAddedEvent extends $Event {
constructor(arg0: integer, arg1: $AbstractSpell$$Type, arg2: $Player$$Type, arg3: $CastSource$$Type)

public "getSpell"(): $AbstractSpell
public "getEntity"(): $Player
public "getCastSource"(): $CastSource
public "getEffectiveCooldown"(): integer
get "spell"(): $AbstractSpell
get "entity"(): $Player
get "castSource"(): $CastSource
get "effectiveCooldown"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCooldownAddedEvent$$Type = ($SpellCooldownAddedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCooldownAddedEvent$$Original = $SpellCooldownAddedEvent;}
declare module "io.redspace.ironsspellbooks.api.spells.CastResult" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CastResult$Type, $CastResult$Type$$Type} from "io.redspace.ironsspellbooks.api.spells.CastResult$Type"

export class $CastResult {
readonly "type": $CastResult$Type
readonly "message": $Component

constructor(arg0: $CastResult$Type$$Type)
constructor(arg0: $CastResult$Type$$Type, arg1: $Component$$Type)

public "isSuccess"(): boolean
get "success"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastResult$$Type = ($CastResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CastResult$$Original = $CastResult;}
declare module "io.redspace.ironsspellbooks.api.spells.ICastData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICastData$$Interface {

(): void
}

export class $ICastData implements $ICastData$$Interface {
 "reset"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICastData$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICastData$$Original = $ICastData;}
declare module "io.redspace.ironsspellbooks.api.spells.CastType" {
import {$Enum} from "java.lang.Enum"

export class $CastType extends $Enum<($CastType)> {
static readonly "INSTANT": $CastType
static readonly "NONE": $CastType
static readonly "CONTINUOUS": $CastType
static readonly "LONG": $CastType

public static "values"(): ($CastType)[]
public static "valueOf"(arg0: StringJS): $CastType
public "getValue"(): integer
public "immediatelySuppressRightClicks"(): boolean
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastType$$Type = (("none") | ("instant") | ("long") | ("continuous"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CastType$$Original = $CastType;}
declare module "io.redspace.ironsspellbooks.api.registry.SchoolRegistry" {
import {$IEventBus$$Type} from "net.neoforged.bus.api.IEventBus"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$List} from "java.util.List"
import {$Supplier} from "java.util.function.Supplier"
import {$SchoolType} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$NewRegistryEvent$$Type} from "net.neoforged.neoforge.registries.NewRegistryEvent"

export class $SchoolRegistry {
static readonly "ENDER_RESOURCE": $ResourceLocation
static readonly "BLOOD_RESOURCE": $ResourceLocation
static readonly "ELDRITCH_RESOURCE": $ResourceLocation
static readonly "EVOCATION": $Supplier<($SchoolType)>
static readonly "LIGHTNING_RESOURCE": $ResourceLocation
static readonly "ICE_RESOURCE": $ResourceLocation
static readonly "FIRE_RESOURCE": $ResourceLocation
static readonly "LIGHTNING": $Supplier<($SchoolType)>
static readonly "HOLY_RESOURCE": $ResourceLocation
static readonly "ICE": $Supplier<($SchoolType)>
static readonly "EVOCATION_RESOURCE": $ResourceLocation
static readonly "NATURE_RESOURCE": $ResourceLocation
static readonly "NATURE": $Supplier<($SchoolType)>
static readonly "SCHOOL_REGISTRY_KEY": $ResourceKey<($Registry<($SchoolType)>)>
static readonly "HOLY": $Supplier<($SchoolType)>
static readonly "FIRE": $Supplier<($SchoolType)>
static readonly "ENDER": $Supplier<($SchoolType)>
static readonly "REGISTRY": $Registry<($SchoolType)>
static readonly "BLOOD": $Supplier<($SchoolType)>
static readonly "ELDRITCH": $Supplier<($SchoolType)>

constructor()

public static "register"(arg0: $IEventBus$$Type): void
public static "registerRegistry"(arg0: $NewRegistryEvent$$Type): void
public static "getSchoolFromFocus"(arg0: $ItemStack$$Type): $SchoolType
public static "getSchoolsFromFocus"(arg0: $ItemStack$$Type): $List<($SchoolType)>
public static "getSchool"(arg0: $ResourceLocation$$Type): $SchoolType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchoolRegistry$$Type = ($SchoolRegistry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SchoolRegistry$$Original = $SchoolRegistry;}
declare module "io.redspace.ironsspellbooks.api.spells.SpellRarity" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$List} from "java.util.List"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $SpellRarity extends $Enum<($SpellRarity)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($SpellRarity)>
static readonly "RARE": $SpellRarity
static readonly "EPIC": $SpellRarity
static readonly "UNCOMMON": $SpellRarity
static readonly "COMMON": $SpellRarity
static readonly "LEGENDARY": $SpellRarity

public static "values"(): ($SpellRarity)[]
public static "valueOf"(arg0: StringJS): $SpellRarity
public "getValue"(): integer
public "getDisplayName"(): $MutableComponent
public static "getRawRarityConfig"(): $List<(double)>
public static "getRarityConfig"(): $List<(double)>
public "getSerializedName"(): StringJS
public static "rarityTest"(): void
public "getChatFormatting"(): $ChatFormatting
public "compareRarity"(arg0: $SpellRarity$$Type): integer
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "value"(): integer
get "displayName"(): $MutableComponent
public static get "rawRarityConfig"(): $List<(double)>
public static get "rarityConfig"(): $List<(double)>
get "serializedName"(): StringJS
get "chatFormatting"(): $ChatFormatting
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellRarity$$Type = (("common") | ("uncommon") | ("rare") | ("epic") | ("legendary"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellRarity$$Original = $SpellRarity;}
declare module "io.redspace.ironsspellbooks.api.util.AnimationHolder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RawAnimation} from "software.bernie.geckolib.animation.RawAnimation"
import {$Optional} from "java.util.Optional"

export class $AnimationHolder {
readonly "animatesLegs": boolean
readonly "isPass": boolean

constructor(arg0: $ResourceLocation$$Type, arg1: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: boolean)
constructor(arg0: $ResourceLocation$$Type, arg1: boolean, arg2: boolean)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: boolean, arg2: boolean)

public static "pass"(): $AnimationHolder
public static "none"(): $AnimationHolder
public "getForMob"(): $Optional<($RawAnimation)>
public "getForPlayer"(): $Optional<($ResourceLocation)>
get "forMob"(): $Optional<($RawAnimation)>
get "forPlayer"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationHolder$$Type = ($AnimationHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationHolder$$Original = $AnimationHolder;}
declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent$Pre" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellCooldownAddedEvent} from "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellCooldownAddedEvent$Pre extends $SpellCooldownAddedEvent implements $ICancellableEvent$$Interface {
constructor(arg0: integer, arg1: $AbstractSpell$$Type, arg2: $Player$$Type, arg3: $CastSource$$Type)

public "setEffectiveCooldown"(arg0: integer): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "effectiveCooldown"(value: integer)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCooldownAddedEvent$Pre$$Type = ($SpellCooldownAddedEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCooldownAddedEvent$Pre$$Original = $SpellCooldownAddedEvent$Pre;}
declare module "io.redspace.ironsspellbooks.api.events.ChangeManaEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $ChangeManaEvent extends $PlayerEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $Player$$Type, arg1: $MagicData$$Type, arg2: float, arg3: float)

public "setNewMana"(arg0: float): void
public "getNewMana"(): float
public "getOldMana"(): float
public "getMagicData"(): $MagicData
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
set "newMana"(value: float)
get "newMana"(): float
get "oldMana"(): float
get "magicData"(): $MagicData
set "canceled"(value: boolean)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeManaEvent$$Type = ($ChangeManaEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChangeManaEvent$$Original = $ChangeManaEvent;}
declare module "io.redspace.ironsspellbooks.api.events.SpellTeleportEvent" {
import {$EntityTeleportEvent} from "net.neoforged.neoforge.event.entity.EntityTeleportEvent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellTeleportEvent extends $EntityTeleportEvent {
constructor(arg0: $AbstractSpell$$Type, arg1: $Entity$$Type, arg2: double, arg3: double, arg4: double)

public "getSpell"(): $AbstractSpell
get "spell"(): $AbstractSpell
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellTeleportEvent$$Type = ($SpellTeleportEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellTeleportEvent$$Original = $SpellTeleportEvent;}
declare module "io.redspace.ironsspellbooks.api.events.SpellDamageEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellDamageSource, $SpellDamageSource$$Type} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"

export class $SpellDamageEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: float, arg2: $SpellDamageSource$$Type)

public "getAmount"(): float
public "getSpellDamageSource"(): $SpellDamageSource
public "getOriginalAmount"(): float
public "setAmount"(arg0: float): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "amount"(): float
get "spellDamageSource"(): $SpellDamageSource
get "originalAmount"(): float
set "amount"(value: float)
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellDamageEvent$$Type = ($SpellDamageEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellDamageEvent$$Original = $SpellDamageEvent;}
declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SpellSelectionEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$SpellSelectionManager, $SpellSelectionManager$$Type} from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $SpellSelectionManager$SpellSelectionEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $SpellSelectionManager$$Type)

public "getManager"(): $SpellSelectionManager
public "addSelectionOption"(arg0: $SpellData$$Type, arg1: StringJS, arg2: integer): void
public "addSelectionOption"(arg0: $SpellData$$Type, arg1: StringJS, arg2: integer, arg3: integer): void
public "getEntity"(): $Entity
get "manager"(): $SpellSelectionManager
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionManager$SpellSelectionEvent$$Type = ($SpellSelectionManager$SpellSelectionEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSelectionManager$SpellSelectionEvent$$Original = $SpellSelectionManager$SpellSelectionEvent;}
declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent$Post" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellCooldownAddedEvent} from "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellCooldownAddedEvent$Post extends $SpellCooldownAddedEvent {
constructor(arg0: integer, arg1: $AbstractSpell$$Type, arg2: $Player$$Type, arg3: $CastSource$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCooldownAddedEvent$Post$$Type = ($SpellCooldownAddedEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCooldownAddedEvent$Post$$Original = $SpellCooldownAddedEvent$Post;}
declare module "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable" {
import {$ISerializable$$Interface} from "io.redspace.ironsspellbooks.api.network.ISerializable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ICastData$$Interface} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $ICastDataSerializable$$Interface extends $ICastData$$Interface, $ISerializable$$Interface, $INBTSerializable$$Interface<($CompoundTag)> {
}

export class $ICastDataSerializable implements $ICastDataSerializable$$Interface {
 "reset"(): void
 "readFromBuffer"(arg0: $FriendlyByteBuf$$Type): void
 "writeToBuffer"(arg0: $FriendlyByteBuf$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICastDataSerializable$$Type = ($ICastDataSerializable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICastDataSerializable$$Original = $ICastDataSerializable;}
declare module "io.redspace.ironsspellbooks.api.spells.AbstractSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$List} from "java.util.List"
import {$SchoolType} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f} from "org.joml.Vector3f"
import {$RecastResult$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import {$Component} from "net.minecraft.network.chat.Component"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICastData$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$RecastInstance$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import {$Style} from "net.minecraft.network.chat.Style"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SpellDamageSource} from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import {$CastResult} from "io.redspace.ironsspellbooks.api.spells.CastResult"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$SpellRarity, $SpellRarity$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ICastDataSerializable, $ICastDataSerializable$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"

export class $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEnabled"(): boolean
public "getDisplayName"(arg0: $Player$$Type): $MutableComponent
public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
/**
 * 
 * @deprecated
 */
public "getMinRarity"(): integer
public "getComponentId"(): StringJS
public "getLevelFor"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "onRecastFinished"(arg0: $ServerPlayer$$Type, arg1: $RecastInstance$$Type, arg2: $RecastResult$$Type, arg3: $ICastDataSerializable$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "resetRarityWeights"(): void
public "onClientCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $ICastData$$Type): void
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getMaxRarity"(): integer
public "obfuscateStats"(arg0: $Player$$Type): boolean
public "getCastTime"(arg0: integer): integer
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "getLockedMessage"(): $Component
public "getSpellPower"(arg0: integer, arg1: $Entity$$Type): float
public "getEmptyCastData"(): $ICastDataSerializable
public "canBeCastedBy"(arg0: integer, arg1: $CastSource$$Type, arg2: $MagicData$$Type, arg3: $Player$$Type): $CastResult
public "getTargetingColor"(): $Vector3f
public "getRecastCount"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "requiresLearning"(): boolean
public "getSpellCooldown"(): integer
public "getSpellName"(): StringJS
public "getCastFinishAnimation"(): $AnimationHolder
public "getSpellIconResource"(): $ResourceLocation
public "getEntityPowerMultiplier"(arg0: $LivingEntity$$Type): float
public "attemptInitiateCast"(arg0: $ItemStack$$Type, arg1: integer, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $CastSource$$Type, arg5: boolean, arg6: StringJS): boolean
public "shouldAIStopCasting"(arg0: integer, arg1: $Mob$$Type, arg2: $LivingEntity$$Type): boolean
public "getCastStartAnimation"(): $AnimationHolder
public "getMinLevelForRarity"(arg0: $SpellRarity$$Type): integer
public "getRarity"(arg0: integer): $SpellRarity
public "getSchoolType"(): $SchoolType
public "getSpellId"(): StringJS
public "getDeathMessageId"(): StringJS
public "canBeInterrupted"(arg0: $Player$$Type): boolean
public "stopSoundOnCancel"(): boolean
public "canBeCraftedBy"(arg0: $Player$$Type): boolean
public "allowCrafting"(): boolean
public "allowLooting"(): boolean
public "playSound"(arg0: ($SoundEvent$$Type)?, arg1: $Entity$$Type): void
public "castSpell"(arg0: $Level$$Type, arg1: integer, arg2: $ServerPlayer$$Type, arg3: $CastSource$$Type, arg4: boolean): void
public "isLearned"(arg0: $Player$$Type): boolean
public "getCastType"(): $CastType
public "getMaxLevel"(): integer
public "getMinLevel"(): integer
public "getManaCost"(arg0: integer): integer
public "getDamageSource"(arg0: $Entity$$Type): $SpellDamageSource
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $SpellDamageSource
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
public "getEffectiveCastTime"(arg0: integer, arg1: $LivingEntity$$Type): integer
public "onServerCastComplete"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type, arg4: boolean): void
public "onClientPreCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type, arg4: $MagicData$$Type): void
public "onServerCastTick"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): void
public "onServerPreCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): void
get "enabled"(): boolean
get "minRarity"(): integer
get "componentId"(): StringJS
get "castFinishSound"(): $Optional<($SoundEvent)>
get "maxRarity"(): integer
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "lockedMessage"(): $Component
get "emptyCastData"(): $ICastDataSerializable
get "targetingColor"(): $Vector3f
get "spellCooldown"(): integer
get "spellName"(): StringJS
get "castFinishAnimation"(): $AnimationHolder
get "spellIconResource"(): $ResourceLocation
get "castStartAnimation"(): $AnimationHolder
get "schoolType"(): $SchoolType
get "spellId"(): StringJS
get "deathMessageId"(): StringJS
get "castType"(): $CastType
get "maxLevel"(): integer
get "minLevel"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.IronsSpellbooksSpells
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.IronsSpellbooksSpellsTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpell$$Type = (Special.IronsSpellbooksSpells);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSpell$$Original = $AbstractSpell;}
declare module "io.redspace.ironsspellbooks.api.events.SpellSummonEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SpellSummonEvent<K extends $LivingEntity> extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: K, arg2: $ResourceLocation$$Type, arg3: integer)

public "getCaster"(): $LivingEntity
public "getSpellLevel"(): integer
public "getSpellId"(): $ResourceLocation
public "getCreature"(): K
public "setCreature"(arg0: K): void
get "caster"(): $LivingEntity
get "spellLevel"(): integer
get "spellId"(): $ResourceLocation
get "creature"(): K
set "creature"(value: K)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSummonEvent$$Type<K> = ($SpellSummonEvent<(K)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSummonEvent$$Original<K> = $SpellSummonEvent<(K)>;}
declare module "io.redspace.ironsspellbooks.api.item.weapons.ExtendedSwordItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IronsWeaponTier$$Type} from "io.redspace.ironsspellbooks.item.weapons.IronsWeaponTier"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $ExtendedSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public static "createAttributes"(arg0: $IronsWeaponTier$$Type): $ItemAttributeModifiers
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSwordItem$$Type = ($ExtendedSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedSwordItem$$Original = $ExtendedSwordItem;}
declare module "io.redspace.ironsspellbooks.api.item.IScroll" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IScroll$$Interface {
}

export class $IScroll implements $IScroll$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScroll$$Type = ($IScroll);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IScroll$$Original = $IScroll;}
declare module "io.redspace.ironsspellbooks.api.spells.CastResult$Type" {
import {$Enum} from "java.lang.Enum"

export class $CastResult$Type extends $Enum<($CastResult$Type)> {
static readonly "SUCCESS": $CastResult$Type
static readonly "FAILURE": $CastResult$Type

public static "values"(): ($CastResult$Type)[]
public static "valueOf"(arg0: StringJS): $CastResult$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastResult$Type$$Type = (("success") | ("failure"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CastResult$Type$$Original = $CastResult$Type;}
declare module "io.redspace.ironsspellbooks.api.attribute.MagicPercentAttribute" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$PercentageAttribute} from "net.neoforged.neoforge.common.PercentageAttribute"
import {$IMagicAttribute$$Interface} from "io.redspace.ironsspellbooks.api.attribute.IMagicAttribute"
import {$Holder} from "net.minecraft.core.Holder"

export class $MagicPercentAttribute extends $PercentageAttribute implements $IMagicAttribute$$Interface {
static readonly "CODEC": $Codec<($Holder<($Attribute)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Attribute)>)>

constructor(arg0: StringJS, arg1: double, arg2: double, arg3: double)

public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicPercentAttribute$$Type = ($MagicPercentAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicPercentAttribute$$Original = $MagicPercentAttribute;}
declare module "io.redspace.ironsspellbooks.api.spells.CastSource" {
import {$Enum} from "java.lang.Enum"

export class $CastSource extends $Enum<($CastSource)> {
static readonly "MOB": $CastSource
static readonly "SCROLL": $CastSource
static readonly "SWORD": $CastSource
static readonly "COMMAND": $CastSource
static readonly "SPELLBOOK": $CastSource
static readonly "NONE": $CastSource

public static "values"(): ($CastSource)[]
public static "valueOf"(arg0: StringJS): $CastSource
public "consumesMana"(): boolean
public "respectsCooldown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastSource$$Type = (("spellbook") | ("scroll") | ("sword") | ("mob") | ("command") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CastSource$$Original = $CastSource;}
declare module "io.redspace.ironsspellbooks.api.spells.SpellData" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$SpellRarity} from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellData implements $Comparable$$Interface<($SpellData)> {
static readonly "CODEC": $Codec<($SpellData)>
static readonly "SPELL_ID": StringJS
static readonly "SPELL_LEVEL": StringJS
static readonly "EMPTY": $SpellData
static readonly "SPELL_LOCKED": StringJS

constructor(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean)
constructor(arg0: $AbstractSpell$$Type, arg1: integer)
constructor(arg0: $AbstractSpell$$Type, arg1: integer, arg2: boolean)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $SpellData$$Type): integer
public "compareTo"(arg0: any): integer
public "isLocked"(): boolean
public "getDisplayName"(): $Component
public "getLevel"(): integer
public "getSpell"(): $AbstractSpell
public "getRarity"(): $SpellRarity
public "canRemove"(): boolean
public static "readFromBuffer"(arg0: $FriendlyByteBuf$$Type): $SpellData
public static "writeToBuffer"(arg0: $FriendlyByteBuf$$Type, arg1: $SpellData$$Type): void
get "locked"(): boolean
get "displayName"(): $Component
get "level"(): integer
get "spell"(): $AbstractSpell
get "rarity"(): $SpellRarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellData$$Type = ($SpellData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellData$$Original = $SpellData;}
declare module "io.redspace.ironsspellbooks.api.magic.MagicData" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PlayerRecasts, $PlayerRecasts$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.PlayerRecasts"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlayerCooldowns} from "io.redspace.ironsspellbooks.capabilities.magic.PlayerCooldowns"
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$SyncedSpellData, $SyncedSpellData$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ICastData, $ICastData$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $MagicData {
static readonly "MANA": StringJS
static readonly "COOLDOWNS": StringJS
static readonly "RECASTS": StringJS

constructor(arg0: $ServerPlayer$$Type)
constructor()
constructor(arg0: boolean)

public "toString"(): StringJS
public "getCastingEquipmentSlot"(): StringJS
public "isCasting"(): boolean
public "getPlayerRecasts"(): $PlayerRecasts
public "getPlayerCooldowns"(): $PlayerCooldowns
public "setPlayerCastingItem"(arg0: $ItemStack$$Type): void
public "getAdditionalCastData"(): $ICastData
public "resetAdditionalCastData"(): void
public "getCastSource"(): $CastSource
public static "getPlayerMagicData"(arg0: $LivingEntity$$Type): $MagicData
public "getMana"(): float
public "setMana"(arg0: float): void
public "getCastType"(): $CastType
public "markPoisoned"(): void
public "getCastDurationRemaining"(): integer
public "setAdditionalCastData"(arg0: $ICastData$$Type): void
public "getCastingSpellLevel"(): integer
public "getCastCompletionPercent"(): float
public "loadNBTData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setSyncedData"(arg0: $SyncedSpellData$$Type): void
public "resetCastingState"(): void
public "initiateCast"(arg0: $AbstractSpell$$Type, arg1: integer, arg2: integer, arg3: $CastSource$$Type, arg4: StringJS): void
public "getCastingSpellId"(): StringJS
public "saveNBTData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCastingSpell"(): $SpellData
public "getSyncedData"(): $SyncedSpellData
public "handleCastDuration"(): void
public "setServerPlayer"(arg0: $ServerPlayer$$Type): void
public "getCastDuration"(): integer
public "setPlayerRecasts"(arg0: $PlayerRecasts$$Type): void
public "popMarkedPoison"(): boolean
public "addMana"(arg0: float): void
public "getPlayerCastingItem"(): $ItemStack
get "castingEquipmentSlot"(): StringJS
get "casting"(): boolean
get "playerRecasts"(): $PlayerRecasts
get "playerCooldowns"(): $PlayerCooldowns
set "playerCastingItem"(value: $ItemStack$$Type)
get "additionalCastData"(): $ICastData
get "castSource"(): $CastSource
get "mana"(): float
set "mana"(value: float)
get "castType"(): $CastType
get "castDurationRemaining"(): integer
set "additionalCastData"(value: $ICastData$$Type)
get "castingSpellLevel"(): integer
get "castCompletionPercent"(): float
set "syncedData"(value: $SyncedSpellData$$Type)
get "castingSpellId"(): StringJS
get "castingSpell"(): $SpellData
get "syncedData"(): $SyncedSpellData
set "serverPlayer"(value: $ServerPlayer$$Type)
get "castDuration"(): integer
set "playerRecasts"(value: $PlayerRecasts$$Type)
get "playerCastingItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicData$$Type = ($MagicData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicData$$Original = $MagicData;}
declare module "io.redspace.ironsspellbooks.api.spells.SchoolType" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Vector3f} from "org.joml.Vector3f"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$DamageType, $DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $SchoolType {
constructor(arg0: $ResourceLocation$$Type, arg1: $TagKey$$Type<($Item)>, arg2: $Component$$Type, arg3: $Holder$$Type<($Attribute)>, arg4: $Holder$$Type<($Attribute)>, arg5: $Holder$$Type<($SoundEvent)>, arg6: $ResourceKey$$Type<($DamageType)>, arg7: boolean, arg8: boolean)
constructor(arg0: $ResourceLocation$$Type, arg1: $TagKey$$Type<($Item)>, arg2: $Component$$Type, arg3: $Holder$$Type<($Attribute)>, arg4: $Holder$$Type<($Attribute)>, arg5: $Holder$$Type<($SoundEvent)>, arg6: $ResourceKey$$Type<($DamageType)>)

public "getId"(): $ResourceLocation
public "getDisplayName"(): $Component
public "getCastSound"(): $SoundEvent
public "getPowerFor"(arg0: $LivingEntity$$Type): double
public "getTargetingColor"(): $Vector3f
public "getFocus"(): $TagKey<($Item)>
public "isFocus"(arg0: $ItemStack$$Type): boolean
public "getDamageType"(): $ResourceKey<($DamageType)>
public "getResistanceFor"(arg0: $LivingEntity$$Type): double
get "id"(): $ResourceLocation
get "displayName"(): $Component
get "castSound"(): $SoundEvent
get "targetingColor"(): $Vector3f
get "focus"(): $TagKey<($Item)>
get "damageType"(): $ResourceKey<($DamageType)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.IronsSpellbooksSchools
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.IronsSpellbooksSchoolsTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchoolType$$Type = (Special.IronsSpellbooksSchools);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SchoolType$$Original = $SchoolType;}
declare module "io.redspace.ironsspellbooks.api.registry.SpellDataRegistryHolder" {
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellDataRegistryHolder {
constructor(arg0: $Supplier$$Type<($AbstractSpell$$Type)>, arg1: integer)

public static "of"(...arg0: ($SpellDataRegistryHolder$$Type)[]): ($SpellDataRegistryHolder)[]
public "getSpellData"(): $SpellData
get "spellData"(): $SpellData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellDataRegistryHolder$$Type = ($SpellDataRegistryHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellDataRegistryHolder$$Original = $SpellDataRegistryHolder;}
declare module "io.redspace.ironsspellbooks.api.entity.IMagicEntity" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SyncedSpellData$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData"
import {$MagicData} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export interface $IMagicEntity$$Interface {
get "casting"(): boolean
get "burningDashDirectionData"(): void
set "teleportLocationBehindTarget"(value: integer)
get "hasUsedSingleAttack"(): boolean
set "hasUsedSingleAttack"(value: boolean)
get "magicData"(): $MagicData
set "syncedSpellData"(value: $SyncedSpellData$$Type)
get "drinkingPotion"(): boolean
}

export class $IMagicEntity implements $IMagicEntity$$Interface {
 "cancelCast"(): void
 "isCasting"(): boolean
/**
 * 
 * @deprecated
 */
 "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
 "setBurningDashDirectionData"(): void
 "setTeleportLocationBehindTarget"(arg0: integer): boolean
 "notifyDangerousProjectile"(arg0: $Projectile$$Type): void
 "startDrinkingPotion"(): void
 "getHasUsedSingleAttack"(): boolean
 "setHasUsedSingleAttack"(arg0: boolean): void
 "castComplete"(): void
 "getMagicData"(): $MagicData
 "setSyncedSpellData"(arg0: $SyncedSpellData$$Type): void
 "initiateCastSpell"(arg0: $AbstractSpell$$Type, arg1: integer): void
 "isDrinkingPotion"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagicEntity$$Type = ($IMagicEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMagicEntity$$Original = $IMagicEntity;}
declare module "io.redspace.ironsspellbooks.api.util.Utils" {
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConditionalEffect$$Type} from "net.minecraft.world.item.enchantment.ConditionalEffect"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$EnchantmentValueEffect$$Type} from "net.minecraft.world.item.enchantment.effects.EnchantmentValueEffect"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$Class$$Type} from "java.lang.Class"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Quaternionf} from "org.joml.Quaternionf"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult} from "net.minecraft.world.phys.HitResult"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $Utils {
static readonly "random": $RandomSource
static readonly "NON_BASE_ATTRIBUTES": $Predicate<($Holder<($Attribute)>)>
static readonly "ONLY_MAGIC_ATTRIBUTES": $Predicate<($Holder<($Attribute)>)>

constructor()

public static "getPlayerSpellbookStack"(arg0: $Player$$Type): $ItemStack
public static "applyCooldownReduction"(arg0: integer, arg1: $LivingEntity$$Type): integer
public static "getRandomScaled"(arg0: double): double
public static "deconstructRGB"(arg0: integer): $Vector3f
public static "checkEntityIntersecting"(arg0: $Entity$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type, arg3: float): $HitResult
public static "enchant"(arg0: $ItemStack$$Type, arg1: $RegistryAccess$$Type, arg2: $ResourceKey$$Type<($Enchantment)>, arg3: integer): void
public static "softCapFormula"(arg0: double): double
public static "hasLineOfSight"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type, arg3: boolean): boolean
public static "hasLineOfSight"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $Entity$$Type, arg3: boolean): boolean
public static "serverSideCancelCast"(arg0: $ServerPlayer$$Type, arg1: boolean): void
public static "serverSideCancelCast"(arg0: $ServerPlayer$$Type): void
public static "validAntiMagicTarget"(arg0: $Entity$$Type): boolean
public static "handleSpellTeleport"(arg0: $AbstractSpell$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type): boolean
public static "preCastTargetHelper"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $MagicData$$Type, arg3: $AbstractSpell$$Type, arg4: integer, arg5: float, arg6: boolean, arg7: $Predicate$$Type<($LivingEntity)>): boolean
public static "preCastTargetHelper"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $MagicData$$Type, arg3: $AbstractSpell$$Type, arg4: integer, arg5: float, arg6: boolean): boolean
public static "preCastTargetHelper"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $MagicData$$Type, arg3: $AbstractSpell$$Type, arg4: integer, arg5: float): boolean
public static "rotationFromDirection"(arg0: $Vec3$$Type): $Vec2
public static "signedMin"(arg0: double, arg1: double): double
public static "sendTargetedNotification"(arg0: $ServerPlayer$$Type, arg1: $LivingEntity$$Type, arg2: $AbstractSpell$$Type): void
public static "getStackTraceAsString"(): StringJS
/**
 * 
 * @deprecated
 */
public static "raycastForEntityOfClass"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type, arg3: $Vec3$$Type, arg4: boolean, arg5: $Class$$Type<($Entity$$Type)>): $HitResult
public static "serverSideInitiateCast"(arg0: $ServerPlayer$$Type): boolean
public static "findRelativeGroundLevel"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: integer): float
public static "rotationBetweenVectors"(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type): $Quaternionf
public static "raycastForBlock"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type, arg3: $ClipContext$Fluid$$Type): $BlockHitResult
public static "timeFromTicks"(arg0: float, arg1: integer): StringJS
public static "particleTrail"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type, arg3: $ParticleOptions$$Type): void
public static "stringTruncation"(arg0: double, arg1: integer): StringJS
public static "canHitWithRaycast"(arg0: $Entity$$Type): boolean
public static "getTargetBlock"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ClipContext$Fluid$$Type, arg3: double): $BlockHitResult
public static "getWeaponDamage"(arg0: $LivingEntity$$Type): float
public static "smoothstep"(arg0: float, arg1: float, arg2: float): float
public static "v3f"(arg0: $Vec3$$Type): $Vector3f
public static "clampedKnockbackResistanceFactor"(arg0: $Entity$$Type, arg1: float, arg2: float): float
public static "getAngle"(arg0: $Vec2$$Type, arg1: $Vec2$$Type): float
public static "getAngle"(arg0: double, arg1: double, arg2: double, arg3: double): float
public static "doMeleeAttack"(arg0: $Mob$$Type, arg1: $Entity$$Type, arg2: $DamageSource$$Type): boolean
/**
 * 
 * @deprecated
 */
public static "shouldHealEntity"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type): boolean
public static "shouldHealEntity"(arg0: $Entity$$Type, arg1: $Entity$$Type): boolean
public static "processEnchantment"(arg0: $Level$$Type, arg1: $ResourceKey$$Type<($Enchantment)>, arg2: $DataComponentType$$Type<($List$$Type<($ConditionalEffect$$Type<($EnchantmentValueEffect$$Type)>)>)>, arg3: $ItemEnchantments$$Type): float
public static "performTaunt"(arg0: $LivingEntity$$Type, arg1: float, arg2: $Predicate$$Type<($Entity)>): void
public static "performTaunt"(arg0: $LivingEntity$$Type, arg1: $List$$Type<($Entity$$Type)>): void
public static "addFreezeTicks"(arg0: $LivingEntity$$Type, arg1: integer, arg2: integer): void
public static "addFreezeTicks"(arg0: $LivingEntity$$Type, arg1: integer): void
public static "spawnInWorld"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public static "getTargetOld"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ClipContext$Fluid$$Type, arg3: double): $BlockHitResult
public static "getRandomVec3f"(arg0: double): $Vector3f
public static "enchantmentFromKey"(arg0: $RegistryAccess$$Type, arg1: $ResourceKey$$Type<($Enchantment)>): $Holder<($Enchantment)>
public static "getServerTick"(): long
public static "releaseUsingHelper"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: integer): void
/**
 * 
 * @deprecated
 */
public static "raycastForEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type, arg3: $Vec3$$Type, arg4: boolean): $HitResult
/**
 * 
 * @deprecated
 */
public static "raycastForEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: float, arg3: boolean): $HitResult
/**
 * 
 * @deprecated
 */
public static "raycastForEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type, arg3: $Vec3$$Type, arg4: boolean, arg5: float, arg6: $Predicate$$Type<($Entity)>): $HitResult
/**
 * 
 * @deprecated
 */
public static "raycastForEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: float, arg3: boolean, arg4: float): $HitResult
public static "saveAllItems"(arg0: $CompoundTag$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: StringJS, arg3: $HolderLookup$Provider$$Type): $CompoundTag
public static "loadAllItems"(arg0: $CompoundTag$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: StringJS, arg3: $HolderLookup$Provider$$Type): void
public static "getPositionFromEntityLookDirection"(arg0: $Entity$$Type, arg1: float): $Vec3
public static "createTremorBlockWithState"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: float): void
public static "intPow"(arg0: double, arg1: integer): double
public static "intPow"(arg0: float, arg1: integer): float
public static "checkMonsterSpawnRules"(arg0: $ServerLevelAccessor$$Type, arg1: $MobSpawnType$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): boolean
public static "moveToRelativeGroundLevel"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: integer): $Vec3
public static "moveToRelativeGroundLevel"(arg0: $Level$$Type, arg1: $Vec3$$Type, arg2: integer, arg3: integer): $Vec3
public static "serverSideInitiateQuickCast"(arg0: $ServerPlayer$$Type, arg1: integer): boolean
public static "v3d"(arg0: $Vector3f$$Type): $Vec3
public static "packRGB"(arg0: $Vector3f$$Type): integer
public static "handleShriving"(arg0: $ItemStack$$Type): $ItemStack
public static "canBeUpgraded"(arg0: $ItemStack$$Type): boolean
public static "slerp"(arg0: double, arg1: $Vec3$$Type, arg2: $Vec3$$Type): $Vec3
public static "lerp"(arg0: float, arg1: $Vec3$$Type, arg2: $Vec3$$Type): $Vec3
public static "getEnchantmentLevel"(arg0: $Level$$Type, arg1: $ResourceKey$$Type<($Enchantment)>, arg2: $ItemEnchantments$$Type): integer
public static "getEnchantmentLevel"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $ResourceKey$$Type<($Enchantment)>): integer
public static "isSameItemSameComponentsIgnoreDurability"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "getRandomVec3"(arg0: double): $Vec3
public static "setPlayerSpellbookStack"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public static "setPotion"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Potion)>): $ItemStack
public static "createTremorBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: float): void
public static "doMobBreakSuffocatingBlocks"(arg0: $LivingEntity$$Type, arg1: $Vec3$$Type): void
public static "doMobBreakSuffocatingBlocks"(arg0: $LivingEntity$$Type): void
public static "canImbue"(arg0: $ItemStack$$Type): boolean
public static get "stackTraceAsString"(): StringJS
public static get "serverTick"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Utils$$Type = ($Utils);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Utils$$Original = $Utils;}
declare module "io.redspace.ironsspellbooks.api.item.ISpellbook" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISpellbook$$Interface {
}

export class $ISpellbook implements $ISpellbook$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellbook$$Type = ($ISpellbook);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpellbook$$Original = $ISpellbook;}
declare module "io.redspace.ironsspellbooks.api.events.ModifySpellLevelEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $ModifySpellLevelEvent extends $Event {
constructor(arg0: $AbstractSpell$$Type, arg1: $LivingEntity$$Type, arg2: integer, arg3: integer)

public "getLevel"(): integer
public "setLevel"(arg0: integer): void
public "getSpell"(): $AbstractSpell
public "getEntity"(): $LivingEntity
public "addLevels"(arg0: integer): void
public "getBaseLevel"(): integer
get "level"(): integer
set "level"(value: integer)
get "spell"(): $AbstractSpell
get "entity"(): $LivingEntity
get "baseLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifySpellLevelEvent$$Type = ($ModifySpellLevelEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifySpellLevelEvent$$Original = $ModifySpellLevelEvent;}
declare module "io.redspace.ironsspellbooks.api.config.SpellConfigParameter" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$SpellRarity} from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$SchoolType} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$Record} from "java.lang.Record"

export class $SpellConfigParameter<T> extends $Record {
static readonly "SCHOOL": $SpellConfigParameter<($SchoolType)>
static readonly "COOLDOWN_IN_SECONDS": $SpellConfigParameter<(double)>
static readonly "ALLOW_CRAFTING": $SpellConfigParameter<(boolean)>
static readonly "MIN_RARITY": $SpellConfigParameter<($SpellRarity)>
static readonly "POWER_MULTIPLIER": $SpellConfigParameter<(double)>
static readonly "ENABLED": $SpellConfigParameter<(boolean)>
static readonly "MAX_LEVEL": $SpellConfigParameter<(integer)>
static readonly "MANA_MULTIPLIER": $SpellConfigParameter<(double)>

constructor(arg0: $ResourceLocation$$Type, arg1: $Codec$$Type<(T)>, arg2: T)
constructor(key: $ResourceLocation$$Type, datatype: $Codec$$Type<(T)>, defaultValue: $Supplier$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): $ResourceLocation
public "defaultValue"(): $Supplier<(T)>
public "datatype"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellConfigParameter$$Type<T> = ({"datatype"?: $Codec$$Type<(T)>, "key"?: $ResourceLocation$$Type, "defaultValue"?: $Supplier$$Type<(T)>}) | ([datatype?: $Codec$$Type<(T)>, key?: $ResourceLocation$$Type, defaultValue?: $Supplier$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellConfigParameter$$Original<T> = $SpellConfigParameter<(T)>;}
declare module "io.redspace.ironsspellbooks.api.events.SpellHealEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$SchoolType, $SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SpellHealEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type, arg2: float, arg3: $SchoolType$$Type)

public "getSchoolType"(): $SchoolType
public "getTargetEntity"(): $LivingEntity
public "getHealAmount"(): float
get "schoolType"(): $SchoolType
get "targetEntity"(): $LivingEntity
get "healAmount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellHealEvent$$Type = ($SpellHealEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellHealEvent$$Original = $SpellHealEvent;}
declare module "io.redspace.ironsspellbooks.api.network.ISerializable" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"

export interface $ISerializable$$Interface {
}

export class $ISerializable implements $ISerializable$$Interface {
 "readFromBuffer"(arg0: $FriendlyByteBuf$$Type): void
 "writeToBuffer"(arg0: $FriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISerializable$$Type = ($ISerializable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISerializable$$Original = $ISerializable;}
declare module "io.redspace.ironsspellbooks.api.spells.IPresetSpellContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IPresetSpellContainer$$Interface {

(arg0: $ItemStack): void
}

export class $IPresetSpellContainer implements $IPresetSpellContainer$$Interface {
 "initializeSpellContainer"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPresetSpellContainer$$Type = ((arg0: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPresetSpellContainer$$Original = $IPresetSpellContainer;}
