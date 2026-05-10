declare module "net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$ResourceOrTagKeyArgument, $ResourceOrTagKeyArgument$$Type} from "net.minecraft.commands.arguments.ResourceOrTagKeyArgument"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ResourceOrTagKeyArgument$Info$Template, $ResourceOrTagKeyArgument$Info$Template$$Type} from "net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Info$Template"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ResourceOrTagKeyArgument$Info<T> implements $ArgumentTypeInfo$$Interface<($ResourceOrTagKeyArgument<(T)>), ($ResourceOrTagKeyArgument$Info$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $ResourceOrTagKeyArgument$$Type<(T)>): $ResourceOrTagKeyArgument$Info$Template
public "serializeToNetwork"(arg0: $ResourceOrTagKeyArgument$Info$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $ResourceOrTagKeyArgument$Info$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagKeyArgument$Info$$Type<T> = ($ResourceOrTagKeyArgument$Info<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceOrTagKeyArgument$Info$$Original<T> = $ResourceOrTagKeyArgument$Info<(T)>;}
declare module "net.minecraft.commands.arguments.ResourceOrTagArgument" {
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ResourceOrTagArgument$Result} from "net.minecraft.commands.arguments.ResourceOrTagArgument$Result"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $ResourceOrTagArgument<T> implements $ArgumentType$$Interface<($ResourceOrTagArgument$Result<(T)>)> {
constructor(arg0: $CommandBuildContext$$Type, arg1: $ResourceKey$$Type<($Registry<(T)>)>)

public "parse"(arg0: $StringReader$$Type): any
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "resourceOrTag"<T>(arg0: $CommandBuildContext$$Type, arg1: $ResourceKey$$Type<($Registry<(T)>)>): $ResourceOrTagArgument<(T)>
public static "getResourceOrTag"<T>(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>): $ResourceOrTagArgument$Result<(T)>
public "getExamples"(): $Collection<(StringJS)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $ResourceOrTagArgument$Result<(T)>
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagArgument$$Type<T> = ($ResourceOrTagArgument<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceOrTagArgument$$Original<T> = $ResourceOrTagArgument<(T)>;}
declare module "net.minecraft.commands.arguments.TimeArgument$Info$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$TimeArgument} from "net.minecraft.commands.arguments.TimeArgument"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TimeArgument$Info$Template implements $ArgumentTypeInfo$Template$$Interface<($TimeArgument)> {
public "type"(): $ArgumentTypeInfo<($TimeArgument), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $TimeArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeArgument$Info$Template$$Type = ($TimeArgument$Info$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimeArgument$Info$Template$$Original = $TimeArgument$Info$Template;}
declare module "net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Result" {
import {$Optional} from "java.util.Optional"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $ResourceOrTagKeyArgument$Result$$Interface<T> extends $Predicate$$Interface<($Holder<(T)>)> {
}

export class $ResourceOrTagKeyArgument$Result<T> implements $ResourceOrTagKeyArgument$Result$$Interface {
 "asPrintable"(): StringJS
 "cast"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $Optional<($ResourceOrTagKeyArgument$Result<(E)>)>
 "unwrap"(): $Either<($ResourceKey<(T)>), ($TagKey<(T)>)>
 "test"(arg0: $Holder$$Type<(T)>): boolean
 "or"(arg0: $Predicate$$Type<($Holder<(T)>)>): $Predicate<($Holder<(T)>)>
 "negate"(): $Predicate<($Holder<(T)>)>
 "and"(arg0: $Predicate$$Type<($Holder<(T)>)>): $Predicate<($Holder<(T)>)>
static "not"<T>(arg0: $Predicate$$Type<($Holder<(T)>)>): $Predicate<($Holder<(T)>)>
static "isEqual"<T>(arg0: any): $Predicate<($Holder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagKeyArgument$Result$$Type<T> = ($ResourceOrTagKeyArgument$Result<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceOrTagKeyArgument$Result$$Original<T> = $ResourceOrTagKeyArgument$Result<(T)>;}
declare module "net.minecraft.commands.arguments.EntityArgument$Info$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$EntityArgument} from "net.minecraft.commands.arguments.EntityArgument"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $EntityArgument$Info$Template implements $ArgumentTypeInfo$Template$$Interface<($EntityArgument)> {
public "type"(): $ArgumentTypeInfo<($EntityArgument), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $EntityArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityArgument$Info$Template$$Type = ($EntityArgument$Info$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityArgument$Info$Template$$Original = $EntityArgument$Info$Template;}
declare module "net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Info$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ResourceOrTagKeyArgument} from "net.minecraft.commands.arguments.ResourceOrTagKeyArgument"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ResourceOrTagKeyArgument$Info$Template implements $ArgumentTypeInfo$Template$$Interface<($ResourceOrTagKeyArgument<(T)>)> {
public "type"(): $ArgumentTypeInfo<($ResourceOrTagKeyArgument<(T)>), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $ResourceOrTagKeyArgument<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagKeyArgument$Info$Template$$Type = ($ResourceOrTagKeyArgument$Info$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceOrTagKeyArgument$Info$Template$$Original = $ResourceOrTagKeyArgument$Info$Template;}
declare module "net.minecraft.commands.arguments.ResourceKeyArgument" {
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StructureTemplatePool} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $ResourceKeyArgument<T> implements $ArgumentType$$Interface<($ResourceKey<(T)>)> {
constructor(arg0: $ResourceKey$$Type<($Registry<(T)>)>)

public static "key"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $ResourceKeyArgument<(T)>
public "parse"(arg0: $StringReader$$Type): $ResourceKey<(T)>
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "getStructure"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Holder$Reference<($Structure)>
public "getExamples"(): $Collection<(StringJS)>
public static "getConfiguredFeature"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Holder$Reference<($ConfiguredFeature<(never), (never)>)>
public static "getStructureTemplatePool"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Holder$Reference<($StructureTemplatePool)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $ResourceKey<(T)>
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceKeyArgument$$Type<T> = ($ResourceKeyArgument<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceKeyArgument$$Original<T> = $ResourceKeyArgument<(T)>;}
declare module "net.minecraft.commands.arguments.EntityArgument" {
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$SimpleCommandExceptionType} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ServerPlayer} from "net.minecraft.server.level.ServerPlayer"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$EntitySelector} from "net.minecraft.commands.arguments.selector.EntitySelector"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $EntityArgument implements $ArgumentType$$Interface<($EntitySelector)> {
static readonly "ERROR_SELECTORS_NOT_ALLOWED": $SimpleCommandExceptionType
static readonly "NO_PLAYERS_FOUND": $SimpleCommandExceptionType
static readonly "NO_ENTITIES_FOUND": $SimpleCommandExceptionType
static readonly "ERROR_NOT_SINGLE_ENTITY": $SimpleCommandExceptionType
static readonly "ERROR_NOT_SINGLE_PLAYER": $SimpleCommandExceptionType
static readonly "ERROR_ONLY_PLAYERS_ALLOWED": $SimpleCommandExceptionType

public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $EntitySelector
public "parse"(arg0: $StringReader$$Type): any
public static "getEntity"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Entity
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "getOptionalPlayers"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Collection<($ServerPlayer)>
public static "getEntities"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Collection<($Entity)>
public static "entities"(): $EntityArgument
public static "entity"(): $EntityArgument
public "getExamples"(): $Collection<(StringJS)>
public static "players"(): $EntityArgument
public static "getOptionalEntities"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Collection<($Entity)>
public static "getPlayers"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Collection<($ServerPlayer)>
public static "getPlayer"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $ServerPlayer
public static "player"(): $EntityArgument
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityArgument$$Type = ($EntityArgument);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityArgument$$Original = $EntityArgument;}
declare module "net.minecraft.commands.arguments.ArgumentSignatures$Entry" {
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $ArgumentSignatures$Entry extends $Record {
constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: StringJS, arg1: $MessageSignature$$Type)

public "signature"(): $MessageSignature
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentSignatures$Entry$$Type = ({"signature"?: $MessageSignature$$Type, "name"?: StringJS}) | ([signature?: $MessageSignature$$Type, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentSignatures$Entry$$Original = $ArgumentSignatures$Entry;}
declare module "net.minecraft.commands.arguments.ResourceArgument$Info$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ResourceArgument} from "net.minecraft.commands.arguments.ResourceArgument"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ResourceArgument$Info$Template implements $ArgumentTypeInfo$Template$$Interface<($ResourceArgument<(T)>)> {
public "type"(): $ArgumentTypeInfo<($ResourceArgument<(T)>), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $ResourceArgument<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceArgument$Info$Template$$Type = ($ResourceArgument$Info$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceArgument$Info$Template$$Original = $ResourceArgument$Info$Template;}
declare module "net.minecraft.commands.arguments.ResourceArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ResourceArgument$Info$Template, $ResourceArgument$Info$Template$$Type} from "net.minecraft.commands.arguments.ResourceArgument$Info$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ResourceArgument, $ResourceArgument$$Type} from "net.minecraft.commands.arguments.ResourceArgument"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ResourceArgument$Info<T> implements $ArgumentTypeInfo$$Interface<($ResourceArgument<(T)>), ($ResourceArgument$Info$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $ResourceArgument$$Type<(T)>): $ResourceArgument$Info$Template
public "serializeToNetwork"(arg0: $ResourceArgument$Info$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $ResourceArgument$Info$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceArgument$Info$$Type<T> = ($ResourceArgument$Info<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceArgument$Info$$Original<T> = $ResourceArgument$Info<(T)>;}
declare module "net.minecraft.commands.arguments.ResourceArgument" {
import {$Dynamic3CommandExceptionType} from "com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Dynamic2CommandExceptionType} from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Enchantment} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$EntityType} from "net.minecraft.world.entity.EntityType"

export class $ResourceArgument<T> implements $ArgumentType$$Interface<($Holder$Reference<(T)>)> {
static readonly "ERROR_UNKNOWN_RESOURCE": $Dynamic2CommandExceptionType
static readonly "ERROR_INVALID_RESOURCE_TYPE": $Dynamic3CommandExceptionType

constructor(arg0: $CommandBuildContext$$Type, arg1: $ResourceKey$$Type<($Registry<(T)>)>)

public static "getResource"<T>(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>): $Holder$Reference<(T)>
public "parse"(arg0: $StringReader$$Type): any
public static "getAttribute"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Holder$Reference<($Attribute)>
public static "resource"<T>(arg0: $CommandBuildContext$$Type, arg1: $ResourceKey$$Type<($Registry<(T)>)>): $ResourceArgument<(T)>
public static "getEntityType"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Holder$Reference<($EntityType<(never)>)>
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "getMobEffect"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Holder$Reference<($MobEffect)>
public static "getEnchantment"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Holder$Reference<($Enchantment)>
public static "getStructure"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Holder$Reference<($Structure)>
public "getExamples"(): $Collection<(StringJS)>
public static "getConfiguredFeature"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Holder$Reference<($ConfiguredFeature<(never), (never)>)>
public static "getSummonableEntityType"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Holder$Reference<($EntityType<(never)>)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $Holder$Reference<(T)>
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceArgument$$Type<T> = ($ResourceArgument<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceArgument$$Original<T> = $ResourceArgument<(T)>;}
declare module "net.minecraft.commands.arguments.ArgumentSignatures$Signer" {
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"

export interface $ArgumentSignatures$Signer$$Interface {

(arg0: StringJS): $MessageSignature$$Type
}

export class $ArgumentSignatures$Signer implements $ArgumentSignatures$Signer$$Interface {
 "sign"(arg0: StringJS): $MessageSignature
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentSignatures$Signer$$Type = ((arg0: StringJS) => $MessageSignature$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentSignatures$Signer$$Original = $ArgumentSignatures$Signer;}
declare module "net.minecraft.commands.arguments.ScoreHolderArgument$Result" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export interface $ScoreHolderArgument$Result$$Interface {

(arg0: $CommandSourceStack, arg1: $Supplier<($Collection$$Type<($ScoreHolder$$Type)>)>): $Collection$$Type<($ScoreHolder$$Type)>
}

export class $ScoreHolderArgument$Result implements $ScoreHolderArgument$Result$$Interface {
 "getNames"(arg0: $CommandSourceStack$$Type, arg1: $Supplier$$Type<($Collection$$Type<($ScoreHolder$$Type)>)>): $Collection<($ScoreHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScoreHolderArgument$Result$$Type = ((arg0: $CommandSourceStack, arg1: $Supplier<($Collection<($ScoreHolder)>)>) => $Collection$$Type<($ScoreHolder$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScoreHolderArgument$Result$$Original = $ScoreHolderArgument$Result;}
declare module "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Enum} from "java.lang.Enum"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $EntityAnchorArgument$Anchor extends $Enum<($EntityAnchorArgument$Anchor)> {
static readonly "EYES": $EntityAnchorArgument$Anchor
static readonly "FEET": $EntityAnchorArgument$Anchor

public static "values"(): ($EntityAnchorArgument$Anchor)[]
public static "valueOf"(arg0: StringJS): $EntityAnchorArgument$Anchor
public "apply"(arg0: $CommandSourceStack$$Type): $Vec3
public "apply"(arg0: $Entity$$Type): $Vec3
public static "getByName"(arg0: StringJS): $EntityAnchorArgument$Anchor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAnchorArgument$Anchor$$Type = (("feet") | ("eyes"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAnchorArgument$Anchor$$Original = $EntityAnchorArgument$Anchor;}
declare module "net.minecraft.commands.arguments.ResourceOrTagArgument$Result" {
import {$Optional} from "java.util.Optional"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderSet$Named} from "net.minecraft.core.HolderSet$Named"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $ResourceOrTagArgument$Result$$Interface<T> extends $Predicate$$Interface<($Holder<(T)>)> {
}

export class $ResourceOrTagArgument$Result<T> implements $ResourceOrTagArgument$Result$$Interface {
 "asPrintable"(): StringJS
 "cast"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $Optional<($ResourceOrTagArgument$Result<(E)>)>
 "unwrap"(): $Either<($Holder$Reference<(T)>), ($HolderSet$Named<(T)>)>
 "test"(arg0: $Holder$$Type<(T)>): boolean
 "or"(arg0: $Predicate$$Type<($Holder<(T)>)>): $Predicate<($Holder<(T)>)>
 "negate"(): $Predicate<($Holder<(T)>)>
 "and"(arg0: $Predicate$$Type<($Holder<(T)>)>): $Predicate<($Holder<(T)>)>
static "not"<T>(arg0: $Predicate$$Type<($Holder<(T)>)>): $Predicate<($Holder<(T)>)>
static "isEqual"<T>(arg0: any): $Predicate<($Holder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagArgument$Result$$Type<T> = ($ResourceOrTagArgument$Result<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceOrTagArgument$Result$$Original<T> = $ResourceOrTagArgument$Result<(T)>;}
declare module "net.minecraft.commands.arguments.ScoreHolderArgument$Info$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ScoreHolderArgument} from "net.minecraft.commands.arguments.ScoreHolderArgument"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ScoreHolderArgument$Info$Template implements $ArgumentTypeInfo$Template$$Interface<($ScoreHolderArgument)> {
public "type"(): $ArgumentTypeInfo<($ScoreHolderArgument), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $ScoreHolderArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScoreHolderArgument$Info$Template$$Type = ($ScoreHolderArgument$Info$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScoreHolderArgument$Info$Template$$Original = $ScoreHolderArgument$Info$Template;}
declare module "net.minecraft.commands.arguments.ResourceOrTagKeyArgument" {
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$ResourceOrTagKeyArgument$Result} from "net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Result"
import {$DynamicCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $ResourceOrTagKeyArgument<T> implements $ArgumentType$$Interface<($ResourceOrTagKeyArgument$Result<(T)>)> {
constructor(arg0: $ResourceKey$$Type<($Registry<(T)>)>)

public "parse"(arg0: $StringReader$$Type): any
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "resourceOrTagKey"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $ResourceOrTagKeyArgument<(T)>
public "getExamples"(): $Collection<(StringJS)>
public static "getResourceOrTagKey"<T>(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>, arg3: $DynamicCommandExceptionType$$Type): $ResourceOrTagKeyArgument$Result<(T)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $ResourceOrTagKeyArgument$Result<(T)>
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagKeyArgument$$Type<T> = ($ResourceOrTagKeyArgument<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceOrTagKeyArgument$$Original<T> = $ResourceOrTagKeyArgument<(T)>;}
declare module "net.minecraft.commands.arguments.ArgumentSignatures" {
import {$SignableCommand$$Type} from "net.minecraft.network.chat.SignableCommand"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$ArgumentSignatures$Signer$$Type} from "net.minecraft.commands.arguments.ArgumentSignatures$Signer"
import {$ArgumentSignatures$Entry, $ArgumentSignatures$Entry$$Type} from "net.minecraft.commands.arguments.ArgumentSignatures$Entry"
import {$Record} from "java.lang.Record"

export class $ArgumentSignatures extends $Record {
static readonly "EMPTY": $ArgumentSignatures

constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $List$$Type<($ArgumentSignatures$Entry$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "entries"(): $List<($ArgumentSignatures$Entry)>
public static "signCommand"(arg0: $SignableCommand$$Type<(never)>, arg1: $ArgumentSignatures$Signer$$Type): $ArgumentSignatures
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentSignatures$$Type = ({"entries"?: $List$$Type<($ArgumentSignatures$Entry$$Type)>}) | ([entries?: $List$$Type<($ArgumentSignatures$Entry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentSignatures$$Original = $ArgumentSignatures;}
declare module "net.minecraft.commands.arguments.ScoreHolderArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$ScoreHolderArgument$Info$Template, $ScoreHolderArgument$Info$Template$$Type} from "net.minecraft.commands.arguments.ScoreHolderArgument$Info$Template"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ScoreHolderArgument, $ScoreHolderArgument$$Type} from "net.minecraft.commands.arguments.ScoreHolderArgument"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ScoreHolderArgument$Info implements $ArgumentTypeInfo$$Interface<($ScoreHolderArgument), ($ScoreHolderArgument$Info$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $ScoreHolderArgument$$Type): $ScoreHolderArgument$Info$Template
public "serializeToNetwork"(arg0: $ScoreHolderArgument$Info$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $ScoreHolderArgument$Info$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScoreHolderArgument$Info$$Type = ($ScoreHolderArgument$Info);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScoreHolderArgument$Info$$Original = $ScoreHolderArgument$Info;}
declare module "net.minecraft.commands.arguments.ResourceKeyArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ResourceKeyArgument, $ResourceKeyArgument$$Type} from "net.minecraft.commands.arguments.ResourceKeyArgument"
import {$ResourceKeyArgument$Info$Template, $ResourceKeyArgument$Info$Template$$Type} from "net.minecraft.commands.arguments.ResourceKeyArgument$Info$Template"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ResourceKeyArgument$Info<T> implements $ArgumentTypeInfo$$Interface<($ResourceKeyArgument<(T)>), ($ResourceKeyArgument$Info$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $ResourceKeyArgument$$Type<(T)>): $ResourceKeyArgument$Info$Template
public "serializeToNetwork"(arg0: $ResourceKeyArgument$Info$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $ResourceKeyArgument$Info$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceKeyArgument$Info$$Type<T> = ($ResourceKeyArgument$Info<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceKeyArgument$Info$$Original<T> = $ResourceKeyArgument$Info<(T)>;}
declare module "net.minecraft.commands.arguments.selector.EntitySelector" {
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ServerPlayer} from "net.minecraft.server.level.ServerPlayer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntitySelector {
static readonly "ORDER_ARBITRARY": $BiConsumer<($Vec3), ($List<($Entity)>)>
readonly "contextFreePredicates": $List<($Predicate<($Entity)>)>
static readonly "INFINITE": integer

constructor(arg0: integer, arg1: boolean, arg2: boolean, arg3: $List$$Type<($Predicate$$Type<($Entity$$Type)>)>, arg4: $MinMaxBounds$Doubles$$Type, arg5: $Function$$Type<($Vec3), ($Vec3$$Type)>, arg6: $AABB$$Type, arg7: $BiConsumer$$Type<($Vec3), ($List<($Entity)>)>, arg8: boolean, arg9: StringJS, arg10: $UUID$$Type, arg11: $EntityType$$Type<(never)>, arg12: boolean)

public "includesEntities"(): boolean
public "getMaxResults"(): integer
public "findSingleEntity"(arg0: $CommandSourceStack$$Type): $Entity
public "findPlayers"(arg0: $CommandSourceStack$$Type): $List<($ServerPlayer)>
public "isSelfSelector"(): boolean
public "findEntities"(arg0: $CommandSourceStack$$Type): $List<($Entity)>
public "findSinglePlayer"(arg0: $CommandSourceStack$$Type): $ServerPlayer
public static "joinNames"(arg0: $List$$Type<($Entity$$Type)>): $Component
public "isWorldLimited"(): boolean
public "usesSelector"(): boolean
get "maxResults"(): integer
get "selfSelector"(): boolean
get "worldLimited"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySelector$$Type = ($EntitySelector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntitySelector$$Original = $EntitySelector;}
declare module "net.minecraft.commands.arguments.ResourceOrTagArgument$Info$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ResourceOrTagArgument} from "net.minecraft.commands.arguments.ResourceOrTagArgument"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ResourceOrTagArgument$Info$Template implements $ArgumentTypeInfo$Template$$Interface<($ResourceOrTagArgument<(T)>)> {
public "type"(): $ArgumentTypeInfo<($ResourceOrTagArgument<(T)>), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $ResourceOrTagArgument<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagArgument$Info$Template$$Type = ($ResourceOrTagArgument$Info$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceOrTagArgument$Info$Template$$Original = $ResourceOrTagArgument$Info$Template;}
declare module "net.minecraft.commands.arguments.ScoreHolderArgument" {
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$ScoreHolderArgument$Result} from "net.minecraft.commands.arguments.ScoreHolderArgument$Result"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$SuggestionProvider} from "com.mojang.brigadier.suggestion.SuggestionProvider"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $ScoreHolderArgument implements $ArgumentType$$Interface<($ScoreHolderArgument$Result)> {
static readonly "SUGGEST_SCORE_HOLDERS": $SuggestionProvider<($CommandSourceStack)>

constructor(arg0: boolean)

public static "getName"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $ScoreHolder
public "parse"(arg0: $StringReader$$Type): $ScoreHolderArgument$Result
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $ScoreHolderArgument$Result
public static "scoreHolders"(): $ScoreHolderArgument
public static "scoreHolder"(): $ScoreHolderArgument
public static "getNamesWithDefaultWildcard"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Collection<($ScoreHolder)>
public static "getNames"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS, arg2: $Supplier$$Type<($Collection$$Type<($ScoreHolder$$Type)>)>): $Collection<($ScoreHolder)>
public static "getNames"(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS): $Collection<($ScoreHolder)>
public "getExamples"(): $Collection<(StringJS)>
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScoreHolderArgument$$Type = ($ScoreHolderArgument);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScoreHolderArgument$$Original = $ScoreHolderArgument;}
declare module "net.minecraft.commands.arguments.ResourceOrTagArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ResourceOrTagArgument, $ResourceOrTagArgument$$Type} from "net.minecraft.commands.arguments.ResourceOrTagArgument"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ResourceOrTagArgument$Info$Template, $ResourceOrTagArgument$Info$Template$$Type} from "net.minecraft.commands.arguments.ResourceOrTagArgument$Info$Template"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ResourceOrTagArgument$Info<T> implements $ArgumentTypeInfo$$Interface<($ResourceOrTagArgument<(T)>), ($ResourceOrTagArgument$Info$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $ResourceOrTagArgument$$Type<(T)>): $ResourceOrTagArgument$Info$Template
public "serializeToNetwork"(arg0: $ResourceOrTagArgument$Info$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $ResourceOrTagArgument$Info$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceOrTagArgument$Info$$Type<T> = ($ResourceOrTagArgument$Info<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceOrTagArgument$Info$$Original<T> = $ResourceOrTagArgument$Info<(T)>;}
declare module "net.minecraft.commands.arguments.TimeArgument" {
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $TimeArgument implements $ArgumentType$$Interface<(integer)> {
public static "time"(): $TimeArgument
public static "time"(arg0: integer): $TimeArgument
public "parse"(arg0: $StringReader$$Type): any
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(StringJS)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): integer
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeArgument$$Type = ($TimeArgument);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimeArgument$$Original = $TimeArgument;}
declare module "net.minecraft.commands.arguments.TimeArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$TimeArgument$Info$Template, $TimeArgument$Info$Template$$Type} from "net.minecraft.commands.arguments.TimeArgument$Info$Template"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$TimeArgument, $TimeArgument$$Type} from "net.minecraft.commands.arguments.TimeArgument"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TimeArgument$Info implements $ArgumentTypeInfo$$Interface<($TimeArgument), ($TimeArgument$Info$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $TimeArgument$$Type): $TimeArgument$Info$Template
public "serializeToNetwork"(arg0: $TimeArgument$Info$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $TimeArgument$Info$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeArgument$Info$$Type = ($TimeArgument$Info);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimeArgument$Info$$Original = $TimeArgument$Info;}
declare module "net.minecraft.commands.arguments.EntityArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$EntityArgument, $EntityArgument$$Type} from "net.minecraft.commands.arguments.EntityArgument"
import {$EntityArgument$Info$Template, $EntityArgument$Info$Template$$Type} from "net.minecraft.commands.arguments.EntityArgument$Info$Template"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $EntityArgument$Info implements $ArgumentTypeInfo$$Interface<($EntityArgument), ($EntityArgument$Info$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $EntityArgument$$Type): $EntityArgument$Info$Template
public "serializeToNetwork"(arg0: $EntityArgument$Info$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $EntityArgument$Info$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityArgument$Info$$Type = ($EntityArgument$Info);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityArgument$Info$$Original = $EntityArgument$Info;}
declare module "net.minecraft.commands.arguments.ResourceKeyArgument$Info$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ResourceKeyArgument} from "net.minecraft.commands.arguments.ResourceKeyArgument"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ResourceKeyArgument$Info$Template implements $ArgumentTypeInfo$Template$$Interface<($ResourceKeyArgument<(T)>)> {
public "type"(): $ArgumentTypeInfo<($ResourceKeyArgument<(T)>), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $ResourceKeyArgument<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceKeyArgument$Info$Template$$Type = ($ResourceKeyArgument$Info$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceKeyArgument$Info$Template$$Original = $ResourceKeyArgument$Info$Template;}
