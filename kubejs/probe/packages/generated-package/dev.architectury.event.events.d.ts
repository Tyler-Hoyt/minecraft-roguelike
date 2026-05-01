declare module "dev.architectury.event.events.client.ClientCommandRegistrationEvent$ClientCommandSourceStack" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SharedSuggestionProvider$$Interface} from "net.minecraft.commands.SharedSuggestionProvider"
import {$Message$$Type} from "com.mojang.brigadier.Message"
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$LocalPlayer} from "net.minecraft.client.player.LocalPlayer"
import {$Vec2} from "net.minecraft.world.phys.Vec2"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Set} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$SharedSuggestionProvider$ElementSuggestionType$$Type} from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel} from "net.minecraft.client.multiplayer.ClientLevel"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type} from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export interface $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Interface extends $SharedSuggestionProvider$$Interface {
get "customTabSugggestions"(): $Collection<(StringJS)>
get "allTeams"(): $Collection<(StringJS)>
get "selectedEntities"(): $Collection<(StringJS)>
get "onlinePlayerNames"(): $Collection<(StringJS)>
get "relevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "absoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "availableSounds"(): $Stream<($ResourceLocation)>
get "recipeNames"(): $Stream<($ResourceLocation)>
}

export class $ClientCommandRegistrationEvent$ClientCommandSourceStack implements $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Interface {
 "arch$getPosition"(): $Vec3
 "arch$sendSuccess"(arg0: $Supplier$$Type<($Component$$Type)>, arg1: boolean): void
 "arch$sendFailure"(arg0: $Component$$Type): void
 "arch$getRotation"(): $Vec2
 "arch$getPlayer"(): $LocalPlayer
 "arch$getLevel"(): $ClientLevel
 "levels"(): $Set<($ResourceKey<($Level)>)>
 "getCustomTabSugggestions"(): $Collection<(StringJS)>
 "enabledFeatures"(): $FeatureFlagSet
 "registryAccess"(): $RegistryAccess
 "suggestRegistryElements"(arg0: $ResourceKey$$Type<($Registry<(never)>)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type, arg3: $CommandContext$$Type<(never)>): $CompletableFuture<($Suggestions)>
 "suggestRegistryElements"(arg0: $Registry$$Type<(never)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type): void
static "suggestCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
 "customSuggestion"(arg0: $CommandContext$$Type<(never)>): $CompletableFuture<($Suggestions)>
 "getAllTeams"(): $Collection<(StringJS)>
static "suggest"(arg0: $Stream$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: $Iterable$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: (StringJS)[], arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), (StringJS)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
 "getSelectedEntities"(): $Collection<(StringJS)>
 "getOnlinePlayerNames"(): $Collection<(StringJS)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
static "suggest2DCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
 "hasPermission"(arg0: integer): boolean
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggestResource"<T>(arg0: $Stream$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggestResource"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
static "matchesSubStr"(arg0: StringJS, arg1: StringJS): boolean
 "getRecipeNames"(): $Stream<($ResourceLocation)>
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Consumer$$Type<(T)>): void
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: StringJS, arg3: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg4: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Type = ($ClientCommandRegistrationEvent$ClientCommandSourceStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Original = $ClientCommandRegistrationEvent$ClientCommandSourceStack;}
