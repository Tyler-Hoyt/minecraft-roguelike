declare module "appeng.parts.automation.AnnihilationPlanePartItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$PartItem} from "appeng.items.parts.PartItem"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$AnnihilationPlanePart} from "appeng.parts.automation.AnnihilationPlanePart"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $AnnihilationPlanePartItem extends $PartItem<($AnnihilationPlanePart)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getEnchantmentValue"(): integer
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "getId"(arg0: $IPartItem$$Type<(never)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$$Type): $IPartItem<(never)>
public static "getNetworkId"(arg0: $IPartItem$$Type<(never)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(never)>
public "asItem"(): $Item
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePartItem$$Type = ($AnnihilationPlanePartItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnnihilationPlanePartItem$$Original = $AnnihilationPlanePartItem;}
declare module "appeng.parts.automation.PlaneConnections" {
import {$List} from "java.util.List"

export class $PlaneConnections {
static readonly "PERMUTATIONS": $List<($PlaneConnections)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "of"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $PlaneConnections
public "getIndex"(): integer
public "isUp"(): boolean
public "isDown"(): boolean
public "isRight"(): boolean
public "isLeft"(): boolean
get "index"(): integer
get "up"(): boolean
get "down"(): boolean
get "right"(): boolean
get "left"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaneConnections$$Type = ($PlaneConnections);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlaneConnections$$Original = $PlaneConnections;}
declare module "appeng.parts.automation.AnnihilationPlanePart" {
import {$TickRateModulation} from "appeng.api.networking.ticking.TickRateModulation"
import {$DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$IGridTickable$$Interface} from "appeng.api.networking.ticking.IGridTickable"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$AEBasePart} from "appeng.parts.AEBasePart"
import {$DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AECableType$$Type} from "appeng.api.util.AECableType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$ItemEnchantments} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$PlaneConnections} from "appeng.parts.automation.PlaneConnections"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IPartModel} from "appeng.api.parts.IPartModel"
import {$TickingRequest} from "appeng.api.networking.ticking.TickingRequest"
import {$IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $AnnihilationPlanePart extends $AEBasePart implements $IGridTickable$$Interface {
constructor(arg0: $IPartItem$$Type<(never)>)

public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public static "getModels"(): $List<($IPartModel)>
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "getModelData"(): $ModelData
public "getStaticModels"(): $IPartModel
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "onUpdateShape"(arg0: $Direction$$Type): void
public "onEntityCollision"(arg0: $Entity$$Type): void
public "getConnections"(): $PlaneConnections
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getEnchantments"(): $ItemEnchantments
public "addToWorld"(): void
public "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public static "tryClear"(arg0: any): void
public static get "models"(): $List<($IPartModel)>
get "modelData"(): $ModelData
get "staticModels"(): $IPartModel
get "connections"(): $PlaneConnections
get "enchantments"(): $ItemEnchantments
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePart$$Type = ($AnnihilationPlanePart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnnihilationPlanePart$$Original = $AnnihilationPlanePart;}
