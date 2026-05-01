declare module "dev.ftb.mods.ftbquests.quest.TeamData" {
import {$Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$LongSet} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Component} from "net.minecraft.network.chat.Component"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Date, $Date$$Type} from "java.util.Date"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RewardClaimType} from "dev.ftb.mods.ftbquests.quest.reward.RewardClaimType"

export class $TeamData {
static readonly "AUTO_PIN_ID": integer
static readonly "VERSION": integer
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TeamData)>

constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type)
constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type, name: StringJS)

public "getName"(): StringJS
public static "get"(player: $Player$$Type): $TeamData
public "toString"(): StringJS
public "setName"(name: StringJS): void
public "isStarted"(object: $QuestObject$$Type): boolean
public "getFile"(): $BaseQuestFile
public "isLocked"(): boolean
public "setCompleted"(id: long, time: $Date$$Type): boolean
public "isCompleted"(object: $QuestObject$$Type): boolean
public "mergeData"(from: $TeamData$$Type): void
public "markDirty"(): void
public "serializeNBT"(): $SNBTCompoundTag
public "deserializeNBT"(nbt: $SNBTCompoundTag$$Type): void
public "clearRepeatCooldown"(q: $Quest$$Type): void
public "setCanEdit"(player: $Player$$Type, newCanEdit: boolean): boolean
public "setStarted"(questId: long, time: $Date$$Type): boolean
public "setProgress"(task: $Task$$Type, progress: long): void
public "getProgress"(task: $Task$$Type): long
public "getProgress"(taskId: long): long
public "clearCachedProgress"(): void
public "isExcludedByOtherQuestline"(qo: $QuestObject$$Type): boolean
public "getRelativeProgress"(object: $QuestObject$$Type): integer
public "hasUnclaimedRewards"(player: $UUID$$Type, object: $QuestObject$$Type): boolean
public "mergeClaimedRewards"(from: $TeamData$$Type): void
public "checkAutoCompletion"(quest: $Quest$$Type): void
public "areDependenciesComplete"(quest: $Quest$$Type): boolean
public "addProgress"(task: $Task$$Type, progress: long): void
public "getCanEdit"(player: $Player$$Type): boolean
public "deleteReward"(reward: $Reward$$Type): void
public "resetReward"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "claimReward"(player: $ServerPlayer$$Type, reward: $Reward$$Type, notify: boolean): void
public "claimReward"(player: $ServerPlayer$$Type, reward: $Reward$$Type, notify: boolean, when: long): void
public "saveIfChanged"(): void
public "copyData"(from: $TeamData$$Type): void
public "markRewardAsClaimed"(player: $UUID$$Type, reward: $Reward$$Type, date: long): boolean
public "getCannotStartReason"(quest: $Quest$$Type): $Component
public "markTaskCompleted"(task: $Task$$Type): void
public "canStartTasks"(quest: $Quest$$Type): boolean
public "getClaimType"(player: $UUID$$Type, reward: $Reward$$Type): $RewardClaimType
public "getCompletionCount"(quest: $Quest$$Type): integer
public "resetProgress"(task: $Task$$Type): void
public "isRewardClaimed"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "isRewardBlocked"(reward: $Reward$$Type): boolean
public "getMilliSecondsUntilRepeatable"(quest: $Quest$$Type): long
public "getOnlineMembers"(): $Collection<($ServerPlayer)>
public "areDependenciesVisible"(quest: $Quest$$Type): boolean
public "setQuestPinned"(player: $Player$$Type, id: long, pinned: boolean): void
public "isQuestPinned"(player: $Player$$Type, id: long): boolean
public "getCompletedTime"(questId: long): $Optional<($Date)>
public "getRewardClaimTime"(player: $UUID$$Type, reward: $Reward$$Type): $Optional<($Date)>
public "areRewardsBlocked"(): boolean
public "getStartedTime"(questId: long): $Optional<($Date)>
public "setRewardsBlocked"(rewardsBlocked: boolean): boolean
public "getPinnedQuestIds"(player: $Player$$Type): $LongSet
public "getTeamId"(): $UUID
public "setLocked"(newLocked: boolean): boolean
get "name"(): StringJS
set "name"(value: StringJS)
get "file"(): $BaseQuestFile
get "locked"(): boolean
get "onlineMembers"(): $Collection<($ServerPlayer)>
set "rewardsBlocked"(value: boolean)
get "teamId"(): $UUID
set "locked"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamData$$Type = ($TeamData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeamData$$Original = $TeamData;}
declare module "dev.ftb.mods.ftbquests.item.CustomIconItem" {
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $CustomIconItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "use"(level: $Level$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "setIcon"(stack: $ItemStack$$Type, texture: $ResourceLocation$$Type): void
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
public static "getIcon"(stack: $ItemStack$$Type): $Icon
public static "setFaceIcon"(stack: $ItemStack$$Type, value: $EntityType$$Type<(never)>): void
public static "setFaceIcon"(stack: $ItemStack$$Type, value: $ResourceLocation$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIconItem$$Type = ($CustomIconItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomIconItem$$Original = $CustomIconItem;}
declare module "dev.ftb.mods.ftbquests.block.entity.TaskScreenAuxBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ITaskScreen$$Interface} from "dev.ftb.mods.ftbquests.block.entity.ITaskScreen"
import {$UUID} from "java.util.UUID"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TaskScreenBlockEntity, $TaskScreenBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Nameable$$Interface} from "net.minecraft.world.Nameable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenAuxBlockEntity extends $BlockEntity implements $ITaskScreen$$Interface, $Nameable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getName"(): $Component
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getSkin"(): $ItemStack
public "isInputOnly"(): boolean
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "setCoreScreen"(coreScreen: $TaskScreenBlockEntity$$Type): void
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "isIndestructible"(): boolean
public "getTeamId"(): $UUID
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public "getCustomName"(): $Component
get "name"(): $Component
get "skin"(): $ItemStack
get "inputOnly"(): boolean
set "coreScreen"(value: $TaskScreenBlockEntity$$Type)
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "indestructible"(): boolean
get "teamId"(): $UUID
get "displayName"(): $Component
get "customName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenAuxBlockEntity$$Type = ($TaskScreenAuxBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskScreenAuxBlockEntity$$Original = $TaskScreenAuxBlockEntity;}
declare module "dev.ftb.mods.ftbquests.quest.BaseQuestFile" {
import {$Reward} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$DefaultChapterGroup} from "dev.ftb.mods.ftbquests.quest.DefaultChapterGroup"
import {$LootCrate} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$ProgressionMode} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$QuestFile$$Interface} from "dev.ftb.mods.ftbquests.api.QuestFile"
import {$TaskType} from "dev.ftb.mods.ftbquests.quest.task.TaskType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$QuestObject} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$RewardType} from "dev.ftb.mods.ftbquests.quest.reward.RewardType"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$RewardTable, $RewardTable$$Type} from "dev.ftb.mods.ftbquests.quest.loot.RewardTable"
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$ChapterGroup, $ChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$Env} from "dev.architectury.utils.Env"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TranslationManager} from "dev.ftb.mods.ftbquests.quest.translation.TranslationManager"
import {$EntityWeight} from "dev.ftb.mods.ftbquests.quest.loot.EntityWeight"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Task} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$RewardAutoClaim} from "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$QuestObjectBase} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $BaseQuestFile extends $QuestObject implements $QuestFile$$Interface {
static "VERSION": integer
readonly "id": long
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BaseQuestFile)>

constructor()

