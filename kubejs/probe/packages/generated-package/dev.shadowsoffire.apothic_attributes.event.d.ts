declare module "dev.shadowsoffire.apothic_attributes.event.ApotheosisCommandEvent" {
import {$LiteralArgumentBuilder, $LiteralArgumentBuilder$$Type} from "com.mojang.brigadier.builder.LiteralArgumentBuilder"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$Event} from "net.neoforged.bus.api.Event"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $ApotheosisCommandEvent extends $Event {
constructor(arg0: $LiteralArgumentBuilder$$Type<($CommandSourceStack$$Type)>, arg1: $CommandBuildContext$$Type)

public "getContext"(): $CommandBuildContext
public "getRoot"(): $LiteralArgumentBuilder<($CommandSourceStack)>
get "context"(): $CommandBuildContext
get "root"(): $LiteralArgumentBuilder<($CommandSourceStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApotheosisCommandEvent$$Type = ($ApotheosisCommandEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ApotheosisCommandEvent$$Original = $ApotheosisCommandEvent;}
