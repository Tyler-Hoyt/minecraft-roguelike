declare module "appeng.facade.FacadePart" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$Item} from "net.minecraft.world.item.Item"
import {$IFacadePart$$Interface} from "appeng.api.parts.IFacadePart"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FacadePart implements $IFacadePart$$Interface {
constructor(arg0: $BlockState$$Type, arg1: $Direction$$Type)

public "getItem"(): $Item
public "getBlockState"(): $BlockState
public "getTextureItem"(): $ItemStack
public "getSide"(): $Direction
public "getItemStack"(): $ItemStack
public "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "getBoxes"(arg0: $IPartCollisionHelper$$Type, arg1: boolean): void
public "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
get "item"(): $Item
get "blockState"(): $BlockState
get "textureItem"(): $ItemStack
get "side"(): $Direction
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadePart$$Type = ($FacadePart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FacadePart$$Original = $FacadePart;}
