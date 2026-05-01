declare module "com.sammy.malum.core.systems.registry.RegistryCodecBuddy$RegistryCodecBuddyHelper" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegistryCodecBuddy, $RegistryCodecBuddy$$Type} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export interface $RegistryCodecBuddy$RegistryCodecBuddyHelper$$Interface<T> {

(): $RegistryCodecBuddy$$Type<(T)>
get "codec"(): $RegistryCodecBuddy<(T)>
}

export class $RegistryCodecBuddy$RegistryCodecBuddyHelper<T> implements $RegistryCodecBuddy$RegistryCodecBuddyHelper$$Interface {
 "save"(arg0: $CompoundTag$$Type): void
 "save"(arg0: $CompoundTag$$Type, arg1: StringJS): void
 "getCodec"(): $RegistryCodecBuddy<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryCodecBuddy$RegistryCodecBuddyHelper$$Type<T> = (() => $RegistryCodecBuddy$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryCodecBuddy$RegistryCodecBuddyHelper$$Original<T> = $RegistryCodecBuddy$RegistryCodecBuddyHelper<(T)>;}
declare module "com.sammy.malum.core.systems.geas.GeasEffect" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$GeasEffectType, $GeasEffectType$$Type} from "com.sammy.malum.core.systems.geas.GeasEffectType"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Map$Entry$$Type} from "java.util.Map$Entry"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EntityTickEvent$Pre$$Type} from "net.neoforged.neoforge.event.tick.EntityTickEvent$Pre"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $GeasEffect implements $IMalumEventResponder$$Interface {
readonly "type": $GeasEffectType

constructor(arg0: $GeasEffectType$$Type)

public "update"(arg0: $EntityTickEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "createAttributeModifiers"(arg0: $LivingEntity$$Type, arg1: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "addTooltipComponent"(arg0: $Map$Entry$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "addAttributeModifier"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $Holder$$Type<($Attribute)>, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
public "setDirty"(): void
public "removeAttributeModifiers"(arg0: $LivingEntity$$Type): void
public "addTooltipComponents"(arg0: $LivingEntity$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "getModifierId"(): $ResourceLocation
public "updateAttributes"(arg0: $LivingEntity$$Type): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
get "dirty"(): void
get "modifierId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeasEffect$$Type = ($GeasEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeasEffect$$Original = $GeasEffect;}
declare module "com.sammy.malum.core.systems.events.MalignantCritEvent$Post" {
import {$MalignantCritEvent} from "com.sammy.malum.core.systems.events.MalignantCritEvent"
import {$DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $MalignantCritEvent$Post extends $MalignantCritEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageContainer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalignantCritEvent$Post$$Type = ($MalignantCritEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalignantCritEvent$Post$$Original = $MalignantCritEvent$Post;}
declare module "com.sammy.malum.core.systems.recipe.SpiritIngredient" {
import {$IngredientType} from "net.neoforged.neoforge.common.crafting.IngredientType"
import {$ColorParticleDataBuilder} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataBuilder"
import {$ItemStackSet} from "dev.latvian.mods.kubejs.item.ItemStackSet"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Color} from "java.awt.Color"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Style} from "net.minecraft.network.chat.Style"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SpiritLike$$Type, $SpiritLike$$Interface} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpiritShardItem} from "com.sammy.malum.common.item.spirit.SpiritShardItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICustomIngredient$$Interface} from "net.neoforged.neoforge.common.crafting.ICustomIngredient"
import {$ItemPredicate} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$Stream} from "java.util.stream.Stream"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $SpiritIngredient extends $Record implements $ICustomIngredient$$Interface, $SpiritLike$$Interface {
static readonly "CODEC": $MapCodec<($SpiritIngredient)>

constructor(spirit: $Holder$$Type<($SpiritArcanaType)>, count: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public "count"(): integer
public "getType"(): $IngredientType<(never)>
public "getItems"(): $Stream<($ItemStack)>
public "getSpirit"(): $SpiritArcanaType
public "spirit"(): $Holder<($SpiritArcanaType)>
public "asItemStack"(): $ItemStack
public "isSimple"(): boolean
public "toVanilla"(): $Ingredient
public "getName"(): StringJS
public "matches"(arg0: $SpiritLike$$Type): boolean
public "getHolder"(): $Holder<($SpiritArcanaType)>
public "getRegistryName"(): $ResourceLocation
public "getStyle"(arg0: boolean): $Style
public "getStyle"(arg0: float): $Style
public "getTextColor"(arg0: float): $TextColor
public "getTextColor"(arg0: boolean): $TextColor
public "getLangKey"(): StringJS
public "getAlphaMultiplier"(): float
public "getSecondaryColor"(): $Color
public "getSpiritShard"(): $SpiritShardItem
public "getAnalogSignal"(): integer
public "getItemColor"(): $Color
public "getFlavourKey"(): StringJS
public "createColorData"(arg0: float): $ColorParticleDataBuilder
public "createColorData"(): $ColorParticleDataBuilder
public "getPrimaryColor"(): $Color
public "getCountedKey"(): StringJS
public "getSpiritStack"(arg0: integer): $ItemStack
public "getSpiritStack"(): $ItemStack
public "canBeUsedForMatching"(): boolean
public "getDisplayStacks"(): $ItemStackSet
public "asIngredient"(): $Ingredient
public "getStackArray"(): ($ItemStack)[]
public "test"(itemStack: any): boolean
public static "wrap"(from: any): $ItemPredicate
public "isWildcard"(): boolean
public "getStacks"(): $ItemStackSet
public "testItem"(item: $Item$$Type): boolean
public "getFirst"(): $ItemStack
public "getItemTypes"(): $Set<($Item)>
public "getItemIds"(): $Set<(StringJS)>
public "getItemStream"(): $Stream<($Item)>
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "type"(): $IngredientType<(never)>
get "items"(): $Stream<($ItemStack)>
get "simple"(): boolean
get "name"(): StringJS
get "holder"(): $Holder<($SpiritArcanaType)>
get "registryName"(): $ResourceLocation
get "langKey"(): StringJS
get "alphaMultiplier"(): float
get "secondaryColor"(): $Color
get "spiritShard"(): $SpiritShardItem
get "analogSignal"(): integer
get "itemColor"(): $Color
get "flavourKey"(): StringJS
get "primaryColor"(): $Color
get "countedKey"(): StringJS
get "spiritStack"(): $ItemStack
get "displayStacks"(): $ItemStackSet
get "stackArray"(): ($ItemStack)[]
get "wildcard"(): boolean
get "stacks"(): $ItemStackSet
get "first"(): $ItemStack
get "itemTypes"(): $Set<($Item)>
get "itemIds"(): $Set<(StringJS)>
get "itemStream"(): $Stream<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritIngredient$$Type = ({"spirit"?: $Holder$$Type<($SpiritArcanaType)>, "count"?: integer}) | ([spirit?: $Holder$$Type<($SpiritArcanaType)>, count?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritIngredient$$Original = $SpiritIngredient;}
declare module "com.sammy.malum.core.systems.artifice.ArtificeAttributeData" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ArtificeModifier$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeModifier"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IArtificeAcceptor$$Type} from "com.sammy.malum.core.systems.artifice.IArtificeAcceptor"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ArtificeAttributeValue, $ArtificeAttributeValue$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeValue"
import {$ArtificeAttributeType, $ArtificeAttributeType$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeType"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ArtificeInfluenceData, $ArtificeInfluenceData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeInfluenceData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ArtificeAttributeData {
readonly "modifierPositions": $List<($BlockPos)>
static "CODEC": $Codec<($ArtificeAttributeData)>
readonly "chainFocusingChance": $ArtificeAttributeValue
 "sympathyBuffedCycles": integer
readonly "fortuneChance": $ArtificeAttributeValue
readonly "tuningStrain": $ArtificeAttributeValue
 "sympathyDamageStacks": integer
readonly "weaknessTuning": $ArtificeAttributeValue
 "tunedAttribute": $ArtificeAttributeType
readonly "restorationChance": $ArtificeAttributeValue
readonly "focusingSpeed": $ArtificeAttributeValue
readonly "misfortuneReversal": $ArtificeAttributeValue
 "demandsFuel": boolean
readonly "causticSynergy": $ArtificeAttributeValue
readonly "damageAbsorptionChance": $ArtificeAttributeValue
 "chainProcessingBonus": float
readonly "instability": $ArtificeAttributeValue
readonly "fuelUsageRate": $ArtificeAttributeValue
readonly "attributes": $List<($ArtificeAttributeValue)>
readonly "tuningPotency": $ArtificeAttributeValue
readonly "resonanceTuning": $ArtificeAttributeValue
 "sympathyBuffStrength": float

constructor()
constructor(arg0: $List$$Type<($ArtificeAttributeValue$$Type)>, arg1: $List$$Type<($BlockPos$$Type)>, arg2: $ArtificeAttributeType$$Type, arg3: boolean, arg4: float, arg5: integer, arg6: float, arg7: integer)
constructor(arg0: $IArtificeAcceptor$$Type)

public "getExistingAttributesForTuning"(): $List<($ArtificeAttributeType)>
public "selectNextAttributeForTuning"(): void
public "applyModifier"(arg0: $ArtificeModifier$$Type): void
public "getAttributeValue"(arg0: $ArtificeAttributeType$$Type): $ArtificeAttributeValue
public "applyTuning"(): void
public "getInfluenceData"(arg0: $Level$$Type): $Optional<($ArtificeInfluenceData)>
public "applyAugment"(arg0: $ItemStack$$Type): void
public "applyModifierInfluence"(arg0: $ArtificeInfluenceData$$Type): $ArtificeAttributeData
public "applyTuningForkBuff"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): void
public "figureOutWeakestAttribute"(arg0: $List$$Type<($ArtificeAttributeType$$Type)>): $ArtificeAttributeValue
get "existingAttributesForTuning"(): $List<($ArtificeAttributeType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtificeAttributeData$$Type = ($ArtificeAttributeData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtificeAttributeData$$Original = $ArtificeAttributeData;}
declare module "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$List$$Type} from "java.util.List"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpiritHolder$$Type} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$SpiritRiteEntityEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEntityEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SpiritRiteEffectTag$$Type} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffectTag"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $SpiritRitePotionEffect<T extends $LivingEntity> extends $SpiritRiteEntityEffect<(T)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor(arg0: $Holder$$Type<($MobEffect)>, ...arg1: ($SpiritHolder$$Type<($SpiritArcanaType$$Type)>)[])
constructor(arg0: $List$$Type<($SpiritRiteEffectTag$$Type)>, arg1: $Holder$$Type<($MobEffect)>, ...arg2: ($SpiritHolder$$Type<($SpiritArcanaType$$Type)>)[])

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: T): void
public "applyEffect"(arg0: $ServerLevel$$Type, arg1: T, arg2: integer, arg3: integer): void
public "getImpactSound"(): $Holder<($SoundEvent)>
public "getEffect"(): $Holder<($MobEffect)>
public "applyRuneEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): void
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: T): boolean
public "getImpactSoundVolume"(arg0: $LivingEntity$$Type): float
get "impactSound"(): $Holder<($SoundEvent)>
get "effect"(): $Holder<($MobEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRitePotionEffect$$Type<T> = ($SpiritRitePotionEffect<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritRitePotionEffect$$Original<T> = $SpiritRitePotionEffect<(T)>;}
declare module "com.sammy.malum.core.systems.artifice.IArtificeAcceptor" {
import {$ArtificeAttributeData, $ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IArtificeAcceptor$$Interface {
get "attributes"(): $ArtificeAttributeData
get "lookupRadius"(): integer
get "visualAccelerationPoint"(): $Vec3
get "activeSpiritType"(): $SpiritArcanaType
set "attributes"(value: $ArtificeAttributeData$$Type)
}

export class $IArtificeAcceptor implements $IArtificeAcceptor$$Interface {
 "getAttributes"(): $ArtificeAttributeData
 "asBlockEntity"(): $BlockEntity
 "getLookupRadius"(): integer
 "bindModifiers"(arg0: $Level$$Type): void
 "applyAugments"(arg0: $Consumer$$Type<($ItemStack)>): void
 "invalidateModifiers"(arg0: $Level$$Type): void
 "recalibrateAccelerators"(arg0: $Level$$Type): void
 "getVisualAccelerationPoint"(): $Vec3
 "getActiveSpiritType"(): $SpiritArcanaType
 "setAttributes"(arg0: $ArtificeAttributeData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IArtificeAcceptor$$Type = ($IArtificeAcceptor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IArtificeAcceptor$$Original = $IArtificeAcceptor;}
declare module "com.sammy.malum.core.systems.spirit.type.SpiritLike" {
import {$ColorParticleDataBuilder} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataBuilder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SpiritShardItem} from "com.sammy.malum.common.item.spirit.SpiritShardItem"
import {$Color} from "java.awt.Color"
import {$Style} from "net.minecraft.network.chat.Style"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$Holder} from "net.minecraft.core.Holder"

export interface $SpiritLike$$Interface {

(): $SpiritArcanaType$$Type
get "name"(): StringJS
get "holder"(): $Holder<($SpiritArcanaType)>
get "registryName"(): $ResourceLocation
get "spirit"(): $SpiritArcanaType
get "langKey"(): StringJS
get "alphaMultiplier"(): float
get "secondaryColor"(): $Color
get "spiritShard"(): $SpiritShardItem
get "analogSignal"(): integer
get "itemColor"(): $Color
get "flavourKey"(): StringJS
get "primaryColor"(): $Color
get "countedKey"(): StringJS
get "spiritStack"(): $ItemStack
}

export class $SpiritLike implements $SpiritLike$$Interface {
 "getName"(): StringJS
 "matches"(arg0: $SpiritLike$$Type): boolean
 "getHolder"(): $Holder<($SpiritArcanaType)>
 "getRegistryName"(): $ResourceLocation
 "getStyle"(arg0: boolean): $Style
 "getStyle"(arg0: float): $Style
 "getTextColor"(arg0: float): $TextColor
 "getTextColor"(arg0: boolean): $TextColor
 "getSpirit"(): $SpiritArcanaType
 "getLangKey"(): StringJS
 "getAlphaMultiplier"(): float
 "getSecondaryColor"(): $Color
 "getSpiritShard"(): $SpiritShardItem
 "getAnalogSignal"(): integer
 "getItemColor"(): $Color
 "getFlavourKey"(): StringJS
 "createColorData"(arg0: float): $ColorParticleDataBuilder
 "createColorData"(): $ColorParticleDataBuilder
 "getPrimaryColor"(): $Color
 "getCountedKey"(): StringJS
 "getSpiritStack"(arg0: integer): $ItemStack
 "getSpiritStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritLike$$Type = (() => $SpiritArcanaType$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritLike$$Original = $SpiritLike;}
declare module "com.sammy.malum.core.systems.spirit.UmbralSpiritArcanaType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SpiritShardItem$$Type} from "com.sammy.malum.common.item.spirit.SpiritShardItem"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SpiritColorProperties$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritColorProperties"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $UmbralSpiritArcanaType extends $SpiritArcanaType {
static readonly "CODEC": $Codec<($SpiritArcanaType)>
static readonly "HOLDER_CODEC": $Codec<($Holder<($SpiritArcanaType)>)>
static readonly "INVERT_COLOR": integer
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($SpiritArcanaType)>

constructor(arg0: $SpiritColorProperties$$Type, arg1: $DeferredHolder$$Type<($Item$$Type), ($SpiritShardItem$$Type)>)

public "getTextColor"(arg0: boolean): $TextColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UmbralSpiritArcanaType$$Type = ($UmbralSpiritArcanaType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UmbralSpiritArcanaType$$Original = $UmbralSpiritArcanaType;}
declare module "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ModifySpiritSpoilsEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type, arg2: integer)

public "addBonus"(arg0: integer): void
public "getAttacker"(): $LivingEntity
public "getOriginalSpiritBonus"(): integer
public "getNewSpiritBonus"(): integer
public "setNewSpiritBonus"(arg0: integer): void
get "attacker"(): $LivingEntity
get "originalSpiritBonus"(): integer
get "newSpiritBonus"(): integer
set "newSpiritBonus"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifySpiritSpoilsEvent$$Type = ($ModifySpiritSpoilsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifySpiritSpoilsEvent$$Original = $ModifySpiritSpoilsEvent;}
declare module "com.sammy.malum.core.systems.artifice.TuningBehavior" {
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$ArtificeAttributeValue$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeValue"

export class $TuningBehavior {
static readonly "INVERSE": $TuningBehavior
static readonly "STANDARD": $TuningBehavior

constructor()

public "getMultiplier"(arg0: boolean): float
public "getRelativeValue"(arg0: $ArtificeAttributeData$$Type, arg1: $ArtificeAttributeValue$$Type): float
public "getPositiveMultiplier"(): float
public "getNegativeMultiplier"(): float
get "positiveMultiplier"(): float
get "negativeMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TuningBehavior$$Type = ($TuningBehavior);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TuningBehavior$$Original = $TuningBehavior;}
declare module "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffectTag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SpiritRiteEffectTag {
static readonly "STRANGE_EFFECT": $SpiritRiteEffectTag
static readonly "SOULWOOD": $SpiritRiteEffectTag
static readonly "RUNEWOOD": $SpiritRiteEffectTag
static readonly "RADIAL_EFFECT": $SpiritRiteEffectTag
static readonly "TAG": StringJS
static readonly "AURA": $SpiritRiteEffectTag
static readonly "GREATER_RITE": $SpiritRiteEffectTag
static readonly "LOCUS_EFFECT": $SpiritRiteEffectTag
static readonly "LESSER_RITE": $SpiritRiteEffectTag

constructor(arg0: StringJS)

public "getLangKey"(): StringJS
public static "malumTag"(arg0: StringJS): $SpiritRiteEffectTag
get "langKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRiteEffectTag$$Type = ($SpiritRiteEffectTag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritRiteEffectTag$$Original = $SpiritRiteEffectTag;}
declare module "com.sammy.malum.core.systems.events.SetupMalumCodexEntriesEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$AbstractProgressionCodexScreen, $AbstractProgressionCodexScreen$$Type} from "com.sammy.malum.client.screen.codex.screens.progression.AbstractProgressionCodexScreen"

export class $SetupMalumCodexEntriesEvent extends $Event {
constructor(arg0: $AbstractProgressionCodexScreen$$Type)

public "getScreen"(): $AbstractProgressionCodexScreen
get "screen"(): $AbstractProgressionCodexScreen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetupMalumCodexEntriesEvent$$Type = ($SetupMalumCodexEntriesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SetupMalumCodexEntriesEvent$$Original = $SetupMalumCodexEntriesEvent;}
declare module "com.sammy.malum.core.systems.artifice.ArtificeModifier" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ArtificeAttributeType, $ArtificeAttributeType$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeType"
import {$Record} from "java.lang.Record"

export class $ArtificeModifier extends $Record {
static "CODEC": $Codec<($ArtificeModifier)>

constructor(attribute: $ArtificeAttributeType$$Type, value: float)

public "value"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "attribute"(): $ArtificeAttributeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtificeModifier$$Type = ({"value"?: float, "attribute"?: $ArtificeAttributeType$$Type}) | ([value?: float, attribute?: $ArtificeAttributeType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtificeModifier$$Original = $ArtificeModifier;}
declare module "com.sammy.malum.core.systems.artifice.ArtificeAttributeValue" {
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ArtificeModifier$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeModifier"
import {$TuningModifier$$Type} from "com.sammy.malum.core.systems.artifice.TuningModifier"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List$$Type} from "java.util.List"
import {$ArtificeAttributeType, $ArtificeAttributeType$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeType"

export class $ArtificeAttributeValue {
static "CODEC": $Codec<($ArtificeAttributeValue)>
readonly "type": $ArtificeAttributeType

constructor(arg0: $ArtificeAttributeType$$Type, arg1: float, arg2: $List$$Type<($TuningModifier$$Type)>)
constructor(arg0: $ArtificeAttributeType$$Type, arg1: float)
constructor(arg0: $ArtificeAttributeType$$Type)

public "getValue"(arg0: $ArtificeAttributeData$$Type): float
public "copyFrom"(arg0: $ArtificeAttributeValue$$Type): void
public "removeModifier"(arg0: $ResourceLocation$$Type): void
public "applyModifier"(arg0: $ArtificeModifier$$Type): void
public "applyModifier"(arg0: $TuningModifier$$Type): void
public "clearModifiers"(): void
public "updateMultiplierCache"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtificeAttributeValue$$Type = ($ArtificeAttributeValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtificeAttributeValue$$Original = $ArtificeAttributeValue;}
declare module "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GluttonyEffect$GluttonyEffectProperties, $GluttonyEffect$GluttonyEffectProperties$$Type} from "com.sammy.malum.common.effect.gluttony.GluttonyEffect$GluttonyEffectProperties"

export class $ModifyGluttonyPropertiesEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $GluttonyEffect$GluttonyEffectProperties$$Type)

public "getProperties"(): $GluttonyEffect$GluttonyEffectProperties
get "properties"(): $GluttonyEffect$GluttonyEffectProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyGluttonyPropertiesEvent$$Type = ($ModifyGluttonyPropertiesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifyGluttonyPropertiesEvent$$Original = $ModifyGluttonyPropertiesEvent;}
declare module "com.sammy.malum.core.systems.events.SoulWardDamageEvent" {
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$SoulWardData$$Type} from "com.sammy.malum.common.data.attachment.SoulWardData"
import {$SoulWardEvent} from "com.sammy.malum.core.systems.events.SoulWardEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SoulWardDamageEvent extends $SoulWardEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $SoulWardData$$Type, arg2: $DamageSource$$Type, arg3: double, arg4: double)

public "getAbsorbedDamage"(): double
public "getSoulWardLost"(): double
get "absorbedDamage"(): double
get "soulWardLost"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulWardDamageEvent$$Type = ($SoulWardDamageEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulWardDamageEvent$$Original = $SoulWardDamageEvent;}
declare module "com.sammy.malum.core.systems.rite.effect.SpiritRiteEmpowermentEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$List$$Type} from "java.util.List"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpiritHolder$$Type} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$SpiritRiteEntityEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEntityEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SpiritRiteEffectTag$$Type} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffectTag"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $SpiritRiteEmpowermentEffect<T extends $LivingEntity> extends $SpiritRiteEntityEffect<(T)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor(arg0: $List$$Type<($Holder$$Type<($MobEffect$$Type)>)>, ...arg1: ($SpiritHolder$$Type<($SpiritArcanaType$$Type)>)[])
constructor(arg0: $List$$Type<($SpiritRiteEffectTag$$Type)>, arg1: $List$$Type<($Holder$$Type<($MobEffect$$Type)>)>, ...arg2: ($SpiritHolder$$Type<($SpiritArcanaType$$Type)>)[])

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: T): void
public "applyEffect"(arg0: $ServerLevel$$Type, arg1: T, arg2: integer, arg3: integer): void
public "getImpactSound"(): $Holder<($SoundEvent)>
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: T): boolean
public "getImpactSoundVolume"(arg0: $LivingEntity$$Type): float
get "impactSound"(): $Holder<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRiteEmpowermentEffect$$Type<T> = ($SpiritRiteEmpowermentEffect<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritRiteEmpowermentEffect$$Original<T> = $SpiritRiteEmpowermentEffect<(T)>;}
declare module "com.sammy.malum.core.systems.events.CollectSpiritEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CollectSpiritEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollectSpiritEvent$$Type = ($CollectSpiritEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CollectSpiritEvent$$Original = $CollectSpiritEvent;}
declare module "com.sammy.malum.core.systems.geas.GeasEffectType" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$List, $List$$Type} from "java.util.List"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder, $SpiritHolder$$Type} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$GeasEffect, $GeasEffect$$Type} from "com.sammy.malum.core.systems.geas.GeasEffect"

export class $GeasEffectType {
static readonly "CODEC": $Codec<($GeasEffectType)>
readonly "spiritTypes": $List<($SpiritHolder<($SpiritArcanaType)>)>
readonly "effect": $Supplier<($GeasEffect)>

constructor(arg0: $Supplier$$Type<($GeasEffect$$Type)>, ...arg1: ($SpiritHolder$$Type<($SpiritArcanaType$$Type)>)[])
constructor(arg0: $Supplier$$Type<($GeasEffect$$Type)>, arg1: $List$$Type<($SpiritHolder$$Type<($SpiritArcanaType$$Type)>)>)

public "is"(arg0: $TagKey$$Type<($GeasEffectType)>): boolean
public "createStack"(arg0: boolean): $ItemStack
public "getHolder"(): $Holder<($GeasEffectType)>
public "getDefaultInstance"(): $GeasEffect
public "getRegistryName"(): $ResourceLocation
public "getDetailedCons"(): StringJS
public "getDetailedPros"(): StringJS
public "getIcon"(): $ResourceLocation
public "getLangKey"(): StringJS
public "createEffect"(): $GeasEffect
public "createCreativeStack"(): $ItemStack
public "createDefaultStack"(): $ItemStack
public "getDummyCreativeStack"(): $ItemStack
public "getDescription"(): StringJS
public "getIdentifyingSpirit"(): $SpiritHolder<($SpiritArcanaType)>
get "holder"(): $Holder<($GeasEffectType)>
get "defaultInstance"(): $GeasEffect
get "registryName"(): $ResourceLocation
get "detailedCons"(): StringJS
get "detailedPros"(): StringJS
get "icon"(): $ResourceLocation
get "langKey"(): StringJS
get "dummyCreativeStack"(): $ItemStack
get "description"(): StringJS
get "identifyingSpirit"(): $SpiritHolder<($SpiritArcanaType)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MalumGeasTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MalumGeasTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeasEffectType$$Type = (Special.MalumGeasTypes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeasEffectType$$Original = $GeasEffectType;}
declare module "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent" {
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$SoulWardData$$Type} from "com.sammy.malum.common.data.attachment.SoulWardData"
import {$SoulWardEvent} from "com.sammy.malum.core.systems.events.SoulWardEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ModifySoulWardPropertiesEvent extends $SoulWardEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $SoulWardData$$Type, arg2: $DamageSource$$Type, arg3: double, arg4: double, arg5: double)

public "getOriginalMagicDamageAbsorption"(): double
public "getNewMagicDamageAbsorption"(): double
public "getNewPhysicalDamageAbsorption"(): double
public "setNewMagicDamageAbsorption"(arg0: double): void
public "setNewPhysicalDamageAbsorption"(arg0: double): void
public "getOriginalPhysicalDamageAbsorption"(): double
public "setNewIntegrity"(arg0: double): void
public "getNewIntegrity"(): double
public "getOriginalIntegrity"(): double
get "originalMagicDamageAbsorption"(): double
get "newMagicDamageAbsorption"(): double
get "newPhysicalDamageAbsorption"(): double
set "newMagicDamageAbsorption"(value: double)
set "newPhysicalDamageAbsorption"(value: double)
get "originalPhysicalDamageAbsorption"(): double
set "newIntegrity"(value: double)
get "newIntegrity"(): double
get "originalIntegrity"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifySoulWardPropertiesEvent$$Type = ($ModifySoulWardPropertiesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifySoulWardPropertiesEvent$$Original = $ModifySoulWardPropertiesEvent;}
declare module "com.sammy.malum.core.systems.artifice.ArtificeInfluenceData" {
import {$IArtificeModifierSource$$Type} from "com.sammy.malum.core.systems.artifice.IArtificeModifierSource"
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$ArtificeModifierSourceInstance, $ArtificeModifierSourceInstance$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeModifierSourceInstance"
import {$Collection$$Type} from "java.util.Collection"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $ArtificeInfluenceData extends $Record {
constructor(modifiers: $Set$$Type<($ArtificeModifierSourceInstance$$Type)>)

public "modifiers"(): $Set<($ArtificeModifierSourceInstance)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "createFreshData"(arg0: integer, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ArtificeAttributeData$$Type): $ArtificeInfluenceData
public static "reconstructData"(arg0: $Level$$Type, arg1: $ArtificeAttributeData$$Type): $ArtificeInfluenceData
public static "createData"(arg0: $Collection$$Type<($IArtificeModifierSource$$Type)>, arg1: $ArtificeAttributeData$$Type): $ArtificeInfluenceData
public static "isValidInfluencer"(arg0: $IArtificeModifierSource$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtificeInfluenceData$$Type = ({"modifiers"?: $Set$$Type<($ArtificeModifierSourceInstance$$Type)>}) | ([modifiers?: $Set$$Type<($ArtificeModifierSourceInstance$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtificeInfluenceData$$Original = $ArtificeInfluenceData;}
declare module "com.sammy.malum.core.systems.spirit.SpiritTypeProperty" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Type} from "java.lang.Comparable"
import {$SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$SpiritHolder, $SpiritHolder$$Type} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $SpiritTypeProperty extends $Property<(StringJS)> {
static readonly "SPIRIT_TYPE": $SpiritTypeProperty

constructor(arg0: StringJS, arg1: $Collection$$Type<($SpiritHolder$$Type<($SpiritArcanaType$$Type)>)>)
constructor(arg0: StringJS, ...arg1: ($SpiritHolder$$Type<($SpiritArcanaType$$Type)>)[])

public "getName"(arg0: StringJS): StringJS
public "getName"(arg0: $Comparable$$Type): StringJS
public "getValue"(arg0: StringJS): $Optional<(StringJS)>
public static "setSpiritType"(arg0: $BlockState$$Type, arg1: $SpiritLike$$Type): $BlockState
public "getPossibleValues"(): $Collection<(StringJS)>
public static "getSpiritType"(arg0: $BlockState$$Type): $SpiritHolder<($SpiritArcanaType)>
get "possibleValues"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritTypeProperty$$Type = ($SpiritTypeProperty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritTypeProperty$$Original = $SpiritTypeProperty;}
declare module "com.sammy.malum.core.systems.registry.SpiritHolder" {
import {$ColorParticleDataBuilder} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataBuilder"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Color} from "java.awt.Color"
import {$Style} from "net.minecraft.network.chat.Style"
import {$SpiritLike$$Type, $SpiritLike$$Interface} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$Holder} from "net.minecraft.core.Holder"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$SpiritShardItem} from "com.sammy.malum.common.item.spirit.SpiritShardItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"

export class $SpiritHolder<T extends $SpiritArcanaType> extends $DeferredHolder<($SpiritArcanaType), (T)> implements $SpiritLike$$Interface {
public "orElse"(arg0: $SpiritArcanaType$$Type): $SpiritArcanaType
public "is"(arg0: $SpiritLike$$Type): boolean
public "getSpirit"(): $SpiritArcanaType
public static "getSpiritType"(arg0: $ResourceLocation$$Type): $SpiritHolder<($SpiritArcanaType)>
public static "getSpiritType"(arg0: StringJS): $SpiritHolder<($SpiritArcanaType)>
public static "getSpiritType"(arg0: $CompoundTag$$Type): $SpiritHolder<($SpiritArcanaType)>
public "getName"(): StringJS
public "matches"(arg0: $SpiritLike$$Type): boolean
public "getHolder"(): $Holder<($SpiritArcanaType)>
public "getRegistryName"(): $ResourceLocation
public "getStyle"(arg0: boolean): $Style
public "getStyle"(arg0: float): $Style
public "getTextColor"(arg0: float): $TextColor
public "getTextColor"(arg0: boolean): $TextColor
public "getLangKey"(): StringJS
public "getAlphaMultiplier"(): float
public "getSecondaryColor"(): $Color
public "getSpiritShard"(): $SpiritShardItem
public "getAnalogSignal"(): integer
public "getItemColor"(): $Color
public "getFlavourKey"(): StringJS
public "createColorData"(arg0: float): $ColorParticleDataBuilder
public "createColorData"(): $ColorParticleDataBuilder
public "getPrimaryColor"(): $Color
public "getCountedKey"(): StringJS
public "getSpiritStack"(arg0: integer): $ItemStack
public "getSpiritStack"(): $ItemStack
public static "direct"<T>(arg0: T): $Holder<(T)>
get "spirit"(): $SpiritArcanaType
get "name"(): StringJS
get "holder"(): $Holder<($SpiritArcanaType)>
get "registryName"(): $ResourceLocation
get "langKey"(): StringJS
get "alphaMultiplier"(): float
get "secondaryColor"(): $Color
get "spiritShard"(): $SpiritShardItem
get "analogSignal"(): integer
get "itemColor"(): $Color
get "flavourKey"(): StringJS
get "primaryColor"(): $Color
get "countedKey"(): StringJS
get "spiritStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritHolder$$Type<T> = ($SpiritHolder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritHolder$$Original<T> = $SpiritHolder<(T)>;}
declare module "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ColorParticleDataBuilder} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataBuilder"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Color} from "java.awt.Color"
import {$Style} from "net.minecraft.network.chat.Style"
import {$SpiritLike$$Type, $SpiritLike$$Interface} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$Holder} from "net.minecraft.core.Holder"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SpiritShardItem, $SpiritShardItem$$Type} from "com.sammy.malum.common.item.spirit.SpiritShardItem"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SpiritColorProperties, $SpiritColorProperties$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritColorProperties"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export class $SpiritArcanaType implements $SpiritLike$$Interface {
static readonly "CODEC": $Codec<($SpiritArcanaType)>
static readonly "HOLDER_CODEC": $Codec<($Holder<($SpiritArcanaType)>)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($SpiritArcanaType)>

constructor(arg0: $SpiritColorProperties$$Type, arg1: $DeferredHolder$$Type<($Item$$Type), ($SpiritShardItem$$Type)>)

public static "load"(arg0: $CompoundTag$$Type, arg1: StringJS): $Optional<($SpiritArcanaType)>
public static "load"(arg0: $CompoundTag$$Type): $Optional<($SpiritArcanaType)>
public "save"(arg0: $CompoundTag$$Type): void
public "save"(arg0: $CompoundTag$$Type, arg1: StringJS): void
public "getSpirit"(): $SpiritArcanaType
public "getSpiritShard"(): $SpiritShardItem
public "getColorProperties"(): $SpiritColorProperties
public "getItemRarity"(): $Rarity
public "getGlowTexture"(): $ResourceLocation
public "getName"(): StringJS
public "matches"(arg0: $SpiritLike$$Type): boolean
public "getHolder"(): $Holder<($SpiritArcanaType)>
public "getRegistryName"(): $ResourceLocation
public "getStyle"(arg0: boolean): $Style
public "getStyle"(arg0: float): $Style
public "getTextColor"(arg0: float): $TextColor
public "getTextColor"(arg0: boolean): $TextColor
public "getLangKey"(): StringJS
public "getAlphaMultiplier"(): float
public "getSecondaryColor"(): $Color
public "getAnalogSignal"(): integer
public "getItemColor"(): $Color
public "getFlavourKey"(): StringJS
public "createColorData"(arg0: float): $ColorParticleDataBuilder
public "createColorData"(): $ColorParticleDataBuilder
public "getPrimaryColor"(): $Color
public "getCountedKey"(): StringJS
public "getSpiritStack"(arg0: integer): $ItemStack
public "getSpiritStack"(): $ItemStack
get "spirit"(): $SpiritArcanaType
get "spiritShard"(): $SpiritShardItem
get "colorProperties"(): $SpiritColorProperties
get "itemRarity"(): $Rarity
get "glowTexture"(): $ResourceLocation
get "name"(): StringJS
get "holder"(): $Holder<($SpiritArcanaType)>
get "registryName"(): $ResourceLocation
get "langKey"(): StringJS
get "alphaMultiplier"(): float
get "secondaryColor"(): $Color
get "analogSignal"(): integer
get "itemColor"(): $Color
get "flavourKey"(): StringJS
get "primaryColor"(): $Color
get "countedKey"(): StringJS
get "spiritStack"(): $ItemStack
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MalumSpiritTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MalumSpiritTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritArcanaType$$Type = (Special.MalumSpiritTypes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritArcanaType$$Original = $SpiritArcanaType;}
declare module "com.sammy.malum.core.systems.events.SoulWardEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$SoulWardData, $SoulWardData$$Type} from "com.sammy.malum.common.data.attachment.SoulWardData"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SoulWardEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $SoulWardData$$Type, arg2: $DamageSource$$Type)

public "getSource"(): $DamageSource
public "getSoulWardHandler"(): $SoulWardData
get "source"(): $DamageSource
get "soulWardHandler"(): $SoulWardData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulWardEvent$$Type = ($SoulWardEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulWardEvent$$Original = $SoulWardEvent;}
declare module "com.sammy.malum.core.systems.spirit.type.SpiritColorProperties$SpiritTypeColorPropertiesBuilder" {
import {$Color, $Color$$Type} from "java.awt.Color"
import {$SpiritColorProperties} from "com.sammy.malum.core.systems.spirit.type.SpiritColorProperties"
import {$Easing, $Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"

export class $SpiritColorProperties$SpiritTypeColorPropertiesBuilder {
 "colorEasing": $Easing
 "itemColor": $Color
readonly "primaryColor": $Color
 "alphaMultiplier": float
 "colorCoefficient": float
readonly "secondaryColor": $Color

constructor(arg0: $Color$$Type, arg1: $Color$$Type)

public "build"(): $SpiritColorProperties
public "setAlphaMultiplier"(arg0: float): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder
public "setColorEasing"(arg0: $Easing$$Type): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder
public "brightenItemColor"(arg0: integer): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder
public "darkenItemColor"(arg0: integer): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder
public "setItemColor"(arg0: $Color$$Type): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder
public "setColorCoefficient"(arg0: float): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritColorProperties$SpiritTypeColorPropertiesBuilder$$Type = ($SpiritColorProperties$SpiritTypeColorPropertiesBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritColorProperties$SpiritTypeColorPropertiesBuilder$$Original = $SpiritColorProperties$SpiritTypeColorPropertiesBuilder;}
declare module "com.sammy.malum.core.systems.artifice.ArtificeAttributeType" {
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$ArrayList} from "java.util.ArrayList"
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function$$Type} from "java.util.function.Function"
import {$List} from "java.util.List"
import {$ArtificeAttributeValue, $ArtificeAttributeValue$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeValue"
import {$ArtificeAttributeType$ArtificeAttributeTypeBuilder} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeType$ArtificeAttributeTypeBuilder"
import {$TuningBehavior, $TuningBehavior$$Type} from "com.sammy.malum.core.systems.artifice.TuningBehavior"

export class $ArtificeAttributeType {
static readonly "FUEL_USAGE_RATE": $ArtificeAttributeType
static readonly "TUNING_STRAIN": $ArtificeAttributeType
static readonly "TUNING_POTENCY": $ArtificeAttributeType
static readonly "CAUSTIC_SYNERGY": $ArtificeAttributeType
static readonly "CODEC": $Codec<($ArtificeAttributeType)>
static readonly "INSTABILITY": $ArtificeAttributeType
static readonly "CRUCIBLE_ATTRIBUTES": $ArrayList<($ArtificeAttributeType)>
static readonly "WEAKNESS_TUNING": $ArtificeAttributeType
static readonly "MISFORTUNE_REVERSAL": $ArtificeAttributeType
static readonly "CHAIN_FOCUSING_CHANCE": $ArtificeAttributeType
static readonly "DAMAGE_ABSORPTION_CHANCE": $ArtificeAttributeType
static readonly "FOCUSING_SPEED": $ArtificeAttributeType
static readonly "RESTORATION_CHANCE": $ArtificeAttributeType
static readonly "FORTUNE_CHANCE": $ArtificeAttributeType
static readonly "RESONANCE_TUNING": $ArtificeAttributeType

constructor(arg0: $ResourceLocation$$Type, arg1: $Function$$Type<($ArtificeAttributeData), ($ArtificeAttributeValue$$Type)>, arg2: $BiPredicate$$Type<($ArtificeAttributeData), ($ArtificeAttributeValue)>, arg3: $TuningBehavior$$Type, arg4: float)

public "getId"(): $ResourceLocation
public "getDefaultValue"(): float
public static "create"(arg0: $ResourceLocation$$Type, arg1: $Function$$Type<($ArtificeAttributeData), ($ArtificeAttributeValue$$Type)>): $ArtificeAttributeType$ArtificeAttributeTypeBuilder
public static "getAttribute"(arg0: $ResourceLocation$$Type): $ArtificeAttributeType
public "isValueValid"(arg0: $ArtificeAttributeData$$Type): boolean
public "getAttributeValue"(arg0: $ArtificeAttributeData$$Type): $ArtificeAttributeValue
public "canBeTuned"(): boolean
public "getLangKey"(): StringJS
public "getTuningBehavior"(): $TuningBehavior
public "getDataPrint"(arg0: $ArtificeAttributeData$$Type): StringJS
public static "getExistingAttributes"(arg0: $ArtificeAttributeData$$Type): $List<($ArtificeAttributeType)>
get "id"(): $ResourceLocation
get "defaultValue"(): float
get "langKey"(): StringJS
get "tuningBehavior"(): $TuningBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtificeAttributeType$$Type = ($ArtificeAttributeType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtificeAttributeType$$Original = $ArtificeAttributeType;}
declare module "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect" {
import {$SpiritRiteEffect$RiteParametersBuilder} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect$RiteParametersBuilder"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$RegistryCodecBuddy$RegistryCodecBuddyHelper$$Interface} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy$RegistryCodecBuddyHelper"
import {$SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$SpiritRiteEffect$RiteParameters$$Type} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect$RiteParameters"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpiritRiteEffectTag} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffectTag"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $SpiritRiteEffect implements $RegistryCodecBuddy$RegistryCodecBuddyHelper$$Interface<($SpiritRiteEffect)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

public static "builder"(): $SpiritRiteEffect$RiteParametersBuilder
public "getTags"(): $List<($SpiritRiteEffectTag)>
public "getCodec"(): $RegistryCodecBuddy<($SpiritRiteEffect)>
public "getRegistryName"(): $ResourceLocation
public "getCooldown"(): integer
public "triggerRiteEffect"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $SpiritArcanaType$$Type, arg3: $SpiritRiteEffect$RiteParameters$$Type): boolean
public "save"(arg0: $CompoundTag$$Type): void
public "save"(arg0: $CompoundTag$$Type, arg1: StringJS): void
get "tags"(): $List<($SpiritRiteEffectTag)>
get "codec"(): $RegistryCodecBuddy<($SpiritRiteEffect)>
get "registryName"(): $ResourceLocation
get "cooldown"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MalumRiteEffectTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MalumRiteEffectTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRiteEffect$$Type = (Special.MalumRiteEffectTypes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritRiteEffect$$Original = $SpiritRiteEffect;}
declare module "com.sammy.malum.core.systems.recipe.SpiritBasedRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$SpiritIngredient$$Type} from "com.sammy.malum.core.systems.recipe.SpiritIngredient"

export class $SpiritBasedRecipeInput implements $RecipeInput$$Interface {
readonly "spirits": $List<($ItemStack)>
readonly "items": $List<($ItemStack)>

constructor(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $List$$Type<($ItemStack$$Type)>)
constructor(arg0: $ItemStack$$Type, arg1: $List$$Type<($ItemStack$$Type)>)
constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type)

public "size"(): integer
public "test"(arg0: $SizedIngredient$$Type, arg1: $List$$Type<($SpiritIngredient$$Type)>): boolean
public "test"(arg0: $SizedIngredient$$Type, arg1: $SpiritIngredient$$Type): boolean
public "test"(arg0: $List$$Type<($SizedIngredient$$Type)>, arg1: $List$$Type<($SpiritIngredient$$Type)>): boolean
public "test"(arg0: $SizedIngredient$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>, arg2: $List$$Type<($SpiritIngredient$$Type)>): boolean
public "getItem"(arg0: integer): $ItemStack
public "sortItems"(arg0: $List$$Type<($SizedIngredient$$Type)>): $List<($ItemStack)>
public "testItems"(arg0: $List$$Type<($SizedIngredient$$Type)>): boolean
public "testSpirits"(arg0: $List$$Type<($SpiritIngredient$$Type)>): boolean
public "sortSpirits"(arg0: $List$$Type<($SpiritIngredient$$Type)>): $List<($ItemStack)>
public "isEmpty"(): boolean
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritBasedRecipeInput$$Type = ($SpiritBasedRecipeInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritBasedRecipeInput$$Original = $SpiritBasedRecipeInput;}
declare module "com.sammy.malum.core.systems.spirit.type.SpiritColorProperties" {
import {$ColorParticleDataBuilder} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataBuilder"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$SpiritColorProperties$SpiritTypeColorPropertiesBuilder} from "com.sammy.malum.core.systems.spirit.type.SpiritColorProperties$SpiritTypeColorPropertiesBuilder"
import {$Record} from "java.lang.Record"
import {$Easing, $Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"

export class $SpiritColorProperties extends $Record {
constructor(primaryColor: $Color$$Type, secondaryColor: $Color$$Type, colorEasing: $Easing$$Type, colorCoefficient: float, alphaMultiplier: float, itemColor: $Color$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "create"(arg0: $Color$$Type, arg1: $Color$$Type): $SpiritColorProperties$SpiritTypeColorPropertiesBuilder
public "itemColor"(): $Color
public "colorEasing"(): $Easing
public "colorCoefficient"(): float
public "secondaryColor"(): $Color
public "alphaMultiplier"(): float
public "createColorData"(arg0: float): $ColorParticleDataBuilder
public "createColorData"(): $ColorParticleDataBuilder
public "primaryColor"(): $Color
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritColorProperties$$Type = ({"secondaryColor"?: $Color$$Type, "alphaMultiplier"?: float, "primaryColor"?: $Color$$Type, "itemColor"?: $Color$$Type, "colorCoefficient"?: float, "colorEasing"?: $Easing$$Type}) | ([secondaryColor?: $Color$$Type, alphaMultiplier?: float, primaryColor?: $Color$$Type, itemColor?: $Color$$Type, colorCoefficient?: float, colorEasing?: $Easing$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritColorProperties$$Original = $SpiritColorProperties;}
declare module "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect$RiteParametersBuilder" {
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SpiritRiteEffect$RiteParameters} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect$RiteParameters"

export class $SpiritRiteEffect$RiteParametersBuilder {
constructor()

public "build"(): $SpiritRiteEffect$RiteParameters
public "setTotemDirection"(arg0: $Direction$$Type): $SpiritRiteEffect$RiteParametersBuilder
public "setTotemHeight"(arg0: integer): $SpiritRiteEffect$RiteParametersBuilder
set "totemDirection"(value: $Direction$$Type)
set "totemHeight"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRiteEffect$RiteParametersBuilder$$Type = ($SpiritRiteEffect$RiteParametersBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritRiteEffect$RiteParametersBuilder$$Original = $SpiritRiteEffect$RiteParametersBuilder;}
declare module "com.sammy.malum.core.systems.events.MalignantCritEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$DamageContainer, $DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $MalignantCritEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageContainer$$Type)

public "getSource"(): $DamageSource
public "getContainer"(): $DamageContainer
public "getNewDamage"(): float
public "setNewDamage"(arg0: float): void
public "getLivingEntity"(): $LivingEntity
public "getOriginalDamage"(): float
get "source"(): $DamageSource
get "container"(): $DamageContainer
get "newDamage"(): float
set "newDamage"(value: float)
get "livingEntity"(): $LivingEntity
get "originalDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalignantCritEvent$$Type = ($MalignantCritEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalignantCritEvent$$Original = $MalignantCritEvent;}
declare module "com.sammy.malum.core.systems.artifice.ArtificeAttributeType$ArtificeAttributeTypeBuilder" {
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$ArtificeAttributeValue$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeValue"
import {$ArtificeAttributeType} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeType"

export class $ArtificeAttributeType$ArtificeAttributeTypeBuilder {
constructor(arg0: $ResourceLocation$$Type, arg1: $Function$$Type<($ArtificeAttributeData), ($ArtificeAttributeValue$$Type)>)

public "build"(): $ArtificeAttributeType
public "setDefaultValue"(arg0: float): $ArtificeAttributeType$ArtificeAttributeTypeBuilder
public "noTuning"(): $ArtificeAttributeType$ArtificeAttributeTypeBuilder
public "withRequirement"(arg0: $BiPredicate$$Type<($ArtificeAttributeData), ($ArtificeAttributeValue)>): $ArtificeAttributeType$ArtificeAttributeTypeBuilder
public "invertedTuning"(): $ArtificeAttributeType$ArtificeAttributeTypeBuilder
set "defaultValue"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtificeAttributeType$ArtificeAttributeTypeBuilder$$Type = ($ArtificeAttributeType$ArtificeAttributeTypeBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtificeAttributeType$ArtificeAttributeTypeBuilder$$Original = $ArtificeAttributeType$ArtificeAttributeTypeBuilder;}
declare module "com.sammy.malum.core.systems.rite.SpiritRiteType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$SpiritRiteEffect, $SpiritRiteEffect$$Type} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$TotemBaseBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.totem.TotemBaseBlockEntity"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder, $SpiritHolder$$Type} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$RiteEffectHolder$$Type} from "com.sammy.malum.core.systems.registry.rite.RiteEffectHolder"

export class $SpiritRiteType {
static readonly "CODEC": $Codec<($SpiritRiteType)>
static readonly "HOLDER_CODEC": $Codec<($Holder<($SpiritRiteType)>)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($SpiritRiteType)>

constructor(arg0: $RiteEffectHolder$$Type<($SpiritRiteEffect$$Type)>, arg1: boolean, arg2: $List$$Type<($SpiritHolder$$Type<($SpiritArcanaType$$Type)>)>)

public "getName"(): StringJS
public static "load"(arg0: $CompoundTag$$Type, arg1: StringJS): $Optional<($SpiritRiteType)>
public static "load"(arg0: $CompoundTag$$Type): $Optional<($SpiritRiteType)>
public "matches"(arg0: $ServerLevel$$Type, arg1: $TotemBaseBlockEntity$$Type): boolean
public "save"(arg0: $CompoundTag$$Type): void
public "save"(arg0: $CompoundTag$$Type, arg1: StringJS): void
public "getTags"(): $MutableComponent
public "getRegistryName"(): $ResourceLocation
public "isCorrupted"(): boolean
public "getEffectDetails"(): $List<($Component)>
public "getEffectLangKey"(): StringJS
public "getIcon"(): $ResourceLocation
public "getLangKey"(): StringJS
public "getSpirits"(): $List<($SpiritHolder<($SpiritArcanaType)>)>
public "getEffect"(): $SpiritRiteEffect
public "triggerRiteEffect"(arg0: $ServerLevel$$Type, arg1: $TotemBaseBlockEntity$$Type): void
public "getIdentifyingSpirit"(): $SpiritHolder<($SpiritArcanaType)>
public "getCodexEntryLangKey"(): StringJS
public "getDetailedDescription"(): $List<($Component)>
get "name"(): StringJS
get "tags"(): $MutableComponent
get "registryName"(): $ResourceLocation
get "corrupted"(): boolean
get "effectDetails"(): $List<($Component)>
get "effectLangKey"(): StringJS
get "icon"(): $ResourceLocation
get "langKey"(): StringJS
get "spirits"(): $List<($SpiritHolder<($SpiritArcanaType)>)>
get "effect"(): $SpiritRiteEffect
get "identifyingSpirit"(): $SpiritHolder<($SpiritArcanaType)>
get "codexEntryLangKey"(): StringJS
get "detailedDescription"(): $List<($Component)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MalumSpiritRiteTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MalumSpiritRiteTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRiteType$$Type = (Special.MalumSpiritRiteTypes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritRiteType$$Original = $SpiritRiteType;}
declare module "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect$RiteParameters" {
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $SpiritRiteEffect$RiteParameters {
constructor(arg0: integer, arg1: $Direction$$Type)

public "getTotemDirection"(): $Optional<($Direction)>
public "getTotemHeight"(): integer
get "totemDirection"(): $Optional<($Direction)>
get "totemHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRiteEffect$RiteParameters$$Type = ($SpiritRiteEffect$RiteParameters);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritRiteEffect$RiteParameters$$Original = $SpiritRiteEffect$RiteParameters;}
declare module "com.sammy.malum.core.systems.registry.rite.RiteEffectHolder" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"

export class $RiteEffectHolder<T extends $SpiritRiteEffect> extends $DeferredHolder<($SpiritRiteEffect), (T)> {
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RiteEffectHolder$$Type<T> = ($RiteEffectHolder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RiteEffectHolder$$Original<T> = $RiteEffectHolder<(T)>;}
declare module "com.sammy.malum.core.systems.artifice.ArtificeModifierSourceInstance" {
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ArtificeModifier$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeModifier"
import {$SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$IArtificeAcceptor, $IArtificeAcceptor$$Type} from "com.sammy.malum.core.systems.artifice.IArtificeAcceptor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ArtificeModifierSourceInstance {
readonly "sourcePosition": $BlockPos
readonly "type": $ResourceLocation
readonly "maxAmount": integer
 "target": $IArtificeAcceptor

public "bind"(arg0: $IArtificeAcceptor$$Type): void
public "tickFocusing"(arg0: $ArtificeAttributeData$$Type): void
public "canModifyFocusing"(arg0: $ArtificeAttributeData$$Type): boolean
public "addParticles"(arg0: $IArtificeAcceptor$$Type, arg1: $SpiritArcanaType$$Type): void
public "isBound"(): boolean
public "consumesFuel"(): boolean
public "modifyFocusing"(arg0: $Consumer$$Type<($ArtificeModifier)>): void
public "applyAugments"(arg0: $Consumer$$Type<($ItemStack)>): void
public "invalidate"(): void
get "bound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtificeModifierSourceInstance$$Type = ($ArtificeModifierSourceInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtificeModifierSourceInstance$$Original = $ArtificeModifierSourceInstance;}
declare module "com.sammy.malum.core.systems.rite.effect.SpiritRiteEntityEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$List} from "java.util.List"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$SpiritRiteEffect$RiteParameters$$Type} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect$RiteParameters"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $SpiritRiteEntityEffect<T extends $LivingEntity> extends $SpiritRiteEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: T): void
public "getTargetClass"(): $Class<(T)>
public "tryApplyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): void
public "getImpactSound"(): $Holder<($SoundEvent)>
public "triggerRiteEffect"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $SpiritArcanaType$$Type, arg3: $SpiritRiteEffect$RiteParameters$$Type): boolean
public "findNearbyTargets"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): $List<(T)>
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: T): boolean
public "getEffectRange"(): integer
public "getImpactSoundVolume"(arg0: $LivingEntity$$Type): float
get "targetClass"(): $Class<(T)>
get "impactSound"(): $Holder<($SoundEvent)>
get "effectRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRiteEntityEffect$$Type<T> = ($SpiritRiteEntityEffect<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritRiteEntityEffect$$Original<T> = $SpiritRiteEntityEffect<(T)>;}
declare module "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre" {
import {$MalignantCritEvent} from "com.sammy.malum.core.systems.events.MalignantCritEvent"
import {$DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $MalignantCritEvent$Pre extends $MalignantCritEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $DamageContainer$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalignantCritEvent$Pre$$Type = ($MalignantCritEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalignantCritEvent$Pre$$Original = $MalignantCritEvent$Pre;}
declare module "com.sammy.malum.core.systems.artifice.IArtificeModifierSource" {
import {$ArtificeModifierSourceInstance} from "com.sammy.malum.core.systems.artifice.ArtificeModifierSourceInstance"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IArtificeModifierSource$$Interface {
get "activeFocusingModifierInstance"(): $ArtificeModifierSourceInstance
get "focusingModifierInstance"(): $Optional<($ArtificeModifierSourceInstance)>
}

export class $IArtificeModifierSource implements $IArtificeModifierSource$$Interface {
 "triggerRecalibration"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "createFocusingModifierInstance"(): $ArtificeModifierSourceInstance
 "getActiveFocusingModifierInstance"(): $ArtificeModifierSourceInstance
 "getFocusingModifierInstance"(): $Optional<($ArtificeModifierSourceInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IArtificeModifierSource$$Type = ($IArtificeModifierSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IArtificeModifierSource$$Original = $IArtificeModifierSource;}
declare module "com.sammy.malum.core.systems.artifice.TuningModifier" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $TuningModifier extends $Record {
static readonly "CAUSTIC_SYNERGY": $ResourceLocation
static readonly "WEAKEST_BOOST": $ResourceLocation
static "CODEC": $Codec<($TuningModifier)>
static readonly "TUNING_FORK": $ResourceLocation
static readonly "RESONANCE_TUNING": $ResourceLocation

constructor(id: $ResourceLocation$$Type, value: float)

public "value"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TuningModifier$$Type = ({"value"?: float, "id"?: $ResourceLocation$$Type}) | ([value?: float, id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TuningModifier$$Original = $TuningModifier;}
declare module "com.sammy.malum.core.systems.rite.effect.SpiritRiteBlockEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$SpiritRiteEffect$RiteParameters$$Type} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect$RiteParameters"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $SpiritRiteBlockEffect extends $SpiritRiteEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: float): void
public "triggerRiteEffect"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $SpiritArcanaType$$Type, arg3: $SpiritRiteEffect$RiteParameters$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRiteBlockEffect$$Type = ($SpiritRiteBlockEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritRiteBlockEffect$$Original = $SpiritRiteBlockEffect;}
declare module "com.sammy.malum.core.systems.registry.RegistryCodecBuddy" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function$$Type} from "java.util.function.Function"
import {$Class$$Type} from "java.lang.Class"
import {$Holder} from "net.minecraft.core.Holder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $RegistryCodecBuddy<T> {
constructor(arg0: $Registry$$Type<(T)>, arg1: StringJS)

public "load"<K>(arg0: $CompoundTag$$Type, arg1: $Class$$Type<(K)>): $Optional<(K)>
public "load"(arg0: $CompoundTag$$Type, arg1: StringJS): $Optional<(T)>
public "load"(arg0: $CompoundTag$$Type): $Optional<(T)>
public "load"<K>(arg0: $CompoundTag$$Type, arg1: $Class$$Type<(K)>, arg2: StringJS): $Optional<(K)>
public "load"<K>(arg0: $CompoundTag$$Type, arg1: $Function$$Type<(T), (K)>): $Optional<(K)>
public "load"<K>(arg0: $CompoundTag$$Type, arg1: $Function$$Type<(T), (K)>, arg2: StringJS): $Optional<(K)>
public "save"(arg0: T, arg1: $CompoundTag$$Type, arg2: StringJS): void
public "save"(arg0: T, arg1: $CompoundTag$$Type): void
public "getStreamCodec"(): $StreamCodec<($ByteBuf), (T)>
public "getCodec"(): $Codec<(T)>
public "getHolderCodec"(): $Codec<($Holder<(T)>)>
get "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
get "codec"(): $Codec<(T)>
get "holderCodec"(): $Codec<($Holder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryCodecBuddy$$Type<T> = ($RegistryCodecBuddy<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryCodecBuddy$$Original<T> = $RegistryCodecBuddy<(T)>;}
