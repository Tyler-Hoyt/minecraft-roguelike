declare module "com.hollingsworth.arsnouveau.api.particle.configurations.properties.SimplePropertyType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IPropertyType$$Interface} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.IPropertyType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BaseProperty} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.BaseProperty"
import {$Record} from "java.lang.Record"

export class $SimplePropertyType<T extends $BaseProperty<(object)>> extends $Record implements $IPropertyType$$Interface<(T)> {
constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "getString"(): StringJS
public "normalCodec"(): $Codec<(T)>
get "string"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplePropertyType$$Type<T> = ({"codec"?: $MapCodec$$Type<(T)>, "streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>}) | ([codec?: $MapCodec$$Type<(T)>, streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimplePropertyType$$Original<T> = $SimplePropertyType<(T)>;}
declare module "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder" {
import {$AbstractAugment$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SpellStats} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"

export class $SpellStats$Builder {
constructor()

public "build"(): $SpellStats
public "build"(arg0: $AbstractSpellPart$$Type, arg1: $HitResult$$Type, arg2: $Level$$Type, arg3: $LivingEntity$$Type, arg4: $SpellContext$$Type): $SpellStats
public "setItems"(arg0: $List$$Type<($ItemStack$$Type)>): $SpellStats$Builder
public "addItem"(arg0: $ItemStack$$Type): $SpellStats$Builder
public "addAccelerationModifier"(arg0: float): $SpellStats$Builder
public "addDurationModifier"(arg0: double): $SpellStats$Builder
public "setSensitive"(): $SpellStats$Builder
public "addAmplification"(arg0: double): $SpellStats$Builder
public "setAmplification"(arg0: double): $SpellStats$Builder
public "setDamageModifier"(arg0: double): $SpellStats$Builder
public "randomize"(): $SpellStats$Builder
public "addAOE"(arg0: double): $SpellStats$Builder
public "setAccelerationModifier"(arg0: float): $SpellStats$Builder
/**
 * 
 * @deprecated
 */
public "setDurationModifier"(arg0: double): $SpellStats$Builder
public "setAugments"(arg0: $List$$Type<($AbstractAugment$$Type)>): $SpellStats$Builder
public "addItemsFromEntity"(arg0: $LivingEntity$$Type): $SpellStats$Builder
public "addDamageModifier"(arg0: double): $SpellStats$Builder
public "addAugment"(arg0: $AbstractAugment$$Type): $SpellStats$Builder
public "setAOE"(arg0: double): $SpellStats$Builder
set "items"(value: $List$$Type<($ItemStack$$Type)>)
get "sensitive"(): $SpellStats$Builder
set "amplification"(value: double)
set "damageModifier"(value: double)
set "accelerationModifier"(value: float)
set "durationModifier"(value: double)
set "augments"(value: $List$$Type<($AbstractAugment$$Type)>)
set "AOE"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellStats$Builder$$Type = ($SpellStats$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellStats$Builder$$Original = $SpellStats$Builder;}
declare module "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SpellPartConfigUtil$ComboLimits} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$ComboLimits"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ModConfigSpec} from "net.neoforged.neoforge.common.ModConfigSpec"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ModConfigSpec$BooleanValue} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"
import {$SpellSchool} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$AbstractAugment} from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Set} from "java.util.Set"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$SpellPartConfigUtil$AugmentLimits} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentLimits"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SpellPartConfigUtil$AugmentCosts} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentCosts"
import {$DocAssets$BlitInfo} from "com.hollingsworth.arsnouveau.api.documentation.DocAssets$BlitInfo"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"
import {$Glyph} from "com.hollingsworth.arsnouveau.common.items.Glyph"
import {$Map} from "java.util.Map"
import {$AbstractSpellPart} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$CastResolveType} from "com.hollingsworth.arsnouveau.api.spell.CastResolveType"
import {$SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $AbstractCastMethod extends $AbstractSpellPart {
 "spellSchools": $List<($SpellSchool)>
static readonly "CODEC": $Codec<($AbstractSpellPart)>
 "compatibleAugments": $Set<($AbstractAugment)>
 "invalidCombinations": $SpellPartConfigUtil$ComboLimits
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractSpellPart)>
static readonly "STREAM_LIST": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($AbstractSpellPart)>)>
 "PER_SPELL_LIMIT": $ModConfigSpec$IntValue
 "augmentCosts": $SpellPartConfigUtil$AugmentCosts
 "glyphItem": $Glyph
 "STARTER_SPELL": $ModConfigSpec$BooleanValue
 "CONFIG": $ModConfigSpec
 "COST": $ModConfigSpec$IntValue
 "augmentLimits": $SpellPartConfigUtil$AugmentLimits
 "name": StringJS
 "augmentDescriptions": $Map<($AbstractAugment), ($Component)>
 "ENABLED": $ModConfigSpec$BooleanValue
 "GLYPH_TIER": $ModConfigSpec$IntValue

constructor(arg0: StringJS, arg1: StringJS)
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS)

public "getTypeName"(): $Component
public "onCast"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $Level$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type, arg5: $SpellResolver$$Type): $CastResolveType
public "getTypeIndex"(): integer
public "onCastOnBlock"(arg0: $BlockHitResult$$Type, arg1: $LivingEntity$$Type, arg2: $SpellStats$$Type, arg3: $SpellContext$$Type, arg4: $SpellResolver$$Type): $CastResolveType
public "onCastOnBlock"(arg0: $UseOnContext$$Type, arg1: $SpellStats$$Type, arg2: $SpellContext$$Type, arg3: $SpellResolver$$Type): $CastResolveType
public "onCastOnEntity"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $Entity$$Type, arg3: $InteractionHand$$Type, arg4: $SpellStats$$Type, arg5: $SpellContext$$Type, arg6: $SpellResolver$$Type): $CastResolveType
public "buildConfig"(arg0: $ModConfigSpec$Builder$$Type): void
public "getTypeIcon"(): $DocAssets$BlitInfo
get "typeName"(): $Component
get "typeIndex"(): integer
get "typeIcon"(): $DocAssets$BlitInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCastMethod$$Type = ($AbstractCastMethod);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractCastMethod$$Original = $AbstractCastMethod;}
declare module "com.hollingsworth.arsnouveau.api.entity.IDispellable" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $IDispellable$$Interface {

(arg0: $LivingEntity): boolean
}

