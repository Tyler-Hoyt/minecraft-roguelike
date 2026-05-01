declare module "com.hollingsworth.arsnouveau.client.particle.HelixParticleType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HelixParticleTypeData} from "com.hollingsworth.arsnouveau.client.particle.HelixParticleTypeData"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $HelixParticleType extends $ParticleType<($HelixParticleTypeData)> {
constructor()

public "codec"(): $MapCodec<($HelixParticleTypeData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($HelixParticleTypeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HelixParticleType$$Type = ($HelixParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HelixParticleType$$Original = $HelixParticleType;}
declare module "com.hollingsworth.arsnouveau.client.particle.ColorPos" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export class $ColorPos {
readonly "color": $ParticleColor
readonly "pos": $Vec3

constructor(arg0: $Vec3$$Type, arg1: $ParticleColor$$Type)
constructor(arg0: $Vec3$$Type)

public static "fromTag"(arg0: $CompoundTag$$Type): $ColorPos
public static "centered"(arg0: $BlockPos$$Type): $ColorPos
public static "centered"(arg0: $BlockPos$$Type, arg1: $ParticleColor$$Type): $ColorPos
public "toTag"(): $CompoundTag
public static "centeredAbove"(arg0: $BlockPos$$Type, arg1: $ParticleColor$$Type): $ColorPos
public static "centeredAbove"(arg0: $BlockPos$$Type): $ColorPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorPos$$Type = ($ColorPos);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorPos$$Original = $ColorPos;}
declare module "com.hollingsworth.arsnouveau.client.particle.ParticleColor$IntWrapper" {
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

/**
 * 
 * @deprecated
 */
export class $ParticleColor$IntWrapper implements $Cloneable$$Interface {
 "r": integer
 "b": integer
 "g": integer

constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: $ParticleColor$$Type)

public "clone"(): $ParticleColor$IntWrapper
public "toParticleColor"(): $ParticleColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleColor$IntWrapper$$Type = ($ParticleColor$IntWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleColor$IntWrapper$$Original = $ParticleColor$IntWrapper;}
declare module "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias" {
import {$Record} from "java.lang.Record"

export class $AliasProvider$Alias extends $Record {
constructor(key: StringJS, name: StringJS)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): StringJS
public "toTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AliasProvider$Alias$$Type = ({"key"?: StringJS, "name"?: StringJS}) | ([key?: StringJS, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AliasProvider$Alias$$Original = $AliasProvider$Alias;}
declare module "com.hollingsworth.arsnouveau.client.gui.radial_menu.SecondaryIconPosition" {
import {$Enum} from "java.lang.Enum"

export class $SecondaryIconPosition extends $Enum<($SecondaryIconPosition)> {
static readonly "NORTH": $SecondaryIconPosition
static readonly "WEST": $SecondaryIconPosition
static readonly "SOUTH": $SecondaryIconPosition
static readonly "EAST": $SecondaryIconPosition

public static "values"(): ($SecondaryIconPosition)[]
public static "valueOf"(arg0: StringJS): $SecondaryIconPosition
public static "getNextPositon"(arg0: $SecondaryIconPosition$$Type): $SecondaryIconPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecondaryIconPosition$$Type = (("north") | ("east") | ("south") | ("west"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SecondaryIconPosition$$Original = $SecondaryIconPosition;}
declare module "com.hollingsworth.arsnouveau.client.gui.radial_menu.DrawCallback" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $DrawCallback$$Interface<T> {

(arg0: T, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): void
}

export class $DrawCallback<T> implements $DrawCallback$$Interface {
 "accept"(arg0: T, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawCallback$$Type<T> = ((arg0: T, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: integer, arg5: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawCallback$$Original<T> = $DrawCallback<(T)>;}
declare module "com.hollingsworth.arsnouveau.client.particle.GlowParticleType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ColorParticleTypeData} from "com.hollingsworth.arsnouveau.client.particle.ColorParticleTypeData"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $GlowParticleType extends $ParticleType<($ColorParticleTypeData)> {
constructor()

public "codec"(): $MapCodec<($ColorParticleTypeData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ColorParticleTypeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlowParticleType$$Type = ($GlowParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlowParticleType$$Original = $GlowParticleType;}
declare module "com.hollingsworth.arsnouveau.client.gui.radial_menu.RadialMenu" {
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List, $List$$Type} from "java.util.List"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$RadialMenuSlot, $RadialMenuSlot$$Type} from "com.hollingsworth.arsnouveau.client.gui.radial_menu.RadialMenuSlot"
import {$SecondaryIconPosition, $SecondaryIconPosition$$Type} from "com.hollingsworth.arsnouveau.client.gui.radial_menu.SecondaryIconPosition"
import {$DrawCallback$$Type} from "com.hollingsworth.arsnouveau.client.gui.radial_menu.DrawCallback"

export class $RadialMenu<T> {
constructor(arg0: $IntConsumer$$Type, arg1: $List$$Type<($RadialMenuSlot$$Type<(T)>)>, arg2: $DrawCallback$$Type<(T)>, arg3: integer)
constructor(arg0: $IntConsumer$$Type, arg1: $List$$Type<($RadialMenuSlot$$Type<(T)>)>, arg2: $SecondaryIconPosition$$Type, arg3: $DrawCallback$$Type<(T)>, arg4: integer)

public "getOffset"(): integer
public "getSecondaryIconStartingPosition"(): $SecondaryIconPosition
public "drawIcon"(arg0: T, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "setCurrentSlot"(arg0: integer): void
public "isShowMoreSecondaryItems"(): boolean
public "getRadialMenuSlots"(): $List<($RadialMenuSlot<(T)>)>
get "offset"(): integer
get "secondaryIconStartingPosition"(): $SecondaryIconPosition
set "currentSlot"(value: integer)
get "showMoreSecondaryItems"(): boolean
get "radialMenuSlots"(): $List<($RadialMenuSlot<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadialMenu$$Type<T> = ($RadialMenu<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RadialMenu$$Original<T> = $RadialMenu<(T)>;}
declare module "com.hollingsworth.arsnouveau.client.particle.ColoredDynamicTypeData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions$$Interface} from "net.minecraft.core.particles.ParticleOptions"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export class $ColoredDynamicTypeData implements $ParticleOptions$$Interface {
static readonly "CODEC": $MapCodec<($ColoredDynamicTypeData)>
 "color": $ParticleColor
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ColoredDynamicTypeData)>

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: integer)
constructor(arg0: $ParticleType$$Type<($ColoredDynamicTypeData$$Type)>, arg1: $ParticleColor$$Type, arg2: float, arg3: integer)

public "getType"(): $ParticleType<(never)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $ColoredDynamicTypeData
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $ColoredDynamicTypeData$$Type): void
get "type"(): $ParticleType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredDynamicTypeData$$Type = ($ColoredDynamicTypeData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColoredDynamicTypeData$$Original = $ColoredDynamicTypeData;}
declare module "com.hollingsworth.arsnouveau.client.jei.AliasProvider" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$AliasProvider$Alias, $AliasProvider$Alias$$Type} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias"

export interface $AliasProvider$$Interface {

(): $Collection$$Type<($AliasProvider$Alias$$Type)>
get "aliases"(): $Collection<($AliasProvider$Alias)>
}

export class $AliasProvider implements $AliasProvider$$Interface {
 "getAliases"(): $Collection<($AliasProvider$Alias)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AliasProvider$$Type = (() => $Collection$$Type<($AliasProvider$Alias$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AliasProvider$$Original = $AliasProvider;}
declare module "com.hollingsworth.arsnouveau.client.gui.radial_menu.RadialMenuSlot" {
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $RadialMenuSlot<T> extends $Record {
constructor(arg0: StringJS, arg1: T)
constructor(slotName: StringJS, primarySlotIcon: T, secondarySlotIcons: $List$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "primarySlotIcon"(): T
public "secondarySlotIcons"(): $List<(T)>
public "slotName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadialMenuSlot$$Type<T> = ({"slotName"?: StringJS, "secondarySlotIcons"?: $List$$Type<(T)>, "primarySlotIcon"?: T}) | ([slotName?: StringJS, secondarySlotIcons?: $List$$Type<(T)>, primarySlotIcon?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RadialMenuSlot$$Original<T> = $RadialMenuSlot<(T)>;}
declare module "com.hollingsworth.arsnouveau.client.particle.ColorParticleTypeData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions$$Interface} from "net.minecraft.core.particles.ParticleOptions"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export class $ColorParticleTypeData implements $ParticleOptions$$Interface {
static readonly "CODEC": $MapCodec<($ColorParticleTypeData)>
 "color": $ParticleColor
 "size": float
 "disableDepthTest": boolean
 "alpha": float
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ColorParticleTypeData)>
 "age": integer

constructor(arg0: $ParticleType$$Type<($ColorParticleTypeData$$Type)>, arg1: $ParticleColor$$Type, arg2: boolean)
constructor(arg0: $ParticleColor$$Type, arg1: boolean, arg2: float, arg3: float, arg4: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: boolean, arg4: float, arg5: float, arg6: integer)
constructor(arg0: $ParticleType$$Type<($ColorParticleTypeData$$Type)>, arg1: $ParticleColor$$Type, arg2: boolean, arg3: float, arg4: float, arg5: integer)

public "getType"(): $ParticleType<($ColorParticleTypeData)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $ColorParticleTypeData
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $ColorParticleTypeData$$Type): void
get "type"(): $ParticleType<($ColorParticleTypeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorParticleTypeData$$Type = ($ColorParticleTypeData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorParticleTypeData$$Original = $ColorParticleTypeData;}
declare module "com.hollingsworth.arsnouveau.client.particle.HelixParticleTypeData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ColorParticleTypeData} from "com.hollingsworth.arsnouveau.client.particle.ColorParticleTypeData"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export class $HelixParticleTypeData extends $ColorParticleTypeData {
static readonly "CODEC": $MapCodec<($HelixParticleTypeData)>
 "color": $ParticleColor
 "size": float
 "disableDepthTest": boolean
 "alpha": float
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($HelixParticleTypeData)>
 "age": integer

constructor(arg0: $ParticleType$$Type<($HelixParticleTypeData$$Type)>, arg1: $ParticleColor$$Type, arg2: boolean, arg3: float, arg4: float, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float)
constructor(arg0: float, arg1: float, arg2: float, arg3: boolean, arg4: float, arg5: float, arg6: integer, arg7: float, arg8: float, arg9: float, arg10: float)
constructor(arg0: $ParticleType$$Type<($HelixParticleTypeData$$Type)>, arg1: $ParticleColor$$Type, arg2: boolean, arg3: float, arg4: float, arg5: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: boolean, arg4: float, arg5: float, arg6: integer)
constructor(arg0: $ParticleColor$$Type, arg1: boolean, arg2: float, arg3: float, arg4: integer)
constructor(arg0: $ParticleType$$Type<($HelixParticleTypeData$$Type)>, arg1: $ParticleColor$$Type, arg2: boolean, arg3: float, arg4: float, arg5: float, arg6: float)

public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $HelixParticleTypeData
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $HelixParticleTypeData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HelixParticleTypeData$$Type = ($HelixParticleTypeData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HelixParticleTypeData$$Original = $HelixParticleTypeData;}
declare module "com.hollingsworth.arsnouveau.client.particle.SparkleParticleType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ColoredDynamicTypeData} from "com.hollingsworth.arsnouveau.client.particle.ColoredDynamicTypeData"

export class $SparkleParticleType extends $ParticleType<($ColoredDynamicTypeData)> {
constructor()

public "codec"(): $MapCodec<($ColoredDynamicTypeData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ColoredDynamicTypeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SparkleParticleType$$Type = ($SparkleParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SparkleParticleType$$Original = $SparkleParticleType;}
declare module "com.hollingsworth.arsnouveau.client.particle.LineParticleType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ColoredDynamicTypeData} from "com.hollingsworth.arsnouveau.client.particle.ColoredDynamicTypeData"

export class $LineParticleType extends $ParticleType<($ColoredDynamicTypeData)> {
constructor()

public "codec"(): $MapCodec<($ColoredDynamicTypeData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ColoredDynamicTypeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LineParticleType$$Type = ($LineParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LineParticleType$$Original = $LineParticleType;}
declare module "com.hollingsworth.arsnouveau.client.particle.ParticleColor" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$ParticleColor$IntWrapper} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor$IntWrapper"
import {$IParticleColor$$Interface} from "com.hollingsworth.arsnouveau.api.particle.IParticleColor"
import {$Random} from "java.util.Random"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ParticleColor implements $IParticleColor$$Interface, $Cloneable$$Interface {
static readonly "WHITE": $ParticleColor
static readonly "GRAY": $ParticleColor
static readonly "CODEC": $MapCodec<($ParticleColor)>
static readonly "BLUE": $ParticleColor
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($ParticleColor)>
static readonly "FROM_HIGHLIGHT": $ParticleColor
static readonly "PURPLE": $ParticleColor
static readonly "TO_HIGHLIGHT": $ParticleColor
static readonly "GREEN": $ParticleColor
static readonly "RED": $ParticleColor
static readonly "random": $Random
static readonly "PINK": $ParticleColor
static readonly "PRESET_COLORS": $List<($ParticleColor)>
static readonly "LIGHT_GRAY": $ParticleColor
static readonly "LIGHT_BLUE": $ParticleColor
static readonly "LIME": $ParticleColor
static readonly "MAGENTA": $ParticleColor
static readonly "BLACK": $ParticleColor
static readonly "ID": $ResourceLocation
static readonly "YELLOW": $ParticleColor
static readonly "CYAN": $ParticleColor
static readonly "DEFAULT": $ParticleColor
static readonly "BROWN": $ParticleColor
static readonly "ORANGE": $ParticleColor

constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: $CompoundTag$$Type)
constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: integer, arg1: integer, arg2: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public "toWrapper"(): $ParticleColor$IntWrapper
public "getColor"(): integer
public "getRed"(): float
public "getBlue"(): float
public "getGreen"(): float
public static "makeRandomColor"(arg0: integer, arg1: integer, arg2: integer, arg3: $RandomSource$$Type): $ParticleColor
public "euclideanDistance"(arg0: $ParticleColor$$Type): double
public "serialize"(): $CompoundTag
public "getRegistryName"(): $ResourceLocation
public "getBlueInt"(): integer
public "nextColor"(arg0: integer): $ParticleColor
public "toHex"(): StringJS
public static "fromInt"(arg0: integer): $ParticleColor
public static "fromHex"(arg0: StringJS): $ParticleColor
public "getRedInt"(): integer
public static "defaultParticleColor"(): $ParticleColor
public "getOppositeColor"(): $ParticleColor
public "getGreenInt"(): integer
public "transition"(arg0: integer): $ParticleColor
get "color"(): integer
get "red"(): float
get "blue"(): float
get "green"(): float
get "registryName"(): $ResourceLocation
get "blueInt"(): integer
get "redInt"(): integer
get "oppositeColor"(): $ParticleColor
get "greenInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleColor$$Type = ($ParticleColor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleColor$$Original = $ParticleColor;}
