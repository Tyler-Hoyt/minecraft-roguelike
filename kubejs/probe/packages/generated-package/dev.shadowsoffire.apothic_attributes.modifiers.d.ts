declare module "dev.shadowsoffire.apothic_attributes.modifiers.VanillaEquipmentSlot" {
import {$Iterable} from "java.lang.Iterable"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$EntityEquipmentSlot$$Interface} from "dev.shadowsoffire.apothic_attributes.modifiers.EntityEquipmentSlot"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record} from "java.lang.Record"

export class $VanillaEquipmentSlot extends $Record implements $EntityEquipmentSlot$$Interface {
constructor(slot: $EquipmentSlot$$Type)

public "slot"(): $EquipmentSlot
public "getStacks"(arg0: $LivingEntity$$Type): $Iterable<($ItemStack)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaEquipmentSlot$$Type = ({"slot"?: $EquipmentSlot$$Type}) | ([slot?: $EquipmentSlot$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VanillaEquipmentSlot$$Original = $VanillaEquipmentSlot;}
declare module "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiersEvent" {
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$StackAttributeModifiers$Entry, $StackAttributeModifiers$Entry$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiers$Entry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$StackAttributeModifiers, $StackAttributeModifiers$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiers"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Event} from "net.neoforged.bus.api.Event"
import {$EntitySlotGroup$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.EntitySlotGroup"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $StackAttributeModifiersEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: $StackAttributeModifiers$$Type)

public "getModifiers"(): $List<($StackAttributeModifiers$Entry)>
public "removeIf"(arg0: $Predicate$$Type<($StackAttributeModifiers$Entry)>): boolean
public "build"(): $StackAttributeModifiers
public "hasChanges"(): boolean
public "removeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type): boolean
public "getItemStack"(): $ItemStack
public "replaceModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EntitySlotGroup$$Type): void
public "clearModifiers"(): void
public "addModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EntitySlotGroup$$Type): boolean
public "getDefaultModifiers"(): $StackAttributeModifiers
public "removeAllModifiersFor"(arg0: $Holder$$Type<($Attribute)>): boolean
get "modifiers"(): $List<($StackAttributeModifiers$Entry)>
get "itemStack"(): $ItemStack
get "defaultModifiers"(): $StackAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackAttributeModifiersEvent$$Type = ($StackAttributeModifiersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StackAttributeModifiersEvent$$Original = $StackAttributeModifiersEvent;}
declare module "dev.shadowsoffire.apothic_attributes.modifiers.EntitySlotGroup" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$EntityEquipmentSlot, $EntityEquipmentSlot$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.EntityEquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $EntitySlotGroup extends $Record implements $Predicate$$Interface<($Holder<($EntityEquipmentSlot)>)> {
static readonly "CODEC": $Codec<($EntitySlotGroup)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntitySlotGroup)>

constructor(id: $ResourceLocation$$Type, slots: $HolderSet$$Type<($EntityEquipmentSlot)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $Holder$$Type<($EntityEquipmentSlot)>): boolean
public "test"(arg0: any): boolean
public "id"(): $ResourceLocation
public "slots"(): $HolderSet<($EntityEquipmentSlot)>
public "or"(arg0: $Predicate$$Type<($Holder<($EntityEquipmentSlot)>)>): $Predicate<($Holder<($EntityEquipmentSlot)>)>
public "negate"(): $Predicate<($Holder<($EntityEquipmentSlot)>)>
public "and"(arg0: $Predicate$$Type<($Holder<($EntityEquipmentSlot)>)>): $Predicate<($Holder<($EntityEquipmentSlot)>)>
public static "not"<T>(arg0: $Predicate$$Type<($Holder<($EntityEquipmentSlot)>)>): $Predicate<($Holder<($EntityEquipmentSlot)>)>
public static "isEqual"<T>(arg0: any): $Predicate<($Holder<($EntityEquipmentSlot)>)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ApothicAttributesEntitySlotGroup
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ApothicAttributesEntitySlotGroupTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySlotGroup$$Type = (Special.ApothicAttributesEntitySlotGroup) | ({"slots"?: $HolderSet$$Type<($EntityEquipmentSlot)>, "id"?: $ResourceLocation$$Type}) | ([slots?: $HolderSet$$Type<($EntityEquipmentSlot)>, id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntitySlotGroup$$Original = $EntitySlotGroup;}
declare module "dev.shadowsoffire.apothic_attributes.modifiers.EntityEquipmentSlot" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"

export interface $EntityEquipmentSlot$$Interface {

(arg0: $LivingEntity): $Iterable$$Type<($ItemStack$$Type)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ApothicAttributesEntityEquipmentSlot
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ApothicAttributesEntityEquipmentSlotTag
}

export class $EntityEquipmentSlot implements $EntityEquipmentSlot$$Interface {
static readonly "CODEC": $Codec<($Holder<($EntityEquipmentSlot)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($EntityEquipmentSlot)>)>

 "getStacks"(arg0: $LivingEntity$$Type): $Iterable<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEquipmentSlot$$Type = (Special.ApothicAttributesEntityEquipmentSlot) | ((arg0: $LivingEntity) => $Iterable$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityEquipmentSlot$$Original = $EntityEquipmentSlot;}
declare module "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiers" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$StackAttributeModifiers$Entry, $StackAttributeModifiers$Entry$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiers$Entry"
import {$ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List, $List$$Type} from "java.util.List"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$StackAttributeModifiers$Builder} from "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiers$Builder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EntityEquipmentSlot$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.EntityEquipmentSlot"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$EntitySlotGroup$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.EntitySlotGroup"
import {$Record} from "java.lang.Record"

export class $StackAttributeModifiers extends $Record {
static readonly "CODEC": $Codec<($StackAttributeModifiers)>
static readonly "EMPTY": $StackAttributeModifiers
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($StackAttributeModifiers)>

constructor(modifiers: $List$$Type<($StackAttributeModifiers$Entry$$Type)>, showInTooltip: boolean)

public "modifiers"(): $List<($StackAttributeModifiers$Entry)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"(): $StackAttributeModifiers$Builder
public "forEach"(arg0: $EntitySlotGroup$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public "forEach"(arg0: $Holder$$Type<($EntityEquipmentSlot)>, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public static "fromVanilla"(arg0: $ItemAttributeModifiers$$Type): $StackAttributeModifiers
public "withTooltip"(arg0: boolean): $StackAttributeModifiers
public "showInTooltip"(): boolean
public "withModifierAdded"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EntitySlotGroup$$Type): $StackAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackAttributeModifiers$$Type = ({"showInTooltip"?: boolean, "modifiers"?: $List$$Type<($StackAttributeModifiers$Entry$$Type)>}) | ([showInTooltip?: boolean, modifiers?: $List$$Type<($StackAttributeModifiers$Entry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StackAttributeModifiers$$Original = $StackAttributeModifiers;}
declare module "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiers$Builder" {
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$StackAttributeModifiers} from "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiers"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$EntitySlotGroup$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.EntitySlotGroup"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $StackAttributeModifiers$Builder {
public "add"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EntitySlotGroup$$Type): $StackAttributeModifiers$Builder
public "build"(): $StackAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackAttributeModifiers$Builder$$Type = ($StackAttributeModifiers$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StackAttributeModifiers$Builder$$Original = $StackAttributeModifiers$Builder;}
declare module "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiers$Entry" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$EntitySlotGroup, $EntitySlotGroup$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.EntitySlotGroup"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $StackAttributeModifiers$Entry extends $Record {
static readonly "CODEC": $Codec<($StackAttributeModifiers$Entry)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($StackAttributeModifiers$Entry)>

constructor(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type, slots: $EntitySlotGroup$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type): boolean
public "slots"(): $EntitySlotGroup
public "modifier"(): $AttributeModifier
public "attribute"(): $Holder<($Attribute)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackAttributeModifiers$Entry$$Type = ({"slots"?: $EntitySlotGroup$$Type, "attribute"?: $Holder$$Type<($Attribute)>, "modifier"?: $AttributeModifier$$Type}) | ([slots?: $EntitySlotGroup$$Type, attribute?: $Holder$$Type<($Attribute)>, modifier?: $AttributeModifier$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StackAttributeModifiers$Entry$$Original = $StackAttributeModifiers$Entry;}
