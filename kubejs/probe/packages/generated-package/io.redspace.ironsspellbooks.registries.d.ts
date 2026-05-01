declare module "io.redspace.ironsspellbooks.registries.PotionRegistry" {
import {$Potion} from "net.minecraft.world.item.alchemy.Potion"
import {$IEventBus$$Type} from "net.neoforged.bus.api.IEventBus"
import {$DeferredRegister} from "net.neoforged.neoforge.registries.DeferredRegister"
import {$RegisterBrewingRecipesEvent$$Type} from "net.neoforged.neoforge.event.brewing.RegisterBrewingRecipesEvent"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"

export class $PotionRegistry {
static readonly "POTIONS": $DeferredRegister<($Potion)>
static readonly "INSTANT_MANA_ONE": $DeferredHolder<($Potion), ($Potion)>
static readonly "INSTANT_MANA_TWO": $DeferredHolder<($Potion), ($Potion)>
static readonly "INSTANT_MANA_FOUR": $DeferredHolder<($Potion), ($Potion)>
static readonly "INSTANT_MANA_THREE": $DeferredHolder<($Potion), ($Potion)>

constructor()

public static "register"(arg0: $IEventBus$$Type): void
public static "addRecipes"(arg0: $RegisterBrewingRecipesEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionRegistry$$Type = ($PotionRegistry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionRegistry$$Original = $PotionRegistry;}