public "remove"(id: long): $QuestObjectBase
public "get"(id: long): $QuestObject
public "collect"<T extends $QuestObjectBase>(clazz: $Class$$Type<(T)>): $List<(T)>
public "collect"<T extends $QuestObjectBase>(cls: $Class$$Type<(T)>, filter: $Predicate$$Type<(T)>): $List<(T)>
public "create"(id: long, type: $QuestObjectType$$Type, parent: long, extra: $CompoundTag$$Type): $QuestObjectBase
public "getLocale"(): StringJS
public "getID"(obj: any): long
public "getFallbackLocale"(): StringJS
public "getBase"(id: long): $QuestObjectBase
public "getChildren"(): $Collection<($QuestObject)>
public "isLoading"(): boolean
public "getObjectType"(): $QuestObjectType
public "dropBookOnDeath"(): boolean
public "isDropLootCrates"(): boolean
public "readID"(id: long): long
public "readID"(tag: $Tag$$Type): long
public "refreshGui"(): void
public "getAltIcon"(): $Icon
public "onStarted"(data: $QuestProgressEventData$$Type<(never)>): void
public "deleteSelf"(): void
public "getChapter"(id: long): $Chapter
public "getQuest"(id: long): $Quest
public "getReward"(id: long): $Reward
public "canEdit"(): boolean
public "markDirty"(): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "isVisible"(data: $TeamData$$Type): boolean
public "newID"(): long
public "getTask"(id: long): $Task
public "getSide"(): $Env
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "isDefaultTeamConsumeItems"(): boolean
public "isDefaultQuestDisableJEI"(): boolean
public "clearCachedProgress"(): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "getDefaultRewardAutoClaim"(): $RewardAutoClaim
public "getDefaultChapterGroup"(): $DefaultChapterGroup
public "isDefaultPerTeamReward"(): boolean
public "getEmergencyItemsCooldown"(): integer
public "forAllChapterGroups"(consumer: $Consumer$$Type<($ChapterGroup)>): void
public "removeEmptyRewardTables"(source: $CommandSourceStack$$Type): integer
public "isHideExcludedQuests"(): boolean
public "getDefaultQuestShape"(): StringJS
public "getNullableTeamData"(id: $UUID$$Type): $TeamData
public "getTranslationManager"(): $TranslationManager
public "getOrCreateTeamData"(player: $Entity$$Type): $TeamData
public "getOrCreateTeamData"(teamId: $UUID$$Type): $TeamData
public "getOrCreateTeamData"(team: $Team$$Type): $TeamData
public "getQuestObjectOrThrow"<T extends $QuestObjectBase>(id: long, cls: $Class$$Type<(T)>): T
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "deleteObject"(arg0: long): void
public "holderLookup"(): $HolderLookup$Provider
public "addData"(data: $TeamData$$Type, override: boolean): void
public "makeRandomLootCrate"(entity: $Entity$$Type, random: $RandomSource$$Type): $Optional<($LootCrate)>
public "getFolder"(): $Path
public "getQuestFile"(): $BaseQuestFile
public "showLockIcons"(): boolean
public "forAllChapters"(consumer: $Consumer$$Type<($Chapter)>): void
public "deleteChildren"(): void
public "forAllQuests"(consumer: $Consumer$$Type<($Quest)>): void
public "isServerSide"(): boolean
public "refreshIDMap"(): void
public "getChapterOrThrow"(id: long): $Chapter
public "getRewardTable"(id: long): $RewardTable
public "getLootCrate"(id: StringJS): $LootCrate
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "getParentID"(): long
public "getTeamData"(player: $Player$$Type): $Optional<($TeamData)>
public "writeDataFull"(folder: $Path$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getChapterGroup"(id: long): $ChapterGroup
public "updateLootCrates"(): void
public "getAllObjects"(): $Collection<($QuestObjectBase)>
public "readDataFull"(folder: $Path$$Type, provider: $HolderLookup$Provider$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "writeNetDataFull"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetDataFull"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "clearCachedData"(): void
public "getAltTitle"(): $Component
public "getAllTeamData"(): $Collection<($TeamData)>
public "isDisableGui"(): boolean
public "addRewardTable"(rewardTable: $RewardTable$$Type): void
public "getChapterGroups"(): $List<($ChapterGroup)>
public "getRewardTables"(): $List<($RewardTable)>
public "getDetectionDelay"(): integer
public "forAllQuestLinks"(consumer: $Consumer$$Type<($QuestLink)>): void
public "getCraftingTasks"(): $List<($Task)>
public "getTaskType"(typeId: integer): $TaskType
public "getSubmitTasks"(): $List<($Task)>
public "isPauseGame"(): boolean
public "getRewardType"(typeId: integer): $RewardType
public "removeRewardTable"(rewardTable: $RewardTable$$Type): void
public "getGridScale"(): double
public "isPlayerOnTeam"(arg0: $Player$$Type, arg1: $TeamData$$Type): boolean
public "getEmergencyItems"(): $List<($ItemStack)>
public "getLootCrateNoDrop"(): $EntityWeight
public "getProgressionMode"(): $ProgressionMode
public "getAllTasks"(): $List<($Task)>
public "moveChapterGroup"(id: long, movingUp: boolean): boolean
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getAllChapters"(): $List<($Chapter)>
public "getVisibleChapters"(data: $TeamData$$Type): $List<($Chapter)>
public "refreshRewardTableRewardIDs"(): void
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
get "locale"(): StringJS
get "fallbackLocale"(): StringJS
get "children"(): $Collection<($QuestObject)>
get "loading"(): boolean
get "objectType"(): $QuestObjectType
get "dropLootCrates"(): boolean
get "altIcon"(): $Icon
get "side"(): $Env
get "defaultTeamConsumeItems"(): boolean
get "defaultQuestDisableJEI"(): boolean
get "defaultRewardAutoClaim"(): $RewardAutoClaim
get "defaultChapterGroup"(): $DefaultChapterGroup
get "defaultPerTeamReward"(): boolean
get "emergencyItemsCooldown"(): integer
get "hideExcludedQuests"(): boolean
get "defaultQuestShape"(): StringJS
get "translationManager"(): $TranslationManager
get "folder"(): $Path
get "questFile"(): $BaseQuestFile
get "serverSide"(): boolean
get "parentID"(): long
get "allObjects"(): $Collection<($QuestObjectBase)>
get "altTitle"(): $Component
get "allTeamData"(): $Collection<($TeamData)>
get "disableGui"(): boolean
get "chapterGroups"(): $List<($ChapterGroup)>
get "rewardTables"(): $List<($RewardTable)>
get "detectionDelay"(): integer
get "craftingTasks"(): $List<($Task)>
get "submitTasks"(): $List<($Task)>
get "pauseGame"(): boolean
get "gridScale"(): double
get "emergencyItems"(): $List<($ItemStack)>
get "lootCrateNoDrop"(): $EntityWeight
get "progressionMode"(): $ProgressionMode
get "allTasks"(): $List<($Task)>
get "allChapters"(): $List<($Chapter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseQuestFile$$Type = ($BaseQuestFile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseQuestFile$$Original = $BaseQuestFile;}
declare module "dev.ftb.mods.ftbquests.item.QuestBarrierBlockItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $QuestBarrierBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlockItem$$Type = ($QuestBarrierBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestBarrierBlockItem$$Original = $QuestBarrierBlockItem;}
declare module "dev.ftb.mods.ftbquests.item.QuestBookItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $QuestBookItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBookItem$$Type = ($QuestBookItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestBookItem$$Original = $QuestBookItem;}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType$Provider" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"

export interface $RewardType$Provider$$Interface {

(arg0: long, arg1: $Quest): $Reward$$Type
}

export class $RewardType$Provider implements $RewardType$Provider$$Interface {
 "create"(arg0: long, arg1: $Quest$$Type): $Reward
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$Provider$$Type = ((arg0: long, arg1: $Quest) => $Reward$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardType$Provider$$Original = $RewardType$Provider;}
declare module "dev.ftb.mods.ftbquests.block.TaskScreenBlock$Aux" {
import {$TaskScreenBlock} from "dev.ftb.mods.ftbquests.block.TaskScreenBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenBlock$Aux extends $TaskScreenBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlock$Aux$$Type = ($TaskScreenBlock$Aux);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskScreenBlock$Aux$$Original = $TaskScreenBlock$Aux;}
declare module "dev.ftb.mods.ftbquests.block.StageBarrierBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$QuestBarrierBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.QuestBarrierBlockEntity"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$QuestBarrierBlock} from "dev.ftb.mods.ftbquests.block.QuestBarrierBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StageBarrierBlock extends $QuestBarrierBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "stageBlockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($QuestBarrierBlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageBarrierBlock$$Type = ($StageBarrierBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StageBarrierBlock$$Original = $StageBarrierBlock;}
declare module "dev.ftb.mods.ftbquests.quest.loot.RewardTable" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$LootCrate} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$WeightedReward, $WeightedReward$$Type} from "dev.ftb.mods.ftbquests.quest.loot.WeightedReward"
import {$List} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$Set} from "java.util.Set"
import {$QuestObjectBase} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $RewardTable extends $QuestObjectBase {
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type)
constructor(id: long, file: $BaseQuestFile$$Type, filename: StringJS)

public "copy"(): $RewardTable
public "getFile"(): $BaseQuestFile
public "getPath"(): $Optional<(StringJS)>
public "getObjectType"(): $QuestObjectType
public "addReward"(weightedReward: $WeightedReward$$Type): void
public "onCreated"(): void
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "onEditButtonClicked"(gui: $Runnable$$Type): void
public "editedFromGUIOnServer"(): void
public static "createRewardForTable"(id: long, type: StringJS, file: $BaseQuestFile$$Type): $QuestObjectBase
public "getTotalWeight"(includeEmpty: boolean): float
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getTitleOrElse"(def: $Component$$Type): $Component
public "toggleLootCrate"(): $LootCrate
public "getFakeQuest"(): $Quest
public "shouldShowTooltip"(): boolean
public "getFilename"(): StringJS
public "makeWeightedItemReward"(stack: $ItemStack$$Type, weight: float): $WeightedReward
public "generateWeightedRandomRewards"(random: $RandomSource$$Type, nAttempts: integer, includeEmpty: boolean): $Collection<($WeightedReward)>
public "getQuestFile"(): $BaseQuestFile
public "getLootCrate"(): $LootCrate
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public static "isFakeQuestId"(id: long): boolean
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "clearCachedData"(): void
public "getAltTitle"(): $Component
public "getWeightedRewards"(): $List<($WeightedReward)>
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "editedFromGUI"(): void
public "addMouseOverText"(list: $TooltipList$$Type, includeWeight: boolean, includeEmpty: boolean): void
public "removeReward"(weightedReward: $WeightedReward$$Type): void
get "file"(): $BaseQuestFile
get "path"(): $Optional<(StringJS)>
get "objectType"(): $QuestObjectType
get "altIcon"(): $Icon
get "fakeQuest"(): $Quest
get "filename"(): StringJS
get "questFile"(): $BaseQuestFile
get "lootCrate"(): $LootCrate
get "altTitle"(): $Component
get "weightedRewards"(): $List<($WeightedReward)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardTable$$Type = ($RewardTable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardTable$$Original = $RewardTable;}
declare module "dev.ftb.mods.ftbquests.quest.QuestObjectBase" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Chapter} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$List$$Type} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$TranslationKey$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationKey"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$BaseQuestFile} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Set} from "java.util.Set"