export class $IDispellable implements $IDispellable$$Interface {
 "onDispel"(arg0: $LivingEntity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDispellable$$Type = ((arg0: $LivingEntity) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDispellable$$Original = $IDispellable;}
declare module "com.hollingsworth.arsnouveau.api.documentation.ReloadDocumentationEvent$Post" {
import {$ReloadDocumentationEvent} from "com.hollingsworth.arsnouveau.api.documentation.ReloadDocumentationEvent"

export class $ReloadDocumentationEvent$Post extends $ReloadDocumentationEvent {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadDocumentationEvent$Post$$Type = ($ReloadDocumentationEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadDocumentationEvent$Post$$Original = $ReloadDocumentationEvent$Post;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.MultiExtractedReference" {
import {$MultiSlotReference} from "com.hollingsworth.arsnouveau.api.item.inv.MultiSlotReference"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ExtractedStack, $ExtractedStack$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.ExtractedStack"
import {$List$$Type} from "java.util.List"

export class $MultiExtractedReference extends $MultiSlotReference<($ExtractedStack)> {
constructor(arg0: $ItemStack$$Type, arg1: $List$$Type<($ExtractedStack$$Type)>)

public "isEmpty"(): boolean
public "getExtracted"(): $ItemStack
get "empty"(): boolean
get "extracted"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiExtractedReference$$Type = ($MultiExtractedReference);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiExtractedReference$$Original = $MultiExtractedReference;}
declare module "com.hollingsworth.arsnouveau.api.item.ICosmeticItem" {
import {$ItemDisplayContext} from "net.minecraft.world.item.ItemDisplayContext"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ICosmeticItem$$Interface {
get "transformType"(): $ItemDisplayContext
get "translations"(): $Vec3
get "scaling"(): $Vec3
}

export class $ICosmeticItem implements $ICosmeticItem$$Interface {
static readonly "defaultScaling": $Vec3

 "getTransformType"(): $ItemDisplayContext
 "getTranslations"(): $Vec3
 "getTranslations"(arg0: $LivingEntity$$Type): $Vec3
 "getScaling"(arg0: $LivingEntity$$Type): $Vec3
 "getScaling"(): $Vec3
 "canWear"(arg0: $LivingEntity$$Type): boolean
 "getBone"(arg0: $LivingEntity$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICosmeticItem$$Type = ($ICosmeticItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICosmeticItem$$Original = $ICosmeticItem;}
declare module "com.hollingsworth.arsnouveau.api.spell.Spell" {
import {$Iterable} from "java.lang.Iterable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Spell$Mutable} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Optional$$Type} from "java.util.Optional"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$List, $List$$Type} from "java.util.List"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"
import {$AbstractAugment, $AbstractAugment$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractCastMethod} from "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ConfiguredSpellSound, $ConfiguredSpellSound$$Type} from "com.hollingsworth.arsnouveau.api.sound.ConfiguredSpellSound"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$TimelineMap, $TimelineMap$$Type} from "com.hollingsworth.arsnouveau.api.particle.timelines.TimelineMap"

export class $Spell {
static readonly "CODEC": $MapCodec<($Spell)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($Spell)>

constructor(arg0: $List$$Type<($AbstractSpellPart$$Type)>)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: $ParticleColor$$Type, arg2: $ConfiguredSpellSound$$Type, arg3: $List$$Type<($AbstractSpellPart$$Type)>)
constructor(arg0: StringJS, arg1: $ParticleColor$$Type, arg2: $ConfiguredSpellSound$$Type, arg3: $List$$Type<($AbstractSpellPart$$Type)>, arg4: $TimelineMap$$Type)
constructor(arg0: StringJS, arg1: $ParticleColor$$Type, arg2: $ConfiguredSpellSound$$Type, arg3: $List$$Type<($AbstractSpellPart$$Type)>, arg4: ($TimelineMap$$Type)?)
constructor()
constructor(...arg0: ($AbstractSpellPart$$Type)[])
constructor(arg0: $List$$Type<($AbstractSpellPart$$Type)>, arg1: StringJS)

public "name"(): StringJS
public "size"(): integer
public "get"(arg0: integer): $AbstractSpellPart
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "indexOf"(arg0: $AbstractSpellPart$$Type): integer
public "isEmpty"(): boolean
public "add"(arg0: $AbstractSpellPart$$Type): $Spell
public "add"(...arg0: ($AbstractSpellPart$$Type)[]): $Spell
public "add"(arg0: $AbstractSpellPart$$Type, arg1: integer): $Spell
/**
 * 
 * @deprecated
 */
public "color"(): $ParticleColor
public "recipe"(): $Iterable<($AbstractSpellPart)>
public "isValid"(): boolean
public "getDisplayString"(): StringJS
public "serializeRecipe"(): $List<($ResourceLocation)>
/**
 * 
 * @deprecated
 */
public "sound"(): $ConfiguredSpellSound
public "withName"(arg0: StringJS): $Spell
public "particleTimeline"(): $TimelineMap
public "unsafeList"(): $List<($AbstractSpellPart)>
public "withSound"(arg0: $ConfiguredSpellSound$$Type): $Spell
public "getAugments"(arg0: integer, arg1: $LivingEntity$$Type): $List<($AbstractAugment)>
public "withColor"(arg0: $ParticleColor$$Type): $Spell
public "toJson"(): StringJS
public static "fromJson"(arg0: StringJS): $Spell
public "getInstanceCount"(arg0: $AbstractSpellPart$$Type): integer
public static "fromBinaryBase64"(arg0: StringJS): $Spell
public "toBinaryBase64"(): StringJS
public "setRecipe"(arg0: $List$$Type<($AbstractSpellPart$$Type)>): $Spell
public "mutable"(): $Spell$Mutable
public "withTimeline"(arg0: $TimelineMap$$Type): $Spell
public "getBuffsAtIndex"(arg0: integer, arg1: $LivingEntity$$Type, arg2: $AbstractAugment$$Type): integer
public "getCost"(): integer
public "getCastMethod"(): $AbstractCastMethod
get "empty"(): boolean
get "valid"(): boolean
get "displayString"(): StringJS
get "cost"(): integer
get "castMethod"(): $AbstractCastMethod
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spell$$Type = ($Spell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Spell$$Original = $Spell;}
declare module "com.hollingsworth.arsnouveau.api.particle.configurations.properties.BaseProperty" {
import {$PropMap, $PropMap$$Type} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.PropMap"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ParticleConfigWidgetProvider} from "com.hollingsworth.arsnouveau.api.particle.configurations.ParticleConfigWidgetProvider"
import {$List} from "java.util.List"
import {$IPropertyType} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.IPropertyType"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component} from "net.minecraft.network.chat.Component"

export class $BaseProperty<T extends $BaseProperty<(object)>> {
 "onDependenciesChanged": $Runnable
 "propertyHolder": $PropMap

constructor()
constructor(arg0: $PropMap$$Type)

public "getName"(): $Component
public "hashCode"(): integer
public "getId"(): $ResourceLocation
public "getType"(): $IPropertyType<(T)>
public "survivesMotionChange"(): boolean
public "setChangedListener"(arg0: $Runnable$$Type): void
public "subProperties"(): $List<($BaseProperty<(never)>)>
public "buildWidgets"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $ParticleConfigWidgetProvider
get "name"(): $Component
get "id"(): $ResourceLocation
get "type"(): $IPropertyType<(T)>
set "changedListener"(value: $Runnable$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseProperty$$Type<T> = ($BaseProperty<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseProperty$$Original<T> = $BaseProperty<(T)>;}
declare module "com.hollingsworth.arsnouveau.api.spell.SpellStats" {
import {$AbstractAugment, $AbstractAugment$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $SpellStats {
public "getDurationMultiplier"(): double
public "hasBuff"(arg0: $AbstractAugment$$Type): boolean
public "getAugments"(): $List<($AbstractAugment)>
public "addTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
public "setDurationMultiplier"(arg0: double): void
public "getAccMultiplier"(): float
public "getBuffCount"(arg0: $AbstractAugment$$Type): integer
public "getAmpMultiplier"(): double
public "setAmpMultiplier"(arg0: double): void
public "isRandomized"(): boolean
public "getDamageModifier"(): double
public "getDurationInTicks"(): integer
public "getAoeMultiplier"(): double
public "isSensitive"(): boolean
public "setDamageModifier"(arg0: double): void
public "setModifierItems"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "getModifierItems"(): $List<($ItemStack)>
public "setAccMultiplier"(arg0: float): void
public "setAugments"(arg0: $List$$Type<($AbstractAugment$$Type)>): void
get "durationMultiplier"(): double
get "augments"(): $List<($AbstractAugment)>
set "durationMultiplier"(value: double)
get "accMultiplier"(): float
get "ampMultiplier"(): double
set "ampMultiplier"(value: double)
get "randomized"(): boolean
get "damageModifier"(): double
get "durationInTicks"(): integer
get "aoeMultiplier"(): double
get "sensitive"(): boolean
set "damageModifier"(value: double)
set "modifierItems"(value: $List$$Type<($ItemStack$$Type)>)
get "modifierItems"(): $List<($ItemStack)>
set "accMultiplier"(value: float)
set "augments"(value: $List$$Type<($AbstractAugment$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellStats$$Type = ($SpellStats);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellStats$$Original = $SpellStats;}
declare module "com.hollingsworth.arsnouveau.api.item.IScribeable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IScribeable$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $Player, arg3: $InteractionHand, arg4: $ItemStack): boolean
}

export class $IScribeable implements $IScribeable$$Interface {
 "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScribeable$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $Player, arg3: $InteractionHand, arg4: $ItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IScribeable$$Original = $IScribeable;}
declare module "com.hollingsworth.arsnouveau.api.source.ISourceTile" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISourceTile$$Interface {
get "source"(): integer
get "maxSource"(): integer
set "source"(value: integer)
get "transferRate"(): integer
}

export class $ISourceTile implements $ISourceTile$$Interface {
 "getSource"(): integer
 "canProvideSource"(): boolean
 "getMaxSource"(): integer
 "canAcceptSource"(): boolean
 "setSource"(arg0: integer): integer
 "getTransferRate"(): integer
 "removeSource"(arg0: integer, arg1: boolean): integer
 "removeSource"(arg0: integer): integer
 "addSource"(arg0: integer): integer
 "addSource"(arg0: integer, arg1: boolean): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISourceTile$$Type = ($ISourceTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISourceTile$$Original = $ISourceTile;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.IInvProvider" {
import {$InventoryManager, $InventoryManager$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.InventoryManager"

export interface $IInvProvider$$Interface {

(): $InventoryManager$$Type
get "inventoryManager"(): $InventoryManager
}

export class $IInvProvider implements $IInvProvider$$Interface {
 "getInventoryManager"(): $InventoryManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInvProvider$$Type = (() => $InventoryManager$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInvProvider$$Original = $IInvProvider;}
declare module "com.hollingsworth.arsnouveau.api.spell.SpellCaster" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractCaster} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$SpellSlotMap$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSlotMap"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SpellCaster extends $AbstractCaster<($SpellCaster)> {
static readonly "CODEC": $MapCodec<($SpellCaster)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SpellCaster)>

constructor(arg0: integer, arg1: StringJS, arg2: boolean, arg3: StringJS, arg4: integer)
constructor(arg0: integer)
constructor()
constructor(arg0: integer, arg1: StringJS, arg2: boolean, arg3: StringJS, arg4: integer, arg5: $SpellSlotMap$$Type)

public "getComponentType"(): $DataComponentType<($SpellCaster)>
public static "create"(arg0: integer, arg1: StringJS, arg2: boolean, arg3: StringJS, arg4: integer): $SpellCaster
public "codec"(): $MapCodec<($SpellCaster)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SpellCaster)>
get "componentType"(): $DataComponentType<($SpellCaster)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCaster$$Type = ($SpellCaster);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCaster$$Original = $SpellCaster;}
declare module "com.hollingsworth.arsnouveau.api.particle.timelines.TimelineMap" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IParticleTimelineType, $IParticleTimelineType$$Type} from "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimelineType"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$TimelineMap$MutableTimelineMap} from "com.hollingsworth.arsnouveau.api.particle.timelines.TimelineMap$MutableTimelineMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IParticleTimeline, $IParticleTimeline$$Type} from "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimeline"
import {$Record} from "java.lang.Record"

export class $TimelineMap extends $Record {
static "CODEC": $Codec<($TimelineMap)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($TimelineMap)>

constructor()
constructor(timelines: $Map$$Type<($IParticleTimelineType$$Type<(never)>), ($IParticleTimeline$$Type<(never)>)>)

public "get"<T extends $IParticleTimeline<(object)>>(arg0: $IParticleTimelineType$$Type<(T)>): T
public "get"<T extends $IParticleTimeline<(object)>>(arg0: $Supplier$$Type<($IParticleTimelineType$$Type<(T)>)>): T
public "put"<T extends $IParticleTimeline<(object)>>(arg0: $IParticleTimelineType$$Type<(T)>, arg1: T): $TimelineMap
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "timelines"(): $Map<($IParticleTimelineType<(never)>), ($IParticleTimeline<(never)>)>
public "debugPrintHash"(arg0: $Spell$$Type, arg1: $Level$$Type): void
public "mutable"(): $TimelineMap$MutableTimelineMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelineMap$$Type = ({"timelines"?: $Map$$Type<($IParticleTimelineType$$Type<(never)>), ($IParticleTimeline$$Type<(never)>)>}) | ([timelines?: $Map$$Type<($IParticleTimelineType$$Type<(never)>), ($IParticleTimeline$$Type<(never)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimelineMap$$Original = $TimelineMap;}
declare module "com.hollingsworth.arsnouveau.api.particle.PropertyParticleOptions" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PropMap, $PropMap$$Type} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.PropMap"
import {$ColorProperty} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.ColorProperty"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SoundProperty} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.SoundProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions$$Interface} from "net.minecraft.core.particles.ParticleOptions"

export class $PropertyParticleOptions implements $ParticleOptions$$Interface {
static readonly "CODEC": $MapCodec<($PropertyParticleOptions)>
 "map": $PropMap
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PropertyParticleOptions)>

constructor()
constructor(arg0: $ParticleType$$Type<(never)>)
constructor(arg0: $PropMap$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getType"(): $ParticleType<(never)>
public "colorProp"(): $ColorProperty
public "soundProperty"(): $SoundProperty
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $PropertyParticleOptions
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PropertyParticleOptions$$Type): void
get "type"(): $ParticleType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyParticleOptions$$Type = ($PropertyParticleOptions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PropertyParticleOptions$$Original = $PropertyParticleOptions;}
declare module "com.hollingsworth.arsnouveau.api.item.ICasterTool" {
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemCasterProvider$$Interface} from "com.hollingsworth.arsnouveau.api.spell.ItemCasterProvider"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ISpellHotkeyListener$$Interface} from "com.hollingsworth.arsnouveau.api.item.ISpellHotkeyListener"
import {$IDisplayMana$$Interface} from "com.hollingsworth.arsnouveau.api.client.IDisplayMana"
import {$IScribeable$$Interface} from "com.hollingsworth.arsnouveau.api.item.IScribeable"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ICasterTool$$Interface extends $IScribeable$$Interface, $IDisplayMana$$Interface, $ISpellHotkeyListener$$Interface, $ItemCasterProvider$$Interface {
}

export class $ICasterTool implements $ICasterTool$$Interface {
 "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
 "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
 "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
 "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
 "sendInvalidMessage"(arg0: $Player$$Type): void
 "sendSetMessage"(arg0: $Player$$Type): void
 "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
 "shouldDisplay"(arg0: $ItemStack$$Type): boolean
 "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
 "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
 "canQuickCast"(): boolean
 "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
 "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICasterTool$$Type = ($ICasterTool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICasterTool$$Original = $ICasterTool;}
declare module "com.hollingsworth.arsnouveau.api.spell.ITurretBehavior" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export interface $ITurretBehavior$$Interface {
}

export class $ITurretBehavior implements $ITurretBehavior$$Interface {
 "onCast"(arg0: $SpellResolver$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $Position$$Type, arg5: $Direction$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITurretBehavior$$Type = ($ITurretBehavior);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITurretBehavior$$Original = $ITurretBehavior;}
declare module "com.hollingsworth.arsnouveau.api.ritual.AbstractRitual" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level} from "net.minecraft.world.level.Level"
import {$RitualBrazierTile, $RitualBrazierTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.RitualBrazierTile"
import {$RitualContext, $RitualContext$$Type} from "com.hollingsworth.arsnouveau.api.ritual.RitualContext"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ParticleColor} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $AbstractRitual {
 "rand": $RandomSource
 "playerUUID": $UUID
 "tile": $RitualBrazierTile

constructor()

public "getName"(): StringJS
public "write"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "getContext"(): $RitualContext
public "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "onStart"(arg0: $Player$$Type): void
public "isDone"(): boolean
public "getParticleIntensity"(): integer
public "getFormattedConsumedItems"(): $List<(StringJS)>
public "getConsumedItems"(): $List<($ItemStack)>
public "getWorld"(): $Level
public "getProgress"(): integer
public "getLangDescription"(): StringJS
public "getLangName"(): StringJS
public "getRegistryName"(): $ResourceLocation
public "onEnd"(): void
public "canStart"(arg0: $Player$$Type): boolean
public "tryTick"(arg0: $RitualBrazierTile$$Type): void
public "onDestroy"(): void
public "isRunning"(): boolean
public "getDescriptionKey"(): StringJS
public "setContext"(arg0: $RitualContext$$Type): void
public "didConsumeItem"(arg0: $ItemLike$$Type): boolean
public "canConsumeItem"(arg0: $ItemStack$$Type): boolean
public "onItemConsumed"(arg0: $ItemStack$$Type): void
public "needsSourceNow"(): boolean
public "setNeedsSource"(arg0: boolean): void
public "getSourceCost"(): integer
public "consumesSource"(): boolean
public "getOuterColor"(): $ParticleColor
public "takeSourceNow"(): boolean
public "setFinished"(): void
/**
 * 
 * @deprecated
 */
public "canBeTraded"(): boolean
public "modifyTooltips"(arg0: $List$$Type<($Component$$Type)>): void
public "incrementProgress"(): void
public "itemConsumedCount"(arg0: $Predicate$$Type<($ItemStack)>): integer
public "getCenterColor"(): $ParticleColor
public "onStatusChanged"(arg0: boolean): void
public "getDescription"(): StringJS
public "getPos"(): $BlockPos
get "name"(): StringJS
get "context"(): $RitualContext
get "done"(): boolean
get "particleIntensity"(): integer
get "formattedConsumedItems"(): $List<(StringJS)>
get "consumedItems"(): $List<($ItemStack)>
get "world"(): $Level
get "progress"(): integer
get "langDescription"(): StringJS
get "langName"(): StringJS
get "registryName"(): $ResourceLocation
get "running"(): boolean
get "descriptionKey"(): StringJS
set "context"(value: $RitualContext$$Type)
set "needsSource"(value: boolean)
get "sourceCost"(): integer
get "outerColor"(): $ParticleColor
get "finished"(): void
get "centerColor"(): $ParticleColor
get "description"(): StringJS
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRitual$$Type = ($AbstractRitual);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractRitual$$Original = $AbstractRitual;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.InteractResult" {
import {$ItemScroll$SortPref, $ItemScroll$SortPref$$Type} from "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref"
import {$Record} from "java.lang.Record"

export class $InteractResult extends $Record {
constructor(sortPref: $ItemScroll$SortPref$$Type, valid: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "valid"(): boolean
public "sortPref"(): $ItemScroll$SortPref
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractResult$$Type = ({"sortPref"?: $ItemScroll$SortPref$$Type, "valid"?: boolean}) | ([sortPref?: $ItemScroll$SortPref$$Type, valid?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InteractResult$$Original = $InteractResult;}
declare module "com.hollingsworth.arsnouveau.api.documentation.DocAssets$BlitInfo" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $DocAssets$BlitInfo extends $Record {
constructor(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer)
constructor(location: $ResourceLocation$$Type, u: integer, v: integer, width: integer, height: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "location"(): $ResourceLocation
public "v"(): integer
public "u"(): integer
public "width"(): integer
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DocAssets$BlitInfo$$Type = ({"u"?: integer, "width"?: integer, "height"?: integer, "location"?: $ResourceLocation$$Type, "v"?: integer}) | ([u?: integer, width?: integer, height?: integer, location?: $ResourceLocation$$Type, v?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DocAssets$BlitInfo$$Original = $DocAssets$BlitInfo;}
declare module "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable" {
import {$Spell} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$List, $List$$Type} from "java.util.List"
import {$ConfiguredSpellSound, $ConfiguredSpellSound$$Type} from "com.hollingsworth.arsnouveau.api.sound.ConfiguredSpellSound"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"
import {$TimelineMap, $TimelineMap$$Type} from "com.hollingsworth.arsnouveau.api.particle.timelines.TimelineMap"

export class $Spell$Mutable {
 "color": $ParticleColor
 "particleTimeline": $TimelineMap
 "sound": $ConfiguredSpellSound
 "recipe": $List<($AbstractSpellPart)>
 "name": StringJS

constructor(arg0: $List$$Type<($AbstractSpellPart$$Type)>, arg1: StringJS, arg2: $ParticleColor$$Type, arg3: $ConfiguredSpellSound$$Type, arg4: $TimelineMap$$Type)
constructor(arg0: $List$$Type<($AbstractSpellPart$$Type)>, arg1: StringJS, arg2: $ParticleColor$$Type, arg3: $ConfiguredSpellSound$$Type)

public "add"(...arg0: ($AbstractSpellPart$$Type)[]): $Spell$Mutable
public "add"(arg0: integer, arg1: $AbstractSpellPart$$Type): $Spell$Mutable
public "add"(arg0: $AbstractSpellPart$$Type): $Spell$Mutable
public "immutable"(): $Spell
public "setRecipe"(arg0: $List$$Type<($AbstractSpellPart$$Type)>): $Spell$Mutable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spell$Mutable$$Type = ($Spell$Mutable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Spell$Mutable$$Original = $Spell$Mutable;}
declare module "com.hollingsworth.arsnouveau.api.spell.CastResolveType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CastResolveType {
static readonly "SUCCESS": $CastResolveType
 "id": StringJS
 "wasSuccess": boolean
static readonly "FAILURE": $CastResolveType
static readonly "SUCCESS_NO_EXPEND": $CastResolveType

constructor(arg0: StringJS, arg1: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CastResolveType$$Type = ($CastResolveType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CastResolveType$$Original = $CastResolveType;}
declare module "com.hollingsworth.arsnouveau.api.entity.ISummon" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EntityGetter} from "net.minecraft.world.level.EntityGetter"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$OwnableEntity$$Interface} from "net.minecraft.world.entity.OwnableEntity"

export interface $ISummon$$Interface extends $OwnableEntity$$Interface {
set "ticksLeft"(value: integer)
set "ownerID"(value: $UUID$$Type)
get "livingEntity"(): $LivingEntity
get "ownerAlt"(): $LivingEntity
get "ticksLeft"(): integer
get "owner"(): $LivingEntity
get "ownerUUID"(): $UUID
}

export class $ISummon implements $ISummon$$Interface {
 "setTicksLeft"(arg0: integer): void
 "setOwnerID"(arg0: $UUID$$Type): void
 "getLivingEntity"(): $LivingEntity
 "writeOwner"(arg0: $CompoundTag$$Type): void
 "readOwner"(arg0: $ServerLevel$$Type, arg1: $CompoundTag$$Type): $Entity
 "onSummonDeath"(arg0: $Level$$Type, arg1: $DamageSource$$Type, arg2: boolean): void
 "getOwnerAlt"(): $LivingEntity
 "getTicksLeft"(): integer
 "getOwner"(): $LivingEntity
 "level"(): $EntityGetter
 "getOwnerUUID"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISummon$$Type = ($ISummon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISummon$$Original = $ISummon;}
declare module "com.hollingsworth.arsnouveau.api.event.SpellModifierEvent" {
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"

export class $SpellModifierEvent extends $Event {
 "caster": $LivingEntity
 "spellPart": $AbstractSpellPart
 "rayTraceResult": $HitResult
 "world": $Level
 "spellContext": $SpellContext
 "builder": $SpellStats$Builder

constructor(arg0: $LivingEntity$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $SpellContext$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellModifierEvent$$Type = ($SpellModifierEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellModifierEvent$$Original = $SpellModifierEvent;}
declare module "com.hollingsworth.arsnouveau.api.event.FamiliarSummonEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $FamiliarSummonEvent extends $EntityEvent implements $ICancellableEvent$$Interface {
 "owner": $Entity

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
export type $FamiliarSummonEvent$$Type = ($FamiliarSummonEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FamiliarSummonEvent$$Original = $FamiliarSummonEvent;}
declare module "com.hollingsworth.arsnouveau.api.event.SpellCastEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level} from "net.minecraft.world.level.Level"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellCastEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
 "spell": $Spell
 "context": $SpellContext

constructor(arg0: $Spell$$Type, arg1: $SpellContext$$Type)

public "getWorld"(): $Level
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "world"(): $Level
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCastEvent$$Type = ($SpellCastEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCastEvent$$Original = $SpellCastEvent;}
declare module "com.hollingsworth.arsnouveau.api.spell.SpellSchool" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Component} from "net.minecraft.network.chat.Component"
import {$DocAssets$BlitInfo, $DocAssets$BlitInfo$$Type} from "com.hollingsworth.arsnouveau.api.documentation.DocAssets$BlitInfo"

export class $SpellSchool {
constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: $DocAssets$BlitInfo$$Type)

public "getId"(): StringJS
public "addSpellPart"(arg0: $AbstractSpellPart$$Type): boolean
public "getTexturePath"(): $ResourceLocation
public "getIcon"(): $DocAssets$BlitInfo
public "setSpellParts"(arg0: $Set$$Type<($AbstractSpellPart$$Type)>): void
public "setSubSchools"(arg0: $Set$$Type<($SpellSchool$$Type)>): void
public "getSpellParts"(): $Set<($AbstractSpellPart)>
public "getSubSchools"(): $Set<($SpellSchool)>
public "withSubSchool"(arg0: $SpellSchool$$Type): $SpellSchool
public "getTextComponent"(): $Component
public "isPartOfSchool"(arg0: $AbstractSpellPart$$Type): boolean
get "id"(): StringJS
get "texturePath"(): $ResourceLocation
get "icon"(): $DocAssets$BlitInfo
set "spellParts"(value: $Set$$Type<($AbstractSpellPart$$Type)>)
set "subSchools"(value: $Set$$Type<($SpellSchool$$Type)>)
get "spellParts"(): $Set<($AbstractSpellPart)>
get "subSchools"(): $Set<($SpellSchool)>
get "textComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSchool$$Type = ($SpellSchool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSchool$$Original = $SpellSchool;}
declare module "com.hollingsworth.arsnouveau.api.spell.AbstractEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SpellPartConfigUtil$ComboLimits} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$ComboLimits"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EntityHitResult$$Type} from "net.minecraft.world.phys.EntityHitResult"
import {$List} from "java.util.List"
import {$ModConfigSpec} from "net.neoforged.neoforge.common.ModConfigSpec"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ModConfigSpec$BooleanValue} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"
import {$SpellSchool} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$AbstractAugment, $AbstractAugment$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Set} from "java.util.Set"
import {$SpellPartConfigUtil$AugmentLimits} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentLimits"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpellPartConfigUtil$AugmentCosts} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentCosts"
import {$DocAssets$BlitInfo} from "com.hollingsworth.arsnouveau.api.documentation.DocAssets$BlitInfo"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"
import {$Glyph} from "com.hollingsworth.arsnouveau.common.items.Glyph"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractSpellPart} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$ISummon$$Type} from "com.hollingsworth.arsnouveau.api.entity.ISummon"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ModConfigSpec$DoubleValue} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $AbstractEffect extends $AbstractSpellPart {
 "DURATION_DOWN_TIME": $ModConfigSpec$IntValue
 "spellSchools": $List<($SpellSchool)>
 "invalidCombinations": $SpellPartConfigUtil$ComboLimits
 "EXTEND_TIME": $ModConfigSpec$IntValue
 "PER_SPELL_LIMIT": $ModConfigSpec$IntValue
 "glyphItem": $Glyph
 "CONFIG": $ModConfigSpec
 "GENERIC_DOUBLE": $ModConfigSpec$DoubleValue
 "COST": $ModConfigSpec$IntValue
 "RANDOMIZE_CHANCE": $ModConfigSpec$DoubleValue
 "augmentLimits": $SpellPartConfigUtil$AugmentLimits
 "augmentDescriptions": $Map<($AbstractAugment), ($Component)>
 "GLYPH_TIER": $ModConfigSpec$IntValue
static readonly "CODEC": $Codec<($AbstractSpellPart)>
 "compatibleAugments": $Set<($AbstractAugment)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractSpellPart)>
static readonly "STREAM_LIST": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($AbstractSpellPart)>)>
 "augmentCosts": $SpellPartConfigUtil$AugmentCosts
 "STARTER_SPELL": $ModConfigSpec$BooleanValue
 "POTION_TIME": $ModConfigSpec$IntValue
 "DAMAGE": $ModConfigSpec$DoubleValue
 "AMP_VALUE": $ModConfigSpec$DoubleValue
 "GENERIC_INT": $ModConfigSpec$IntValue
 "name": StringJS
 "ENABLED": $ModConfigSpec$BooleanValue

constructor(arg0: StringJS, arg1: StringJS)
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS)

public "getTypeName"(): $Component
public "addAugmentDescriptions"(arg0: $Map$$Type<($AbstractAugment$$Type), (StringJS)>): void
public "applySummoningSickness"(arg0: $LivingEntity$$Type, arg1: integer): void
public "getBaseHarvestLevel"(arg0: $SpellStats$$Type): integer
public "addExtendTimeConfig"(arg0: $ModConfigSpec$Builder$$Type, arg1: integer): void
public "addDurationDownConfig"(arg0: $ModConfigSpec$Builder$$Type, arg1: integer): void
public "canBlockBeHarvested"(arg0: $SpellStats$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "getPlayer"(arg0: $LivingEntity$$Type, arg1: $ServerLevel$$Type): $Player
public "addDefaultPotionConfig"(arg0: $ModConfigSpec$Builder$$Type): void
public "onResolve"(arg0: $HitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type, arg5: $SpellResolver$$Type): void
public "canSummon"(arg0: $LivingEntity$$Type): boolean
public "getTypeIndex"(): integer
public "buildConfig"(arg0: $ModConfigSpec$Builder$$Type): void
public "getTypeIcon"(): $DocAssets$BlitInfo
public "onResolveBlock"(arg0: $BlockHitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type, arg5: $SpellResolver$$Type): void
public "onResolveEntity"(arg0: $EntityHitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type, arg5: $SpellResolver$$Type): void
public "addGenericDouble"(arg0: $ModConfigSpec$Builder$$Type, arg1: double, arg2: StringJS, arg3: StringJS): void
public "addPotionConfig"(arg0: $ModConfigSpec$Builder$$Type, arg1: integer): void
public "safelyGetHitPos"(arg0: $HitResult$$Type): $Vec3
public "addDamageConfig"(arg0: $ModConfigSpec$Builder$$Type, arg1: double): void
public "isRealPlayer"(arg0: $Entity$$Type): boolean
public "addAmpConfig"(arg0: $ModConfigSpec$Builder$$Type, arg1: double): void
public "addRandomizeConfig"(arg0: $ModConfigSpec$Builder$$Type, arg1: float): void
public "isNotFakePlayer"(arg0: $Entity$$Type): boolean
public "addGenericInt"(arg0: $ModConfigSpec$Builder$$Type, arg1: integer, arg2: StringJS, arg3: StringJS): void
public "summonLivingEntity"(arg0: $HitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type, arg5: $SpellResolver$$Type, arg6: $ISummon$$Type): void
public "applyEnchantments"(arg0: $Level$$Type, arg1: $SpellStats$$Type, arg2: $ItemStack$$Type): void
get "typeName"(): $Component
get "typeIndex"(): integer
get "typeIcon"(): $DocAssets$BlitInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEffect$$Type = ($AbstractEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractEffect$$Original = $AbstractEffect;}
declare module "com.hollingsworth.arsnouveau.api.particle.configurations.IParticleMotionType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PropMap$$Type} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.PropMap"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component} from "net.minecraft.network.chat.Component"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ParticleMotion} from "com.hollingsworth.arsnouveau.api.particle.configurations.ParticleMotion"

export interface $IParticleMotionType$$Interface<T extends $ParticleMotion> {
get "name"(): $Component
get "iconLocation"(): $ResourceLocation
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ArsNouveauParticleConfigs
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ArsNouveauParticleConfigsTag
}

export class $IParticleMotionType<T extends $ParticleMotion> implements $IParticleMotionType$$Interface {
 "getName"(): $Component
 "create"(): T
 "create"(arg0: $PropMap$$Type): T
 "codec"(): $MapCodec<(T)>
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
 "getIconLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IParticleMotionType$$Type<T> = (Special.ArsNouveauParticleConfigs);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IParticleMotionType$$Original<T> = $IParticleMotionType<(T)>;}
declare module "com.hollingsworth.arsnouveau.api.event.SpellCostCalcEvent$Post" {
import {$SpellCostCalcEvent} from "com.hollingsworth.arsnouveau.api.event.SpellCostCalcEvent"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellCostCalcEvent$Post extends $SpellCostCalcEvent {
 "context": $SpellContext
 "currentCost": integer

constructor(arg0: $SpellContext$$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCostCalcEvent$Post$$Type = ($SpellCostCalcEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCostCalcEvent$Post$$Original = $SpellCostCalcEvent$Post;}
declare module "com.hollingsworth.arsnouveau.api.item.IRadialProvider" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IRadialProvider$$Interface {

(arg0: $ItemStack, arg1: $Player): void
}

export class $IRadialProvider implements $IRadialProvider$$Interface {
 "onRadialKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
 "forKey"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRadialProvider$$Type = ((arg0: $ItemStack, arg1: $Player) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRadialProvider$$Original = $IRadialProvider;}
declare module "com.hollingsworth.arsnouveau.api.event.DispelEvent$Pre" {
import {$SpellStats, $SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DispelEvent} from "com.hollingsworth.arsnouveau.api.event.DispelEvent"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $DispelEvent$Pre extends $DispelEvent implements $ICancellableEvent$$Interface {
 "rayTraceResult": $HitResult
 "world": $Level
 "context": $SpellContext
 "shooter": $LivingEntity
 "augments": $SpellStats

constructor(arg0: $HitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispelEvent$Pre$$Type = ($DispelEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispelEvent$Pre$$Original = $DispelEvent$Pre;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.InventoryManager" {
import {$Collection} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterableItemHandler, $FilterableItemHandler$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.FilterableItemHandler"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IWrappedCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.wrapped_caster.IWrappedCaster"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InventoryManager$FilterablePreference} from "com.hollingsworth.arsnouveau.api.item.inv.InventoryManager$FilterablePreference"
import {$SlotReference} from "com.hollingsworth.arsnouveau.api.item.inv.SlotReference"
import {$ExtractedStack} from "com.hollingsworth.arsnouveau.api.item.inv.ExtractedStack"
import {$InteractType$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.InteractType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MultiExtractedReference} from "com.hollingsworth.arsnouveau.api.item.inv.MultiExtractedReference"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MultiInsertReference} from "com.hollingsworth.arsnouveau.api.item.inv.MultiInsertReference"

export class $InventoryManager {
 "filterables": $List<($FilterableItemHandler)>

constructor(arg0: $IWrappedCaster$$Type)
constructor(arg0: $List$$Type<($FilterableItemHandler$$Type)>)
constructor()

public "insertStackWithReference"(arg0: $ItemStack$$Type): $MultiInsertReference
public "getInventory"(): $List<($FilterableItemHandler)>
public "insertOrDrop"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "extractSlotMax"(arg0: integer): $InventoryManager
public "extractRandomItem"(arg0: $Predicate$$Type<($ItemStack)>, arg1: integer): $ExtractedStack
public "extractRandomItem"(arg0: $FilterableItemHandler$$Type, arg1: $Predicate$$Type<($ItemStack)>, arg2: integer): $ExtractedStack
public "extractItem"(arg0: $Predicate$$Type<($ItemStack)>, arg1: integer): $ExtractedStack
public "extractItem"(arg0: $FilterableItemHandler$$Type, arg1: $Predicate$$Type<($ItemStack)>, arg2: integer): $ExtractedStack
public "insertStack"(arg0: $ItemStack$$Type): $ItemStack
public static "fromTile"(arg0: $BlockEntity$$Type): $InventoryManager
public "insertSlotMax"(arg0: integer): $InventoryManager
public "preferredForStack"(arg0: $ItemStack$$Type, arg1: boolean): $Collection<($InventoryManager$FilterablePreference)>
public "findItem"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $InteractType$$Type): $SlotReference
public "findItem"(arg0: $FilterableItemHandler$$Type, arg1: $Predicate$$Type<($ItemStack)>, arg2: $InteractType$$Type): $SlotReference
public "extractItemFromAll"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): $MultiExtractedReference
public "findItemR"(arg0: $FilterableItemHandler$$Type, arg1: $Predicate$$Type<($ItemStack)>, arg2: $InteractType$$Type): $SlotReference
public "highestPrefInventory"(arg0: $List$$Type<($FilterableItemHandler$$Type)>, arg1: $Predicate$$Type<($ItemStack)>, arg2: $InteractType$$Type): $FilterableItemHandler
public "extractAllFromHandler"(arg0: $FilterableItemHandler$$Type, arg1: $ItemStack$$Type, arg2: integer): $MultiExtractedReference
get "inventory"(): $List<($FilterableItemHandler)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryManager$$Type = ($InventoryManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryManager$$Original = $InventoryManager;}
declare module "com.hollingsworth.arsnouveau.api.source.ISourceCap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISourceCap$$Interface {
get "source"(): integer
set "maxSource"(value: integer)
get "sourceCapacity"(): integer
get "maxExtract"(): integer
get "maxSource"(): integer
get "maxReceive"(): integer
set "source"(value: integer)
}

export class $ISourceCap implements $ISourceCap$$Interface {
 "getSource"(): integer
 "setMaxSource"(arg0: integer): void
 "extractSource"(arg0: integer, arg1: boolean): integer
 "getSourceCapacity"(): integer
 "canProvideSource"(arg0: integer): boolean
 "getMaxExtract"(): integer
 "receiveSource"(arg0: integer, arg1: boolean): integer
 "getMaxSource"(): integer
 "getMaxReceive"(): integer
 "canAcceptSource"(arg0: integer): boolean
 "canReceive"(): boolean
 "canExtract"(): boolean
 "setSource"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISourceCap$$Type = ($ISourceCap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISourceCap$$Original = $ISourceCap;}
declare module "com.hollingsworth.arsnouveau.api.documentation.ReloadDocumentationEvent" {
import {$Event} from "net.neoforged.bus.api.Event"

export class $ReloadDocumentationEvent extends $Event {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadDocumentationEvent$$Type = ($ReloadDocumentationEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadDocumentationEvent$$Original = $ReloadDocumentationEvent;}
declare module "com.hollingsworth.arsnouveau.api.spell.wrapped_caster.IWrappedCaster" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$FilterableItemHandler} from "com.hollingsworth.arsnouveau.api.item.inv.FilterableItemHandler"
import {$SpellContext$CasterType} from "com.hollingsworth.arsnouveau.api.spell.SpellContext$CasterType"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Direction} from "net.minecraft.core.Direction"
import {$InventoryManager} from "com.hollingsworth.arsnouveau.api.item.inv.InventoryManager"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IWrappedCaster$$Interface {
get "inventory"(): $List<($FilterableItemHandler)>
get "facingDirection"(): $Direction
get "casterType"(): $SpellContext$CasterType
get "invManager"(): $InventoryManager
get "position"(): $Vec3
}

export class $IWrappedCaster implements $IWrappedCaster$$Interface {
 "getNearbyBlockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $BlockEntity
 "getInventory"(): $List<($FilterableItemHandler)>
 "getFacingDirection"(): $Direction
 "getCasterType"(): $SpellContext$CasterType
 "getInvManager"(): $InventoryManager
 "enoughMana"(arg0: integer): boolean
 "expendMana"(arg0: integer): void
 "getPosition"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrappedCaster$$Type = ($IWrappedCaster);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWrappedCaster$$Original = $IWrappedCaster;}
declare module "com.hollingsworth.arsnouveau.api.event.DelayedSpellEvent" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ParticleEmitter} from "com.hollingsworth.arsnouveau.api.particle.ParticleEmitter"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ITimedEvent$$Interface} from "com.hollingsworth.arsnouveau.api.event.ITimedEvent"
import {$ServerTickEvent$$Type} from "net.neoforged.neoforge.event.tick.ServerTickEvent"
import {$SpellResolver, $SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $DelayedSpellEvent implements $ITimedEvent$$Interface {
 "duration": integer
readonly "result": $HitResult
readonly "resolver": $SpellResolver
readonly "world": $Level
readonly "showParticles": boolean
 "emitter": $ParticleEmitter

constructor(arg0: integer, arg1: $HitResult$$Type, arg2: $Level$$Type, arg3: $SpellResolver$$Type)
constructor(arg0: integer, arg1: $HitResult$$Type, arg2: $Level$$Type, arg3: $SpellResolver$$Type, arg4: boolean)

public "tick"(arg0: boolean): void
public "isExpired"(): boolean
public "resolveSpell"(): void
public "getID"(): StringJS
public "tick"(arg0: $ServerTickEvent$$Type): void
public "serialize"(arg0: $CompoundTag$$Type): $CompoundTag
public "onPacketHandled"(): void
public "onServerStopping"(): void
get "expired"(): boolean
get "ID"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelayedSpellEvent$$Type = ($DelayedSpellEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DelayedSpellEvent$$Original = $DelayedSpellEvent;}
declare module "com.hollingsworth.arsnouveau.api.ritual.RitualContext" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RitualContext {
 "needsSourceToRun": boolean
 "consumedItems": $List<($ItemStack)>
 "progress": integer
 "isStarted": boolean
 "isDone": boolean

constructor()

public "write"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public static "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $RitualContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualContext$$Type = ($RitualContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualContext$$Original = $RitualContext;}
declare module "com.hollingsworth.arsnouveau.api.item.AbstractSummonCharm" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SummoningTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.SummoningTile"

export class $AbstractSummonCharm extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "useOnBlock"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $SummoningTile$$Type, arg3: $BlockPos$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSummonCharm$$Type = ($AbstractSummonCharm);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSummonCharm$$Original = $AbstractSummonCharm;}
declare module "com.hollingsworth.arsnouveau.api.sound.ConfiguredSpellSound" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SpellSound, $SpellSound$$Type} from "com.hollingsworth.arsnouveau.api.sound.SpellSound"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ConfiguredSpellSound implements $Cloneable$$Interface {
static readonly "CODEC": $MapCodec<($ConfiguredSpellSound)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($ConfiguredSpellSound)>
static "EMPTY": $ConfiguredSpellSound
static "DEFAULT": $ConfiguredSpellSound

constructor(arg0: $SpellSound$$Type)
constructor(arg0: $SpellSound$$Type, arg1: float, arg2: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): $ConfiguredSpellSound
public "playSound"(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double): void
public "playSound"(arg0: $Level$$Type, arg1: $Vec3$$Type): void
public "getPitch"(): float
public "getVolume"(): float
public "getSound"(): $SpellSound
get "pitch"(): float
get "volume"(): float
get "sound"(): $SpellSound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredSpellSound$$Type = ($ConfiguredSpellSound);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfiguredSpellSound$$Original = $ConfiguredSpellSound;}
declare module "com.hollingsworth.arsnouveau.api.particle.configurations.properties.IPropertyType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BaseProperty} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.BaseProperty"

export interface $IPropertyType$$Interface<T extends $BaseProperty<(object)>> {
get "string"(): StringJS
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ArsNouveauParticleProperties
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ArsNouveauParticlePropertiesTag
}

export class $IPropertyType<T extends $BaseProperty<(object)>> implements $IPropertyType$$Interface {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IPropertyType<(never)>)>

 "getString"(): StringJS
 "codec"(): $MapCodec<(T)>
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
 "normalCodec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPropertyType$$Type<T> = (Special.ArsNouveauParticleProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPropertyType$$Original<T> = $IPropertyType<(T)>;}
declare module "com.hollingsworth.arsnouveau.api.documentation.ReloadDocumentationEvent$AddEntries" {
import {$ReloadDocumentationEvent} from "com.hollingsworth.arsnouveau.api.documentation.ReloadDocumentationEvent"

export class $ReloadDocumentationEvent$AddEntries extends $ReloadDocumentationEvent {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadDocumentationEvent$AddEntries$$Type = ($ReloadDocumentationEvent$AddEntries);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadDocumentationEvent$AddEntries$$Original = $ReloadDocumentationEvent$AddEntries;}
declare module "com.hollingsworth.arsnouveau.api.source.AbstractSourceMachine" {
import {$ModdedTile} from "com.hollingsworth.arsnouveau.common.block.tile.ModdedTile"
import {$ISourceTile$$Type, $ISourceTile$$Interface} from "com.hollingsworth.arsnouveau.api.source.ISourceTile"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IWololoable$$Interface} from "com.hollingsworth.arsnouveau.api.util.IWololoable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SourceStorage} from "com.hollingsworth.arsnouveau.common.capability.SourceStorage"
import {$ISourceCap$$Type} from "com.hollingsworth.arsnouveau.api.source.ISourceCap"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export class $AbstractSourceMachine extends $ModdedTile implements $ISourceTile$$Interface, $IWololoable$$Interface {
static "COLOR_TAG": StringJS
 "sourceStorage": $SourceStorage
static "SOURCE_TAG": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "setColor"(arg0: $ParticleColor$$Type): void
public "getSource"(): integer
public "canProvideSource"(): boolean
public "getMaxSource"(): integer
public "getSourceStorage"(): $SourceStorage
public "canAcceptSource"(): boolean
public "canAcceptSource"(arg0: integer): boolean
public "getColor"(): $ParticleColor
public "updateBlock"(): boolean
public "setSource"(arg0: integer): integer
public "getTransferRate"(): integer
/**
 * 
 * @deprecated
 */
public "getTransferRate"(arg0: $ISourceTile$$Type, arg1: $ISourceTile$$Type, arg2: integer): integer
/**
 * 
 * @deprecated
 */
public "getTransferRate"(arg0: $ISourceTile$$Type, arg1: $ISourceTile$$Type): integer
public "removeSource"(arg0: integer): integer
public "removeSource"(arg0: integer, arg1: boolean): integer
/**
 * 
 * @deprecated
 */
public "transferSource"(arg0: $ISourceTile$$Type, arg1: $ISourceTile$$Type, arg2: integer): integer
public "transferSource"(arg0: $ISourceTile$$Type, arg1: $ISourceTile$$Type): integer
public "transferSource"(arg0: $ISourceCap$$Type, arg1: $ISourceCap$$Type): integer
public "transferSource"(arg0: $ISourceCap$$Type, arg1: $ISourceCap$$Type, arg2: integer): integer
public "addSource"(arg0: integer, arg1: boolean): integer
public "addSource"(arg0: integer): integer
public "getUpdatePacket"(): $Packet
set "color"(value: $ParticleColor$$Type)
get "source"(): integer
get "maxSource"(): integer
get "color"(): $ParticleColor
set "source"(value: integer)
get "transferRate"(): integer
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSourceMachine$$Type = ($AbstractSourceMachine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSourceMachine$$Original = $AbstractSourceMachine;}
declare module "com.hollingsworth.arsnouveau.api.item.IWandable" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ColorPos, $ColorPos$$Type} from "com.hollingsworth.arsnouveau.client.particle.ColorPos"
import {$GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWandable$Result} from "com.hollingsworth.arsnouveau.api.item.IWandable$Result"

export interface $IWandable$$Interface {
}

export class $IWandable implements $IWandable$$Interface {
/**
 * 
 * @deprecated
 */
 "onWanded"(arg0: $Player$$Type): void
/**
 * 
 * @deprecated
 */
 "onFinishedConnectionFirst"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
 "onFinishedConnectionFirst"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
 "onFinishedConnectionFirst"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
 "onFinishedConnectionFirst"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
 "onFinishedConnectionLast"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
 "onFinishedConnectionLast"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
 "onFinishedConnectionLast"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
 "onFinishedConnectionLast"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
 "onClearConnections"(arg0: $Player$$Type): $IWandable$Result
 "onFirstConnection"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): $IWandable$Result
 "onLastConnection"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): $IWandable$Result
static "getStoredDimension"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type): $ResourceKey<($Level)>
 "getWandHighlight"(arg0: $List$$Type<($ColorPos$$Type)>): $List<($ColorPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWandable$$Type = ($IWandable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWandable$$Original = $IWandable;}
declare module "com.hollingsworth.arsnouveau.api.event.DispelEvent" {
import {$SpellStats, $SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $DispelEvent extends $Event {
 "rayTraceResult": $HitResult
 "world": $Level
 "context": $SpellContext
 "shooter": $LivingEntity
 "augments": $SpellStats

constructor(arg0: $HitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispelEvent$$Type = ($DispelEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispelEvent$$Original = $DispelEvent;}
declare module "com.hollingsworth.arsnouveau.api.event.SummonEvent$Death" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ISummon, $ISummon$$Type} from "com.hollingsworth.arsnouveau.api.entity.ISummon"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $SummonEvent$Death extends $Event {
 "summon": $ISummon
 "world": $Level
 "wasExpiration": boolean
 "source": $DamageSource

constructor(arg0: $Level$$Type, arg1: $ISummon$$Type, arg2: $DamageSource$$Type, arg3: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonEvent$Death$$Type = ($SummonEvent$Death);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonEvent$Death$$Original = $SummonEvent$Death;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.InteractType" {
import {$Enum} from "java.lang.Enum"

export class $InteractType extends $Enum<($InteractType)> {
static readonly "INSERT": $InteractType
static readonly "EXTRACT": $InteractType

public static "values"(): ($InteractType)[]
public static "valueOf"(arg0: StringJS): $InteractType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InteractType$$Type = (("extract") | ("insert"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InteractType$$Original = $InteractType;}
declare module "com.hollingsworth.arsnouveau.api.registry.AlakarkinosConversionRegistry$LootDrop" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$AlakarkinosRecipe$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.AlakarkinosRecipe"
import {$AlakarkinosConversionRegistry$LootDrops} from "com.hollingsworth.arsnouveau.api.registry.AlakarkinosConversionRegistry$LootDrops"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Record} from "java.lang.Record"

export class $AlakarkinosConversionRegistry$LootDrop extends $Record {
static "CODEC": $Codec<($AlakarkinosConversionRegistry$LootDrop)>

constructor(item: $ItemStack$$Type, chance: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "item"(): $ItemStack
public "chance"(): float
public static "computeLootDrops"(arg0: $MinecraftServer$$Type, arg1: $AlakarkinosRecipe$$Type): $AlakarkinosConversionRegistry$LootDrops
/**
 * 
 * @deprecated
 */
public static "computeLootDrops"(arg0: $AlakarkinosRecipe$$Type): $AlakarkinosConversionRegistry$LootDrops
public static "getLootDrops"(arg0: $ResourceKey$$Type<($LootTable)>): $AlakarkinosConversionRegistry$LootDrops
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlakarkinosConversionRegistry$LootDrop$$Type = ({"chance"?: float, "item"?: $ItemStack$$Type}) | ([chance?: float, item?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlakarkinosConversionRegistry$LootDrop$$Original = $AlakarkinosConversionRegistry$LootDrop;}
declare module "com.hollingsworth.arsnouveau.api.particle.IParticleColor" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$ITagSerializable$$Interface} from "com.hollingsworth.arsnouveau.api.nbt.ITagSerializable"
import {$ParticleColor} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export interface $IParticleColor$$Interface extends $ITagSerializable$$Interface, $Cloneable$$Interface {
get "color"(): integer
get "red"(): float
get "blue"(): float
get "green"(): float
get "registryName"(): $ResourceLocation
get "blueInt"(): integer
get "redInt"(): integer
get "greenInt"(): integer
}

export class $IParticleColor implements $IParticleColor$$Interface {
 "transition"(arg0: integer): $ParticleColor
 "getColor"(): integer
 "getRed"(): float
 "getBlue"(): float
 "getGreen"(): float
 "getRegistryName"(): $ResourceLocation
 "getBlueInt"(): integer
 "nextColor"(arg0: integer): $ParticleColor
 "getRedInt"(): integer
 "getGreenInt"(): integer
 "serialize"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IParticleColor$$Type = ($IParticleColor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IParticleColor$$Original = $IParticleColor;}
declare module "com.hollingsworth.arsnouveau.api.particle.configurations.SimpleParticleMotionType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PropMap, $PropMap$$Type} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.PropMap"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$IParticleMotionType$$Interface} from "com.hollingsworth.arsnouveau.api.particle.configurations.IParticleMotionType"
import {$Component} from "net.minecraft.network.chat.Component"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleMotion} from "com.hollingsworth.arsnouveau.api.particle.configurations.ParticleMotion"
import {$Record} from "java.lang.Record"

export class $SimpleParticleMotionType<T extends $ParticleMotion> extends $Record implements $IParticleMotionType$$Interface<(T)> {
constructor(arg0: $MapCodec$$Type<(T)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, arg2: $Function$$Type<($PropMap), (T)>)
constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, createConfigured: $Supplier$$Type<(T)>, copy: $Function$$Type<($PropMap), (T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "copy"(): $Function<($PropMap), (T)>
public "create"(): T
public "create"(arg0: $PropMap$$Type): T
public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "createConfigured"(): $Supplier<(T)>
public "getName"(): $Component
public "getIconLocation"(): $ResourceLocation
get "name"(): $Component
get "iconLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleParticleMotionType$$Type<T> = ({"codec"?: $MapCodec$$Type<(T)>, "copy"?: $Function$$Type<($PropMap$$Type), (T)>, "createConfigured"?: $Supplier$$Type<(T)>, "streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>}) | ([codec?: $MapCodec$$Type<(T)>, copy?: $Function$$Type<($PropMap$$Type), (T)>, createConfigured?: $Supplier$$Type<(T)>, streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleParticleMotionType$$Original<T> = $SimpleParticleMotionType<(T)>;}
declare module "com.hollingsworth.arsnouveau.api.util.IWololoable" {
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export interface $IWololoable$$Interface {
set "color"(value: $ParticleColor$$Type)
get "color"(): $ParticleColor
}

export class $IWololoable implements $IWololoable$$Interface {
 "setColor"(arg0: $ParticleColor$$Type): void
 "getColor"(): $ParticleColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWololoable$$Type = ($IWololoable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWololoable$$Original = $IWololoable;}
declare module "com.hollingsworth.arsnouveau.api.event.SpellDamageEvent" {
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$Event} from "net.neoforged.bus.api.Event"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$SpellContext} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellDamageEvent extends $Event {
 "caster": $LivingEntity
 "damage": float
 "context": $SpellContext
 "damageSource": $DamageSource
 "target": $Entity

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
declare module "com.hollingsworth.arsnouveau.api.event.SpellDamageEvent$Pre" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellDamageEvent} from "com.hollingsworth.arsnouveau.api.event.SpellDamageEvent"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SpellDamageEvent$Pre extends $SpellDamageEvent implements $ICancellableEvent$$Interface {
 "caster": $LivingEntity
 "damage": float
 "context": $SpellContext
 "damageSource": $DamageSource
 "target": $Entity

constructor(arg0: $DamageSource$$Type, arg1: $LivingEntity$$Type, arg2: $Entity$$Type, arg3: float, arg4: $SpellContext$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellDamageEvent$Pre$$Type = ($SpellDamageEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellDamageEvent$Pre$$Original = $SpellDamageEvent$Pre;}
declare module "com.hollingsworth.arsnouveau.api.particle.configurations.properties.SoundProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PropMap} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.PropMap"
import {$ParticleConfigWidgetProvider} from "com.hollingsworth.arsnouveau.api.particle.configurations.ParticleConfigWidgetProvider"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IPropertyType} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.IPropertyType"
import {$Runnable} from "java.lang.Runnable"
import {$ConfiguredSpellSound, $ConfiguredSpellSound$$Type} from "com.hollingsworth.arsnouveau.api.sound.ConfiguredSpellSound"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BaseProperty} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.BaseProperty"

export class $SoundProperty extends $BaseProperty<($SoundProperty)> {
static "CODEC": $MapCodec<($SoundProperty)>
 "sound": $ConfiguredSpellSound
 "onDependenciesChanged": $Runnable
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SoundProperty)>
 "propertyHolder": $PropMap

constructor(arg0: $ConfiguredSpellSound$$Type)
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getType"(): $IPropertyType<($SoundProperty)>
public "buildWidgets"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $ParticleConfigWidgetProvider
get "type"(): $IPropertyType<($SoundProperty)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundProperty$$Type = ($SoundProperty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundProperty$$Original = $SoundProperty;}
declare module "com.hollingsworth.arsnouveau.api.nbt.ITagSerializable" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $ITagSerializable$$Interface {

(): $CompoundTag$$Type
}

export class $ITagSerializable implements $ITagSerializable$$Interface {
 "serialize"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITagSerializable$$Type = (() => $CompoundTag$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITagSerializable$$Original = $ITagSerializable;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.MultiSlotReference" {
import {$SlotReference, $SlotReference$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.SlotReference"
import {$List, $List$$Type} from "java.util.List"

export class $MultiSlotReference<SReference extends $SlotReference> {
constructor(...arg0: (SReference)[])
constructor(arg0: $List$$Type<(SReference)>)
constructor()

public "isEmpty"(): boolean
public "getSlots"(): $List<(SReference)>
get "empty"(): boolean
get "slots"(): $List<(SReference)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiSlotReference$$Type<SReference> = ($MultiSlotReference<(SReference)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiSlotReference$$Original<SReference> = $MultiSlotReference<(SReference)>;}
declare module "com.hollingsworth.arsnouveau.api.spell.SpellContext$CasterType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SpellContext$CasterType {
static readonly "OTHER": $SpellContext$CasterType
static readonly "PLAYER": $SpellContext$CasterType
static readonly "ENTITY": $SpellContext$CasterType
static readonly "LIVING_ENTITY": $SpellContext$CasterType
static readonly "TURRET": $SpellContext$CasterType
 "id": StringJS
static readonly "RUNE": $SpellContext$CasterType

constructor(arg0: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellContext$CasterType$$Type = ($SpellContext$CasterType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellContext$CasterType$$Original = $SpellContext$CasterType;}
declare module "com.hollingsworth.arsnouveau.api.particle.configurations.properties.ColorProperty" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PropMap} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.PropMap"
import {$ParticleConfigWidgetProvider} from "com.hollingsworth.arsnouveau.api.particle.configurations.ParticleConfigWidgetProvider"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IPropertyType} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.IPropertyType"
import {$Runnable} from "java.lang.Runnable"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BaseProperty} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.BaseProperty"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export class $ColorProperty extends $BaseProperty<($ColorProperty)> {
static "CODEC": $MapCodec<($ColorProperty)>
 "particleColor": $ParticleColor
 "onDependenciesChanged": $Runnable
 "isLegacyRGB": boolean
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ColorProperty)>
 "propertyHolder": $PropMap

constructor(arg0: $ParticleColor$$Type, arg1: boolean)
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getType"(): $IPropertyType<($ColorProperty)>
public "color"(): $ParticleColor
public "isTintDisabled"(): boolean
public "buildWidgets"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $ParticleConfigWidgetProvider
get "type"(): $IPropertyType<($ColorProperty)>
get "tintDisabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorProperty$$Type = ($ColorProperty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorProperty$$Original = $ColorProperty;}
declare module "com.hollingsworth.arsnouveau.api.sound.SpellSound" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $SpellSound {
static "CODEC": $MapCodec<($SpellSound)>
static "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($SpellSound)>

constructor(arg0: $Holder$$Type<($SoundEvent)>, arg1: $Component$$Type, arg2: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getId"(): $ResourceLocation
public "sortNum"(): integer
public "getSoundEvent"(): $Holder<($SoundEvent)>
public "getTexturePath"(): $ResourceLocation
public "withSortNum"(arg0: integer): $SpellSound
public "getSoundName"(): $Component
get "id"(): $ResourceLocation
get "soundEvent"(): $Holder<($SoundEvent)>
get "texturePath"(): $ResourceLocation
get "soundName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSound$$Type = ($SpellSound);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSound$$Original = $SpellSound;}
declare module "com.hollingsworth.arsnouveau.api.mana.IManaDiscountEquipment" {
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IManaDiscountEquipment$$Interface {
}

export class $IManaDiscountEquipment implements $IManaDiscountEquipment$$Interface {
 "getManaDiscount"(arg0: $ItemStack$$Type): integer
 "getManaDiscount"(arg0: $ItemStack$$Type, arg1: $Spell$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManaDiscountEquipment$$Type = ($IManaDiscountEquipment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IManaDiscountEquipment$$Original = $IManaDiscountEquipment;}
declare module "com.hollingsworth.arsnouveau.api.particle.PropertyParticleType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PropertyParticleOptions} from "com.hollingsworth.arsnouveau.api.particle.PropertyParticleOptions"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PropertyParticleType extends $ParticleType<($PropertyParticleOptions)> {
constructor()

public "codec"(): $MapCodec<($PropertyParticleOptions)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($PropertyParticleOptions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyParticleType$$Type = ($PropertyParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PropertyParticleType$$Original = $PropertyParticleType;}
declare module "com.hollingsworth.arsnouveau.api.event.SpellCostCalcEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellCostCalcEvent extends $Event {
 "context": $SpellContext
 "currentCost": integer

/**
 * 
 * @deprecated
 */
constructor(arg0: $SpellContext$$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCostCalcEvent$$Type = ($SpellCostCalcEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCostCalcEvent$$Original = $SpellCostCalcEvent;}
declare module "com.hollingsworth.arsnouveau.api.client.ITooltipProvider" {
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

/**
 * 
 * @deprecated
 */
export interface $ITooltipProvider$$Interface {

(arg0: $List<($Component)>): void
}

export class $ITooltipProvider implements $ITooltipProvider$$Interface {
 "getTooltip"(arg0: $List$$Type<($Component$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipProvider$$Type = ((arg0: $List<($Component)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITooltipProvider$$Original = $ITooltipProvider;}
declare module "com.hollingsworth.arsnouveau.api.spell.SpellContext" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SpellContext$CasterType} from "com.hollingsworth.arsnouveau.api.spell.SpellContext$CasterType"
import {$Map} from "java.util.Map"
import {$AbstractSpellPart} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$IWrappedCaster, $IWrappedCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.wrapped_caster.IWrappedCaster"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IParticleTimeline} from "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimeline"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"
import {$CancelReason, $CancelReason$$Type} from "com.hollingsworth.arsnouveau.api.spell.CancelReason"
import {$IParticleTimelineType$$Type} from "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimelineType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IContextAttachment, $IContextAttachment$$Type} from "com.hollingsworth.arsnouveau.api.spell.IContextAttachment"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DelayedSpellEvent, $DelayedSpellEvent$$Type} from "com.hollingsworth.arsnouveau.api.event.DelayedSpellEvent"

export class $SpellContext implements $Cloneable$$Interface {
 "castingTile": $BlockEntity
 "attachments": $Map<($ResourceLocation), ($IContextAttachment)>
static readonly "CODEC": $MapCodec<($SpellContext)>
 "level": $Level
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($SpellContext)>
 "tag": $CompoundTag

constructor(arg0: $Level$$Type, arg1: $Spell$$Type, arg2: $LivingEntity$$Type, arg3: $IWrappedCaster$$Type, arg4: $ItemStack$$Type)
constructor(arg0: $Level$$Type, arg1: $Spell$$Type, arg2: $LivingEntity$$Type, arg3: $IWrappedCaster$$Type)

public "clone"(): any
public "stop"(): void
public "delay"(arg0: $DelayedSpellEvent$$Type): void
/**
 * 
 * @deprecated
 */
public "getType"(): $SpellContext$CasterType
public "setCanceled"(arg0: boolean): void
public "setCanceled"(arg0: boolean, arg1: $CancelReason$$Type): boolean
public "getParticleTimeline"<T extends $IParticleTimeline<(object)>>(arg0: $IParticleTimelineType$$Type<(T)>): T
public "getSpell"(): $Spell
public "getCurrentIndex"(): integer
public "getCancelReason"(): $CancelReason
public "getRemainingSpell"(): $Spell
public "setCurrentIndex"(arg0: integer): void
public "getUnwrappedCaster"(): $LivingEntity
public "getCaster"(): $IWrappedCaster
public static "fromEntity"(arg0: $Spell$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): $SpellContext
public "isDelayed"(): boolean
public "withColors"(arg0: $ParticleColor$$Type): $SpellContext
public "withParent"(arg0: $SpellContext$$Type): $SpellContext
public "makeChildContext"(): $SpellContext
public "withWrappedCaster"(arg0: $IWrappedCaster$$Type): $SpellContext
public "getAttachment"<T extends $IContextAttachment>(arg0: $ResourceLocation$$Type): T
public "getPreviousContext"(): $SpellContext
public "setCasterTool"(arg0: $ItemStack$$Type): void
public "withSpell"(arg0: $Spell$$Type): $SpellContext
/**
 * 
 * @deprecated
 */
public "getColors"(): $ParticleColor
public "isCanceled"(): boolean
public "rehydrate"(arg0: $ServerLevel$$Type): void
/**
 * 
 * @deprecated
 */
public "setColors"(arg0: $ParticleColor$$Type): void
public "getDelayedSpellEvent"(): $DelayedSpellEvent
public "getOrCreateAttachment"<T extends $IContextAttachment>(arg0: $ResourceLocation$$Type, arg1: T): T
public "nextPart"(): $AbstractSpellPart
public "resetCastCounter"(): $SpellContext
public "hasNextPart"(): boolean
public "getCasterTool"(): $ItemStack
public static "dehydrated"(arg0: $Spell$$Type): $SpellContext
public "setCaster"(arg0: $LivingEntity$$Type): void
get "type"(): $SpellContext$CasterType
set "canceled"(value: boolean)
get "spell"(): $Spell
get "currentIndex"(): integer
get "cancelReason"(): $CancelReason
get "remainingSpell"(): $Spell
set "currentIndex"(value: integer)
get "unwrappedCaster"(): $LivingEntity
get "caster"(): $IWrappedCaster
get "delayed"(): boolean
get "previousContext"(): $SpellContext
set "casterTool"(value: $ItemStack$$Type)
get "colors"(): $ParticleColor
get "canceled"(): boolean
set "colors"(value: $ParticleColor$$Type)
get "delayedSpellEvent"(): $DelayedSpellEvent
get "casterTool"(): $ItemStack
set "caster"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellContext$$Type = ($SpellContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellContext$$Original = $SpellContext;}
declare module "com.hollingsworth.arsnouveau.api.item.ISpellHotkeyListener" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $ISpellHotkeyListener$$Interface {
}

export class $ISpellHotkeyListener implements $ISpellHotkeyListener$$Interface {
 "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
 "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
 "canQuickCast"(): boolean
 "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
 "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellHotkeyListener$$Type = ($ISpellHotkeyListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpellHotkeyListener$$Original = $ISpellHotkeyListener;}
declare module "com.hollingsworth.arsnouveau.api.particle.configurations.ParticleMotion$SpawnType" {
import {$Enum} from "java.lang.Enum"

export class $ParticleMotion$SpawnType extends $Enum<($ParticleMotion$SpawnType)> {
static readonly "SPHERE": $ParticleMotion$SpawnType
static readonly "CUBE": $ParticleMotion$SpawnType

public static "values"(): ($ParticleMotion$SpawnType)[]
public static "valueOf"(arg0: StringJS): $ParticleMotion$SpawnType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleMotion$SpawnType$$Type = (("sphere") | ("cube"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleMotion$SpawnType$$Original = $ParticleMotion$SpawnType;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.FilterSet" {
import {$ItemScroll$SortPref} from "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $FilterSet {
constructor()

public static "forPosition"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $FilterSet
public "getHighestPreference"(arg0: $ItemStack$$Type): $ItemScroll$SortPref
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterSet$$Type = ($FilterSet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterSet$$Original = $FilterSet;}
declare module "com.hollingsworth.arsnouveau.api.spell.AbstractAugment" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SpellPartConfigUtil$ComboLimits} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$ComboLimits"
import {$List} from "java.util.List"
import {$ModConfigSpec} from "net.neoforged.neoforge.common.ModConfigSpec"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ModConfigSpec$BooleanValue} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"
import {$SpellSchool} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ISpellModifier$$Interface} from "com.hollingsworth.arsnouveau.api.item.ISpellModifier"
import {$Set} from "java.util.Set"
import {$SpellPartConfigUtil$AugmentLimits} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentLimits"
import {$SpellPartConfigUtil$AugmentCosts} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentCosts"
import {$DocAssets$BlitInfo} from "com.hollingsworth.arsnouveau.api.documentation.DocAssets$BlitInfo"
import {$Glyph} from "com.hollingsworth.arsnouveau.common.items.Glyph"
import {$Map} from "java.util.Map"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"

export class $AbstractAugment extends $AbstractSpellPart implements $ISpellModifier$$Interface {
 "spellSchools": $List<($SpellSchool)>
static readonly "CODEC": $Codec<($AbstractSpellPart)>
 "compatibleAugments": $Set<($AbstractAugment)>
 "invalidCombinations": $SpellPartConfigUtil$ComboLimits
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractSpellPart)>
static readonly "STREAM_LIST": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($AbstractSpellPart)>)>
 "PER_SPELL_LIMIT": $ModConfigSpec$IntValue
 "augmentCosts": $SpellPartConfigUtil$AugmentCosts
 "glyphItem": $Glyph
 "STARTER_SPELL": $ModConfigSpec$BooleanValue
 "CONFIG": $ModConfigSpec
 "COST": $ModConfigSpec$IntValue
 "augmentLimits": $SpellPartConfigUtil$AugmentLimits
 "name": StringJS
 "augmentDescriptions": $Map<($AbstractAugment), ($Component)>
 "ENABLED": $ModConfigSpec$BooleanValue
 "GLYPH_TIER": $ModConfigSpec$IntValue

constructor(arg0: StringJS, arg1: StringJS)
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS)

public "getTypeName"(): $Component
public "getCompatibleAugments"(): $Set<($AbstractAugment)>
public "getTypeIndex"(): integer
public "getTypeIcon"(): $DocAssets$BlitInfo
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
/**
 * 
 * @deprecated
 */
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type): $SpellStats$Builder
public "getCostForPart"(arg0: $AbstractSpellPart$$Type): integer
get "typeName"(): $Component
get "typeIndex"(): integer
get "typeIcon"(): $DocAssets$BlitInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAugment$$Type = ($AbstractAugment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractAugment$$Original = $AbstractAugment;}
declare module "com.hollingsworth.arsnouveau.api.registry.AlakarkinosConversionRegistry$LootDrops" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$AlakarkinosConversionRegistry$LootDrop, $AlakarkinosConversionRegistry$LootDrop$$Type} from "com.hollingsworth.arsnouveau.api.registry.AlakarkinosConversionRegistry$LootDrop"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $AlakarkinosConversionRegistry$LootDrops extends $Record {
static "CODEC": $Codec<($AlakarkinosConversionRegistry$LootDrops)>

constructor(list: $List$$Type<($AlakarkinosConversionRegistry$LootDrop$$Type)>, weight: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "list"(): $List<($AlakarkinosConversionRegistry$LootDrop)>
public "weight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlakarkinosConversionRegistry$LootDrops$$Type = ({"list"?: $List$$Type<($AlakarkinosConversionRegistry$LootDrop$$Type)>, "weight"?: integer}) | ([list?: $List$$Type<($AlakarkinosConversionRegistry$LootDrop$$Type)>, weight?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlakarkinosConversionRegistry$LootDrops$$Original = $AlakarkinosConversionRegistry$LootDrops;}
declare module "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimeline" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IParticleTimelineType, $IParticleTimelineType$$Type} from "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimelineType"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$BaseProperty} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.BaseProperty"

export interface $IParticleTimeline$$Interface<T extends $IParticleTimeline<(object)>> {

(): $IParticleTimelineType$$Type<(T)>
get "properties"(): $List<($BaseProperty<(never)>)>
get "type"(): $IParticleTimelineType<(T)>
}

export class $IParticleTimeline<T extends $IParticleTimeline<(object)>> implements $IParticleTimeline$$Interface {
static readonly "CODEC": $Codec<($IParticleTimeline<(never)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IParticleTimeline<(never)>)>

 "getProperties"(): $List<($BaseProperty<(never)>)>
 "getType"(): $IParticleTimelineType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IParticleTimeline$$Type<T> = (() => $IParticleTimelineType$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IParticleTimeline$$Original<T> = $IParticleTimeline<(T)>;}
declare module "com.hollingsworth.arsnouveau.api.item.ISpellModifier" {
import {$AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"

export interface $ISpellModifier$$Interface {
}

export class $ISpellModifier implements $ISpellModifier$$Interface {
 "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellModifier$$Type = ($ISpellModifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpellModifier$$Original = $ISpellModifier;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.FilterableItemHandler" {
import {$ItemScroll$SortPref, $ItemScroll$SortPref$$Type} from "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SlotCache$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.SlotCache"
import {$Function$$Type} from "java.util.function.Function"
import {$List$$Type} from "java.util.List"
import {$InteractResult} from "com.hollingsworth.arsnouveau.api.item.inv.InteractResult"
import {$FilterSet, $FilterSet$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.FilterSet"
import {$InteractType$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.InteractType"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $FilterableItemHandler {
 "filters": $FilterSet

constructor(arg0: $IItemHandler$$Type, arg1: $FilterSet$$Type)
constructor(arg0: $IItemHandler$$Type, arg1: $List$$Type<($Function$$Type<($ItemStack$$Type), ($ItemScroll$SortPref$$Type)>)>)
constructor(arg0: $IItemHandler$$Type)

public "getHandler"(): $IItemHandler
public "canInsert"(arg0: $ItemStack$$Type): $InteractResult
public "insertItemStacked"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "canInteractFor"(arg0: $ItemStack$$Type, arg1: $InteractType$$Type): $InteractResult
public "canExtract"(arg0: $ItemStack$$Type): $InteractResult
public "withSlotCache"(arg0: $SlotCache$$Type): $FilterableItemHandler
public "getHighestPreference"(arg0: $ItemStack$$Type): $ItemScroll$SortPref
get "handler"(): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterableItemHandler$$Type = ($FilterableItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterableItemHandler$$Original = $FilterableItemHandler;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.SlotReference" {
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $SlotReference {
constructor(arg0: $IItemHandler$$Type, arg1: integer)

public "isEmpty"(): boolean
public static "empty"(): $SlotReference
public "getSlot"(): integer
public "getHandler"(): $IItemHandler
get "slot"(): integer
get "handler"(): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotReference$$Type = ($SlotReference);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotReference$$Original = $SlotReference;}
declare module "com.hollingsworth.arsnouveau.api.spell.SpellResolver" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Spell} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$AbstractCastMethod} from "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SpellCastEvent} from "com.hollingsworth.arsnouveau.api.event.SpellCastEvent"

export class $SpellResolver implements $Cloneable$$Interface {
 "castType": $AbstractCastMethod
 "spell": $Spell
 "silent": boolean
static readonly "CODEC": $MapCodec<($SpellResolver)>
 "spellContext": $SpellContext
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($SpellResolver)>
 "hitResult": $HitResult
 "previousResolver": $SpellResolver

constructor(arg0: $SpellContext$$Type)

public "clone"(): $SpellResolver
public "resume"(arg0: $Level$$Type): void
public "postEvent"(): $SpellCastEvent
public "onCast"(arg0: $ItemStack$$Type, arg1: $Level$$Type): boolean
public "getNewResolver"(arg0: $SpellContext$$Type): $SpellResolver
public "canCast"(arg0: $LivingEntity$$Type): boolean
public "withSilent"(arg0: boolean): $SpellResolver
public "hasFocus"(arg0: $Item$$Type): boolean
public "hasFocus"(arg0: $ItemStack$$Type): boolean
public "onCastOnBlock"(arg0: $UseOnContext$$Type): boolean
public "onCastOnBlock"(arg0: $BlockHitResult$$Type): boolean
public "onResolveEffect"(arg0: $Level$$Type, arg1: $HitResult$$Type): void
public "onCastOnEntity"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $InteractionHand$$Type): boolean
public "expendMana"(): void
public "getExpendedCost"(): integer
public static "rehydratedFromTag"(arg0: $CompoundTag$$Type, arg1: $ServerLevel$$Type): $SpellResolver
public "getCastStats"(): $SpellStats
public "getResolveCost"(): integer
get "expendedCost"(): integer
get "castStats"(): $SpellStats
get "resolveCost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellResolver$$Type = ($SpellResolver);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellResolver$$Original = $SpellResolver;}
declare module "com.hollingsworth.arsnouveau.api.event.SpellResolveEvent" {
import {$Spell} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level} from "net.minecraft.world.level.Level"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$HitResult} from "net.minecraft.world.phys.HitResult"
import {$SpellContext} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SpellResolver} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $SpellResolveEvent extends $Event {
 "rayTraceResult": $HitResult
 "spell": $Spell
 "resolver": $SpellResolver
 "world": $Level
 "context": $SpellContext
 "shooter": $LivingEntity

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellResolveEvent$$Type = ($SpellResolveEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellResolveEvent$$Original = $SpellResolveEvent;}
declare module "com.hollingsworth.arsnouveau.api.event.PlayerPostLogOutEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $PlayerPostLogOutEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerPostLogOutEvent$$Type = ($PlayerPostLogOutEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerPostLogOutEvent$$Original = $PlayerPostLogOutEvent;}
declare module "com.hollingsworth.arsnouveau.api.spell.SpellTier" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ConcurrentHashMap} from "java.util.concurrent.ConcurrentHashMap"
import {$DocAssets$BlitInfo, $DocAssets$BlitInfo$$Type} from "com.hollingsworth.arsnouveau.api.documentation.DocAssets$BlitInfo"

export class $SpellTier {
static "ONE": $SpellTier
static "CREATIVE": $SpellTier
 "docInfo": $Supplier<($DocAssets$BlitInfo)>
 "id": $ResourceLocation
static readonly "SPELL_TIER_MAP": $ConcurrentHashMap<(integer), ($SpellTier)>
static "TWO": $SpellTier
 "value": integer
static "THREE": $SpellTier

public static "createTier"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: $Supplier$$Type<($DocAssets$BlitInfo$$Type)>): $SpellTier
/**
 * 
 * @deprecated
 */
public static "createTier"(arg0: $ResourceLocation$$Type, arg1: integer): $SpellTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellTier$$Type = ($SpellTier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellTier$$Original = $SpellTier;}
declare module "com.hollingsworth.arsnouveau.api.event.EffectResolveEvent$Post" {
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$SpellStats, $SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractEffect, $AbstractEffect$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractEffect"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$EffectResolveEvent} from "com.hollingsworth.arsnouveau.api.event.EffectResolveEvent"
import {$SpellResolver, $SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $EffectResolveEvent$Post extends $EffectResolveEvent {
 "rayTraceResult": $HitResult
 "spell": $Spell
 "resolver": $SpellResolver
 "world": $Level
 "resolveEffect": $AbstractEffect
 "context": $SpellContext
 "shooter": $LivingEntity
 "spellStats": $SpellStats

constructor(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $HitResult$$Type, arg3: $Spell$$Type, arg4: $SpellContext$$Type, arg5: $AbstractEffect$$Type, arg6: $SpellStats$$Type, arg7: $SpellResolver$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectResolveEvent$Post$$Type = ($EffectResolveEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectResolveEvent$Post$$Original = $EffectResolveEvent$Post;}
declare module "com.hollingsworth.arsnouveau.api.event.SummonEvent" {
import {$SpellStats, $SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$ISummon, $ISummon$$Type} from "com.hollingsworth.arsnouveau.api.entity.ISummon"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SummonEvent extends $Event {
 "summon": $ISummon
 "rayTraceResult": $HitResult
 "world": $Level
 "stats": $SpellStats
 "context": $SpellContext
 "shooter": $LivingEntity

constructor(arg0: $HitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type, arg5: $ISummon$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonEvent$$Type = ($SummonEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonEvent$$Original = $SummonEvent;}
declare module "com.hollingsworth.arsnouveau.api.spell.ILightable" {
import {$SpellStats, $SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export interface $ILightable$$Interface {

(arg0: $HitResult, arg1: $Level, arg2: $LivingEntity, arg3: $SpellStats, arg4: $SpellContext): void
}

export class $ILightable implements $ILightable$$Interface {
 "onLight"(arg0: $HitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILightable$$Type = ((arg0: $HitResult, arg1: $Level, arg2: $LivingEntity, arg3: $SpellStats, arg4: $SpellContext) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILightable$$Original = $ILightable;}
declare module "com.hollingsworth.arsnouveau.api.client.IDisplayMana" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IDisplayMana$$Interface {
}

export class $IDisplayMana implements $IDisplayMana$$Interface {
 "shouldDisplay"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDisplayMana$$Type = ($IDisplayMana);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDisplayMana$$Original = $IDisplayMana;}
declare module "com.hollingsworth.arsnouveau.api.item.ArsNouveauCurio" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID$$Type} from "java.util.UUID"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICurioItem$$Interface} from "top.theillusivec4.curios.api.type.capability.ICurioItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ICurio$SoundInfo} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"

export class $ArsNouveauCurio extends $ModItem implements $ICurioItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()
constructor(arg0: $Item$Properties$$Type)

public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
public "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
public "getEquipSound"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ICurio$SoundInfo
public "canEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
public "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "canUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "curioBreak"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "canSync"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$$Type): $ICurio$DropRule
public "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): $ICurio$DropRule
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "hasCurioCapability"(arg0: $ItemStack$$Type): boolean
public "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
public "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type, arg2: $ItemStack$$Type): void
public "writeSyncData"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $CompoundTag
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArsNouveauCurio$$Type = ($ArsNouveauCurio);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArsNouveauCurio$$Original = $ArsNouveauCurio;}
declare module "com.hollingsworth.arsnouveau.api.event.SpellDamageEvent$Post" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellDamageEvent} from "com.hollingsworth.arsnouveau.api.event.SpellDamageEvent"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SpellDamageEvent$Post extends $SpellDamageEvent {
 "caster": $LivingEntity
 "damage": float
 "context": $SpellContext
 "damageSource": $DamageSource
 "target": $Entity

constructor(arg0: $DamageSource$$Type, arg1: $LivingEntity$$Type, arg2: $Entity$$Type, arg3: float, arg4: $SpellContext$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellDamageEvent$Post$$Type = ($SpellDamageEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellDamageEvent$Post$$Original = $SpellDamageEvent$Post;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.MultiInsertReference" {
import {$MultiSlotReference} from "com.hollingsworth.arsnouveau.api.item.inv.MultiSlotReference"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SlotReference, $SlotReference$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.SlotReference"
import {$List$$Type} from "java.util.List"

export class $MultiInsertReference extends $MultiSlotReference<($SlotReference)> {
constructor(arg0: $ItemStack$$Type, arg1: $List$$Type<($SlotReference$$Type)>)

public "getRemainder"(): $ItemStack
get "remainder"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiInsertReference$$Type = ($MultiInsertReference);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiInsertReference$$Original = $MultiInsertReference;}
declare module "com.hollingsworth.arsnouveau.api.event.SpellProjectileHitEvent" {
import {$EntityEvent} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"

export class $SpellProjectileHitEvent extends $EntityEvent implements $ICancellableEvent$$Interface {
 "hit": $HitResult
 "projectile": $EntityProjectileSpell

constructor(arg0: $EntityProjectileSpell$$Type, arg1: $HitResult$$Type)

public "getProjectile"(): $EntityProjectileSpell
public "getHitResult"(): $HitResult
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "hitResult"(): $HitResult
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellProjectileHitEvent$$Type = ($SpellProjectileHitEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellProjectileHitEvent$$Original = $SpellProjectileHitEvent;}
declare module "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SpellPartConfigUtil$ComboLimits} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$ComboLimits"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$List} from "java.util.List"
import {$TimelineEntryData$$Type} from "com.hollingsworth.arsnouveau.api.particle.timelines.TimelineEntryData"
import {$ModConfigSpec} from "net.neoforged.neoforge.common.ModConfigSpec"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ModConfigSpec$BooleanValue} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"
import {$SpellSchool} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$AbstractAugment, $AbstractAugment$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Set} from "java.util.Set"
import {$SpellPartConfigUtil$AugmentLimits} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentLimits"
import {$SpellPartConfigUtil$AugmentCosts} from "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentCosts"
import {$DocAssets$BlitInfo} from "com.hollingsworth.arsnouveau.api.documentation.DocAssets$BlitInfo"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"
import {$Glyph} from "com.hollingsworth.arsnouveau.common.items.Glyph"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ParticleEmitter} from "com.hollingsworth.arsnouveau.api.particle.ParticleEmitter"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SpellTier} from "com.hollingsworth.arsnouveau.api.spell.SpellTier"
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"

export class $AbstractSpellPart implements $Comparable$$Interface<($AbstractSpellPart)> {
 "spellSchools": $List<($SpellSchool)>
static readonly "CODEC": $Codec<($AbstractSpellPart)>
 "compatibleAugments": $Set<($AbstractAugment)>
 "invalidCombinations": $SpellPartConfigUtil$ComboLimits
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($AbstractSpellPart)>
static readonly "STREAM_LIST": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($AbstractSpellPart)>)>
 "PER_SPELL_LIMIT": $ModConfigSpec$IntValue
 "augmentCosts": $SpellPartConfigUtil$AugmentCosts
 "glyphItem": $Glyph
 "STARTER_SPELL": $ModConfigSpec$BooleanValue
 "CONFIG": $ModConfigSpec
 "COST": $ModConfigSpec$IntValue
 "augmentLimits": $SpellPartConfigUtil$AugmentLimits
 "name": StringJS
 "augmentDescriptions": $Map<($AbstractAugment), ($Component)>
 "ENABLED": $ModConfigSpec$BooleanValue
 "GLYPH_TIER": $ModConfigSpec$IntValue

constructor(arg0: StringJS, arg1: StringJS)
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS)

public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $AbstractSpellPart$$Type): integer
public "compareTo"(arg0: any): integer
public "isEnabled"(): boolean
public "getTypeName"(): $Component
public "getLocaleName"(): StringJS
public "createStaticEmitter"(arg0: $TimelineEntryData$$Type, arg1: $Vec3$$Type): $ParticleEmitter
public "addAugmentDescriptions"(arg0: $Map$$Type<($AbstractAugment$$Type), (StringJS)>): void
public "defaultedStarterGlyph"(): boolean
public "shouldShowInSpellBook"(): boolean
public "getGlyph"(): $Glyph
public "getTypeIndex"(): integer
public "getLocalizationKey"(): StringJS
public "onContextCanceled"(arg0: $SpellContext$$Type): void
public "getAugmentLimit"(arg0: $ResourceLocation$$Type): integer
public "getCastingCost"(): integer
public "defaultTier"(): $SpellTier
public "buildConfig"(arg0: $ModConfigSpec$Builder$$Type): void
public "getTypeIcon"(): $DocAssets$BlitInfo
public "shouldShowInUnlock"(): boolean
public "getBookDescription"(): StringJS
public "contextCanceled"(arg0: $SpellContext$$Type): boolean
public "getConfigTier"(): $SpellTier
public "getAugmentLangKey"(arg0: $AbstractAugment$$Type): $Component
public "getBookDescLang"(): $Component
public "getRegistryName"(): $ResourceLocation
get "enabled"(): boolean
get "typeName"(): $Component
get "localeName"(): StringJS
get "glyph"(): $Glyph
get "typeIndex"(): integer
get "localizationKey"(): StringJS
get "castingCost"(): integer
get "typeIcon"(): $DocAssets$BlitInfo
get "bookDescription"(): StringJS
get "configTier"(): $SpellTier
get "bookDescLang"(): $Component
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpellPart$$Type = ($AbstractSpellPart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSpellPart$$Original = $AbstractSpellPart;}
declare module "com.hollingsworth.arsnouveau.api.event.SpellResolveEvent$Post" {
import {$SpellResolveEvent} from "com.hollingsworth.arsnouveau.api.event.SpellResolveEvent"
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SpellResolver, $SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $SpellResolveEvent$Post extends $SpellResolveEvent {
 "rayTraceResult": $HitResult
 "spell": $Spell
 "resolver": $SpellResolver
 "world": $Level
 "context": $SpellContext
 "shooter": $LivingEntity

constructor(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $HitResult$$Type, arg3: $Spell$$Type, arg4: $SpellContext$$Type, arg5: $SpellResolver$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellResolveEvent$Post$$Type = ($SpellResolveEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellResolveEvent$Post$$Original = $SpellResolveEvent$Post;}
declare module "com.hollingsworth.arsnouveau.api.spell.ItemCasterProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"

export interface $ItemCasterProvider$$Interface {

(arg0: $ItemStack): $AbstractCaster$$Type<(never)>
}

export class $ItemCasterProvider implements $ItemCasterProvider$$Interface {
 "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCasterProvider$$Type = ((arg0: $ItemStack) => $AbstractCaster$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCasterProvider$$Original = $ItemCasterProvider;}
declare module "com.hollingsworth.arsnouveau.api.event.SpellResolveEvent$Pre" {
import {$SpellResolveEvent} from "com.hollingsworth.arsnouveau.api.event.SpellResolveEvent"
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SpellResolver, $SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $SpellResolveEvent$Pre extends $SpellResolveEvent implements $ICancellableEvent$$Interface {
 "rayTraceResult": $HitResult
 "spell": $Spell
 "resolver": $SpellResolver
 "world": $Level
 "context": $SpellContext
 "shooter": $LivingEntity

constructor(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $HitResult$$Type, arg3: $Spell$$Type, arg4: $SpellContext$$Type, arg5: $SpellResolver$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellResolveEvent$Pre$$Type = ($SpellResolveEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellResolveEvent$Pre$$Original = $SpellResolveEvent$Pre;}
declare module "com.hollingsworth.arsnouveau.api.item.IWandable$Result" {
import {$Enum} from "java.lang.Enum"

export class $IWandable$Result extends $Enum<($IWandable$Result)> {
static readonly "SUCCESS": $IWandable$Result
static readonly "NONE": $IWandable$Result
static readonly "SELECT": $IWandable$Result
static readonly "FAIL": $IWandable$Result
static readonly "CLEAR": $IWandable$Result

public static "values"(): ($IWandable$Result)[]
public static "valueOf"(arg0: StringJS): $IWandable$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWandable$Result$$Type = (("success") | ("select") | ("fail") | ("clear") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWandable$Result$$Original = $IWandable$Result;}
declare module "com.hollingsworth.arsnouveau.api.imbuement_chamber.IImbuementRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$ImbuementTile, $ImbuementTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.ImbuementTile"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IImbuementRecipe$$Interface extends $Recipe$$Interface<($ImbuementTile)> {
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
}

export class $IImbuementRecipe implements $IImbuementRecipe$$Interface {
static "getRecipe"(arg0: $Level$$Type, arg1: $ImbuementTile$$Type): $RecipeHolder<($IImbuementRecipe)>
 "getSourceCost"(arg0: $ImbuementTile$$Type): integer
 "getCraftingStartedText"(arg0: $ImbuementTile$$Type): $Component
 "getCraftingProgressText"(arg0: $ImbuementTile$$Type, arg1: integer): $Component
 "getCraftingText"(arg0: $ImbuementTile$$Type): $Component
 "matches"(arg0: $ImbuementTile$$Type, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "assemble"(arg0: $ImbuementTile$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "isSpecial"(): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $ImbuementTile$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getGroup"(): StringJS
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IImbuementRecipe$$Type = ($IImbuementRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IImbuementRecipe$$Original = $IImbuementRecipe;}
declare module "com.hollingsworth.arsnouveau.api.particle.configurations.ParticleMotion" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IParticleMotionType} from "com.hollingsworth.arsnouveau.api.particle.configurations.IParticleMotionType"
import {$Vector3f} from "org.joml.Vector3f"
import {$ParticleEmitter, $ParticleEmitter$$Type} from "com.hollingsworth.arsnouveau.api.particle.ParticleEmitter"
import {$PropMap, $PropMap$$Type} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.PropMap"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PropertyParticleOptions$$Type} from "com.hollingsworth.arsnouveau.api.particle.PropertyParticleOptions"
import {$ParticleMotion$SpawnType$$Type} from "com.hollingsworth.arsnouveau.api.particle.configurations.ParticleMotion$SpawnType"
import {$BaseProperty} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.BaseProperty"

export class $ParticleMotion {
static "CODEC": $Codec<($ParticleMotion)>
 "propertyMap": $PropMap
 "emitter": $ParticleEmitter
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ParticleMotion)>

constructor(arg0: $PropMap$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "init"(arg0: $ParticleEmitter$$Type): void
public "getProperties"(arg0: $PropMap$$Type): $List<($BaseProperty<(never)>)>
public "getType"(): $IParticleMotionType<(never)>
public "tick"(arg0: $PropertyParticleOptions$$Type, arg1: $Level$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
public "getNumParticles"(arg0: integer): integer
public "getMotionScaled"(arg0: $Vec3$$Type, arg1: double, arg2: $ParticleMotion$SpawnType$$Type): $Vec3
public "toEmitterSpace"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $Vector3f
get "type"(): $IParticleMotionType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleMotion$$Type = ($ParticleMotion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleMotion$$Original = $ParticleMotion;}
declare module "com.hollingsworth.arsnouveau.api.event.DispelEvent$Post" {
import {$SpellStats, $SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DispelEvent} from "com.hollingsworth.arsnouveau.api.event.DispelEvent"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $DispelEvent$Post extends $DispelEvent {
 "rayTraceResult": $HitResult
 "world": $Level
 "context": $SpellContext
 "shooter": $LivingEntity
 "augments": $SpellStats

constructor(arg0: $HitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispelEvent$Post$$Type = ($DispelEvent$Post);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispelEvent$Post$$Original = $DispelEvent$Post;}
declare module "com.hollingsworth.arsnouveau.api.block.IPrismaticBlock" {
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IPrismaticBlock$$Interface {

(arg0: $ServerLevel, arg1: $BlockPos, arg2: $EntityProjectileSpell): void
}

export class $IPrismaticBlock implements $IPrismaticBlock$$Interface {
 "onHit"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPrismaticBlock$$Type = ((arg0: $ServerLevel, arg1: $BlockPos, arg2: $EntityProjectileSpell) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPrismaticBlock$$Original = $IPrismaticBlock;}
declare module "com.hollingsworth.arsnouveau.api.event.EffectResolveEvent" {
import {$Spell} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$SpellStats} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level} from "net.minecraft.world.level.Level"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractEffect} from "com.hollingsworth.arsnouveau.api.spell.AbstractEffect"
import {$HitResult} from "net.minecraft.world.phys.HitResult"
import {$SpellContext} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SpellResolver} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $EffectResolveEvent extends $Event {
 "rayTraceResult": $HitResult
 "spell": $Spell
 "resolver": $SpellResolver
 "world": $Level
 "resolveEffect": $AbstractEffect
 "context": $SpellContext
 "shooter": $LivingEntity
 "spellStats": $SpellStats

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectResolveEvent$$Type = ($EffectResolveEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectResolveEvent$$Original = $EffectResolveEvent;}
declare module "com.hollingsworth.arsnouveau.api.spell.IContextAttachment" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Serializable$$Interface} from "java.io.Serializable"

export interface $IContextAttachment$$Interface extends $Serializable$$Interface {

(): $ResourceLocation$$Type
}

export class $IContextAttachment implements $IContextAttachment$$Interface {
 "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContextAttachment$$Type = (() => $ResourceLocation$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IContextAttachment$$Original = $IContextAttachment;}
declare module "com.hollingsworth.arsnouveau.api.perk.PerkSlot" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List} from "java.util.List"
import {$ConcurrentHashMap} from "java.util.concurrent.ConcurrentHashMap"
import {$DocAssets$BlitInfo, $DocAssets$BlitInfo$$Type} from "com.hollingsworth.arsnouveau.api.documentation.DocAssets$BlitInfo"
import {$Record} from "java.lang.Record"

export class $PerkSlot extends $Record {
static "TIERED_LIST_CODEC": $Codec<($List<($List<($PerkSlot)>)>)>
static readonly "CODEC": $Codec<($PerkSlot)>
static readonly "ONE": $PerkSlot
static "LIST_CODEC": $Codec<($List<($PerkSlot)>)>
static readonly "TWO": $PerkSlot
static "PERK_SLOTS": $ConcurrentHashMap<($ResourceLocation), ($PerkSlot)>
static readonly "THREE": $PerkSlot

constructor(arg0: $ResourceLocation$$Type, arg1: integer)
constructor(id: $ResourceLocation$$Type, value: integer, icon: $DocAssets$BlitInfo$$Type)

public "value"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "icon"(): $DocAssets$BlitInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PerkSlot$$Type = ({"value"?: integer, "id"?: $ResourceLocation$$Type, "icon"?: $DocAssets$BlitInfo$$Type}) | ([value?: integer, id?: $ResourceLocation$$Type, icon?: $DocAssets$BlitInfo$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PerkSlot$$Original = $PerkSlot;}
declare module "com.hollingsworth.arsnouveau.api.particle.configurations.properties.PropMap" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$IPropertyType, $IPropertyType$$Type} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.IPropertyType"
import {$Set$$Type} from "java.util.Set"
import {$BaseProperty, $BaseProperty$$Type} from "com.hollingsworth.arsnouveau.api.particle.configurations.properties.BaseProperty"
import {$ParticleColor} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export class $PropMap {
static "CODEC": $Codec<($PropMap)>
static readonly "VALUE_MAP_CODEC": $Codec<($Map<($IPropertyType<(never)>), (any)>)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PropMap)>

constructor(arg0: $Map$$Type<($IPropertyType$$Type<(never)>), (any)>)
constructor()

public "get"<T extends $BaseProperty<(object)>>(arg0: $Supplier$$Type<($IPropertyType$$Type<(T)>)>): T
public "get"<T extends $BaseProperty<(object)>>(arg0: $IPropertyType$$Type<(T)>): T
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "set"<T extends $BaseProperty<(object)>>(arg0: $IPropertyType$$Type<(T)>, arg1: T): void
public "getOrDefault"<T extends $BaseProperty<(object)>>(arg0: $IPropertyType$$Type<(T)>, arg1: T): T
public "has"(arg0: $IPropertyType$$Type<(never)>): boolean
public "getOptional"<T extends $BaseProperty<(object)>>(arg0: $IPropertyType$$Type<(T)>): $Optional<(T)>
public "getParticleColor"(): $ParticleColor
public "removePropsOnMotionChange"(arg0: $Set$$Type<($PropMap$$Type)>): void
public "removePropsOnMotionChange"(): void
public "createIfMissing"<T extends $BaseProperty<(object)>>(arg0: T): T
public "getOrCreate"<T extends $BaseProperty<(object)>>(arg0: $IPropertyType$$Type<(T)>, arg1: $Supplier$$Type<(T)>): T
get "particleColor"(): $ParticleColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropMap$$Type = ($PropMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PropMap$$Original = $PropMap;}
declare module "com.hollingsworth.arsnouveau.api.spell.SpellSlotMap" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $SpellSlotMap extends $Record {
static readonly "CODEC": $Codec<($SpellSlotMap)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($SpellSlotMap)>

constructor(slots: $Map$$Type<(integer), ($Spell$$Type)>)

public "get"(arg0: integer): $Spell
public "put"(arg0: integer, arg1: $Spell$$Type): $SpellSlotMap
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getOrDefault"(arg0: integer, arg1: $Spell$$Type): $Spell
public "slots"(): $Map<(integer), ($Spell)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSlotMap$$Type = ({"slots"?: $Map$$Type<(integer), ($Spell$$Type)>}) | ([slots?: $Map$$Type<(integer), ($Spell$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSlotMap$$Original = $SpellSlotMap;}
declare module "com.hollingsworth.arsnouveau.api.particle.timelines.TimelineMap$MutableTimelineMap" {
import {$IParticleTimelineType$$Type} from "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimelineType"
import {$Map$$Type} from "java.util.Map"
import {$IParticleTimeline, $IParticleTimeline$$Type} from "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimeline"
import {$TimelineMap} from "com.hollingsworth.arsnouveau.api.particle.timelines.TimelineMap"

export class $TimelineMap$MutableTimelineMap {
constructor(arg0: $Map$$Type<($IParticleTimelineType$$Type<(never)>), ($IParticleTimeline$$Type<($IParticleTimeline$$Type<(never)>)>)>)

public "remove"(arg0: $IParticleTimelineType$$Type<(never)>): void
public "put"<T extends $IParticleTimeline<(object)>>(arg0: $IParticleTimelineType$$Type<(T)>, arg1: T): $IParticleTimeline
public "immutable"(): $TimelineMap
public "getOrCreate"<T extends $IParticleTimeline<(object)>>(arg0: $IParticleTimelineType$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelineMap$MutableTimelineMap$$Type = ($TimelineMap$MutableTimelineMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimelineMap$MutableTimelineMap$$Original = $TimelineMap$MutableTimelineMap;}
declare module "com.hollingsworth.arsnouveau.api.particle.timelines.SimpleParticleTimelineType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$IParticleTimelineType$$Interface} from "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimelineType"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$IParticleTimeline} from "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimeline"
import {$Record} from "java.lang.Record"

export class $SimpleParticleTimelineType<T extends $IParticleTimeline<(object)>> extends $Record implements $IParticleTimelineType$$Interface<(T)> {
constructor(spellPart: $AbstractSpellPart$$Type, codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, createDefault: $Supplier$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "create"(): T
public "spellPart"(): $AbstractSpellPart
public "codec"(): $MapCodec<(T)>
public "createDefault"(): $Supplier<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "getSpellPart"(): $AbstractSpellPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleParticleTimelineType$$Type<T> = ({"codec"?: $MapCodec$$Type<(T)>, "createDefault"?: $Supplier$$Type<(T)>, "spellPart"?: $AbstractSpellPart$$Type, "streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>}) | ([codec?: $MapCodec$$Type<(T)>, createDefault?: $Supplier$$Type<(T)>, spellPart?: $AbstractSpellPart$$Type, streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleParticleTimelineType$$Original<T> = $SimpleParticleTimelineType<(T)>;}
declare module "com.hollingsworth.arsnouveau.api.event.SpellCostCalcEvent$Pre" {
import {$SpellCostCalcEvent} from "com.hollingsworth.arsnouveau.api.event.SpellCostCalcEvent"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SpellCostCalcEvent$Pre extends $SpellCostCalcEvent {
 "context": $SpellContext
 "currentCost": integer

constructor(arg0: $SpellContext$$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCostCalcEvent$Pre$$Type = ($SpellCostCalcEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCostCalcEvent$Pre$$Original = $SpellCostCalcEvent$Pre;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.ExtractedStack" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SlotReference, $SlotReference$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.SlotReference"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $ExtractedStack extends $SlotReference {
 "stack": $ItemStack

public "isEmpty"(): boolean
public static "from"(arg0: $IItemHandler$$Type, arg1: integer, arg2: integer): $ExtractedStack
public static "from"(arg0: $SlotReference$$Type, arg1: integer): $ExtractedStack
public static "empty"(): $ExtractedStack
public "getStack"(): $ItemStack
public "replaceAndReturnOrDrop"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "returnOrDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "returnStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractedStack$$Type = ($ExtractedStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtractedStack$$Original = $ExtractedStack;}
declare module "com.hollingsworth.arsnouveau.api.particle.ParticleEmitter" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$PropertyParticleOptions} from "com.hollingsworth.arsnouveau.api.particle.PropertyParticleOptions"
import {$TimelineEntryData$$Type} from "com.hollingsworth.arsnouveau.api.particle.timelines.TimelineEntryData"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$ParticleMotion, $ParticleMotion$$Type} from "com.hollingsworth.arsnouveau.api.particle.configurations.ParticleMotion"

export class $ParticleEmitter {
 "particleOptions": $PropertyParticleOptions
 "particleConfig": $ParticleMotion
 "offset": $Vec3
 "rotation": $Supplier<($Vec2)>
static "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($ParticleEmitter)>
 "rand1": double
 "rand2": double
 "rand3": double
 "position": $Supplier<($Vec3)>
 "previousPosition": $Vec3
 "age": integer
 "rotationOffset": $Vec2

constructor(arg0: $Entity$$Type, arg1: $TimelineEntryData$$Type)
constructor(arg0: $Supplier$$Type<($Vec3$$Type)>, arg1: $Supplier$$Type<($Vec2$$Type)>, arg2: $TimelineEntryData$$Type)
constructor(arg0: $Supplier$$Type<($Vec3$$Type)>, arg1: $Supplier$$Type<($Vec2$$Type)>, arg2: $ParticleMotion$$Type, arg3: $ParticleOptions$$Type)

public "tick"(arg0: $Level$$Type): void
public "getAdjustedPosition"(): $Vec3
public "getPositionOffset"(): $Vec3
public "getAdjustedRotation"(): $Vec2
public "setRotationOffset"(arg0: float, arg1: float): void
public "setRotationOffset"(arg0: $Vec2$$Type): void
public "getRotation"(): $Vec2
public "setPosition"(arg0: $Vec3$$Type): void
public "setPositionOffset"(arg0: double, arg1: double, arg2: double): void
public "setPositionOffset"(arg0: $Vec3$$Type): void
public "getPosition"(): $Vec3
get "adjustedPosition"(): $Vec3
get "positionOffset"(): $Vec3
get "adjustedRotation"(): $Vec2
set "positionOffset"(value: $Vec3$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEmitter$$Type = ($ParticleEmitter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleEmitter$$Original = $ParticleEmitter;}
declare module "com.hollingsworth.arsnouveau.api.familiar.IFamiliar" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$FamiliarSummonEvent$$Type} from "com.hollingsworth.arsnouveau.api.event.FamiliarSummonEvent"

export interface $IFamiliar$$Interface {
get "owner"(): $LivingEntity
set "ownerID"(value: $UUID$$Type)
get "ownerID"(): $UUID
get "thisEntity"(): $Entity
get "holderID"(): $ResourceLocation
set "holderID"(value: $ResourceLocation$$Type)
get "ownerServerside"(): $Entity
}

export class $IFamiliar implements $IFamiliar$$Interface {
 "getOwner"(): $LivingEntity
 "setOwnerID"(arg0: $UUID$$Type): void
 "getOwnerID"(): $UUID
 "getThisEntity"(): $Entity
 "getHolderID"(): $ResourceLocation
 "setHolderID"(arg0: $ResourceLocation$$Type): void
 "onFamiliarSpawned"(arg0: $FamiliarSummonEvent$$Type): void
 "getOwnerServerside"(): $Entity
 "wantsToAttack"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFamiliar$$Type = ($IFamiliar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFamiliar$$Original = $IFamiliar;}
declare module "com.hollingsworth.arsnouveau.api.event.ITimedEvent" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ServerTickEvent$$Type} from "net.neoforged.neoforge.event.tick.ServerTickEvent"

export interface $ITimedEvent$$Interface {
get "ID"(): StringJS
get "expired"(): boolean
}

export class $ITimedEvent implements $ITimedEvent$$Interface {
 "getID"(): StringJS
 "tick"(arg0: boolean): void
 "tick"(arg0: $ServerTickEvent$$Type): void
 "serialize"(arg0: $CompoundTag$$Type): $CompoundTag
 "isExpired"(): boolean
 "onPacketHandled"(): void
 "onServerStopping"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITimedEvent$$Type = ($ITimedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITimedEvent$$Original = $ITimedEvent;}
declare module "com.hollingsworth.arsnouveau.api.event.EffectResolveEvent$Pre" {
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$SpellStats, $SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractEffect, $AbstractEffect$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractEffect"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$EffectResolveEvent} from "com.hollingsworth.arsnouveau.api.event.EffectResolveEvent"
import {$SpellResolver, $SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $EffectResolveEvent$Pre extends $EffectResolveEvent implements $ICancellableEvent$$Interface {
 "rayTraceResult": $HitResult
 "spell": $Spell
 "resolver": $SpellResolver
 "world": $Level
 "resolveEffect": $AbstractEffect
 "context": $SpellContext
 "shooter": $LivingEntity
 "spellStats": $SpellStats

constructor(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $HitResult$$Type, arg3: $Spell$$Type, arg4: $SpellContext$$Type, arg5: $AbstractEffect$$Type, arg6: $SpellStats$$Type, arg7: $SpellResolver$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectResolveEvent$Pre$$Type = ($EffectResolveEvent$Pre);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectResolveEvent$Pre$$Original = $EffectResolveEvent$Pre;}
declare module "com.hollingsworth.arsnouveau.api.event.ManaRegenCalcEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ManaRegenCalcEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: double)

public "getRegen"(): double
public "setRegen"(arg0: double): void
get "regen"(): double
set "regen"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManaRegenCalcEvent$$Type = ($ManaRegenCalcEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ManaRegenCalcEvent$$Original = $ManaRegenCalcEvent;}
declare module "com.hollingsworth.arsnouveau.api.item.ISpellModifierItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$ISpellModifier$$Interface} from "com.hollingsworth.arsnouveau.api.item.ISpellModifier"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"

export interface $ISpellModifierItem$$Interface extends $ISpellModifier$$Interface {
}

export class $ISpellModifierItem implements $ISpellModifierItem$$Interface {
 "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
 "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellModifierItem$$Type = ($ISpellModifierItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpellModifierItem$$Original = $ISpellModifierItem;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.SlotCache" {
import {$Collection} from "java.util.Collection"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export class $SlotCache {
constructor()
constructor(arg0: boolean)

public "toString"(): StringJS
public "getIfPresent"(arg0: $Item$$Type): $Collection<(integer)>
public "getOrCreateSlots"(arg0: $Item$$Type): $Collection<(integer)>
public "replaceSlotWithItem"(arg0: $Item$$Type, arg1: $Item$$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotCache$$Type = ($SlotCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotCache$$Original = $SlotCache;}
declare module "com.hollingsworth.arsnouveau.api.particle.timelines.TimelineEntryData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PropertyParticleOptions, $PropertyParticleOptions$$Type} from "com.hollingsworth.arsnouveau.api.particle.PropertyParticleOptions"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ParticleMotion, $ParticleMotion$$Type} from "com.hollingsworth.arsnouveau.api.particle.configurations.ParticleMotion"

export class $TimelineEntryData {
static readonly "CODEC": $MapCodec<($TimelineEntryData)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($TimelineEntryData)>

constructor()
constructor(arg0: $ParticleMotion$$Type)
constructor(arg0: $ParticleMotion$$Type, arg1: $PropertyParticleOptions$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "setOptions"(arg0: $PropertyParticleOptions$$Type): void
public "setMotion"(arg0: $ParticleMotion$$Type): void
public "motion"(): $ParticleMotion
public "particleOptions"(): $PropertyParticleOptions
set "options"(value: $PropertyParticleOptions$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimelineEntryData$$Type = ($TimelineEntryData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimelineEntryData$$Original = $TimelineEntryData;}
declare module "com.hollingsworth.arsnouveau.api.spell.CancelReason" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $CancelReason extends $Record {
static "FILTER_FAILED": $CancelReason
static "TERMINATED": $CancelReason
static "NEW_CONTEXT": $CancelReason

constructor(id: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CancelReason$$Type = ({"id"?: $ResourceLocation$$Type}) | ([id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CancelReason$$Original = $CancelReason;}
declare module "com.hollingsworth.arsnouveau.api.particle.configurations.ParticleConfigWidgetProvider" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List$$Type} from "java.util.List"
import {$AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $ParticleConfigWidgetProvider {
 "x": integer
 "width": integer
 "y": integer
 "height": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "tick"(): void
public "addWidgets"(arg0: $List$$Type<($AbstractWidget$$Type)>): void
public "renderIcon"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "renderBg"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "getButtonTitle"(): $Component
public "getButtonTooltips"(arg0: $List$$Type<($Component$$Type)>): void
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
get "buttonTitle"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleConfigWidgetProvider$$Type = ($ParticleConfigWidgetProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleConfigWidgetProvider$$Original = $ParticleConfigWidgetProvider;}
declare module "com.hollingsworth.arsnouveau.api.event.EntityPreRemovalEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityPreRemovalEvent extends $Event {
constructor(arg0: $Level$$Type, arg1: $Entity$$Type)

public "getLevel"(): $Level
public "getEntity"(): $Entity
get "level"(): $Level
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPreRemovalEvent$$Type = ($EntityPreRemovalEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityPreRemovalEvent$$Original = $EntityPreRemovalEvent;}
declare module "com.hollingsworth.arsnouveau.api.item.inv.InventoryManager$FilterablePreference" {
import {$ItemScroll$SortPref, $ItemScroll$SortPref$$Type} from "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref"
import {$FilterableItemHandler, $FilterableItemHandler$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.FilterableItemHandler"
import {$Record} from "java.lang.Record"

export class $InventoryManager$FilterablePreference extends $Record {
constructor(handler: $FilterableItemHandler$$Type, pref: $ItemScroll$SortPref$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "handler"(): $FilterableItemHandler
public "pref"(): $ItemScroll$SortPref
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryManager$FilterablePreference$$Type = ({"handler"?: $FilterableItemHandler$$Type, "pref"?: $ItemScroll$SortPref$$Type}) | ([handler?: $FilterableItemHandler$$Type, pref?: $ItemScroll$SortPref$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryManager$FilterablePreference$$Original = $InventoryManager$FilterablePreference;}
declare module "com.hollingsworth.arsnouveau.api.familiar.AbstractFamiliarHolder" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IFamiliar} from "com.hollingsworth.arsnouveau.api.familiar.IFamiliar"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $AbstractFamiliarHolder {
 "isEntity": $Predicate<($Entity)>

constructor(arg0: StringJS, arg1: $Predicate$$Type<($Entity)>)
constructor(arg0: $ResourceLocation$$Type, arg1: $Predicate$$Type<($Entity)>)

public "getBookDescription"(): StringJS
public "getLangDescription"(): $Component
public "getLangName"(): $Component
public "getRegistryName"(): $ResourceLocation
public "getBookName"(): StringJS
public "getOutputItem"(): $ItemStack
public "getSummonEntity"(arg0: $Level$$Type, arg1: $CompoundTag$$Type): $IFamiliar
get "bookDescription"(): StringJS
get "langDescription"(): $Component
get "langName"(): $Component
get "registryName"(): $ResourceLocation
get "bookName"(): StringJS
get "outputItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFamiliarHolder$$Type = ($AbstractFamiliarHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFamiliarHolder$$Original = $AbstractFamiliarHolder;}
declare module "com.hollingsworth.arsnouveau.api.event.MaxManaCalcEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $MaxManaCalcEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: integer)

public "getMax"(): integer
public "getReserve"(): float
public "setMax"(arg0: integer): void
public "setReserve"(arg0: float): void
get "max"(): integer
get "reserve"(): float
set "max"(value: integer)
set "reserve"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaxManaCalcEvent$$Type = ($MaxManaCalcEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaxManaCalcEvent$$Original = $MaxManaCalcEvent;}
declare module "com.hollingsworth.arsnouveau.api.event.SuccessfulTreeGrowthEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SuccessfulTreeGrowthEvent extends $Event {
 "level": $ServerLevel
 "pos": $BlockPos
 "sapling": $BlockState

constructor(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuccessfulTreeGrowthEvent$$Type = ($SuccessfulTreeGrowthEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuccessfulTreeGrowthEvent$$Original = $SuccessfulTreeGrowthEvent;}
declare module "com.hollingsworth.arsnouveau.api.perk.IPerk" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PerkSlot, $PerkSlot$$Type} from "com.hollingsworth.arsnouveau.api.perk.PerkSlot"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ImmutableMultimap$Builder} from "com.google.common.collect.ImmutableMultimap$Builder"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $IPerk$$Interface {

(): $ResourceLocation$$Type
get "name"(): StringJS
get "langDescription"(): StringJS
get "langName"(): StringJS
get "registryName"(): $ResourceLocation
get "perkName"(): $Component
get "descriptionKey"(): StringJS
get "initTag"(): $CompoundTag
}

export class $IPerk implements $IPerk$$Interface {
 "getName"(): StringJS
/**
 * 
 * @deprecated
 */
 "getModifiers"(arg0: $EquipmentSlot$$Type, arg1: $ItemStack$$Type, arg2: integer): $Multimap<($Attribute), ($AttributeModifier)>
 "validForSlot"(arg0: $PerkSlot$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): boolean
 "getLangDescription"(): StringJS
 "getLangName"(): StringJS
/**
 * 
 * @deprecated
 */
 "attributeBuilder"(): $ImmutableMultimap$Builder<($Attribute), ($AttributeModifier)>
 "getRegistryName"(): $ResourceLocation
 "minimumSlot"(): $PerkSlot
 "getPerkName"(): $Component
 "getDescriptionKey"(): StringJS
 "applyAttributeModifiers"(arg0: $ItemAttributeModifiers$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: $EquipmentSlotGroup$$Type): $ItemAttributeModifiers
 "onRemoved"(arg0: $LivingEntity$$Type): void
 "onAdded"(arg0: $LivingEntity$$Type): void
 "getInitTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPerk$$Type = (() => $ResourceLocation$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPerk$$Original = $IPerk;}
declare module "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimelineType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractSpellPart} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IParticleTimeline} from "com.hollingsworth.arsnouveau.api.particle.timelines.IParticleTimeline"

export interface $IParticleTimelineType$$Interface<T extends $IParticleTimeline<(object)>> {
get "spellPart"(): $AbstractSpellPart
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ArsNouveauParticleTimelines
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ArsNouveauParticleTimelinesTag
}

export class $IParticleTimelineType<T extends $IParticleTimeline<(object)>> implements $IParticleTimelineType$$Interface {
static readonly "CODEC": $Codec<($IParticleTimelineType<($IParticleTimeline<(never)>)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IParticleTimelineType<(never)>)>

 "create"(): T
 "codec"(): $MapCodec<(T)>
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
 "getSpellPart"(): $AbstractSpellPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IParticleTimelineType$$Type<T> = (Special.ArsNouveauParticleTimelines);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IParticleTimelineType$$Original<T> = $IParticleTimelineType<(T)>;}
declare module "com.hollingsworth.arsnouveau.api.block.IPedestalMachine" {
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IPedestalMachine$$Interface {

(arg0: $Level): void
}

export class $IPedestalMachine implements $IPedestalMachine$$Interface {
 "lightPedestal"(arg0: $Level$$Type): void
 "spawnParticlesForPedestal"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "spawnParticlesForPedestal"(arg0: $Level$$Type, arg1: $List$$Type<($BlockPos$$Type)>): void
 "pedestalList"(arg0: $BlockPos$$Type, arg1: integer, arg2: $Level$$Type): $List<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPedestalMachine$$Type = ((arg0: $Level) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPedestalMachine$$Original = $IPedestalMachine;}
declare module "com.hollingsworth.arsnouveau.api.spell.AbstractCaster" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Function6$$Type} from "com.mojang.datafixers.util.Function6"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConfiguredSpellSound, $ConfiguredSpellSound$$Type} from "com.hollingsworth.arsnouveau.api.sound.ConfiguredSpellSound"
import {$SpellSlotMap, $SpellSlotMap$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSlotMap"
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SpellResolver} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"
import {$TimelineMap, $TimelineMap$$Type} from "com.hollingsworth.arsnouveau.api.particle.timelines.TimelineMap"

export class $AbstractCaster<T extends $AbstractCaster<(object)>> implements $TooltipProvider$$Interface {
constructor(arg0: integer, arg1: StringJS, arg2: boolean, arg3: StringJS, arg4: integer, arg5: $SpellSlotMap$$Type)
constructor(arg0: integer)
constructor(arg0: integer, arg1: StringJS, arg2: boolean, arg3: StringJS, arg4: integer)
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getComponentType"(): $DataComponentType
/**
 * 
 * @deprecated
 */
public "setColor"(arg0: $ParticleColor$$Type): T
/**
 * 
 * @deprecated
 */
public "setColor"(arg0: $ParticleColor$$Type, arg1: integer): T
/**
 * 
 * @deprecated
 */
public "getColor"(): $ParticleColor
/**
 * 
 * @deprecated
 */
public "getColor"(arg0: integer): $ParticleColor
public "getSpell"(): $Spell
public "getSpell"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type, arg3: $AbstractCaster$$Type): $Spell
public "getSpell"(arg0: integer): $Spell
public static "createCodec"<T extends $AbstractCaster<(object)>>(arg0: $Function6$$Type<(integer), (StringJS), (boolean), (StringJS), (integer), ($SpellSlotMap$$Type), (T)>): $MapCodec<(T)>
public "getSpellName"(): StringJS
public "getSpellName"(arg0: integer): StringJS
public "setHidden"(arg0: boolean): T
/**
 * 
 * @deprecated
 */
public "playSound"(arg0: $BlockPos$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: $ConfiguredSpellSound$$Type, arg4: $SoundSource$$Type): void
/**
 * 
 * @deprecated
 */
public "getSound"(arg0: integer): $ConfiguredSpellSound
public "castSpell"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type, arg3: $Component$$Type, arg4: $Spell$$Type): $InteractionResultHolder<($ItemStack)>
public "castSpell"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type, arg3: $Component$$Type): $InteractionResultHolder<($ItemStack)>
public "codec"(): $MapCodec<(T)>
public "castOnServer"(arg0: $InteractionHand$$Type, arg1: $Component$$Type): void
public "setCurrentSlot"(arg0: integer): T
public "setNextSlot"(): T
public "setSpellName"(arg0: StringJS): T
public "setSpellName"(arg0: StringJS, arg1: integer): T
public "setPreviousSlot"(): T
public "setFlavorText"(arg0: StringJS): T
public "saveToStack"(arg0: $ItemStack$$Type): void
public "getFlavorText"(): StringJS
public "setHiddenRecipe"(arg0: StringJS): T
public "getMaxSlots"(): integer
public "setSpell"(arg0: $Spell$$Type): T
public "setSpell"(arg0: $Spell$$Type, arg1: integer): T
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "modifySpellBeforeCasting"(arg0: $ServerLevel$$Type, arg1: $Entity$$Type, arg2: $InteractionHand$$Type, arg3: $Spell$$Type): $Spell
public "getSpells"(): $SpellSlotMap
public "setSound"(arg0: $ConfiguredSpellSound$$Type, arg1: integer): T
/**
 * 
 * @deprecated
 */
public "setSound"(arg0: $ConfiguredSpellSound$$Type): T
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "setParticles"(arg0: $TimelineMap$$Type): T
public "setParticles"(arg0: $TimelineMap$$Type, arg1: integer): T
/**
 * 
 * @deprecated
 */
public "getCurrentSound"(): $ConfiguredSpellSound
public static "createStream"<T extends $AbstractCaster<(object)>>(arg0: $Function6$$Type<(integer), (StringJS), (boolean), (StringJS), (integer), ($SpellSlotMap$$Type), (T)>): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "getParticles"(arg0: integer): $TimelineMap
public "getParticles"(): $TimelineMap
public "getSpellResolver"(arg0: $SpellContext$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $SpellResolver
public "getCurrentSlot"(): integer
public "getBonusGlyphSlots"(): integer
public "setMaxSlots"(arg0: integer): T
public "getHiddenRecipe"(): StringJS
public "isSpellHidden"(): boolean
get "componentType"(): $DataComponentType
set "color"(value: $ParticleColor$$Type)
get "color"(): $ParticleColor
get "spell"(): $Spell
get "spellName"(): StringJS
set "hidden"(value: boolean)
set "currentSlot"(value: integer)
get "nextSlot"(): T
set "spellName"(value: StringJS)
get "previousSlot"(): T
set "flavorText"(value: StringJS)
get "flavorText"(): StringJS
set "hiddenRecipe"(value: StringJS)
get "maxSlots"(): integer
set "spell"(value: $Spell$$Type)
get "spells"(): $SpellSlotMap
set "sound"(value: $ConfiguredSpellSound$$Type)
set "particles"(value: $TimelineMap$$Type)
get "currentSound"(): $ConfiguredSpellSound
get "particles"(): $TimelineMap
get "currentSlot"(): integer
get "bonusGlyphSlots"(): integer
set "maxSlots"(value: integer)
get "hiddenRecipe"(): StringJS
get "spellHidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCaster$$Type<T> = ($AbstractCaster<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractCaster$$Original<T> = $AbstractCaster<(T)>;}
