declare module "dev.ftb.mods.ftbteams.api.client.KnownClientPlayer" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Record} from "java.lang.Record"

export class $KnownClientPlayer extends $Record {
constructor(id: $UUID$$Type, name: StringJS, online: boolean, teamId: $UUID$$Type, profile: $GameProfile$$Type, extraData: $CompoundTag$$Type)

public "name"(): StringJS
public "profile"(): $GameProfile
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $UUID
public "isOnlineAndNotInParty"(): boolean
public "extraData"(): $CompoundTag
public "isInternalTeam"(): boolean
public "online"(): boolean
public "teamId"(): $UUID
get "onlineAndNotInParty"(): boolean
get "internalTeam"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnownClientPlayer$$Type = ({"profile"?: $GameProfile$$Type, "id"?: $UUID$$Type, "teamId"?: $UUID$$Type, "name"?: StringJS, "extraData"?: $CompoundTag$$Type, "online"?: boolean}) | ([profile?: $GameProfile$$Type, id?: $UUID$$Type, teamId?: $UUID$$Type, name?: StringJS, extraData?: $CompoundTag$$Type, online?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KnownClientPlayer$$Original = $KnownClientPlayer;}
declare module "dev.ftb.mods.ftbteams.api.TeamManager" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$Team} from "dev.ftb.mods.ftbteams.api.Team"

export interface $TeamManager$$Interface {
get "id"(): $UUID
get "server"(): $MinecraftServer
get "teams"(): $Collection<($Team)>
get "extraData"(): $CompoundTag
get "knownPlayerTeams"(): $Map<($UUID), ($Team)>
}

export class $TeamManager implements $TeamManager$$Interface {
 "getId"(): $UUID
 "markDirty"(): void
 "getServer"(): $MinecraftServer
 "getTeams"(): $Collection<($Team)>
 "getTeamByID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getExtraData"(): $CompoundTag
 "getKnownPlayerTeams"(): $Map<($UUID), ($Team)>
 "getPlayerTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
 "arePlayersInSameTeam"(arg0: $UUID$$Type, arg1: $UUID$$Type): boolean
 "getTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getTeamForPlayer"(arg0: $ServerPlayer$$Type): $Optional<($Team)>
 "getTeamByName"(arg0: StringJS): $Optional<($Team)>
 "createPartyTeam"(arg0: $ServerPlayer$$Type, arg1: StringJS, arg2: StringJS, arg3: $Color4I$$Type): $Team
 "createServerTeam"(commandSourceStack: $CommandSourceStack$$Type, name: StringJS, description: StringJS, color: $Color4I$$Type): $Team
 "createServerTeam"(arg0: $CommandSourceStack$$Type, arg1: StringJS, arg2: StringJS, arg3: $Color4I$$Type, arg4: $UUID$$Type): $Team
 "setChatRedirected"(arg0: $ServerPlayer$$Type, arg1: boolean): void
 "isChatRedirected"(arg0: $ServerPlayer$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamManager$$Type = ($TeamManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamManager$$Original = $TeamManager;}
declare module "dev.ftb.mods.ftbteams.api.Team" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$TeamRank, $TeamRank$$Type} from "dev.ftb.mods.ftbteams.api.TeamRank"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$TeamMessage} from "dev.ftb.mods.ftbteams.api.TeamMessage"
import {$Set} from "java.util.Set"
import {$ServerPlayer} from "net.minecraft.server.level.ServerPlayer"
import {$TeamPropertyCollection} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export interface $Team$$Interface {
get "name"(): $Component
get "properties"(): $TeamPropertyCollection
get "id"(): $UUID
get "owner"(): $UUID
get "valid"(): boolean
get "typeTranslationKey"(): StringJS
get "shortName"(): StringJS
get "members"(): $Set<($UUID)>
get "extraData"(): $CompoundTag
get "messageHistory"(): $List<($TeamMessage)>
get "teamInfo"(): $List<($Component)>
get "coloredName"(): $Component
get "playerTeam"(): boolean
get "clientTeam"(): boolean
get "serverTeam"(): boolean
get "onlineMembers"(): $Collection<($ServerPlayer)>
get "partyTeam"(): boolean
get "teamId"(): $UUID
}

export class $Team implements $Team$$Interface {
 "getName"(): $Component
 "getProperty"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "setProperty"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "getProperties"(): $TeamPropertyCollection
 "getId"(): $UUID
 "getOwner"(): $UUID
 "isValid"(): boolean
 "markDirty"(): void
 "getTypeTranslationKey"(): StringJS
 "syncOnePropertyToAll"<T>(arg0: $MinecraftServer$$Type, arg1: $TeamProperty$$Type<(T)>, arg2: T): void
 "getShortName"(): StringJS
 "getRankForPlayer"(arg0: $UUID$$Type): $TeamRank
 "getMembers"(): $Set<($UUID)>
 "getExtraData"(): $CompoundTag
 "getMessageHistory"(): $List<($TeamMessage)>
 "getTeamInfo"(): $List<($Component)>
 "getColoredName"(): $Component
 "getPlayersByRank"(arg0: $TeamRank$$Type): $Map<($UUID), ($TeamRank)>
 "createParty"(arg0: StringJS, arg1: $Color4I$$Type): $Team
 "isPlayerTeam"(): boolean
 "isClientTeam"(): boolean
 "isServerTeam"(): boolean
 "syncOnePropertyToTeam"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "sendMessage"(arg0: $UUID$$Type, arg1: StringJS): void
 "sendMessage"(arg0: $UUID$$Type, arg1: $Component$$Type): void
 "getOnlineMembers"(): $Collection<($ServerPlayer)>
 "isPartyTeam"(): boolean
 "getTeamId"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$$Type = ($Team);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Team$$Original = $Team;}
declare module "dev.ftb.mods.ftbteams.data.AbstractTeam" {
import {$AbstractTeamBase} from "dev.ftb.mods.ftbteams.data.AbstractTeamBase"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$TeamRank$$Type} from "dev.ftb.mods.ftbteams.api.TeamRank"
import {$SNBTCompoundTag} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$ServerPlayer} from "net.minecraft.server.level.ServerPlayer"
import {$TeamPropertyCollection$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"

export class $AbstractTeam extends $AbstractTeamBase {
constructor(manager: $TeamManagerImpl$$Type, id: $UUID$$Type)

public "getOwner"(): $UUID
public "markDirty"(): void
public "settings"<T>(source: $CommandSourceStack$$Type, key: $TeamProperty$$Type<(T)>, value: StringJS): integer
public "serializeNBT"(provider: $HolderLookup$Provider$$Type): $SNBTCompoundTag
public "deserializeNBT"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "syncOnePropertyToAll"<T>(server: $MinecraftServer$$Type, property: $TeamProperty$$Type<(T)>, value: T): void
public "updatePropertiesFrom"(newProperties: $TeamPropertyCollection$$Type): void
public "getTeamInfo"(): $List<($Component)>
public "syncOnePropertyToTeam"<T>(property: $TeamProperty$$Type<(T)>, value: T): void
public "sendMessage"(from: $UUID$$Type, text: $Component$$Type): void
public "sendMessage"(senderId: $UUID$$Type, message: StringJS): void
public "getOnlineMembers"(): $List<($ServerPlayer)>
public "getOnlineRanked"(rank: $TeamRank$$Type): $List<($ServerPlayer)>
public "declineInvitation"(source: $CommandSourceStack$$Type): integer
get "owner"(): $UUID
get "teamInfo"(): $List<($Component)>
get "onlineMembers"(): $List<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTeam$$Type = ($AbstractTeam);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractTeam$$Original = $AbstractTeam;}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue" {
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"

export class $TeamPropertyValue<T> {
constructor(property: $TeamProperty$$Type<(T)>, value: T)
constructor(property: $TeamProperty$$Type<(T)>)

public "getProperty"(): $TeamProperty<(T)>
public "toString"(): StringJS
public "getValue"(): T
public "setValue"(value: T): void
public "copy"(): $TeamPropertyValue<(T)>
public static "createDefaultValue"<X>(property: $TeamProperty$$Type<(X)>): $TeamPropertyValue<(X)>
public static "fromNetwork"<X>(property: $TeamProperty$$Type<(X)>, buf: $RegistryFriendlyByteBuf$$Type): $TeamPropertyValue<(X)>
public static "fromNBT"<X>(property: $TeamProperty$$Type<(X)>, tag: $Tag$$Type): $TeamPropertyValue<(X)>
get "property"(): $TeamProperty<(T)>
get "value"(): T
set "value"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyValue$$Type<T> = ($TeamPropertyValue<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamPropertyValue$$Original<T> = $TeamPropertyValue<(T)>;}
declare module "dev.ftb.mods.ftbteams.data.TeamArgumentProvider" {
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"

export interface $TeamArgumentProvider$$Interface {

(arg0: $CommandSourceStack): $Team$$Type
}

export class $TeamArgumentProvider implements $TeamArgumentProvider$$Interface {
 "getTeam"(arg0: $CommandSourceStack$$Type): $Team
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgumentProvider$$Type = ((arg0: $CommandSourceStack) => $Team$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamArgumentProvider$$Original = $TeamArgumentProvider;}
declare module "dev.ftb.mods.ftbteams.api.property.TeamProperty" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TeamPropertyValue, $TeamPropertyValue$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue"
import {$Optional} from "java.util.Optional"
import {$TeamPropertyType} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyType"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ConfigValue} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $TeamProperty<T> {
public "equals"(o: any): boolean
public "toString"(value: T): StringJS
public "toString"(): StringJS
public "hashCode"(): integer
public "isHidden"(): boolean
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getId"(): $ResourceLocation
public "getType"(): $TeamPropertyType<(T)>
public "getDefaultValue"(): T
public "config"(config: $ConfigGroup$$Type, value: $TeamPropertyValue$$Type<(T)>): $ConfigValue<(never)>
public "readValue"(buf: $RegistryFriendlyByteBuf$$Type): T
/**
 * 
 * @deprecated
 */
public "createDefaultValue"(): $TeamPropertyValue<(T)>
public "getTranslationKey"(prefix: StringJS): StringJS
public "toNBT"(value: T): $Tag
public "hidden"(): $TeamProperty<(T)>
public "writeValue"(buf: $RegistryFriendlyByteBuf$$Type, value: T): void
public "syncToAll"(): $TeamProperty<(T)>
public "fromNBT"(tag: $Tag$$Type): $Optional<(T)>
/**
 * 
 * @deprecated
 */
public "createValueFromNetwork"(buf: $RegistryFriendlyByteBuf$$Type): $TeamPropertyValue<(T)>
public "shouldSyncToAll"(): boolean
public "notPlayerEditable"(): $TeamProperty<(T)>
/**
 * 
 * @deprecated
 */
public "createValueFromNBT"(tag: $Tag$$Type): $TeamPropertyValue<(T)>
public "isPlayerEditable"(): boolean
public "fromString"(arg0: StringJS): $Optional<(T)>
get "id"(): $ResourceLocation
get "type"(): $TeamPropertyType<(T)>
get "defaultValue"(): T
get "playerEditable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamProperty$$Type<T> = ($TeamProperty<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamProperty$$Original<T> = $TeamProperty<(T)>;}
declare module "dev.ftb.mods.ftbteams.data.TeamArgument$Info$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$TeamArgument$Info$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgument$Info"
import {$TeamType$$Type} from "dev.ftb.mods.ftbteams.data.TeamType"
import {$TeamArgument} from "dev.ftb.mods.ftbteams.data.TeamArgument"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamArgument$Info$Template implements $ArgumentTypeInfo$Template$$Interface<($TeamArgument)> {
constructor(this$0: $TeamArgument$Info$$Type, teamType: $TeamType$$Type)

public "type"(): $ArgumentTypeInfo<($TeamArgument), (never)>
public "instantiate"(commandBuildContext: $CommandBuildContext$$Type): $TeamArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Info$Template$$Type = ($TeamArgument$Info$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamArgument$Info$Template$$Original = $TeamArgument$Info$Template;}
declare module "dev.ftb.mods.ftbteams.data.AbstractTeamBase" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$TeamRank, $TeamRank$$Type} from "dev.ftb.mods.ftbteams.api.TeamRank"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TeamType} from "dev.ftb.mods.ftbteams.data.TeamType"
import {$TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$TeamMessage, $TeamMessage$$Type} from "dev.ftb.mods.ftbteams.api.TeamMessage"
import {$Set} from "java.util.Set"
import {$ServerPlayer} from "net.minecraft.server.level.ServerPlayer"
import {$TeamPropertyCollection} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Team, $Team$$Interface} from "dev.ftb.mods.ftbteams.api.Team"

export class $AbstractTeamBase implements $Team$$Interface {
public "getName"(): $Component
public "getProperty"<T>(property: $TeamProperty$$Type<(T)>): T
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "setProperty"<T>(property: $TeamProperty$$Type<(T)>, value: T): void
public "getProperties"(): $TeamPropertyCollection
public "getId"(): $UUID
public "getType"(): $TeamType
public "getDisplayName"(): StringJS
public "isValid"(): boolean
public "getColor"(): integer
public "addMessage"(message: $TeamMessage$$Type): void
public "markDirty"(): void
public "removeMember"(id: $UUID$$Type): void
public "getTypeTranslationKey"(): StringJS
public "getMaxMessageHistorySize"(): integer
public "isMember"(uuid: $UUID$$Type): boolean
public "getShortName"(): StringJS
public "getRankForPlayer"(playerId: $UUID$$Type): $TeamRank
public "isAllyOrBetter"(profile: $UUID$$Type): boolean
public "addMember"(id: $UUID$$Type, rank: $TeamRank$$Type): void
public "getMembers"(): $Set<($UUID)>
public "getExtraData"(): $CompoundTag
public "getMessageHistory"(): $List<($TeamMessage)>
public "getColoredName"(): $Component
public "getPlayersByRank"(minRank: $TeamRank$$Type): $Map<($UUID), ($TeamRank)>
public "createParty"(description: StringJS, color: $Color4I$$Type): $Team
public "isFreeToJoin"(): boolean
public "isOfficerOrBetter"(profile: $UUID$$Type): boolean
public "invalidateTeam"(): void
public "addMessages"(messages: $Collection$$Type<($TeamMessage$$Type)>): void
public "getTeamId"(): $UUID
public "isInvited"(profile: $UUID$$Type): boolean
public "getDescription"(): StringJS
public "getOwner"(): $UUID
public "syncOnePropertyToAll"<T>(arg0: $MinecraftServer$$Type, arg1: $TeamProperty$$Type<(T)>, arg2: T): void
public "getTeamInfo"(): $List<($Component)>
public "isPlayerTeam"(): boolean
public "isClientTeam"(): boolean
public "isServerTeam"(): boolean
public "syncOnePropertyToTeam"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
public "sendMessage"(arg0: $UUID$$Type, arg1: StringJS): void
public "sendMessage"(arg0: $UUID$$Type, arg1: $Component$$Type): void
public "getOnlineMembers"(): $Collection<($ServerPlayer)>
public "isPartyTeam"(): boolean
get "name"(): $Component
get "properties"(): $TeamPropertyCollection
get "id"(): $UUID
get "type"(): $TeamType
get "displayName"(): StringJS
get "valid"(): boolean
get "color"(): integer
get "typeTranslationKey"(): StringJS
get "maxMessageHistorySize"(): integer
get "shortName"(): StringJS
get "members"(): $Set<($UUID)>
get "extraData"(): $CompoundTag
get "messageHistory"(): $List<($TeamMessage)>
get "coloredName"(): $Component
get "freeToJoin"(): boolean
get "teamId"(): $UUID
get "description"(): StringJS
get "owner"(): $UUID
get "teamInfo"(): $List<($Component)>
get "playerTeam"(): boolean
get "clientTeam"(): boolean
get "serverTeam"(): boolean
get "onlineMembers"(): $Collection<($ServerPlayer)>
get "partyTeam"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTeamBase$$Type = ($AbstractTeamBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractTeamBase$$Original = $AbstractTeamBase;}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$TeamPropertyArgument} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument"
import {$TeamPropertyArgument$Info$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamPropertyArgument$Info$Template implements $ArgumentTypeInfo$Template$$Interface<($TeamPropertyArgument)> {
constructor(this$0: $TeamPropertyArgument$Info$$Type)

public "type"(): $ArgumentTypeInfo<($TeamPropertyArgument), (never)>
public "instantiate"(commandBuildContext: $CommandBuildContext$$Type): $TeamPropertyArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Info$Template$$Type = ($TeamPropertyArgument$Info$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamPropertyArgument$Info$Template$$Original = $TeamPropertyArgument$Info$Template;}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument" {
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Collection} from "java.util.Collection"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$TeamProperty} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $TeamPropertyArgument implements $ArgumentType$$Interface<($TeamProperty<(never)>)> {
public static "get"(context: $CommandContext$$Type<($CommandSourceStack$$Type)>, name: StringJS): $TeamProperty<(never)>
public "parse"(reader: $StringReader$$Type): $TeamProperty<(never)>
public static "create"(): $TeamPropertyArgument
public "listSuggestions"<S>(context: $CommandContext$$Type<(S)>, builder: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $TeamProperty<(never)>
public "getExamples"(): $Collection<(StringJS)>
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$$Type = ($TeamPropertyArgument);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamPropertyArgument$$Original = $TeamPropertyArgument;}
declare module "dev.ftb.mods.ftbteams.data.TeamArgument" {
import {$Collection} from "java.util.Collection"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Dynamic2CommandExceptionType} from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType"
import {$TeamArgumentProvider} from "dev.ftb.mods.ftbteams.data.TeamArgumentProvider"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$DynamicCommandExceptionType} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$SimpleCommandExceptionType} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$TeamType$$Type} from "dev.ftb.mods.ftbteams.data.TeamType"
import {$Team} from "dev.ftb.mods.ftbteams.api.Team"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $TeamArgument implements $ArgumentType$$Interface<($TeamArgumentProvider)> {
static readonly "NOT_MEMBER": $Dynamic2CommandExceptionType
static readonly "OWNER_CANT_LEAVE": $SimpleCommandExceptionType
static readonly "NO_PERMISSION": $SimpleCommandExceptionType
static readonly "NAME_TOO_SHORT": $SimpleCommandExceptionType
static readonly "NOT_IN_PARTY": $SimpleCommandExceptionType
static readonly "CANT_EDIT": $DynamicCommandExceptionType
static readonly "TEAM_ALREADY_EXISTS": $DynamicCommandExceptionType
static readonly "CANT_KICK_OWNER": $SimpleCommandExceptionType
static readonly "TEAM_NOT_FOUND": $DynamicCommandExceptionType
static readonly "OUT_OF_LIVES": $SimpleCommandExceptionType
static readonly "NOT_OFFICER": $Dynamic2CommandExceptionType
static readonly "PLAYER_IN_PARTY": $DynamicCommandExceptionType
static readonly "NOT_INVITED": $DynamicCommandExceptionType
static readonly "API_OVERRIDE": $SimpleCommandExceptionType
static readonly "ALREADY_IN_PARTY": $SimpleCommandExceptionType

public static "get"(context: $CommandContext$$Type<($CommandSourceStack$$Type)>, name: StringJS): $Team
public "parse"(arg0: $StringReader$$Type): any
public static "create"(): $TeamArgument
public static "create"(type: $TeamType$$Type): $TeamArgument
public "listSuggestions"<S>(commandContext: $CommandContext$$Type<(S)>, builder: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $TeamArgumentProvider
public "getExamples"(): $Collection<(StringJS)>
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$$Type = ($TeamArgument);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamArgument$$Original = $TeamArgument;}
declare module "dev.ftb.mods.ftbteams.data.TeamType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$UUID$$Type} from "java.util.UUID"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$AbstractTeam} from "dev.ftb.mods.ftbteams.data.AbstractTeam"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $TeamType extends $Enum<($TeamType)> implements $StringRepresentable$$Interface {
static readonly "PLAYER": $TeamType
static readonly "PARTY": $TeamType
static readonly "SERVER": $TeamType

public static "values"(): ($TeamType)[]
public static "valueOf"(name: StringJS): $TeamType
public "matches"(team: $Team$$Type): boolean
public "getColor"(): $ChatFormatting
public "getSerializedName"(): StringJS
public "createTeam"(manager: $TeamManagerImpl$$Type, id: $UUID$$Type): $AbstractTeam
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "color"(): $ChatFormatting
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamType$$Type = (("player") | ("party") | ("server"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamType$$Original = $TeamType;}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyType" {
import {$TeamPropertyType$FromNet$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyType$FromNet"
import {$BigInteger} from "java.math.BigInteger"
import {$Map} from "java.util.Map"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$Set} from "java.util.Set"
import {$PrivacyMode} from "dev.ftb.mods.ftbteams.api.property.PrivacyMode"

export class $TeamPropertyType<T> {
static readonly "STRING_LIST": $TeamPropertyType<($List<(StringJS)>)>
static readonly "INT_MAP": $TeamPropertyType<($Map<(StringJS), (integer)>)>
static readonly "ENUM": $TeamPropertyType<(StringJS)>
static readonly "BOOL_MAP": $TeamPropertyType<($Map<(StringJS), (boolean)>)>
static readonly "PRIVACY_MODE": $TeamPropertyType<($PrivacyMode)>
static readonly "BIG_INTEGER": $TeamPropertyType<($BigInteger)>
static readonly "BOOLEAN": $TeamPropertyType<(boolean)>
static readonly "STRING_SET": $TeamPropertyType<($Set<(StringJS)>)>
static readonly "INT": $TeamPropertyType<(integer)>
static readonly "STRING_MAP": $TeamPropertyType<($Map<(StringJS), (StringJS)>)>
static readonly "COLOR": $TeamPropertyType<($Color4I)>
static readonly "STRING": $TeamPropertyType<(StringJS)>
static readonly "DOUBLE": $TeamPropertyType<(double)>

public static "register"<Y>(id: $ResourceLocation$$Type, deserializer: $TeamPropertyType$FromNet$$Type<(Y)>): $TeamPropertyType<(Y)>
public static "write"(buf: $RegistryFriendlyByteBuf$$Type, prop: $TeamProperty$$Type<(never)>): void
public static "read"(buf: $RegistryFriendlyByteBuf$$Type): $TeamProperty<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyType$$Type<T> = ($TeamPropertyType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamPropertyType$$Original<T> = $TeamPropertyType<(T)>;}
declare module "dev.ftb.mods.ftbteams.data.TeamArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$TeamArgument$Info$Template, $TeamArgument$Info$Template$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgument$Info$Template"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$TeamArgument, $TeamArgument$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgument"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamArgument$Info implements $ArgumentTypeInfo$$Interface<($TeamArgument), ($TeamArgument$Info$Template)> {
constructor()

public "unpack"(argumentType: $TeamArgument$$Type): $TeamArgument$Info$Template
public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(template: $TeamArgument$Info$Template$$Type, jsonObject: $JsonObject$$Type): void
public "serializeToNetwork"(template: $TeamArgument$Info$Template$$Type, buf: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Info$$Type = ($TeamArgument$Info);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamArgument$Info$$Original = $TeamArgument$Info;}
declare module "dev.ftb.mods.ftbteams.api.property.PrivacyMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $PrivacyMode extends $Enum<($PrivacyMode)> implements $StringRepresentable$$Interface {
static readonly "NAME_MAP": $NameMap<($PrivacyMode)>
static readonly "PUBLIC": $PrivacyMode
static readonly "VALUES": ($PrivacyMode)[]
static readonly "ALLIES": $PrivacyMode
static readonly "PRIVATE": $PrivacyMode

public static "values"(): ($PrivacyMode)[]
public static "valueOf"(name: StringJS): $PrivacyMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrivacyMode$$Type = (("allies") | ("private") | ("public"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrivacyMode$$Original = $PrivacyMode;}
declare module "dev.ftb.mods.ftbteams.data.TeamManagerImpl" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$PlayerTeam} from "dev.ftb.mods.ftbteams.data.PlayerTeam"
import {$PartyTeam} from "dev.ftb.mods.ftbteams.data.PartyTeam"
import {$Component} from "net.minecraft.network.chat.Component"
import {$SNBTCompoundTag} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$AbstractTeam, $AbstractTeam$$Type} from "dev.ftb.mods.ftbteams.data.AbstractTeam"
import {$TeamManager$$Interface} from "dev.ftb.mods.ftbteams.api.TeamManager"
import {$LevelResource} from "net.minecraft.world.level.storage.LevelResource"
import {$Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"

export class $TeamManagerImpl implements $TeamManager$$Interface {
static readonly "FOLDER_NAME": $LevelResource
static "INSTANCE": $TeamManagerImpl

constructor(s: $MinecraftServer$$Type)

public "load"(): void
public "getId"(): $UUID
public "playerLoggedIn"(player: $ServerPlayer$$Type, id: $UUID$$Type, name: StringJS): void
public "markDirty"(): void
public "serializeNBT"(): $SNBTCompoundTag
public "getServer"(): $MinecraftServer
public "getPersonalTeamForPlayerID"(uuid: $UUID$$Type): $PlayerTeam
public "getPlayerName"(id: $UUID$$Type): $Component
public "saveNow"(): void
public "getTeams"(): $Collection<($Team)>
public "syncToAll"(...teams: ($Team$$Type)[]): void
public "getTeamByID"(teamId: $UUID$$Type): $Optional<($Team)>
public "getExtraData"(): $CompoundTag
public "createParty"(playerId: $UUID$$Type, player: $ServerPlayer$$Type, name: StringJS, description: StringJS, color: $Color4I$$Type): $PartyTeam
public "createParty"(player: $ServerPlayer$$Type, name: StringJS): $PartyTeam
public "getKnownPlayerTeams"(): $Map<($UUID), ($Team)>
public "getPlayerTeamForPlayerID"(uuid: $UUID$$Type): $Optional<($Team)>
public "arePlayersInSameTeam"(id1: $UUID$$Type, id2: $UUID$$Type): boolean
public "getTeamForPlayerID"(uuid: $UUID$$Type): $Optional<($Team)>
public "getTeamForPlayer"(player: $ServerPlayer$$Type): $Optional<($Team)>
public "getTeamByName"(name: StringJS): $Optional<($Team)>
public "createPartyTeam"(player: $ServerPlayer$$Type, name: StringJS, description: StringJS, color: $Color4I$$Type): $Team
public "playerLoggedOut"(player: $ServerPlayer$$Type): void
public "createServerTeam"(source: $CommandSourceStack$$Type, name: StringJS, description: StringJS, color: $Color4I$$Type, teamUUID: $UUID$$Type): $Team
public "setChatRedirected"(player: $ServerPlayer$$Type, redirect: boolean): void
public "isChatRedirected"(player: $ServerPlayer$$Type): boolean
public "syncAllToPlayer"(player: $ServerPlayer$$Type, selfTeam: $AbstractTeam$$Type): void
public "getTeamMap"(): $Map<($UUID), ($AbstractTeam)>
public "getTeamNameMap"(): $Map<(StringJS), ($Team)>
public "createServerTeam"(commandSourceStack: $CommandSourceStack$$Type, name: StringJS, description: StringJS, color: $Color4I$$Type): $Team
get "id"(): $UUID
get "server"(): $MinecraftServer
get "teams"(): $Collection<($Team)>
get "extraData"(): $CompoundTag
get "knownPlayerTeams"(): $Map<($UUID), ($Team)>
get "teamMap"(): $Map<($UUID), ($AbstractTeam)>
get "teamNameMap"(): $Map<(StringJS), ($Team)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamManagerImpl$$Type = ($TeamManagerImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamManagerImpl$$Original = $TeamManagerImpl;}
declare module "dev.ftb.mods.ftbteams.data.PartyTeam" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection$$Type} from "java.util.Collection"
import {$TeamType} from "dev.ftb.mods.ftbteams.data.TeamType"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TeamRank} from "dev.ftb.mods.ftbteams.api.TeamRank"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AbstractTeam} from "dev.ftb.mods.ftbteams.data.AbstractTeam"
import {$TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"

export class $PartyTeam extends $AbstractTeam {
constructor(manager: $TeamManagerImpl$$Type, id: $UUID$$Type)

public "join"(player: $ServerPlayer$$Type): integer
public "join"(player: $ServerPlayer$$Type, playerProfile: $GameProfile$$Type): integer
public "getType"(): $TeamType
public "getOwner"(): $UUID
public "promote"(from: $ServerPlayer$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "invite"(inviter: $ServerPlayer$$Type, profiles: $Collection$$Type<($GameProfile$$Type)>): integer
public "demote"(from: $ServerPlayer$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "removeAlly"(source: $CommandSourceStack$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "kick"(from: $CommandSourceStack$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "leave"(id: $UUID$$Type): integer
public "deserializeNBT"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "transferOwnership"(from: $CommandSourceStack$$Type, toProfiles: $Collection$$Type<($GameProfile$$Type)>): integer
public "transferOwnership"(from: $CommandSourceStack$$Type, toProfile: $GameProfile$$Type): integer
public "getRankForPlayer"(playerId: $UUID$$Type): $TeamRank
public "addAlly"(source: $CommandSourceStack$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "kickPlayerForcibly"(player: $ServerPlayer$$Type): void
public "isPartyTeam"(): boolean
public "listAllies"(source: $CommandSourceStack$$Type): integer
public "isOwner"(profile: $UUID$$Type): boolean
public "forceDisband"(from: $CommandSourceStack$$Type): integer
get "type"(): $TeamType
get "owner"(): $UUID
get "partyTeam"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartyTeam$$Type = ($PartyTeam);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartyTeam$$Original = $PartyTeam;}
declare module "dev.ftb.mods.ftbteams.data.PlayerTeam" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$TeamRank} from "dev.ftb.mods.ftbteams.api.TeamRank"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AbstractTeam, $AbstractTeam$$Type} from "dev.ftb.mods.ftbteams.data.AbstractTeam"
import {$TeamType} from "dev.ftb.mods.ftbteams.data.TeamType"
import {$Set$$Type} from "java.util.Set"
import {$KnownClientPlayer} from "dev.ftb.mods.ftbteams.api.client.KnownClientPlayer"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Team} from "dev.ftb.mods.ftbteams.api.Team"
import {$TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"

export class $PlayerTeam extends $AbstractTeam {
constructor(manager: $TeamManagerImpl$$Type, id: $UUID$$Type)

public "getType"(): $TeamType
public "isOnline"(): boolean
public "getPlayer"(): $ServerPlayer
public "deserializeNBT"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getPlayerName"(): StringJS
public "getRankForPlayer"(playerId: $UUID$$Type): $TeamRank
public "createClientPlayer"(): $KnownClientPlayer
public "createParty"(playerId: $UUID$$Type, player: $ServerPlayer$$Type, name: StringJS, description: StringJS, color: integer, invited: $Set$$Type<($GameProfile$$Type)>): $Team
public "isPlayerTeam"(): boolean
public "getOnlineMembers"(): $List<($ServerPlayer)>
public "updatePresence"(): void
public "getTeamId"(): $UUID
public "hasTeam"(): boolean
public "setOnline"(online: boolean): void
public "setEffectiveTeam"(effectiveTeam: $AbstractTeam$$Type): void
public "setPlayerName"(playerName: StringJS): void
public "getEffectiveTeam"(): $AbstractTeam
get "type"(): $TeamType
get "online"(): boolean
get "player"(): $ServerPlayer
get "playerName"(): StringJS
get "playerTeam"(): boolean
get "onlineMembers"(): $List<($ServerPlayer)>
get "teamId"(): $UUID
set "online"(value: boolean)
set "effectiveTeam"(value: $AbstractTeam$$Type)
set "playerName"(value: StringJS)
get "effectiveTeam"(): $AbstractTeam
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTeam$$Type = ($PlayerTeam);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTeam$$Original = $PlayerTeam;}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection" {
import {$TeamPropertyValue$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue"
import {$TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"

export interface $TeamPropertyCollection$$Interface {
}

export class $TeamPropertyCollection implements $TeamPropertyCollection$$Interface {
 "size"(): integer
 "get"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "set"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "forEach"<T>(arg0: $BiConsumer$$Type<($TeamProperty<(T)>), ($TeamPropertyValue<(T)>)>): void
 "copy"(): $TeamPropertyCollection
 "updateFrom"(arg0: $TeamPropertyCollection$$Type): void
 "copyIf"(arg0: $Predicate$$Type<($TeamProperty<(never)>)>): $TeamPropertyCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyCollection$$Type = ($TeamPropertyCollection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamPropertyCollection$$Original = $TeamPropertyCollection;}
declare module "dev.ftb.mods.ftbteams.api.TeamRank" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Optional} from "java.util.Optional"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $TeamRank extends $Enum<($TeamRank)> implements $StringRepresentable$$Interface {
static readonly "OWNER": $TeamRank
static readonly "INVITED": $TeamRank
static readonly "ALLY": $TeamRank
static readonly "NAME_MAP": $NameMap<($TeamRank)>
static readonly "ENEMY": $TeamRank
static readonly "OFFICER": $TeamRank
static readonly "NONE": $TeamRank
static readonly "MEMBER": $TeamRank

public static "values"(): ($TeamRank)[]
public static "valueOf"(name: StringJS): $TeamRank
public "getDisplayName"(): $Component
public "getPower"(): integer
public "isAtLeast"(rank: $TeamRank$$Type): boolean
public "getSerializedName"(): StringJS
public "isAllyOrBetter"(): boolean
public "getIcon"(): $Optional<($Icon)>
public "isInvitedOrBetter"(): boolean
public "isMemberOrBetter"(): boolean
public "isOfficerOrBetter"(): boolean
public "isNoneOrBetter"(): boolean
public "isEnemyOrWorse"(): boolean
public "isOwner"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "displayName"(): $Component
get "power"(): integer
get "serializedName"(): StringJS
get "allyOrBetter"(): boolean
get "icon"(): $Optional<($Icon)>
get "invitedOrBetter"(): boolean
get "memberOrBetter"(): boolean
get "officerOrBetter"(): boolean
get "noneOrBetter"(): boolean
get "enemyOrWorse"(): boolean
get "owner"(): boolean
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamRank$$Type = (("enemy") | ("none") | ("ally") | ("invited") | ("member") | ("officer") | ("owner"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamRank$$Original = $TeamRank;}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyType$FromNet" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export interface $TeamPropertyType$FromNet$$Interface<Y> {

(arg0: $ResourceLocation, arg1: $RegistryFriendlyByteBuf): $TeamProperty$$Type<(Y)>
}

export class $TeamPropertyType$FromNet<Y> implements $TeamPropertyType$FromNet$$Interface {
 "apply"(arg0: $ResourceLocation$$Type, arg1: $RegistryFriendlyByteBuf$$Type): $TeamProperty<(Y)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyType$FromNet$$Type<Y> = ((arg0: $ResourceLocation, arg1: $RegistryFriendlyByteBuf) => $TeamProperty$$Type<(Y)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamPropertyType$FromNet$$Original<Y> = $TeamPropertyType$FromNet<(Y)>;}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$TeamPropertyArgument$Info$Template, $TeamPropertyArgument$Info$Template$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$TeamPropertyArgument, $TeamPropertyArgument$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamPropertyArgument$Info implements $ArgumentTypeInfo$$Interface<($TeamPropertyArgument), ($TeamPropertyArgument$Info$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(argumentType: $TeamPropertyArgument$$Type): $TeamPropertyArgument$Info$Template
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(template: $TeamPropertyArgument$Info$Template$$Type, jsonObject: $JsonObject$$Type): void
public "serializeToNetwork"(template: $TeamPropertyArgument$Info$Template$$Type, friendlyByteBuf: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Info$$Type = ($TeamPropertyArgument$Info);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamPropertyArgument$Info$$Original = $TeamPropertyArgument$Info;}
declare module "dev.ftb.mods.ftbteams.api.TeamMessage" {
import {$UUID} from "java.util.UUID"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $TeamMessage$$Interface {
}

export class $TeamMessage implements $TeamMessage$$Interface {
 "text"(): $Component
 "date"(): long
 "sender"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamMessage$$Type = ($TeamMessage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamMessage$$Original = $TeamMessage;}
