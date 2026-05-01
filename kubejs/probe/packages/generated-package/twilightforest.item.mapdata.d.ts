declare module "twilightforest.item.mapdata.TFMazeMapData" {
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$MapFrame} from "net.minecraft.world.level.saveddata.maps.MapFrame"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$MapDecoration} from "net.minecraft.world.level.saveddata.maps.MapDecoration"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MapBanner} from "net.minecraft.world.level.saveddata.maps.MapBanner"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SavedData$Factory} from "net.minecraft.world.level.saveddata.SavedData$Factory"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapItemSavedData} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"

export class $TFMazeMapData extends $MapItemSavedData {
 "trackedDecorationCount": integer
 "bannerMarkers": $Map<(StringJS), ($MapBanner)>
 "ore": boolean
 "centerZ": integer
static readonly "TRACKED_DECORATION_LIMIT": integer
 "centerX": integer
 "yCenter": integer
 "frameMarkers": $Map<(StringJS), ($MapFrame)>
readonly "scale": byte
readonly "decorations": $Map<(StringJS), ($MapDecoration)>
 "colors": (byte)[]
readonly "moonlight$customData": $Map
 "moonlight$customDecorations": $Map
static readonly "MAX_SCALE": integer
 "dimension": $ResourceKey<($Level)>

constructor(arg0: integer, arg1: integer, arg2: byte, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ResourceKey$$Type<($Level)>)

public static "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $TFMazeMapData
public static "factory"(): $SavedData$Factory<($MapItemSavedData)>
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getUpdatePacket"(arg0: $MapId$$Type, arg1: $Player$$Type): $Packet<(never)>
public "calculateMapCenter"(arg0: $Level$$Type, arg1: integer, arg2: integer, arg3: integer): void
public static "getMazeMapData"(arg0: $Level$$Type, arg1: StringJS): $TFMazeMapData
public static "getClientMagicMapData"(arg0: StringJS): $TFMazeMapData
public static "registerMazeMapData"(arg0: $Level$$Type, arg1: $TFMazeMapData$$Type, arg2: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TFMazeMapData$$Type = ($TFMazeMapData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TFMazeMapData$$Original = $TFMazeMapData;}
declare module "twilightforest.item.mapdata.TFMagicMapData" {
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$MapFrame} from "net.minecraft.world.level.saveddata.maps.MapFrame"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$MapDecoration} from "net.minecraft.world.level.saveddata.maps.MapDecoration"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MapDecorationType$$Type} from "net.minecraft.world.level.saveddata.maps.MapDecorationType"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MapBanner} from "net.minecraft.world.level.saveddata.maps.MapBanner"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SavedData$Factory} from "net.minecraft.world.level.saveddata.SavedData$Factory"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapItemSavedData} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"

export class $TFMagicMapData extends $MapItemSavedData {
 "trackedDecorationCount": integer
 "bannerMarkers": $Map<(StringJS), ($MapBanner)>
 "centerZ": integer
static readonly "TRACKED_DECORATION_LIMIT": integer
 "centerX": integer
 "frameMarkers": $Map<(StringJS), ($MapFrame)>
readonly "scale": byte
readonly "decorations": $Map<(StringJS), ($MapDecoration)>
 "colors": (byte)[]
readonly "moonlight$customData": $Map
 "moonlight$customDecorations": $Map
static readonly "MAX_SCALE": integer
 "dimension": $ResourceKey<($Level)>
readonly "conqueredStructures": $List<(StringJS)>

constructor(arg0: integer, arg1: integer, arg2: byte, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ResourceKey$$Type<($Level)>)

public static "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $TFMagicMapData
public static "factory"(): $SavedData$Factory<($MapItemSavedData)>
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getUpdatePacket"(arg0: $MapId$$Type, arg1: $Player$$Type): $Packet<(never)>
public static "getMagicMapData"(arg0: $Level$$Type, arg1: StringJS): $TFMagicMapData
public "addTFDecoration"(arg0: $Holder$$Type<($MapDecorationType)>, arg1: $LevelAccessor$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: boolean): void
public static "getClientMagicMapData"(arg0: StringJS): $TFMagicMapData
public static "registerMagicMapData"(arg0: $Level$$Type, arg1: $TFMagicMapData$$Type, arg2: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TFMagicMapData$$Type = ($TFMagicMapData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TFMagicMapData$$Original = $TFMagicMapData;}
