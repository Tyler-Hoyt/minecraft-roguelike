declare module "com.squoshi.irons_spells_js.entity.attribute.SpellAttributeBuilderJS" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$Predicate} from "java.util.function.Predicate"
import {$List} from "java.util.List"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$AttributeBuilder$Range} from "dev.latvian.mods.kubejs.entity.AttributeBuilder$Range"
import {$AttributeBuilder} from "dev.latvian.mods.kubejs.entity.AttributeBuilder"
import {$EntityType} from "net.minecraft.world.entity.EntityType"

export class $SpellAttributeBuilderJS extends $AttributeBuilder {
 "registryKey": $ResourceKey<($Registry<(T)>)>
 "sourceLine": $SourceLine
readonly "predicateList": $List<($Predicate<($EntityType<(never)>)>)>
 "defaultValue": $Either<($AttributeBuilder$Range), (boolean)>
readonly "id": $ResourceLocation

constructor(arg0: $ResourceLocation$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellAttributeBuilderJS$$Type = ($SpellAttributeBuilderJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellAttributeBuilderJS$$Original = $SpellAttributeBuilderJS;}