export class $QuestObjectBase implements $Comparable$$Interface<($QuestObjectBase)> {
readonly "id": long

constructor(id: long)

public "equals"(object: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(other: $QuestObjectBase$$Type): integer
public "compareTo"(arg0: any): integer
public "getId"(): long
public static "copy"<T extends $QuestObjectBase>(orig: T, factory: $Supplier$$Type<(T)>): T
public "getPath"(): $Optional<(StringJS)>
public static "isNull"(object: $QuestObjectBase$$Type): boolean
public static "getID"(object: $QuestObjectBase$$Type): long
public "isValid"(): boolean
public "getObjectType"(): $QuestObjectType
public static "titleToID"(s: StringJS): $Optional<(StringJS)>
public "onCreated"(): void
public "getAltIcon"(): $Icon
public "setRawIcon"(rawIcon: $ItemStack$$Type): void
public static "parseHexId"(id: StringJS): $Optional<(long)>
public "deleteSelf"(): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getTags"(): $Set<(StringJS)>
public static "singleItemOrMissingFromNBT"(tag: $Tag$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "getProtoTranslation"(key: $TranslationKey$$Type): StringJS
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "onEditButtonClicked"(gui: $Runnable$$Type): void
public "editedFromGUIOnServer"(): void
public static "shouldSendNotifications"(): boolean
public static "itemOrMissingFromNBT"(tag: $Tag$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "hasTag"(tag: StringJS): boolean
public "getTitle"(): $Component
public "holderLookup"(): $HolderLookup$Provider
public "getIcon"(): $Icon
public "getQuestFile"(): $BaseQuestFile
public "deleteChildren"(): void
public "getParentID"(): long
public "getCodeString"(): StringJS
public static "getCodeString"(id: long): StringJS
public static "getCodeString"(object: $QuestObjectBase$$Type): StringJS
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "clearCachedData"(): void
public "getAltTitle"(): $Component
public "getQuestChapter"(): $Chapter
public "setRawTitle"(rawTitle: StringJS): void
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public static "parseCodeString"(id: StringJS): long
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getRawTitle"(): StringJS
public "getMutableTitle"(): $MutableComponent
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "editedFromGUI"(): void
public "forceProgressRaw"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "modifyTranslatableListValue"(translationKey: $TranslationKey$$Type, setter: $Consumer$$Type<($List<(StringJS)>)>): void
get "path"(): $Optional<(StringJS)>
get "valid"(): boolean
get "objectType"(): $QuestObjectType
get "altIcon"(): $Icon
set "rawIcon"(value: $ItemStack$$Type)
get "tags"(): $Set<(StringJS)>
get "title"(): $Component
get "icon"(): $Icon
get "questFile"(): $BaseQuestFile
get "parentID"(): long
get "codeString"(): StringJS
get "altTitle"(): $Component
get "questChapter"(): $Chapter
set "rawTitle"(value: StringJS)
get "rawTitle"(): StringJS
get "mutableTitle"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectBase$$Type = ($QuestObjectBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestObjectBase$$Original = $QuestObjectBase;}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType" {
import {$Reward} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$RewardType$Provider$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType$Provider"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$RewardType$GuiProvider, $RewardType$GuiProvider$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType$GuiProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $RewardType {
 "intId": integer

constructor(typeId: $ResourceLocation$$Type, provider: $RewardType$Provider$$Type, iconSupplier: $Supplier$$Type<($Icon$$Type)>, availableByDefault: boolean)
constructor(typeId: $ResourceLocation$$Type, provider: $RewardType$Provider$$Type, iconSupplier: $Supplier$$Type<($Icon$$Type)>)

public "getDisplayName"(): $Component
public "getTypeId"(): $ResourceLocation
public "setExcludeFromListRewards"(v: boolean): $RewardType
public "getExcludeFromListRewards"(): boolean
public "setDisplayName"(name: $Component$$Type): $RewardType
public "createReward"(id: long, quest: $Quest$$Type): $Reward
public static "createReward"(id: long, quest: $Quest$$Type, typeId: StringJS): $Reward
public "getIconSupplier"(): $Icon
public "getTypeForNBT"(): StringJS
public "getGuiProvider"(): $RewardType$GuiProvider
public "makeExtraNBT"(): $CompoundTag
public "setGuiProvider"(p: $RewardType$GuiProvider$$Type): $RewardType
get "displayName"(): $Component
get "typeId"(): $ResourceLocation
set "excludeFromListRewards"(value: boolean)
get "excludeFromListRewards"(): boolean
set "displayName"(value: $Component$$Type)
get "iconSupplier"(): $Icon
get "typeForNBT"(): StringJS
get "guiProvider"(): $RewardType$GuiProvider
set "guiProvider"(value: $RewardType$GuiProvider$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$$Type = ($RewardType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardType$$Original = $RewardType;}
declare module "dev.ftb.mods.ftbquests.quest.loot.LootCrate" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$EntityWeight} from "dev.ftb.mods.ftbquests.quest.loot.EntityWeight"
import {$RewardTable, $RewardTable$$Type} from "dev.ftb.mods.ftbquests.quest.loot.RewardTable"

export class $LootCrate {
constructor(table: $RewardTable$$Type, initFromTable: boolean)

public "getTable"(): $RewardTable
public "createStack"(): $ItemStack
public "getColor"(): $Color4I
public "getDrops"(): $EntityWeight
public "readData"(nbt: $CompoundTag$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): void
public "getStringID"(): StringJS
public static "getLootCrates"(isClient: boolean): $Map<(StringJS), ($LootCrate)>
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
public "readNetData"(data: $FriendlyByteBuf$$Type): void
public static "allCrateStacks"(isClientSide: boolean): $Collection<($ItemStack)>
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getItemName"(): StringJS
public "isGlow"(): boolean
public "initFromTable"(): void
get "table"(): $RewardTable
get "color"(): $Color4I
get "drops"(): $EntityWeight
get "stringID"(): StringJS
get "itemName"(): StringJS
get "glow"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrate$$Type = ($LootCrate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootCrate$$Original = $LootCrate;}
declare module "dev.ftb.mods.ftbquests.quest.QuestObjectType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum} from "java.lang.Enum"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Component} from "net.minecraft.network.chat.Component"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $QuestObjectType extends $Enum<($QuestObjectType)> implements $Predicate$$Interface<($QuestObjectBase)> {
static readonly "TASK": $QuestObjectType
static readonly "ALL_PROGRESSING_OR_NULL": $Predicate<($QuestObjectBase)>
static readonly "NULL": $QuestObjectType
static readonly "NAME_MAP": $NameMap<($QuestObjectType)>
static readonly "REWARD": $QuestObjectType
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($QuestObjectType)>
static readonly "ALL_PROGRESSING": $Predicate<($QuestObjectBase)>
static readonly "CHAPTER": $QuestObjectType
static readonly "QUEST_LINK": $QuestObjectType
static readonly "CHAPTER_GROUP": $QuestObjectType
static readonly "FILE": $QuestObjectType
static readonly "REWARD_TABLE": $QuestObjectType
static readonly "QUEST": $QuestObjectType

public static "values"(): ($QuestObjectType)[]
public "test"(object: $QuestObjectBase$$Type): boolean
public "test"(arg0: any): boolean
public static "valueOf"(name: StringJS): $QuestObjectType
public "getId"(): StringJS
public "getColor"(): $ChatFormatting
public "getCompletedMessage"(): $Component
public "or"(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public "negate"(): $Predicate<($QuestObjectBase)>
public "and"(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public static "not"<T>(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public static "isEqual"<T>(arg0: any): $Predicate<($QuestObjectBase)>
get "id"(): StringJS
get "color"(): $ChatFormatting
get "completedMessage"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectType$$Type = (("null") | ("file") | ("chapter") | ("quest") | ("task") | ("reward") | ("reward_table") | ("chapter_group") | ("quest_link"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestObjectType$$Original = $QuestObjectType;}
declare module "dev.ftb.mods.ftbquests.item.StageBarrierBlockItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $StageBarrierBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageBarrierBlockItem$$Type = ($StageBarrierBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StageBarrierBlockItem$$Original = $StageBarrierBlockItem;}
declare module "dev.ftb.mods.ftbquests.events.QuestProgressEventData" {
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$Collection$$Type} from "java.util.Collection"
import {$List} from "java.util.List"
import {$Date, $Date$$Type} from "java.util.Date"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"

export class $QuestProgressEventData<T extends $QuestObject> {
constructor(date: $Date$$Type, teamData: $TeamData$$Type, object: T, online: $Collection$$Type<($ServerPlayer$$Type)>, notified: $Collection$$Type<($ServerPlayer$$Type)>)

public "getObject"(): T
public "getTime"(): $Date
public "setCompleted"(id: long): void
public "withObject"<N extends $QuestObject>(o: N): $QuestProgressEventData<(N)>
public "setStarted"(id: long): void
public "notifyPlayers"(id: long): void
public "getTeamData"(): $TeamData
public "getOnlineMembers"(): $List<($ServerPlayer)>
public static "forClient"<T extends $QuestObject>(date: $Date$$Type, teamData: $TeamData$$Type, object: T): $QuestProgressEventData<(T)>
public "getNotifiedPlayers"(): $List<($ServerPlayer)>
get "object"(): T
get "time"(): $Date
set "completed"(value: long)
set "started"(value: long)
get "teamData"(): $TeamData
get "onlineMembers"(): $List<($ServerPlayer)>
get "notifiedPlayers"(): $List<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestProgressEventData$$Type<T> = ($QuestProgressEventData<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestProgressEventData$$Original<T> = $QuestProgressEventData<(T)>;}
declare module "dev.ftb.mods.ftbquests.item.MissingItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"

export class $MissingItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingItem$$Type = ($MissingItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MissingItem$$Original = $MissingItem;}
declare module "dev.ftb.mods.ftbquests.block.QuestBarrierBlock" {
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$QuestBarrierBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.QuestBarrierBlockEntity"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $QuestBarrierBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type)

public "getCloneItemStack"(levelReader: $LevelReader$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $ItemStack
public "getCollisionShape"(state: $BlockState$$Type, bg: $BlockGetter$$Type, pos: $BlockPos$$Type, ctx: $CollisionContext$$Type): $VoxelShape
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "skipRendering"(state: $BlockState$$Type, state2: $BlockState$$Type, dir: $Direction$$Type): boolean
public "getShadeBrightness"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "getVisualShape"(state: $BlockState$$Type, blockGetter: $BlockGetter$$Type, pos: $BlockPos$$Type, ctx: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, blockState: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "propagatesSkylightDown"(state: $BlockState$$Type, bg: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public static "questBlockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($QuestBarrierBlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlock$$Type = ($QuestBarrierBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestBarrierBlock$$Original = $QuestBarrierBlock;}
declare module "dev.ftb.mods.ftbquests.quest.Excludable" {
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"

export interface $Excludable$$Interface {
get "id"(): long
}

export class $Excludable implements $Excludable$$Interface {
 "getId"(): long
 "isQuestObjectExcluded"(arg0: $TeamData$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Excludable$$Type = ($Excludable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Excludable$$Original = $Excludable;}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationTable" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"

export class $TranslationTable {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TranslationTable)>

constructor()

public "remove"(key: StringJS): void
public "size"(): integer
public "put"(key: StringJS, message: StringJS): void
public "put"(key: StringJS, message: $List$$Type<(StringJS)>): void
public "contains"(key: StringJS): boolean
public "getStringListTranslation"(key: StringJS): $Optional<($List<(StringJS)>)>
public "getStringTranslation"(key: StringJS): $Optional<(StringJS)>
public static "fromNBT"(tag: $CompoundTag$$Type): $TranslationTable
public "saveToNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationTable$$Type = ($TranslationTable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TranslationTable$$Original = $TranslationTable;}
declare module "dev.ftb.mods.ftbquests.quest.task.Task" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$PositionedIngredient} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TaskType} from "dev.ftb.mods.ftbquests.quest.task.TaskType"
import {$QuestObject} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$BaseQuestFile} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Set} from "java.util.Set"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Chapter} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $Task extends $QuestObject {
readonly "id": long

constructor(id: long, quest: $Quest$$Type)

public "getType"(): $TaskType
public "getObjectType"(): $QuestObjectType
public "onCreated"(): void
public "getAltIcon"(): $Icon
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type, craftedItem: $ItemStack$$Type): void
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type): void
public "drawGUI"(teamData: $TeamData$$Type, graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "onStarted"(data: $QuestProgressEventData$$Type<(never)>): void
public "deleteSelf"(): void
public "getQuest"(): $Quest
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "isOptionalForProgression"(teamData: $TeamData$$Type): boolean
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getIngredient"(widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public "getMaxProgress"(): long
public "getQuestFile"(): $BaseQuestFile
public "deleteChildren"(): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "getParentID"(): long
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getQuestChapter"(): $Chapter
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "cacheProgress"(): boolean
public "getRelatedQuest"(): $Quest
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "checkOnLogin"(): boolean
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "editedFromGUI"(): void
public "formatProgress"(teamData: $TeamData$$Type, progress: long): StringJS
public "canInsertItem"(): boolean
public "consumesResources"(): boolean
public "addMouseOverText"(list: $TooltipList$$Type, teamData: $TeamData$$Type): void
public "addMouseOverHeader"(list: $TooltipList$$Type, teamData: $TeamData$$Type, advanced: boolean): void
public "getButtonText"(): $MutableComponent
public "formatMaxProgress"(): StringJS
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "submitItemsOnInventoryChange"(): boolean
public "autoSubmitOnPlayerTick"(): integer
public "hideProgressNumbers"(): boolean
public "addTitleInMouseOverText"(): boolean
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
get "type"(): $TaskType
get "objectType"(): $QuestObjectType
get "altIcon"(): $Icon
get "quest"(): $Quest
get "maxProgress"(): long
get "questFile"(): $BaseQuestFile
get "parentID"(): long
get "altTitle"(): $Component
get "questChapter"(): $Chapter
get "relatedQuest"(): $Quest
get "buttonText"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Task$$Type = ($Task);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Task$$Original = $Task;}
declare module "dev.ftb.mods.ftbquests.block.entity.IEditable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $IEditable$$Interface {

(arg0: $Player): boolean
}

export class $IEditable implements $IEditable$$Interface {
 "hasPermissionToEdit"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditable$$Type = ((arg0: $Player) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEditable$$Original = $IEditable;}
declare module "dev.ftb.mods.ftbquests.quest.Movable" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $Movable$$Interface {
get "shape"(): StringJS
get "chapter"(): $Chapter
get "y"(): double
get "title"(): $Component
get "x"(): double
get "height"(): double
get "rotation"(): double
get "movableID"(): long
get "alignToCorner"(): boolean
get "width"(): double
}

export class $Movable implements $Movable$$Interface {
 "getShape"(): StringJS
 "copyToClipboard"(): void
 "drawMoved"(graphics: $GuiGraphics$$Type): void
 "getChapter"(): $Chapter
 "onMoved"(arg0: double, arg1: double, arg2: long): void
 "getY"(): double
 "getTitle"(): $Component
 "getX"(): double
 "getHeight"(): double
 "getRotation"(): double
 "getMovableID"(): long
 "isAlignToCorner"(): boolean
 "initiateMoveClientSide"(arg0: $Chapter$$Type, arg1: double, arg2: double): void
 "getWidth"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Movable$$Type = ($Movable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Movable$$Original = $Movable;}
declare module "dev.ftb.mods.ftbquests.quest.QuestObject" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$UUID$$Type} from "java.util.UUID"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$QuestObjectBase} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $QuestObject extends $QuestObjectBase {
readonly "id": long

constructor(id: long)

public "getChildren"(): $Collection<($QuestObject)>
public "onStarted"(data: $QuestProgressEventData$$Type<(never)>): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "isVisible"(data: $TeamData$$Type): boolean
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "isOptionalForProgression"(teamData: $TeamData$$Type): boolean
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "cacheProgress"(): boolean
public "getProgressColor"(data: $TeamData$$Type, dim: boolean): $Color4I
public "getProgressColor"(data: $TeamData$$Type): $Color4I
public "isCompletedRaw"(data: $TeamData$$Type): boolean
public "isSearchable"(data: $TeamData$$Type): boolean
public "getRelatedQuest"(): $Quest
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public static "getRelativeProgressFromChildren"(progressSum: integer, count: integer): integer
public "getRelativeProgressFromChildren"(arg0: $TeamData$$Type): integer
get "children"(): $Collection<($QuestObject)>
get "relatedQuest"(): $Quest
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObject$$Type = ($QuestObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestObject$$Original = $QuestObject;}
declare module "dev.ftb.mods.ftbquests.quest.reward.Reward" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID$$Type} from "java.util.UUID"
import {$List$$Type} from "java.util.List"
import {$PositionedIngredient} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$Component} from "net.minecraft.network.chat.Component"
import {$RewardType} from "dev.ftb.mods.ftbquests.quest.reward.RewardType"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$BaseQuestFile} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Set} from "java.util.Set"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Chapter} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$RewardAutoClaim} from "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$QuestObjectBase} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $Reward extends $QuestObjectBase {
readonly "id": long

constructor(id: long, q: $Quest$$Type)

public "getType"(): $RewardType
public "getObjectType"(): $QuestObjectType
public "onCreated"(): void
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "getQuest"(): $Quest
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "ignoreRewardBlocking"(): boolean
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "claim"(arg0: $ServerPlayer$$Type, arg1: boolean): void
public "automatedClaimPost"(blockEntity: $BlockEntity$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): void
public "automatedClaimPre"(blockEntity: $BlockEntity$$Type, items: $List$$Type<($ItemStack$$Type)>, random: $RandomSource$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): boolean
public "isTeamReward"(): boolean
public "getAutoClaimType"(): $RewardAutoClaim
public "getIngredient"(widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public "addAnyProtoTranslations"(tag: $CompoundTag$$Type): void
public "isClaimAllHardcoded"(): boolean
public "getExcludeFromClaimAll"(): boolean
public "getQuestFile"(): $BaseQuestFile
public "deleteChildren"(): void
public "getParentID"(): long
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getQuestChapter"(): $Chapter
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "editedFromGUI"(): void
public "addMouseOverText"(list: $TooltipList$$Type): void
public "getButtonText"(): StringJS
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "addTitleInMouseOverText"(): boolean
get "type"(): $RewardType
get "objectType"(): $QuestObjectType
get "altIcon"(): $Icon
get "quest"(): $Quest
get "teamReward"(): boolean
get "autoClaimType"(): $RewardAutoClaim
get "claimAllHardcoded"(): boolean
get "excludeFromClaimAll"(): boolean
get "questFile"(): $BaseQuestFile
get "parentID"(): long
get "altTitle"(): $Component
get "questChapter"(): $Chapter
get "buttonText"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reward$$Type = ($Reward);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Reward$$Original = $Reward;}
declare module "dev.ftb.mods.ftbquests.block.entity.ITaskScreen" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID} from "java.util.UUID"
import {$IEditable$$Interface} from "dev.ftb.mods.ftbquests.block.entity.IEditable"
import {$TaskScreenBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"

export interface $ITaskScreen$$Interface extends $IEditable$$Interface {
get "skin"(): $ItemStack
get "inputOnly"(): boolean
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "indestructible"(): boolean
get "teamId"(): $UUID
}

export class $ITaskScreen implements $ITaskScreen$$Interface {
 "getSkin"(): $ItemStack
 "isInputOnly"(): boolean
 "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
 "isIndestructible"(): boolean
 "getTeamId"(): $UUID
 "hasPermissionToEdit"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITaskScreen$$Type = ($ITaskScreen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITaskScreen$$Original = $ITaskScreen;}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationKey" {
import {$Enum} from "java.lang.Enum"
import {$List, $List$$Type} from "java.util.List"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $TranslationKey extends $Enum<($TranslationKey)> {
static readonly "QUEST_DESC": $TranslationKey
static readonly "NAME_MAP": $NameMap<($TranslationKey)>
static readonly "TITLE": $TranslationKey
static readonly "QUEST_SUBTITLE": $TranslationKey
static readonly "CHAPTER_SUBTITLE": $TranslationKey

public "getName"(): StringJS
public static "values"(): ($TranslationKey)[]
public static "valueOf"(name: StringJS): $TranslationKey
public "validate"(either: $Either$$Type<(StringJS), ($List$$Type<(StringJS)>)>): $Either<(StringJS), ($List<(StringJS)>)>
public "isListVal"(): boolean
public "getTranslationKey"(): StringJS
get "name"(): StringJS
get "listVal"(): boolean
get "translationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationKey$$Type = (("title") | ("quest_subtitle") | ("quest_desc") | ("chapter_subtitle"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TranslationKey$$Original = $TranslationKey;}
declare module "dev.ftb.mods.ftbquests.quest.ChapterImage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Movable$$Interface} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$WeakReference} from "java.lang.ref.WeakReference"
import {$Color4I} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"

export class $ChapterImage implements $Movable$$Interface {
static readonly "FTBQ_IMAGE": StringJS
static "clipboard": $WeakReference<($ChapterImage)>
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ChapterImage)>

constructor(c: $Chapter$$Type)

public "copy"(newChapter: $Chapter$$Type, newX: double, newY: double): $ChapterImage
public "getShape"(): StringJS
public "copyToClipboard"(): void
public "getColor"(): $Color4I
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "getChapter"(): $Chapter
public "onMoved"(x: double, y: double, chapterId: long): void
public "getAlpha"(): integer
public "getY"(): double
public "readData"(nbt: $CompoundTag$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): $CompoundTag
public "getTitle"(): $Component
public "getOrder"(): integer
public "getX"(): double
public "getHeight"(): double
public "getImage"(): $Icon
public "getRotation"(): double
public "setPosition"(x: double, y: double): $ChapterImage
public "fixupAspectRatio"(adjustWidth: boolean): void
public "addHoverText"(list: $TooltipList$$Type): void
public "isAspectRatioOff"(): boolean
public static "isImageInClipboard"(): boolean
public "shouldShowImage"(teamData: $TeamData$$Type): boolean
public "writeNetData"(buffer: $FriendlyByteBuf$$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getMovableID"(): long
public "isAlignToCorner"(): boolean
public "initiateMoveClientSide"(to: $Chapter$$Type, _x: double, _y: double): void
public "setImage"(image: $Icon$$Type): $ChapterImage
public static "fromNet"(parent: $Chapter$$Type, buf: $FriendlyByteBuf$$Type): $ChapterImage
public "getClick"(): StringJS
public "getWidth"(): double
get "shape"(): StringJS
get "color"(): $Color4I
get "chapter"(): $Chapter
get "alpha"(): integer
get "y"(): double
get "title"(): $Component
get "order"(): integer
get "x"(): double
get "height"(): double
get "image"(): $Icon
get "rotation"(): double
get "aspectRatioOff"(): boolean
public static get "imageInClipboard"(): boolean
get "movableID"(): long
get "alignToCorner"(): boolean
set "image"(value: $Icon$$Type)
get "click"(): StringJS
get "width"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChapterImage$$Type = ($ChapterImage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChapterImage$$Original = $ChapterImage;}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim" {
import {$Enum} from "java.lang.Enum"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $RewardAutoClaim extends $Enum<($RewardAutoClaim)> {
static readonly "DISABLED": $RewardAutoClaim
static readonly "NO_TOAST": $RewardAutoClaim
static readonly "INVISIBLE": $RewardAutoClaim
static readonly "NAME_MAP": $NameMap<($RewardAutoClaim)>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<($RewardAutoClaim)>
static readonly "ENABLED": $RewardAutoClaim
 "id": StringJS
static readonly "DEFAULT": $RewardAutoClaim

public static "values"(): ($RewardAutoClaim)[]
public static "valueOf"(name: StringJS): $RewardAutoClaim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardAutoClaim$$Type = (("default") | ("disabled") | ("enabled") | ("no_toast") | ("invisible"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardAutoClaim$$Original = $RewardAutoClaim;}
declare module "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity$TeleportData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Record} from "java.lang.Record"

export class $BaseBarrierBlockEntity$TeleportData extends $Record {
static readonly "CODEC": $Codec<($BaseBarrierBlockEntity$TeleportData)>
static readonly "NONE": $BaseBarrierBlockEntity$TeleportData
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BaseBarrierBlockEntity$TeleportData)>

constructor(enabled: boolean, relative: boolean, dest: $BlockPos$$Type, pitch: float, yaw: float, dimId: ($ResourceKey$$Type<($Level$$Type)>)?)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "enabled"(): boolean
public "dest"(): $BlockPos
public "getLevel"(server: $MinecraftServer$$Type): $Level
public "relative"(): boolean
public "pitch"(): float
public "yaw"(): float
public "teleportPlayer"(player: $ServerPlayer$$Type): void
public "withDestPos"(pos: $BlockPos$$Type): $BaseBarrierBlockEntity$TeleportData
public "dimId"(): $Optional<($ResourceKey<($Level)>)>
public "effectiveDest"(basePos: $BlockPos$$Type): $BaseBarrierBlockEntity$TeleportData
public "withEnabled"(enabled: boolean): $BaseBarrierBlockEntity$TeleportData
public "withRelative"(relative: boolean): $BaseBarrierBlockEntity$TeleportData
public "dimStr"(): StringJS
public "withDestX"(x: integer): $BaseBarrierBlockEntity$TeleportData
public "withDestZ"(z: integer): $BaseBarrierBlockEntity$TeleportData
public "withDestY"(y: integer): $BaseBarrierBlockEntity$TeleportData
public "withDimId"(dimStr: StringJS): $BaseBarrierBlockEntity$TeleportData
public "withDimId"(dimId: $ResourceKey$$Type<($Level)>): $BaseBarrierBlockEntity$TeleportData
public "withYaw"(yaw: float): $BaseBarrierBlockEntity$TeleportData
public "withPitch"(pitch: float): $BaseBarrierBlockEntity$TeleportData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBarrierBlockEntity$TeleportData$$Type = ({"enabled"?: boolean, "pitch"?: float, "dimId"?: ($ResourceKey$$Type<($Level$$Type)>)?, "dest"?: $BlockPos$$Type, "relative"?: boolean, "yaw"?: float}) | ([enabled?: boolean, pitch?: float, dimId?: ($ResourceKey$$Type<($Level$$Type)>)?, dest?: $BlockPos$$Type, relative?: boolean, yaw?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBarrierBlockEntity$TeleportData$$Original = $BaseBarrierBlockEntity$TeleportData;}
declare module "dev.ftb.mods.ftbquests.quest.QuestLink" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Movable$$Interface} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$QuestObject} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$BaseQuestFile} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Excludable$$Interface} from "dev.ftb.mods.ftbquests.quest.Excludable"

export class $QuestLink extends $QuestObject implements $Movable$$Interface, $Excludable$$Interface {
readonly "id": long

constructor(id: long, chapter: $Chapter$$Type, linkId: long)

public "getShape"(): StringJS
public "getObjectType"(): $QuestObjectType
public "copyToClipboard"(): void
public "onCreated"(): void
public "getAltIcon"(): $Icon
public "linksTo"(quest: $Quest$$Type): boolean
public "deleteSelf"(): void
public "getChapter"(): $Chapter
public "getQuest"(): $Optional<($Quest)>
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "getY"(): double
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "isVisible"(data: $TeamData$$Type): boolean
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getX"(): double
public "getHeight"(): double
public "setPosition"(qx: double, qy: double): void
public "getQuestFile"(): $BaseQuestFile
public "getParentID"(): long
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getRelatedQuest"(): $Quest
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "editedFromGUI"(): void
public "getMovableID"(): long
public "initiateMoveClientSide"(to: $Chapter$$Type, x: double, y: double): void
public "isQuestObjectExcluded"(teamData: $TeamData$$Type): boolean
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "getWidth"(): double
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "getTitle"(): $Component
public "getRotation"(): double
public "isAlignToCorner"(): boolean
public "getId"(): long
get "shape"(): StringJS
get "objectType"(): $QuestObjectType
get "altIcon"(): $Icon
get "chapter"(): $Chapter
get "quest"(): $Optional<($Quest)>
get "y"(): double
get "x"(): double
get "height"(): double
get "questFile"(): $BaseQuestFile
get "parentID"(): long
get "altTitle"(): $Component
get "relatedQuest"(): $Quest
get "movableID"(): long
get "width"(): double
get "title"(): $Component
get "rotation"(): double
get "alignToCorner"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestLink$$Type = ($QuestLink);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestLink$$Original = $QuestLink;}
declare module "dev.ftb.mods.ftbquests.block.LootCrateOpenerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootCrateOpenerBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.LootCrateOpenerBlockEntity"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootCrateOpenerBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, livingEntity: $LivingEntity$$Type, itemStack: $ItemStack$$Type): void
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "blockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($LootCrateOpenerBlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateOpenerBlock$$Type = ($LootCrateOpenerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootCrateOpenerBlock$$Original = $LootCrateOpenerBlock;}
declare module "dev.ftb.mods.ftbquests.util.ProgressChange" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Date} from "java.util.Date"
import {$QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $ProgressChange {
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ProgressChange)>

constructor(origin: $QuestObjectBase$$Type, playerId: $UUID$$Type)

public "getDate"(): $Date
public static "createServerSide"(origin: long, reset: boolean, playerId: $UUID$$Type, notifications: boolean): $ProgressChange
public "withNotifications"(): $ProgressChange
public "maybeForceProgress"(teamId: $UUID$$Type): void
public "getPlayerId"(): $UUID
public "shouldReset"(): boolean
public "shouldNotify"(): boolean
public "setReset"(reset: boolean): $ProgressChange
get "date"(): $Date
get "playerId"(): $UUID
set "reset"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressChange$$Type = ($ProgressChange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressChange$$Original = $ProgressChange;}
declare module "dev.ftb.mods.ftbquests.item.ScreenBlockItem$ScreenSize" {
import {$Enum} from "java.lang.Enum"

export class $ScreenBlockItem$ScreenSize extends $Enum<($ScreenBlockItem$ScreenSize)> {
static readonly "THREE_X_THREE": $ScreenBlockItem$ScreenSize
static readonly "FIVE_X_FIVE": $ScreenBlockItem$ScreenSize
static readonly "SEVEN_X_SEVEN": $ScreenBlockItem$ScreenSize
static readonly "ONE_X_ONE": $ScreenBlockItem$ScreenSize

public static "values"(): ($ScreenBlockItem$ScreenSize)[]
public static "valueOf"(name: StringJS): $ScreenBlockItem$ScreenSize
public "getSize"(): integer
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlockItem$ScreenSize$$Type = (("one_x_one") | ("three_x_three") | ("five_x_five") | ("seven_x_seven"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenBlockItem$ScreenSize$$Original = $ScreenBlockItem$ScreenSize;}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType$GuiProvider" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $RewardType$GuiProvider$$Interface {

(arg0: $Panel, arg1: $Quest, arg2: $Consumer<($Reward)>): void
}

export class $RewardType$GuiProvider implements $RewardType$GuiProvider$$Interface {
 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $Consumer$$Type<($Reward)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$GuiProvider$$Type = ((arg0: $Panel, arg1: $Quest, arg2: $Consumer<($Reward)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardType$GuiProvider$$Original = $RewardType$GuiProvider;}
declare module "dev.ftb.mods.ftbquests.block.entity.QuestBarrierBlockEntity" {
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseBarrierBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $QuestBarrierBlockEntity extends $BaseBarrierBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getQuest"(): $Quest
public "updateFromString"(objStr: StringJS): void
public "setQuest"(quest: $Quest$$Type): void
get "quest"(): $Quest
set "quest"(value: $Quest$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlockEntity$$Type = ($QuestBarrierBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestBarrierBlockEntity$$Original = $QuestBarrierBlockEntity;}
declare module "dev.ftb.mods.ftbquests.block.DetectorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DetectorBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getRenderShape"(blockState: $BlockState$$Type): $RenderShape
public "neighborChanged"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, block: $Block$$Type, blockPos2: $BlockPos$$Type, bl: boolean): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorBlock$$Type = ($DetectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DetectorBlock$$Original = $DetectorBlock;}
declare module "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity" {
import {$ConfigGroup} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EditableBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.EditableBlockEntity"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BaseBarrierBlockEntity$TeleportData} from "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity$TeleportData"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseBarrierBlockEntity extends $EditableBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockEntityType: $BlockEntityType$$Type<(never)>, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "isOpen"(player: $Player$$Type): boolean
public static "tick"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "saveAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "loadAdditional"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "getSkin"(): $ItemStack
public "setChanged"(): void
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "fillConfigGroup"(): $ConfigGroup
public "optionalTeleportData"(): $Optional<($BaseBarrierBlockEntity$TeleportData)>
public "getClientAppearance"(): $BlockState
public "isInvisibleWhenOpen"(): boolean
public "forceAppearanceUpdate"(): void
public "setInvisibleWhenOpen"(invisibleWhenOpen: boolean): void
public "updateFromString"(objStr: StringJS): void
public "setSkin"(skin: $ItemStack$$Type): void
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "skin"(): $ItemStack
get "changed"(): void
get "clientAppearance"(): $BlockState
get "invisibleWhenOpen"(): boolean
set "invisibleWhenOpen"(value: boolean)
set "skin"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBarrierBlockEntity$$Type = ($BaseBarrierBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBarrierBlockEntity$$Original = $BaseBarrierBlockEntity;}
declare module "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity" {
import {$ConfigGroup} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ITaskScreen$$Interface} from "dev.ftb.mods.ftbquests.block.entity.ITaskScreen"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$EditableBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.EditableBlockEntity"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenBlockEntity extends $EditableBlockEntity implements $ITaskScreen$$Interface {
 "fakeTextureUV": (float)[]
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "getSkin"(): $ItemStack
public "getTask"(): $Task
public "getCachedTeamData"(): $TeamData
public "getInputModeIcon"(): $ItemStack
public "isInputOnly"(): boolean
public "setInputModeIcon"(inputModeIcon: $ItemStack$$Type): void
public "setTextShadow"(textShadow: boolean): void
public "getFakeTextureUV"(): (float)[]
public "isTextShadow"(): boolean
public "setIndestructible"(indestructible: boolean): void
public "setInputOnly"(inputOnly: boolean): void
public "setTeamId"(teamId: $UUID$$Type): void
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "fillConfigGroup"(data: $TeamData$$Type): $ConfigGroup
public "removeAllAuxScreens"(): void
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "isIndestructible"(): boolean
public "setTask"(task: $Task$$Type): void
public "getTeamId"(): $UUID
public "setSkin"(skin: $ItemStack$$Type): void
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "skin"(): $ItemStack
get "task"(): $Task
get "cachedTeamData"(): $TeamData
get "inputModeIcon"(): $ItemStack
get "inputOnly"(): boolean
set "inputModeIcon"(value: $ItemStack$$Type)
set "textShadow"(value: boolean)
get "textShadow"(): boolean
set "indestructible"(value: boolean)
set "inputOnly"(value: boolean)
set "teamId"(value: $UUID$$Type)
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "indestructible"(): boolean
set "task"(value: $Task$$Type)
get "teamId"(): $UUID
set "skin"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlockEntity$$Type = ($TaskScreenBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskScreenBlockEntity$$Original = $TaskScreenBlockEntity;}
declare module "dev.ftb.mods.ftbquests.item.TaskScreenConfiguratorItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos} from "net.minecraft.core.GlobalPos"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TaskScreenConfiguratorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(ctx: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(itemStack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public static "readBlockPos"(stack: $ItemStack$$Type): $Optional<($GlobalPos)>
public static "storeBlockPos"(stack: $ItemStack$$Type, level: $Level$$Type, clickedPos: $BlockPos$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenConfiguratorItem$$Type = ($TaskScreenConfiguratorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskScreenConfiguratorItem$$Original = $TaskScreenConfiguratorItem;}
declare module "dev.ftb.mods.ftbquests.quest.loot.WeightedReward" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Comparable$$Interface} from "java.lang.Comparable"

export class $WeightedReward implements $Comparable$$Interface<($WeightedReward)> {
constructor(reward: $Reward$$Type, weight: float)

public "compareTo"(o: $WeightedReward$$Type): integer
public "compareTo"(arg0: any): integer
public "copy"(): $WeightedReward
public "getReward"(): $Reward
public "setWeight"(weight: float): void
public static "chanceString"(weight: float, totalWeight: float): StringJS
public static "chanceString"(weight: float, totalWeight: float, empty: boolean): StringJS
public "getWeight"(): float
get "reward"(): $Reward
set "weight"(value: float)
get "weight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedReward$$Type = ($WeightedReward);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeightedReward$$Original = $WeightedReward;}
declare module "dev.ftb.mods.ftbquests.quest.Chapter" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$ChapterGroup, $ChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$ProgressionMode} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Movable} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$QuestObject} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$QuestLink, $QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$ChapterImage, $ChapterImage$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterImage"

export class $Chapter extends $QuestObject {
readonly "file": $BaseQuestFile
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type)
constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type, filename: StringJS)

public "getPath"(): $Optional<(StringJS)>
public "getIndex"(): integer
public "getChildren"(): $Collection<($QuestObject)>
public "getObjectType"(): $QuestObjectType
public "onCreated"(): void
public "getAltIcon"(): $Icon
public "addQuest"(quest: $Quest$$Type): void
public "addImage"(image: $ChapterImage$$Type): void
public "onStarted"(data: $QuestProgressEventData$$Type<(never)>): void
public "deleteSelf"(): void
public "getQuests"(): $List<($Quest)>
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "isVisible"(data: $TeamData$$Type): boolean
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getDefaultQuestShape"(): StringJS
public "isRequireSequentialTasks"(): boolean
public "isDefaultRepeatable"(): boolean
public "getDefaultQuestSize"(): double
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getFilename"(): StringJS
public "getGroup"(): $ChapterGroup
public "setAutofocus"(id: long): void
public "isAutofocus"(id: long): boolean
public "removeImage"(image: $ChapterImage$$Type): void
public "getAutofocus"(): $Optional<($Movable)>
public "removeQuestLink"(link: $QuestLink$$Type): void
public "getDefaultMinWidth"(): integer
public "getQuestFile"(): $BaseQuestFile
public "deleteChildren"(): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "addQuestLink"(link: $QuestLink$$Type): void
public "getQuestLinks"(): $List<($QuestLink)>
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "clearCachedData"(): void
public "getAltTitle"(): $Component
public "getQuestChapter"(): $Chapter
public "isAlwaysInvisible"(): boolean
public "getProgressionMode"(): $ProgressionMode
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getRawSubtitle"(): $List<(StringJS)>
public "setRawSubtitle"(rawSubtitle: $List$$Type<(StringJS)>): void
public "removeQuest"(quest: $Quest$$Type): void
public "consumeItems"(): boolean
public "setDefaultQuestShape"(defaultQuestShape: StringJS): void
public "isHideTextUntilComplete"(): boolean
public "hasAnyVisibleChildren"(): boolean
public "isHideQuestUntilDepsVisible"(): boolean
public "hideQuestDetailsUntilStartable"(): boolean
public "hideQuestUntilDepsComplete"(): boolean
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "getImages"(): $List<($ChapterImage)>
public "hasGroup"(): boolean
get "path"(): $Optional<(StringJS)>
get "index"(): integer
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "altIcon"(): $Icon
get "quests"(): $List<($Quest)>
get "defaultQuestShape"(): StringJS
get "requireSequentialTasks"(): boolean
get "defaultRepeatable"(): boolean
get "defaultQuestSize"(): double
get "filename"(): StringJS
get "group"(): $ChapterGroup
set "autofocus"(value: long)
get "autofocus"(): $Optional<($Movable)>
get "defaultMinWidth"(): integer
get "questFile"(): $BaseQuestFile
get "questLinks"(): $List<($QuestLink)>
get "altTitle"(): $Component
get "questChapter"(): $Chapter
get "alwaysInvisible"(): boolean
get "progressionMode"(): $ProgressionMode
get "rawSubtitle"(): $List<(StringJS)>
set "rawSubtitle"(value: $List$$Type<(StringJS)>)
set "defaultQuestShape"(value: StringJS)
get "hideTextUntilComplete"(): boolean
get "hideQuestUntilDepsVisible"(): boolean
get "images"(): $List<($ChapterImage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chapter$$Type = ($Chapter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Chapter$$Original = $Chapter;}
declare module "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components" {
import {$Enum} from "java.lang.Enum"

export class $RecipeModHelper$Components extends $Enum<($RecipeModHelper$Components)> {
static readonly "LOOT_CRATES": $RecipeModHelper$Components
static readonly "QUESTS": $RecipeModHelper$Components

public static "values"(): ($RecipeModHelper$Components)[]
public static "valueOf"(name: StringJS): $RecipeModHelper$Components
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeModHelper$Components$$Type = (("quests") | ("loot_crates"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeModHelper$Components$$Original = $RecipeModHelper$Components;}
declare module "dev.ftb.mods.ftbquests.quest.Quest" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$ProgressionMode} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Tristate} from "dev.ftb.mods.ftblibrary.config.Tristate"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Movable$$Interface} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$BaseQuestFile} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Set} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Excludable$$Interface} from "dev.ftb.mods.ftbquests.quest.Excludable"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $Quest extends $QuestObject implements $Movable$$Interface, $Excludable$$Interface {
readonly "id": long
static readonly "PAGEBREAK_CODE": StringJS

constructor(id: long, chapter: $Chapter$$Type)

public "getSize"(): double
public "setSize"(size: double): void
public "getShape"(): StringJS
public "getChildren"(): $Collection<($QuestObject)>
public "getObjectType"(): $QuestObjectType
public "copyToClipboard"(): void
public "addReward"(reward: $Reward$$Type): void
public "addTask"(task: $Task$$Type): void
public "onCreated"(): void
public "getAltIcon"(): $Icon
public "removeTask"(task: $Task$$Type): void
public "onStarted"(data: $QuestProgressEventData$$Type<(never)>): void
public "deleteSelf"(): void
public "getChapter"(): $Chapter
public "writeTasks"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getRewards"(): $Collection<($Reward)>
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "getY"(): double
public "getTasks"(): $Collection<($Task)>
public "setX"(x: double): void
public "setY"(y: double): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "isVisible"(data: $TeamData$$Type): boolean
public "addDependency"(object: $QuestObject$$Type): void
public "isOptional"(): boolean
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "isOptionalForProgression"(teamData: $TeamData$$Type): boolean
public "getMinRequiredDependencies"(): integer
public "hideDetailsUntilStartable"(): boolean
public "shouldHideDependentLines"(): boolean
public "getHideTextUntilComplete"(): $Tristate
public "areDependenciesComplete"(teamData: $TeamData$$Type): boolean
public "getRequireSequentialTasks"(): boolean
public "ignoreRewardBlocking"(): boolean
public "removeInvalidDependencies"(): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getX"(): double
public "getHeight"(): double
public "getQuestFile"(): $BaseQuestFile
public "deleteChildren"(): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "getParentID"(): long
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "writeRewards"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "clearCachedData"(): void
public "getAltTitle"(): $Component
public "verifyDependencies"(autofix: boolean): boolean
public "removeDependency"(object: $QuestObject$$Type): void
public "getQuestChapter"(): $Chapter
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "isCompletedRaw"(data: $TeamData$$Type): boolean
public "isSearchable"(data: $TeamData$$Type): boolean
public "getProgressionMode"(): $ProgressionMode
public "getRelatedQuest"(): $Quest
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getTasksAsList"(): $List<($Task)>
public "showInRecipeMod"(): boolean
public "getGuidePage"(): StringJS
public "getRawSubtitle"(): StringJS
public "setRawSubtitle"(rawSubtitle: StringJS): void
public "getMinWidth"(): integer
public "canBeRepeated"(): boolean
public "editedFromGUI"(): void
public "isExclusiveQuest"(): boolean
public "moveTaskRight"(task: $Task$$Type): void
public "getIconScale"(): double
public "hasDependency"(object: $QuestObject$$Type): boolean
public "getDependants"(): $Collection<($QuestObject)>
public "shouldHideLockIcon"(): boolean
public "moveTaskLeft"(task: $Task$$Type): void
public "streamDependencies"(): $Stream<($QuestObject)>
public "getRepeatCooldown"(): integer
public "hasDependencies"(): boolean
public "getMovableID"(): long
public "setRewardList"(rewards: $List$$Type<($Reward$$Type)>): void
public "setRawDescription"(rawDescription: $List$$Type<(StringJS)>): void
public "clearDependencies"(): void
public "moveRewardRight"(reward: $Reward$$Type): void
public "moveRewardLeft"(reward: $Reward$$Type): void
public "allTasksCompleted"(teamData: $TeamData$$Type): boolean
public "getRawDescription"(): $List<(StringJS)>
public "removeReward"(reward: $Reward$$Type): void
public "setTaskList"(tasks: $List$$Type<($Task$$Type)>): void
public "initiateMoveClientSide"(to: $Chapter$$Type, x: double, y: double): void
public "areDependenciesVisible"(teamData: $TeamData$$Type): boolean
public "shouldHideDependencyLines"(): boolean
public "resetProgressIfRepeatable"(data: $TeamData$$Type, player: $UUID$$Type): boolean
public "isQuestObjectExcluded"(teamData: $TeamData$$Type): boolean
public "buildDescriptionIndex"(): $List<($Pair<(integer), (integer)>)>
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "getDescription"(): $List<($Component)>
public "getSubtitle"(): $Component
public "getWidth"(): double
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "getTitle"(): $Component
public "getRotation"(): double
public "isAlignToCorner"(): boolean
public "getId"(): long
get "size"(): double
set "size"(value: double)
get "shape"(): StringJS
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "altIcon"(): $Icon
get "chapter"(): $Chapter
get "rewards"(): $Collection<($Reward)>
get "y"(): double
get "tasks"(): $Collection<($Task)>
set "x"(value: double)
set "y"(value: double)
get "optional"(): boolean
get "minRequiredDependencies"(): integer
get "hideTextUntilComplete"(): $Tristate
get "requireSequentialTasks"(): boolean
get "x"(): double
get "height"(): double
get "questFile"(): $BaseQuestFile
get "parentID"(): long
get "altTitle"(): $Component
get "questChapter"(): $Chapter
get "progressionMode"(): $ProgressionMode
get "relatedQuest"(): $Quest
get "tasksAsList"(): $List<($Task)>
get "guidePage"(): StringJS
get "rawSubtitle"(): StringJS
set "rawSubtitle"(value: StringJS)
get "minWidth"(): integer
get "exclusiveQuest"(): boolean
get "iconScale"(): double
get "dependants"(): $Collection<($QuestObject)>
get "repeatCooldown"(): integer
get "movableID"(): long
set "rewardList"(value: $List$$Type<($Reward$$Type)>)
set "rawDescription"(value: $List$$Type<(StringJS)>)
get "rawDescription"(): $List<(StringJS)>
set "taskList"(value: $List$$Type<($Task$$Type)>)
get "description"(): $List<($Component)>
get "subtitle"(): $Component
get "width"(): double
get "title"(): $Component
get "rotation"(): double
get "alignToCorner"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Quest$$Type = ($Quest);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Quest$$Original = $Quest;}
declare module "dev.ftb.mods.ftbquests.api.QuestFile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$UUID$$Type} from "java.util.UUID"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TeamData} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $QuestFile$$Interface {
get "serverSide"(): boolean
get "allTeamData"(): $Collection<($TeamData)>
}

export class $QuestFile implements $QuestFile$$Interface {
 "canEdit"(): boolean
 "getNullableTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Team$$Type): $TeamData
/**
 * 
 * @deprecated
 */
 "getOrCreateTeamData"(arg0: $Entity$$Type): $TeamData
 "forAllChapters"(arg0: $Consumer$$Type<($Chapter)>): void
 "forAllQuests"(arg0: $Consumer$$Type<($Quest)>): void
 "isServerSide"(): boolean
 "getTeamData"(arg0: $Player$$Type): $Optional<($TeamData)>
 "getAllTeamData"(): $Collection<($TeamData)>
 "forAllQuestLinks"(arg0: $Consumer$$Type<($QuestLink)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestFile$$Type = ($QuestFile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuestFile$$Original = $QuestFile;}
declare module "dev.ftb.mods.ftbquests.quest.ChapterGroup" {
import {$ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Collection} from "java.util.Collection"
import {$Comparator$$Type} from "java.util.Comparator"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$QuestObjectType} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$QuestObject} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $ChapterGroup extends $QuestObject {
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type)

public "getFile"(): $BaseQuestFile
public "getChildren"(): $Collection<($QuestObject)>
public "getObjectType"(): $QuestObjectType
public "onCreated"(): void
public "addChapter"(chapter: $Chapter$$Type): void
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "isVisible"(data: $TeamData$$Type): boolean
public "removeChapter"(chapter: $Chapter$$Type): void
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "moveChapterWithinGroup"(chapter: $Chapter$$Type, movingUp: boolean): boolean
public "getQuestFile"(): $BaseQuestFile
public "clearChapters"(): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(never)>): void
public "getChapters"(): $List<($Chapter)>
public "sortChapters"(c: $Comparator$$Type<($Chapter)>): void
public "isDefaultGroup"(): boolean
public "clearCachedData"(): void
public "getAltTitle"(): $Component
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getVisibleChapters"(data: $TeamData$$Type): $List<($Chapter)>
public "editedFromGUI"(): void
public "toggleCollapsed"(): void
public "isGuiCollapsed"(): boolean
public "isFirstGroup"(): boolean
public "isLastGroup"(): boolean
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
get "file"(): $BaseQuestFile
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "altIcon"(): $Icon
get "questFile"(): $BaseQuestFile
get "chapters"(): $List<($Chapter)>
get "defaultGroup"(): boolean
get "altTitle"(): $Component
get "guiCollapsed"(): boolean
get "firstGroup"(): boolean
get "lastGroup"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChapterGroup$$Type = ($ChapterGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChapterGroup$$Original = $ChapterGroup;}
declare module "dev.ftb.mods.ftbquests.block.TaskScreenBlock" {
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TaskScreenAuxBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenAuxBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BoundingBox} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TaskScreenBlockEntity} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TaskScreenBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "PROPS": $BlockBehaviour$Properties

constructor(props: $BlockBehaviour$Properties$$Type, size: integer)

public "getSize"(): integer
public "setPlacedBy"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, livingEntity: $LivingEntity$$Type, itemStack: $ItemStack$$Type): void
public "appendHoverText"(itemStack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getDestroyProgress"(blockState: $BlockState$$Type, player: $Player$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "onRemove"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(blockPlaceContext: $BlockPlaceContext$$Type): $BlockState
public static "blockEntityAuxProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenAuxBlockEntity)>
public static "blockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenBlockEntity)>
public static "getMultiblockBounds"(corePos: $BlockPos$$Type, size: integer, facing: $Direction$$Type): $BoundingBox
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlock$$Type = ($TaskScreenBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskScreenBlock$$Original = $TaskScreenBlock;}
declare module "dev.ftb.mods.ftbquests.quest.DefaultChapterGroup" {
import {$ChapterGroup} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Component} from "net.minecraft.network.chat.Component"

export class $DefaultChapterGroup extends $ChapterGroup {
readonly "id": long

constructor(f: $BaseQuestFile$$Type)

public "getAltIcon"(): $Icon
public "getAltTitle"(): $Component
get "altIcon"(): $Icon
get "altTitle"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultChapterGroup$$Type = ($DefaultChapterGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DefaultChapterGroup$$Original = $DefaultChapterGroup;}
declare module "dev.ftb.mods.ftbquests.quest.task.TaskType" {
import {$Icon} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Task} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$TaskType$GuiProvider, $TaskType$GuiProvider$$Type} from "dev.ftb.mods.ftbquests.quest.task.TaskType$GuiProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $TaskType {
 "internalId": integer

public "getDisplayName"(): $Component
public "getTypeId"(): $ResourceLocation
public "createTask"(id: long, quest: $Quest$$Type): $Task
public static "createTask"(id: long, quest: $Quest$$Type, typeId: StringJS): $Task
public "setDisplayName"(name: $Component$$Type): $TaskType
public "getIconSupplier"(): $Icon
public "getTypeForNBT"(): StringJS
public "getGuiProvider"(): $TaskType$GuiProvider
public "makeExtraNBT"(): $CompoundTag
public "setGuiProvider"(p: $TaskType$GuiProvider$$Type): $TaskType
get "displayName"(): $Component
get "typeId"(): $ResourceLocation
set "displayName"(value: $Component$$Type)
get "iconSupplier"(): $Icon
get "typeForNBT"(): StringJS
get "guiProvider"(): $TaskType$GuiProvider
set "guiProvider"(value: $TaskType$GuiProvider$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskType$$Type = ($TaskType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskType$$Original = $TaskType;}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationManager" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$TranslationTable$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationTable"
import {$List, $List$$Type} from "java.util.List"
import {$QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$Path$$Type} from "java.nio.file.Path"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TranslationKey$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationKey"

export class $TranslationManager {
static readonly "DEFAULT_FALLBACK_LOCALE": StringJS

constructor()

public static "syncTable"(player: $ServerPlayer$$Type, language: StringJS): void
public "syncTableFromServer"(locale: StringJS, table: $TranslationTable$$Type): void
public "getStringListTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type): $Optional<($List<(StringJS)>)>
public "getStringTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type): $Optional<(StringJS)>
public "removeAllTranslations"(obj: $QuestObjectBase$$Type): void
public "sendTranslationsToPlayer"(player: $ServerPlayer$$Type): void
public "loadFromNBT"(file: $BaseQuestFile$$Type, langFolder: $Path$$Type): void
public "addTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type, message: $List$$Type<(StringJS)>): void
public "addTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type, message: StringJS): void
public "processInitialTranslation"(extra: $CompoundTag$$Type, object: $QuestObjectBase$$Type): void
public "addInitialTranslation"(extra: $CompoundTag$$Type, locale: StringJS, translationKey: $TranslationKey$$Type, value: StringJS): void
public "sendTableToPlayer"(player: $ServerPlayer$$Type, locale: StringJS): void
public "saveToNBT"(langFolder: $Path$$Type, force: boolean): void
public "hasMissingTranslation"(object: $QuestObjectBase$$Type, key: $TranslationKey$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationManager$$Type = ($TranslationManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TranslationManager$$Original = $TranslationManager;}
declare module "dev.ftb.mods.ftbquests.block.entity.EditableBlockEntity" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IEditable$$Interface} from "dev.ftb.mods.ftbquests.block.entity.IEditable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EditableBlockEntity extends $BlockEntity implements $IEditable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockEntityType: $BlockEntityType$$Type<(never)>, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "readPayload"(tag: $CompoundTag$$Type, registryAccess: $RegistryAccess$$Type): void
public "hasPermissionToEdit"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditableBlockEntity$$Type = ($EditableBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EditableBlockEntity$$Original = $EditableBlockEntity;}
declare module "dev.ftb.mods.ftbquests.item.LootCrateItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootCrate} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $LootCrateItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(stack: $ItemStack$$Type): boolean
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public static "getCrate"(stack: $ItemStack$$Type, isClientSide: boolean): $LootCrate
public static "getCrate"(stack: $ItemStack$$Type): $LootCrate
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateItem$$Type = ($LootCrateItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootCrateItem$$Original = $LootCrateItem;}
declare module "dev.ftb.mods.ftbquests.item.ScreenBlockItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ScreenBlockItem$ScreenSize$$Type} from "dev.ftb.mods.ftbquests.item.ScreenBlockItem$ScreenSize"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Holder} from "net.minecraft.core.Holder"

export class $ScreenBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, size: $ScreenBlockItem$ScreenSize$$Type)

public static "getSize"(stack: $ItemStack$$Type): integer
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlockItem$$Type = ($ScreenBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenBlockItem$$Original = $ScreenBlockItem;}
declare module "dev.ftb.mods.ftbquests.block.entity.LootCrateOpenerBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootCrateOpenerBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getOwner"(): $UUID
public "setOwner"(owner: $UUID$$Type): void
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getOutputCount"(): integer
get "owner"(): $UUID
set "owner"(value: $UUID$$Type)
get "outputCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateOpenerBlockEntity$$Type = ($LootCrateOpenerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootCrateOpenerBlockEntity$$Original = $LootCrateOpenerBlockEntity;}
declare module "dev.ftb.mods.ftbquests.quest.task.TaskType$GuiProvider" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"

export interface $TaskType$GuiProvider$$Interface {

(arg0: $Panel, arg1: $Quest, arg2: $BiConsumer<($Task), ($CompoundTag)>): void
}

export class $TaskType$GuiProvider implements $TaskType$GuiProvider$$Interface {
 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $BiConsumer$$Type<($Task), ($CompoundTag)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskType$GuiProvider$$Type = ((arg0: $Panel, arg1: $Quest, arg2: $BiConsumer<($Task), ($CompoundTag)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaskType$GuiProvider$$Original = $TaskType$GuiProvider;}
declare module "dev.ftb.mods.ftbquests.quest.loot.EntityWeight" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityWeight {
 "boss": integer
 "passive": integer
 "monster": integer

constructor()

public "readData"(nbt: $CompoundTag$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): void
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
public "readNetData"(data: $FriendlyByteBuf$$Type): void
public "getWeight"(entity: $Entity$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityWeight$$Type = ($EntityWeight);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityWeight$$Original = $EntityWeight;}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardClaimType" {
import {$Enum} from "java.lang.Enum"

export class $RewardClaimType extends $Enum<($RewardClaimType)> {
static readonly "CLAIMED": $RewardClaimType
static readonly "CAN_CLAIM": $RewardClaimType
static readonly "CANT_CLAIM": $RewardClaimType

public static "values"(): ($RewardClaimType)[]
public static "valueOf"(name: StringJS): $RewardClaimType
public "canClaim"(): boolean
public "isClaimed"(): boolean
public "cantClaim"(): boolean
get "claimed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardClaimType$$Type = (("can_claim") | ("cant_claim") | ("claimed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewardClaimType$$Original = $RewardClaimType;}
declare module "dev.ftb.mods.ftbquests.quest.ProgressionMode" {
import {$Enum} from "java.lang.Enum"
import {$NameMap} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $ProgressionMode extends $Enum<($ProgressionMode)> {
static readonly "NAME_MAP": $NameMap<($ProgressionMode)>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<($ProgressionMode)>
static readonly "LINEAR": $ProgressionMode
static readonly "DEFAULT": $ProgressionMode
static readonly "FLEXIBLE": $ProgressionMode

public static "values"(): ($ProgressionMode)[]
public static "valueOf"(name: StringJS): $ProgressionMode
public "getId"(): StringJS
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressionMode$$Type = (("default") | ("linear") | ("flexible"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressionMode$$Original = $ProgressionMode;}
