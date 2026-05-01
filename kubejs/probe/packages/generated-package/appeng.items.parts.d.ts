declare module "appeng.items.parts.PartItem" {
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IPart} from "appeng.api.parts.IPart"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$AEBaseItem} from "appeng.items.AEBaseItem"
import {$IPartItem, $IPartItem$$Type, $IPartItem$$Interface} from "appeng.api.parts.IPartItem"

export class $PartItem<T extends $IPart> extends $AEBaseItem implements $IPartItem$$Interface<(T)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $Class$$Type<(T)>, arg2: $Function$$Type<($IPartItem<(T)>), (T)>)

public "createPart"(): T
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getPartClass"(): $Class<(T)>
public static "getId"(arg0: $IPartItem$$Type<(never)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$$Type): $IPartItem<(never)>
public static "getNetworkId"(arg0: $IPartItem$$Type<(never)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(never)>
public "asItem"(): $Item
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "partClass"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartItem$$Type<T> = ($PartItem<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartItem$$Original<T> = $PartItem<(T)>;}
declare module "appeng.items.parts.ColoredPartItem" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IPart} from "appeng.api.parts.IPart"
import {$PartItem} from "appeng.items.parts.PartItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class$$Type} from "java.lang.Class"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $ColoredPartItem<T extends $IPart> extends $PartItem<(T)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $Class$$Type<(T)>, arg2: $Function$$Type<($ColoredPartItem<(T)>), (T)>, arg3: $AEColor$$Type)

public "getColor"(): $AEColor
public static "getId"(arg0: $IPartItem$$Type<(never)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$$Type): $IPartItem<(never)>
public static "getNetworkId"(arg0: $IPartItem$$Type<(never)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(never)>
public "asItem"(): $Item
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $AEColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredPartItem$$Type<T> = ($ColoredPartItem<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColoredPartItem$$Original<T> = $ColoredPartItem<(T)>;}
declare module "appeng.items.parts.FacadeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$FacadePart} from "appeng.facade.FacadePart"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$IFacadeItem$$Interface} from "appeng.api.implementations.items.IFacadeItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem} from "appeng.items.AEBaseItem"
import {$IFacadePart, $IFacadePart$$Type} from "appeng.api.parts.IFacadePart"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FacadeItem extends $AEBaseItem implements $IFacadeItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "createPartFromItemStack"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): $FacadePart
public "createFacadeForItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "getTextureBlockState"(arg0: $ItemStack$$Type): $BlockState
public static "canPlaceFacade"(arg0: $IPartHost$$Type, arg1: $IFacadePart$$Type): boolean
public "getTextureItem"(arg0: $ItemStack$$Type): $ItemStack
public static "createFacade"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): $IFacadePart
public "createFacadeForItemUnchecked"(arg0: $ItemStack$$Type): $ItemStack
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadeItem$$Type = ($FacadeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FacadeItem$$Original = $FacadeItem;}
