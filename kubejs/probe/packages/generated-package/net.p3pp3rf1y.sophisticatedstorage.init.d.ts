declare module "net.p3pp3rf1y.sophisticatedstorage.init.ModItems$StorageCompactingUpgradeItem" {
import {$CompactingUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.compacting.CompactingUpgradeItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $ModItems$StorageCompactingUpgradeItem extends $CompactingUpgradeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModItems$StorageCompactingUpgradeItem$$Type = ($ModItems$StorageCompactingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModItems$StorageCompactingUpgradeItem$$Original = $ModItems$StorageCompactingUpgradeItem;}
