declare module "net.minecraft.core.cauldron.CauldronInteraction" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CauldronInteraction$InteractionMap} from "net.minecraft.core.cauldron.CauldronInteraction$InteractionMap"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $CauldronInteraction$$Interface {

(arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $InteractionHand, arg5: $ItemStack): $ItemInteractionResult$$Type
}

export class $CauldronInteraction implements $CauldronInteraction$$Interface {
static readonly "CODEC": $Codec<($CauldronInteraction$InteractionMap)>
static readonly "LAVA": $CauldronInteraction$InteractionMap
static readonly "FILL_POWDER_SNOW": $CauldronInteraction
static readonly "BANNER": $CauldronInteraction
static readonly "DYED_ITEM": $CauldronInteraction
static readonly "FILL_LAVA": $CauldronInteraction
static readonly "POWDER_SNOW": $CauldronInteraction$InteractionMap
static readonly "SHULKER_BOX": $CauldronInteraction
static readonly "FILL_WATER": $CauldronInteraction
static readonly "INTERACTIONS": $Map<(StringJS), ($CauldronInteraction$InteractionMap)>
static readonly "EMPTY": $CauldronInteraction$InteractionMap
static readonly "WATER": $CauldronInteraction$InteractionMap

 "interact"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $ItemStack$$Type): $ItemInteractionResult
static "fillBucket"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $ItemStack$$Type, arg6: $ItemStack$$Type, arg7: $Predicate$$Type<($BlockState)>, arg8: $SoundEvent$$Type): $ItemInteractionResult
static "bootStrap"(): void
static "addDefaultInteractions"(arg0: $Map$$Type<($Item$$Type), ($CauldronInteraction$$Type)>): void
static "newInteractionMap"(arg0: StringJS): $CauldronInteraction$InteractionMap
static "emptyBucket"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type, arg5: $BlockState$$Type, arg6: $SoundEvent$$Type): $ItemInteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CauldronInteraction$$Type = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $InteractionHand, arg5: $ItemStack) => $ItemInteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CauldronInteraction$$Original = $CauldronInteraction;}
declare module "net.minecraft.core.cauldron.CauldronInteraction$InteractionMap" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CauldronInteraction, $CauldronInteraction$$Type} from "net.minecraft.core.cauldron.CauldronInteraction"
import {$Record} from "java.lang.Record"

export class $CauldronInteraction$InteractionMap extends $Record {
constructor(arg0: StringJS, arg1: $Map$$Type<($Item$$Type), ($CauldronInteraction$$Type)>)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "map"(): $Map<($Item), ($CauldronInteraction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CauldronInteraction$InteractionMap$$Type = ({"map"?: $Map$$Type<($Item$$Type), ($CauldronInteraction$$Type)>, "name"?: StringJS}) | ([map?: $Map$$Type<($Item$$Type), ($CauldronInteraction$$Type)>, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CauldronInteraction$InteractionMap$$Original = $CauldronInteraction$InteractionMap;}
