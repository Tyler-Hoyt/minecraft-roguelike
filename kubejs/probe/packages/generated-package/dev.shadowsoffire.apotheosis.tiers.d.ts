declare module "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Weight" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $TieredWeights$Weight extends $Record {
static "ZERO": $TieredWeights$Weight
static "CODEC": $MapCodec<($TieredWeights$Weight)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($TieredWeights$Weight)>

constructor(weight: integer, quality: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "weight"(): integer
public "quality"(): float
public "getWeight"(arg0: float): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredWeights$Weight$$Type = ({"weight"?: integer, "quality"?: float}) | ([weight?: integer, quality?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TieredWeights$Weight$$Original = $TieredWeights$Weight;}
declare module "dev.shadowsoffire.apotheosis.tiers.TieredWeights" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TieredWeights$Builder} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Builder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$WorldTier, $WorldTier$$Type} from "dev.shadowsoffire.apotheosis.tiers.WorldTier"
import {$TieredWeights$Weight, $TieredWeights$Weight$$Type} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Weight"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $TieredWeights extends $Record {
static readonly "CODEC": $MapCodec<($TieredWeights)>
static "EMPTY": $TieredWeights
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($TieredWeights)>

constructor(weights: $Map$$Type<($WorldTier$$Type), ($TieredWeights$Weight$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"(): $TieredWeights$Builder
public static "onlyFor"(arg0: $WorldTier$$Type, arg1: integer, arg2: float): $TieredWeights
public "weights"(): $Map<($WorldTier), ($TieredWeights$Weight)>
public static "forTiersAbove"(arg0: $WorldTier$$Type, arg1: integer, arg2: float): $TieredWeights
public static "forAllTiers"(arg0: integer, arg1: float): $TieredWeights
public "getWeight"(arg0: $WorldTier$$Type, arg1: float): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredWeights$$Type = ({"weights"?: $Map$$Type<($WorldTier$$Type), ($TieredWeights$Weight$$Type)>}) | ([weights?: $Map$$Type<($WorldTier$$Type), ($TieredWeights$Weight$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TieredWeights$$Original = $TieredWeights;}
declare module "dev.shadowsoffire.apotheosis.tiers.WorldTier" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $WorldTier extends $Enum<($WorldTier)> implements $StringRepresentable$$Interface {
static readonly "HAVEN": $WorldTier
static readonly "CODEC": $Codec<($WorldTier)>
static readonly "ASCENT": $WorldTier
static readonly "BY_ID": $IntFunction<($WorldTier)>
static readonly "SUMMIT": $WorldTier
static readonly "PINNACLE": $WorldTier
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($WorldTier)>
static readonly "FRONTIER": $WorldTier

public static "values"(): ($WorldTier)[]
public static "valueOf"(arg0: StringJS): $WorldTier
public static "isTutorialActive"(arg0: $Player$$Type): boolean
public "getSerializedName"(): StringJS
public static "isUnlocked"(arg0: $Player$$Type, arg1: $WorldTier$$Type): boolean
public static "setTier"(arg0: $Player$$Type, arg1: $WorldTier$$Type): void
public "toComponent"(): $MutableComponent
public static "getTier"(arg0: $Player$$Type): $WorldTier
public static "mapCodec"<T>(arg0: $Codec$$Type<(T)>): $MapCodec<($Map<($WorldTier), (T)>)>
public "getUnlockAdvancement"(): $ResourceLocation
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "unlockAdvancement"(): $ResourceLocation
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTier$$Type = (("haven") | ("frontier") | ("ascent") | ("summit") | ("pinnacle"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldTier$$Original = $WorldTier;}
declare module "dev.shadowsoffire.apotheosis.tiers.Constraints$Builder" {
import {$Constraints} from "dev.shadowsoffire.apotheosis.tiers.Constraints"
import {$WorldTier$$Type} from "dev.shadowsoffire.apotheosis.tiers.WorldTier"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"

export class $Constraints$Builder {
constructor()

public "dimensions"(...arg0: ($ResourceKey$$Type<($Level$$Type)>)[]): $Constraints$Builder
public "build"(): $Constraints
public "biomes"(arg0: $HolderSet$$Type<($Biome)>): $Constraints$Builder
public "biomes"(arg0: $HolderLookup$RegistryLookup$$Type<($Biome$$Type)>, arg1: $TagKey$$Type<($Biome)>): $Constraints$Builder
public "tiers"(...arg0: ($WorldTier$$Type)[]): $Constraints$Builder
public "gameStages"(...arg0: (StringJS)[]): $Constraints$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constraints$Builder$$Type = ($Constraints$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Constraints$Builder$$Original = $Constraints$Builder;}
declare module "dev.shadowsoffire.apotheosis.tiers.Constraints$Constrained" {
import {$Constraints, $Constraints$$Type} from "dev.shadowsoffire.apotheosis.tiers.Constraints"

export interface $Constraints$Constrained$$Interface {

(): $Constraints$$Type
}

export class $Constraints$Constrained implements $Constraints$Constrained$$Interface {
 "constraints"(): $Constraints
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constraints$Constrained$$Type = (() => $Constraints$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Constraints$Constrained$$Original = $Constraints$Constrained;}
declare module "dev.shadowsoffire.apotheosis.tiers.GenContext" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$WorldTier, $WorldTier$$Type} from "dev.shadowsoffire.apotheosis.tiers.WorldTier"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Record} from "java.lang.Record"

export class $GenContext extends $Record {
constructor(rand: $RandomSource$$Type, tier: $WorldTier$$Type, luck: float, dimension: $ResourceKey$$Type<($Level)>, biome: $Holder$$Type<($Biome)>, stages: $Set$$Type<(StringJS)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "dummy"(arg0: $RandomSource$$Type): $GenContext
public static "standalone"(arg0: $RandomSource$$Type, arg1: $WorldTier$$Type, arg2: float, arg3: $ServerLevel$$Type, arg4: $BlockPos$$Type): $GenContext
public "rand"(): $RandomSource
public static "forLoot"(arg0: $LootContext$$Type): $GenContext
public "biome"(): $Holder<($Biome)>
public "tier"(): $WorldTier
public "dimension"(): $ResourceKey<($Level)>
public static "findPlayer"(arg0: $LootContext$$Type): $Player
public "luck"(): float
public "stages"(): $Set<(StringJS)>
public static "forPlayer"(arg0: $Player$$Type): $GenContext
public static "forPlayer"(arg0: $RandomSource$$Type, arg1: $Player$$Type): $GenContext
public static "forPlayerAtPos"(arg0: $RandomSource$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type): $GenContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenContext$$Type = ({"biome"?: $Holder$$Type<($Biome)>, "luck"?: float, "dimension"?: $ResourceKey$$Type<($Level)>, "stages"?: $Set$$Type<(StringJS)>, "rand"?: $RandomSource$$Type, "tier"?: $WorldTier$$Type}) | ([biome?: $Holder$$Type<($Biome)>, luck?: float, dimension?: $ResourceKey$$Type<($Level)>, stages?: $Set$$Type<(StringJS)>, rand?: $RandomSource$$Type, tier?: $WorldTier$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenContext$$Original = $GenContext;}
declare module "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Builder" {
import {$WorldTier$$Type} from "dev.shadowsoffire.apotheosis.tiers.WorldTier"
import {$TieredWeights$Weight$$Type} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Weight"
import {$TieredWeights} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights"

export class $TieredWeights$Builder {
constructor()

public "with"(arg0: $WorldTier$$Type, arg1: $TieredWeights$Weight$$Type): $TieredWeights$Builder
public "with"(arg0: $WorldTier$$Type, arg1: integer, arg2: float): $TieredWeights$Builder
public "build"(): $TieredWeights
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredWeights$Builder$$Type = ($TieredWeights$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TieredWeights$Builder$$Original = $TieredWeights$Builder;}
declare module "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Weighted" {
import {$WorldTier$$Type} from "dev.shadowsoffire.apotheosis.tiers.WorldTier"
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$Weight} from "net.minecraft.util.random.Weight"
import {$TieredWeights, $TieredWeights$$Type} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights"

export interface $TieredWeights$Weighted$$Interface {

(): $TieredWeights$$Type
}

export class $TieredWeights$Weighted implements $TieredWeights$Weighted$$Interface {
static readonly "SAFE_ZERO": $Weight

static "wrap"<T extends $TieredWeights$Weighted>(arg0: T, arg1: $WorldTier$$Type, arg2: float): $WeightedEntry$Wrapper<(T)>
 "wrap"<T extends $TieredWeights$Weighted>(arg0: $WorldTier$$Type, arg1: float): $WeightedEntry$Wrapper<(T)>
 "weights"(): $TieredWeights
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredWeights$Weighted$$Type = (() => $TieredWeights$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TieredWeights$Weighted$$Original = $TieredWeights$Weighted;}
declare module "dev.shadowsoffire.apotheosis.tiers.Constraints" {
import {$GenContext$$Type} from "dev.shadowsoffire.apotheosis.tiers.GenContext"
import {$WorldTier, $WorldTier$$Type} from "dev.shadowsoffire.apotheosis.tiers.WorldTier"
import {$Predicate} from "java.util.function.Predicate"
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Constraints$Builder} from "dev.shadowsoffire.apotheosis.tiers.Constraints$Builder"
import {$Constraints$Constrained} from "dev.shadowsoffire.apotheosis.tiers.Constraints$Constrained"
import {$Record} from "java.lang.Record"

export class $Constraints extends $Record {
static readonly "CODEC": $Codec<($Constraints)>
static readonly "EMPTY": $Constraints

constructor(tiers: $Set$$Type<($WorldTier$$Type)>, dimensions: $Set$$Type<($ResourceKey$$Type<($Level$$Type)>)>, biomes: $HolderSet$$Type<($Biome)>, gameStages: $Set$$Type<(StringJS)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $GenContext$$Type): boolean
public static "builder"(): $Constraints$Builder
public "dimensions"(): $Set<($ResourceKey<($Level)>)>
public static "eval"<T extends $Constraints$Constrained>(arg0: $GenContext$$Type): $Predicate<(T)>
public "biomes"(): $HolderSet<($Biome)>
public "tiers"(): $Set<($WorldTier)>
public "gameStages"(): $Set<(StringJS)>
public static "forBiomes"(arg0: $HolderLookup$RegistryLookup$$Type<($Biome$$Type)>, arg1: $TagKey$$Type<($Biome)>): $Constraints
public static "forDimension"(arg0: $ResourceKey$$Type<($Level)>): $Constraints
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constraints$$Type = ({"dimensions"?: $Set$$Type<($ResourceKey$$Type<($Level$$Type)>)>, "biomes"?: $HolderSet$$Type<($Biome)>, "tiers"?: $Set$$Type<($WorldTier$$Type)>, "gameStages"?: $Set$$Type<(StringJS)>}) | ([dimensions?: $Set$$Type<($ResourceKey$$Type<($Level$$Type)>)>, biomes?: $HolderSet$$Type<($Biome)>, tiers?: $Set$$Type<($WorldTier$$Type)>, gameStages?: $Set$$Type<(StringJS)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Constraints$$Original = $Constraints;}
