declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.DisplaySide" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $DisplaySide extends $Enum<($DisplaySide)> implements $StringRepresentable$$Interface {
static readonly "LEFT": $DisplaySide
static readonly "FRONT": $DisplaySide
static readonly "RIGHT": $DisplaySide

public static "values"(): ($DisplaySide)[]
public static "valueOf"(arg0: StringJS): $DisplaySide
public "next"(): $DisplaySide
public "previous"(): $DisplaySide
public "getSerializedName"(): StringJS
public static "fromName"(arg0: StringJS): $DisplaySide
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplaySide$$Type = (("front") | ("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisplaySide$$Original = $DisplaySide;}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$DisplayItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DisplaySide, $DisplaySide$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.DisplaySide"

export class $RenderInfo$DisplayItem {
constructor(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: $DisplaySide$$Type)

public "getItem"(): $ItemStack
public "getSlotIndex"(): integer
public "getDisplaySide"(): $DisplaySide
public "getRotation"(): integer
get "item"(): $ItemStack
get "slotIndex"(): integer
get "displaySide"(): $DisplaySide
get "rotation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$DisplayItem$$Type = ($RenderInfo$DisplayItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderInfo$DisplayItem$$Original = $RenderInfo$DisplayItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo" {
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade$TankRenderInfo"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeRenderData, $IUpgradeRenderData$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.IUpgradeRenderData"
import {$RenderInfo$DisplayItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$DisplayItem"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$UpgradeRenderDataType, $UpgradeRenderDataType$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.UpgradeRenderDataType"
import {$TankPosition, $TankPosition$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.TankPosition"
import {$RenderInfo$ItemDisplayRenderInfo} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$ItemDisplayRenderInfo"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade$BatteryRenderInfo"

export class $RenderInfo {
public "validate"(arg0: $IStorageWrapper$$Type, arg1: $Level$$Type): boolean
public "getUpgradeRenderData"<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType$$Type<(T)>): $Optional<(T)>
public "getUpgradeRenderData"(): $Map<($UpgradeRenderDataType<(never)>), ($IUpgradeRenderData)>
/**
 * 
 * @deprecated
 */
public "setDisplayItemsChangeListener"(arg0: $Consumer$$Type<($RenderInfo)>): void
public "getNbt"(): $CompoundTag
public "showsCountsAndFillRatios"(): boolean
public "setBatteryRenderInfo"(arg0: $IRenderedBatteryUpgrade$BatteryRenderInfo$$Type): void
public "removeAllUpgradeRenderData"(): void
public "getBatteryRenderInfo"(): $Optional<($IRenderedBatteryUpgrade$BatteryRenderInfo)>
public "getUpgradeItems"(): $List<($ItemStack)>
public "deserializeFrom"(arg0: $CompoundTag$$Type): void
public "resetUpgradeInfo"(arg0: boolean): void
public "setTankRenderInfo"(arg0: $TankPosition$$Type, arg1: $IRenderedTankUpgrade$TankRenderInfo$$Type): void
public "setUpgradeItems"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "getTankRenderInfos"(): $Map<($TankPosition), ($IRenderedTankUpgrade$TankRenderInfo)>
public "removeUpgradeRenderData"(arg0: $UpgradeRenderDataType$$Type<(never)>): void
public "setUpgradeRenderData"<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType$$Type<(T)>, arg1: T): void
public "getItemDisplayRenderInfo"(): $RenderInfo$ItemDisplayRenderInfo
public "setRenderUpdateChangeListener"(arg0: $Consumer$$Type<($RenderInfo)>): void
public "refreshDisplayItemsAndInaccessibleSlots"(arg0: $List$$Type<($RenderInfo$DisplayItem$$Type)>, arg1: $List$$Type<(integer)>): void
public "refreshItemDisplayRenderInfo"(arg0: $List$$Type<($RenderInfo$DisplayItem$$Type)>, arg1: $List$$Type<(integer)>, arg2: $List$$Type<(integer)>, arg3: $List$$Type<(integer)>, arg4: $List$$Type<(float)>): void
public "refreshSlotCountsFillRatiosAndInfiniteSlots"(arg0: $List$$Type<(integer)>, arg1: $List$$Type<(float)>, arg2: $List$$Type<(integer)>): void
get "upgradeRenderData"(): $Map<($UpgradeRenderDataType<(never)>), ($IUpgradeRenderData)>
set "displayItemsChangeListener"(value: $Consumer$$Type<($RenderInfo)>)
get "nbt"(): $CompoundTag
set "batteryRenderInfo"(value: $IRenderedBatteryUpgrade$BatteryRenderInfo$$Type)
get "batteryRenderInfo"(): $Optional<($IRenderedBatteryUpgrade$BatteryRenderInfo)>
get "upgradeItems"(): $List<($ItemStack)>
set "upgradeItems"(value: $List$$Type<($ItemStack$$Type)>)
get "tankRenderInfos"(): $Map<($TankPosition), ($IRenderedTankUpgrade$TankRenderInfo)>
get "itemDisplayRenderInfo"(): $RenderInfo$ItemDisplayRenderInfo
set "renderUpdateChangeListener"(value: $Consumer$$Type<($RenderInfo)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$$Type = ($RenderInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderInfo$$Original = $RenderInfo;}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$ItemDisplayRenderInfo" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$RenderInfo$DisplayItem} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$DisplayItem"

export class $RenderInfo$ItemDisplayRenderInfo {
static readonly "SLOT_FILL_RATIOS_TAG": StringJS
static readonly "SLOT_COUNTS_TAG": StringJS

constructor()

public "getInfiniteSlots"(): $List<(integer)>
public "getSlotCounts"(): $List<(integer)>
public "getDisplayItem"(): $Optional<($RenderInfo$DisplayItem)>
public "serialize"(): $CompoundTag
public "getDisplayItems"(): $List<($RenderInfo$DisplayItem)>
public "getSlotFillRatios"(): $List<(float)>
public "getInaccessibleSlots"(): $List<(integer)>
public static "deserialize"(arg0: $CompoundTag$$Type): $RenderInfo$ItemDisplayRenderInfo
get "infiniteSlots"(): $List<(integer)>
get "slotCounts"(): $List<(integer)>
get "displayItem"(): $Optional<($RenderInfo$DisplayItem)>
get "displayItems"(): $List<($RenderInfo$DisplayItem)>
get "slotFillRatios"(): $List<(float)>
get "inaccessibleSlots"(): $List<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$ItemDisplayRenderInfo$$Type = ($RenderInfo$ItemDisplayRenderInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderInfo$ItemDisplayRenderInfo$$Original = $RenderInfo$ItemDisplayRenderInfo;}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.UpgradeRenderDataType" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$Function$$Type} from "java.util.function.Function"
import {$Class$$Type} from "java.lang.Class"
import {$IUpgradeRenderData, $IUpgradeRenderData$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.IUpgradeRenderData"

export class $UpgradeRenderDataType<T extends $IUpgradeRenderData> {
constructor(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Function$$Type<($CompoundTag), (T)>)

public "getName"(): StringJS
public "cast"(arg0: $IUpgradeRenderData$$Type): $Optional<(T)>
public "deserialize"(arg0: $CompoundTag$$Type): T
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeRenderDataType$$Type<T> = ($UpgradeRenderDataType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeRenderDataType$$Original<T> = $UpgradeRenderDataType<(T)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.TankPosition" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $TankPosition extends $Enum<($TankPosition)> implements $StringRepresentable$$Interface {
static readonly "LEFT": $TankPosition
static readonly "RIGHT": $TankPosition

public static "values"(): ($TankPosition)[]
public static "valueOf"(arg0: StringJS): $TankPosition
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankPosition$$Type = (("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankPosition$$Original = $TankPosition;}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.IUpgradeRenderData" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $IUpgradeRenderData$$Interface {

(): $CompoundTag$$Type
}

export class $IUpgradeRenderData implements $IUpgradeRenderData$$Interface {
 "serializeNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeRenderData$$Type = (() => $CompoundTag$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeRenderData$$Original = $IUpgradeRenderData;}
