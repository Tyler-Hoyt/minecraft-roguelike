declare module "tictim.paraglider.api.StaminaEfficiencyAttribute" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Attribute$Sentiment$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute$Sentiment"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"

export class $StaminaEfficiencyAttribute extends $Attribute {
static readonly "CODEC": $Codec<($Holder<($Attribute)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Attribute)>)>

constructor(arg0: StringJS)

public "sanitizeValue"(arg0: double): double
public "setSentiment"(arg0: $Attribute$Sentiment$$Type): $Attribute
public "setSyncable"(arg0: boolean): $StaminaEfficiencyAttribute
public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
set "sentiment"(value: $Attribute$Sentiment$$Type)
set "syncable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaminaEfficiencyAttribute$$Type = ($StaminaEfficiencyAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StaminaEfficiencyAttribute$$Original = $StaminaEfficiencyAttribute;}
