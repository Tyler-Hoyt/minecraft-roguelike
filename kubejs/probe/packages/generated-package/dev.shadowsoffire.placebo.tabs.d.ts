declare module "dev.shadowsoffire.placebo.tabs.ITabFiller" {
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"

export interface $ITabFiller$$Interface {

(arg0: $CreativeModeTab, arg1: $BuildCreativeModeTabContentsEvent): void
}

export class $ITabFiller implements $ITabFiller$$Interface {
 "fillItemCategory"(arg0: $CreativeModeTab$$Type, arg1: $BuildCreativeModeTabContentsEvent$$Type): void
static "simple"(arg0: $ItemLike$$Type): $ITabFiller
static "delegating"(arg0: $Supplier$$Type<($ItemLike$$Type)>): $ITabFiller
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITabFiller$$Type = ((arg0: $CreativeModeTab, arg1: $BuildCreativeModeTabContentsEvent) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITabFiller$$Original = $ITabFiller;}
