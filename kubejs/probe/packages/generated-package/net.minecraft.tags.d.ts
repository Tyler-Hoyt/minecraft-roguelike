declare module "net.minecraft.tags.TagManager$LoadResult" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $TagManager$LoadResult<T> extends $Record {
constructor(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Map$$Type<($ResourceLocation$$Type), ($Collection$$Type<($Holder$$Type<(T)>)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): $ResourceKey<($Registry<(T)>)>
public "tags"(): $Map<($ResourceLocation), ($Collection<($Holder<(T)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagManager$LoadResult$$Type<T> = ({"tags"?: $Map$$Type<($ResourceLocation$$Type), ($Collection$$Type<($Holder$$Type<(T)>)>)>, "key"?: $ResourceKey$$Type<($Registry<(T)>)>}) | ([tags?: $Map$$Type<($ResourceLocation$$Type), ($Collection$$Type<($Holder$$Type<(T)>)>)>, key?: $ResourceKey$$Type<($Registry<(T)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagManager$LoadResult$$Original<T> = $TagManager$LoadResult<(T)>;}
declare module "net.minecraft.tags.TagEntry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$TagEntry$Lookup$$Type} from "net.minecraft.tags.TagEntry$Lookup"
import {$ExtraCodecs$TagOrElementLocation} from "net.minecraft.util.ExtraCodecs$TagOrElementLocation"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $TagEntry {
static readonly "CODEC": $Codec<($TagEntry)>
readonly "id": $ResourceLocation
readonly "required": boolean

public "toString"(): StringJS
public "getId"(): $ResourceLocation
public static "element"(arg0: $ResourceLocation$$Type): $TagEntry
public "build"<T>(arg0: $TagEntry$Lookup$$Type<(T)>, arg1: $Consumer$$Type<(T)>): boolean
public static "tag"(arg0: $ResourceLocation$$Type): $TagEntry
public "isRequired"(): boolean
public "verifyIfPresent"(arg0: $Predicate$$Type<($ResourceLocation)>, arg1: $Predicate$$Type<($ResourceLocation)>): boolean
public "isTag"(): boolean
public "elementOrTag"(): $ExtraCodecs$TagOrElementLocation
public "visitRequiredDependencies"(arg0: $Consumer$$Type<($ResourceLocation)>): void
public "visitOptionalDependencies"(arg0: $Consumer$$Type<($ResourceLocation)>): void
public static "optionalElement"(arg0: $ResourceLocation$$Type): $TagEntry
public static "optionalTag"(arg0: $ResourceLocation$$Type): $TagEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagEntry$$Type = ($TagEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagEntry$$Original = $TagEntry;}
declare module "net.minecraft.tags.TagKey" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Record} from "java.lang.Record"

export class $TagKey<T> extends $Record {
/**
 * 
 * @deprecated
 */
constructor(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "cast"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $Optional<($TagKey<(E)>)>
public "location"(): $ResourceLocation
public static "create"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $ResourceLocation$$Type): $TagKey<(T)>
public "registry"(): $ResourceKey<($Registry<(T)>)>
public static "codec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Codec<($TagKey<(T)>)>
public static "hashedCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Codec<($TagKey<(T)>)>
public "isFor"(arg0: $ResourceKey$$Type<($Registry<(never)>)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagKey$$Type<T> = (Special.TagOf<(T)>) | ($TagKey<(T)>) | ({"location"?: $ResourceLocation$$Type, "registry"?: $ResourceKey$$Type<($Registry<(T)>)>}) | ([location?: $ResourceLocation$$Type, registry?: $ResourceKey$$Type<($Registry<(T)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagKey$$Original<T> = $TagKey<(T)>;}
declare module "net.minecraft.tags.ItemTags" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Item} from "net.minecraft.world.item.Item"

export class $ItemTags {
static readonly "SHARP_WEAPON_ENCHANTABLE": $TagKey<($Item)>
static readonly "STONE_BRICKS": $TagKey<($Item)>
static readonly "TRIMMABLE_ARMOR": $TagKey<($Item)>
static readonly "HORSE_FOOD": $TagKey<($Item)>
static readonly "FENCES": $TagKey<($Item)>
static readonly "CHEST_ARMOR_ENCHANTABLE": $TagKey<($Item)>
static readonly "LEAVES": $TagKey<($Item)>
static readonly "PIG_FOOD": $TagKey<($Item)>
static readonly "NOTE_BLOCK_TOP_INSTRUMENTS": $TagKey<($Item)>
static readonly "WART_BLOCKS": $TagKey<($Item)>
static readonly "SMELTS_TO_GLASS": $TagKey<($Item)>
static readonly "CAMEL_FOOD": $TagKey<($Item)>
static readonly "WOOL_CARPETS": $TagKey<($Item)>
static readonly "CRIMSON_STEMS": $TagKey<($Item)>
static readonly "BEDS": $TagKey<($Item)>
static readonly "TRIM_MATERIALS": $TagKey<($Item)>
static readonly "BANNERS": $TagKey<($Item)>
static readonly "SHOVELS": $TagKey<($Item)>
static readonly "ANVIL": $TagKey<($Item)>
static readonly "CHEST_ARMOR": $TagKey<($Item)>
static readonly "FOOT_ARMOR": $TagKey<($Item)>
static readonly "FOOT_ARMOR_ENCHANTABLE": $TagKey<($Item)>
static readonly "SWORD_ENCHANTABLE": $TagKey<($Item)>
static readonly "MINING_ENCHANTABLE": $TagKey<($Item)>
static readonly "ARROWS": $TagKey<($Item)>
static readonly "PIGLIN_LOVED": $TagKey<($Item)>
static readonly "WALLS": $TagKey<($Item)>
static readonly "REDSTONE_ORES": $TagKey<($Item)>
static readonly "MACE_ENCHANTABLE": $TagKey<($Item)>
static readonly "TRAPDOORS": $TagKey<($Item)>
static readonly "STAIRS": $TagKey<($Item)>
static readonly "SPRUCE_LOGS": $TagKey<($Item)>
static readonly "AXOLOTL_FOOD": $TagKey<($Item)>
static readonly "MINING_LOOT_ENCHANTABLE": $TagKey<($Item)>
static readonly "BEE_FOOD": $TagKey<($Item)>
static readonly "TURTLE_FOOD": $TagKey<($Item)>
static readonly "BREAKS_DECORATED_POTS": $TagKey<($Item)>
static readonly "VANISHING_ENCHANTABLE": $TagKey<($Item)>
static readonly "LOGS_THAT_BURN": $TagKey<($Item)>
static readonly "CLUSTER_MAX_HARVESTABLES": $TagKey<($Item)>
static readonly "AXES": $TagKey<($Item)>
static readonly "LEG_ARMOR": $TagKey<($Item)>
static readonly "OAK_LOGS": $TagKey<($Item)>
static readonly "EQUIPPABLE_ENCHANTABLE": $TagKey<($Item)>
static readonly "DARK_OAK_LOGS": $TagKey<($Item)>
static readonly "HEAD_ARMOR": $TagKey<($Item)>
static readonly "HEAD_ARMOR_ENCHANTABLE": $TagKey<($Item)>
static readonly "COALS": $TagKey<($Item)>
static readonly "OCELOT_FOOD": $TagKey<($Item)>
static readonly "ARMOR_ENCHANTABLE": $TagKey<($Item)>
static readonly "BUTTONS": $TagKey<($Item)>
static readonly "SHEEP_FOOD": $TagKey<($Item)>
static readonly "CAT_FOOD": $TagKey<($Item)>
static readonly "CHEST_BOATS": $TagKey<($Item)>
static readonly "DIAMOND_ORES": $TagKey<($Item)>
static readonly "PIGLIN_REPELLENTS": $TagKey<($Item)>
static readonly "STRIDER_TEMPT_ITEMS": $TagKey<($Item)>
static readonly "FREEZE_IMMUNE_WEARABLES": $TagKey<($Item)>
static readonly "DYEABLE": $TagKey<($Item)>
static readonly "WOODEN_DOORS": $TagKey<($Item)>
static readonly "SKULLS": $TagKey<($Item)>
static readonly "PICKAXES": $TagKey<($Item)>
static readonly "HOGLIN_FOOD": $TagKey<($Item)>
static readonly "TRIDENT_ENCHANTABLE": $TagKey<($Item)>
static readonly "GOLD_ORES": $TagKey<($Item)>
static readonly "CANDLES": $TagKey<($Item)>
static readonly "FENCE_GATES": $TagKey<($Item)>
static readonly "EMERALD_ORES": $TagKey<($Item)>
static readonly "FLOWERS": $TagKey<($Item)>
static readonly "COW_FOOD": $TagKey<($Item)>
static readonly "FROG_FOOD": $TagKey<($Item)>
static readonly "PLANKS": $TagKey<($Item)>
static readonly "WOODEN_SLABS": $TagKey<($Item)>
static readonly "LLAMA_TEMPT_ITEMS": $TagKey<($Item)>
static readonly "PIGLIN_FOOD": $TagKey<($Item)>
static readonly "CHERRY_LOGS": $TagKey<($Item)>
static readonly "SIGNS": $TagKey<($Item)>
static readonly "DOORS": $TagKey<($Item)>
static readonly "SWORDS": $TagKey<($Item)>
static readonly "CROSSBOW_ENCHANTABLE": $TagKey<($Item)>
static readonly "LOGS": $TagKey<($Item)>
static readonly "HANGING_SIGNS": $TagKey<($Item)>
static readonly "STONE_BUTTONS": $TagKey<($Item)>
static readonly "PARROT_FOOD": $TagKey<($Item)>
static readonly "STRIDER_FOOD": $TagKey<($Item)>
static readonly "RABBIT_FOOD": $TagKey<($Item)>
static readonly "COAL_ORES": $TagKey<($Item)>
static readonly "BEACON_PAYMENT_ITEMS": $TagKey<($Item)>
static readonly "WARPED_STEMS": $TagKey<($Item)>
static readonly "COPPER_ORES": $TagKey<($Item)>
static readonly "FISHES": $TagKey<($Item)>
static readonly "LLAMA_FOOD": $TagKey<($Item)>
static readonly "TRIM_TEMPLATES": $TagKey<($Item)>
static readonly "WOOL": $TagKey<($Item)>
static readonly "GOAT_FOOD": $TagKey<($Item)>
static readonly "STONE_TOOL_MATERIALS": $TagKey<($Item)>
static readonly "PANDA_FOOD": $TagKey<($Item)>
static readonly "WEAPON_ENCHANTABLE": $TagKey<($Item)>
static readonly "SAND": $TagKey<($Item)>
static readonly "RAILS": $TagKey<($Item)>
static readonly "NON_FLAMMABLE_WOOD": $TagKey<($Item)>
static readonly "WOODEN_TRAPDOORS": $TagKey<($Item)>
static readonly "DIRT": $TagKey<($Item)>
static readonly "BAMBOO_BLOCKS": $TagKey<($Item)>
static readonly "JUNGLE_LOGS": $TagKey<($Item)>
static readonly "ARMADILLO_FOOD": $TagKey<($Item)>
static readonly "DAMPENS_VIBRATIONS": $TagKey<($Item)>
static readonly "FIRE_ASPECT_ENCHANTABLE": $TagKey<($Item)>
static readonly "DECORATED_POT_SHERDS": $TagKey<($Item)>
static readonly "SNIFFER_FOOD": $TagKey<($Item)>
static readonly "ACACIA_LOGS": $TagKey<($Item)>
static readonly "VILLAGER_PLANTABLE_SEEDS": $TagKey<($Item)>
static readonly "IRON_ORES": $TagKey<($Item)>
static readonly "COMPASSES": $TagKey<($Item)>
static readonly "LEG_ARMOR_ENCHANTABLE": $TagKey<($Item)>
static readonly "FOX_FOOD": $TagKey<($Item)>
static readonly "STONE_CRAFTING_MATERIALS": $TagKey<($Item)>
static readonly "HORSE_TEMPT_ITEMS": $TagKey<($Item)>
static readonly "WOLF_FOOD": $TagKey<($Item)>
static readonly "SMALL_FLOWERS": $TagKey<($Item)>
static readonly "TERRACOTTA": $TagKey<($Item)>
static readonly "SAPLINGS": $TagKey<($Item)>
static readonly "WOODEN_PRESSURE_PLATES": $TagKey<($Item)>
static readonly "HOES": $TagKey<($Item)>
static readonly "BOATS": $TagKey<($Item)>
static readonly "MANGROVE_LOGS": $TagKey<($Item)>
static readonly "DECORATED_POT_INGREDIENTS": $TagKey<($Item)>
static readonly "CREEPER_DROP_MUSIC_DISCS": $TagKey<($Item)>
static readonly "WOODEN_STAIRS": $TagKey<($Item)>
static readonly "LAPIS_ORES": $TagKey<($Item)>
static readonly "BOOKSHELF_BOOKS": $TagKey<($Item)>
static readonly "PARROT_POISONOUS_FOOD": $TagKey<($Item)>
static readonly "SOUL_FIRE_BASE_BLOCKS": $TagKey<($Item)>
static readonly "CREEPER_IGNITERS": $TagKey<($Item)>
static readonly "SLABS": $TagKey<($Item)>
static readonly "COMPLETES_FIND_TREE_TUTORIAL": $TagKey<($Item)>
static readonly "BIRCH_LOGS": $TagKey<($Item)>
static readonly "CHICKEN_FOOD": $TagKey<($Item)>
static readonly "IGNORED_BY_PIGLIN_BABIES": $TagKey<($Item)>
static readonly "MEAT": $TagKey<($Item)>
static readonly "LECTERN_BOOKS": $TagKey<($Item)>
static readonly "TALL_FLOWERS": $TagKey<($Item)>
static readonly "WOODEN_BUTTONS": $TagKey<($Item)>
static readonly "WOODEN_FENCES": $TagKey<($Item)>
static readonly "BOW_ENCHANTABLE": $TagKey<($Item)>
static readonly "DURABILITY_ENCHANTABLE": $TagKey<($Item)>
static readonly "FISHING_ENCHANTABLE": $TagKey<($Item)>

public static "create"(arg0: $ResourceLocation$$Type): $TagKey<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTags$$Type = ($ItemTags);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTags$$Original = $ItemTags;}
declare module "net.minecraft.tags.TagBuilder" {
import {$TagEntry, $TagEntry$$Type} from "net.minecraft.tags.TagEntry"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Stream} from "java.util.stream.Stream"
import {$ITagBuilderExtension$$Interface} from "net.neoforged.neoforge.common.extensions.ITagBuilderExtension"

export class $TagBuilder implements $ITagBuilderExtension$$Interface {
readonly "entries": $List<($TagEntry)>

constructor()

public "remove"(arg0: $TagEntry$$Type): $TagBuilder
public "replace"(arg0: boolean): $TagBuilder
public "replace"(): $TagBuilder
public "add"(arg0: $TagEntry$$Type): $TagBuilder
public static "create"(): $TagBuilder
public "build"(): $List<($TagEntry)>
public "addElement"(arg0: $ResourceLocation$$Type): $TagBuilder
public "isReplace"(): boolean
public "addTag"(arg0: $ResourceLocation$$Type): $TagBuilder
public "addOptionalTag"(arg0: $ResourceLocation$$Type): $TagBuilder
public "getRemoveEntries"(): $Stream<($TagEntry)>
public "addOptionalElement"(arg0: $ResourceLocation$$Type): $TagBuilder
/**
 * 
 * @deprecated
 */
public "remove"(arg0: $TagEntry$$Type, arg1: StringJS): $TagBuilder
/**
 * 
 * @deprecated
 */
public "removeElement"(arg0: $ResourceLocation$$Type, arg1: StringJS): $TagBuilder
public "removeElement"(arg0: $ResourceLocation$$Type): $TagBuilder
/**
 * 
 * @deprecated
 */
public "removeTag"(arg0: $ResourceLocation$$Type, arg1: StringJS): $TagBuilder
public "removeTag"(arg0: $ResourceLocation$$Type): $TagBuilder
public "getRawBuilder"(): $TagBuilder
get "removeEntries"(): $Stream<($TagEntry)>
get "rawBuilder"(): $TagBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagBuilder$$Type = ($TagBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagBuilder$$Original = $TagBuilder;}
declare module "net.minecraft.tags.TagManager" {
import {$TagManager$LoadResult} from "net.minecraft.tags.TagManager$LoadResult"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$List} from "java.util.List"
import {$ReloadableServerResourcesKJS, $ReloadableServerResourcesKJS$$Type} from "dev.latvian.mods.kubejs.core.ReloadableServerResourcesKJS"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$TagManagerKJS$$Interface} from "dev.latvian.mods.kubejs.core.TagManagerKJS"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"

export class $TagManager implements $PreparableReloadListener$$Interface, $TagManagerKJS$$Interface {
constructor(arg0: $RegistryAccess$$Type)

public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getResult"(): $List<($TagManager$LoadResult<(never)>)>
public "kjs$setResources"(resources: $ReloadableServerResourcesKJS$$Type): void
public "kjs$getResources"(): $ReloadableServerResourcesKJS
public "getName"(): StringJS
get "result"(): $List<($TagManager$LoadResult<(never)>)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagManager$$Type = ($TagManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagManager$$Original = $TagManager;}
declare module "net.minecraft.tags.TagLoader$EntryWithSource" {
import {$TagEntry, $TagEntry$$Type} from "net.minecraft.tags.TagEntry"
import {$Record} from "java.lang.Record"

export class $TagLoader$EntryWithSource extends $Record {
constructor(arg0: $TagEntry$$Type, arg1: StringJS)
constructor(entry: $TagEntry$$Type, source: StringJS, remove: boolean)

public "remove"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "source"(): StringJS
public "entry"(): $TagEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagLoader$EntryWithSource$$Type = ({"entry"?: $TagEntry$$Type, "remove"?: boolean, "source"?: StringJS}) | ([entry?: $TagEntry$$Type, remove?: boolean, source?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagLoader$EntryWithSource$$Original = $TagLoader$EntryWithSource;}
declare module "net.minecraft.tags.TagNetworkSerialization$NetworkPayload" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"

export class $TagNetworkSerialization$NetworkPayload {
public "size"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $TagNetworkSerialization$NetworkPayload
public "applyToRegistry"<T>(arg0: $Registry$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagNetworkSerialization$NetworkPayload$$Type = ($TagNetworkSerialization$NetworkPayload);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagNetworkSerialization$NetworkPayload$$Original = $TagNetworkSerialization$NetworkPayload;}
declare module "net.minecraft.tags.TagEntry$Lookup" {
import {$Collection} from "java.util.Collection"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $TagEntry$Lookup$$Interface<T> {
}

export class $TagEntry$Lookup<T> implements $TagEntry$Lookup$$Interface {
 "element"(arg0: $ResourceLocation$$Type): T
 "tag"(arg0: $ResourceLocation$$Type): $Collection<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagEntry$Lookup$$Type<T> = ($TagEntry$Lookup<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagEntry$Lookup$$Original<T> = $TagEntry$Lookup<(T)>;}
