declare module "appeng.client.render.cablebus.FacadeRenderState" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FacadeRenderState {
constructor(arg0: $BlockState$$Type, arg1: boolean)

public "isTransparent"(): boolean
public "getSourceBlock"(): $BlockState
get "transparent"(): boolean
get "sourceBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadeRenderState$$Type = ($FacadeRenderState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FacadeRenderState$$Original = $FacadeRenderState;}
declare module "appeng.client.render.cablebus.CableBusRenderState" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$FacadeRenderState} from "appeng.client.render.cablebus.FacadeRenderState"
import {$List} from "java.util.List"
import {$EnumMap, $EnumMap$$Type} from "java.util.EnumMap"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$CableCoreType, $CableCoreType$$Type} from "appeng.client.render.cablebus.CableCoreType"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$IPartModel} from "appeng.api.parts.IPartModel"

export class $CableBusRenderState {
static readonly "PROPERTY": $ModelProperty<($CableBusRenderState)>

constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getCableBusAdjacent"(): $EnumSet<($Direction)>
public "getAttachmentConnections"(): $EnumMap<($Direction), (integer)>
public "setCableBusAdjacent"(arg0: $EnumSet$$Type<($Direction$$Type)>): void
public "getAttachments"(): $EnumMap<($Direction), ($IPartModel)>
public "setChannelsOnSide"(arg0: $EnumMap$$Type<($Direction$$Type), (integer)>): void
public "getCableColor"(): $AEColor
public "getChannelsOnSide"(): $EnumMap<($Direction), (integer)>
public "getConnectionTypes"(): $EnumMap<($Direction), ($AECableType)>
public "setCoreType"(arg0: $CableCoreType$$Type): void
public "getBoundingBoxes"(): $List<($AABB)>
public "setCableType"(arg0: $AECableType$$Type): void
public "getPartModelData"(): $EnumMap<($Direction), ($ModelData)>
public "getCableType"(): $AECableType
public "setCableColor"(arg0: $AEColor$$Type): void
public "setConnectionTypes"(arg0: $EnumMap$$Type<($Direction$$Type), ($AECableType$$Type)>): void
public "getCoreType"(): $CableCoreType
public "setPos"(arg0: $BlockPos$$Type): void
public "getFacades"(): $EnumMap<($Direction), ($FacadeRenderState)>
public "getPos"(): $BlockPos
get "cableBusAdjacent"(): $EnumSet<($Direction)>
get "attachmentConnections"(): $EnumMap<($Direction), (integer)>
set "cableBusAdjacent"(value: $EnumSet$$Type<($Direction$$Type)>)
get "attachments"(): $EnumMap<($Direction), ($IPartModel)>
set "channelsOnSide"(value: $EnumMap$$Type<($Direction$$Type), (integer)>)
get "cableColor"(): $AEColor
get "channelsOnSide"(): $EnumMap<($Direction), (integer)>
get "connectionTypes"(): $EnumMap<($Direction), ($AECableType)>
set "coreType"(value: $CableCoreType$$Type)
get "boundingBoxes"(): $List<($AABB)>
set "cableType"(value: $AECableType$$Type)
get "partModelData"(): $EnumMap<($Direction), ($ModelData)>
get "cableType"(): $AECableType
set "cableColor"(value: $AEColor$$Type)
set "connectionTypes"(value: $EnumMap$$Type<($Direction$$Type), ($AECableType$$Type)>)
get "coreType"(): $CableCoreType
set "pos"(value: $BlockPos$$Type)
get "facades"(): $EnumMap<($Direction), ($FacadeRenderState)>
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusRenderState$$Type = ($CableBusRenderState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CableBusRenderState$$Original = $CableBusRenderState;}
declare module "appeng.client.render.cablebus.CableCoreType" {
import {$AECableType$$Type} from "appeng.api.util.AECableType"
import {$AEColor$$Type} from "appeng.api.util.AEColor"
import {$Enum} from "java.lang.Enum"
import {$Material} from "net.minecraft.client.resources.model.Material"

export class $CableCoreType extends $Enum<($CableCoreType)> {
static readonly "GLASS": $CableCoreType
static readonly "DENSE": $CableCoreType
static readonly "COVERED": $CableCoreType

public static "values"(): ($CableCoreType)[]
public static "valueOf"(arg0: StringJS): $CableCoreType
public "getTexture"(arg0: $AEColor$$Type): $Material
public static "fromCableType"(arg0: $AECableType$$Type): $CableCoreType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableCoreType$$Type = (("glass") | ("covered") | ("dense"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CableCoreType$$Original = $CableCoreType;}
