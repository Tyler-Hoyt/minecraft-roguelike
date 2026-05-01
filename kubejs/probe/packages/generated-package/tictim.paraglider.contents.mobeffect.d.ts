declare module "tictim.paraglider.contents.mobeffect.StaminaEfficiencyMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $StaminaEfficiencyMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
static readonly "EFFICIENCY_PER_LEVEL": double
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaminaEfficiencyMobEffect$$Type = ($StaminaEfficiencyMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StaminaEfficiencyMobEffect$$Original = $StaminaEfficiencyMobEffect;}
