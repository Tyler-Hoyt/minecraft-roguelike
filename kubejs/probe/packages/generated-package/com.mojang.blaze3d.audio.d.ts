declare module "com.mojang.blaze3d.audio.Channel" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$AudioStream$$Type} from "net.minecraft.client.sounds.AudioStream"
import {$SoundBuffer$$Type} from "com.mojang.blaze3d.audio.SoundBuffer"

export class $Channel {
static readonly "BUFFER_DURATION_SECONDS": integer

public "stop"(): void
public "destroy"(): void
public "pause"(): void
public "setVolume"(arg0: float): void
public "setLooping"(arg0: boolean): void
public "stopped"(): boolean
public "setPitch"(arg0: float): void
public "updateStream"(): void
public "linearAttenuation"(arg0: float): void
public "setSelfPosition"(arg0: $Vec3$$Type): void
public "attachBufferStream"(arg0: $AudioStream$$Type): void
public "attachStaticBuffer"(arg0: $SoundBuffer$$Type): void
public "disableAttenuation"(): void
public "play"(): void
public "unpause"(): void
public "setRelative"(arg0: boolean): void
public "playing"(): boolean
set "volume"(value: float)
set "looping"(value: boolean)
set "pitch"(value: float)
set "selfPosition"(value: $Vec3$$Type)
set "relative"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$$Type = ($Channel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Channel$$Original = $Channel;}
declare module "com.mojang.blaze3d.audio.ListenerTransform" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Record} from "java.lang.Record"

export class $ListenerTransform extends $Record {
static readonly "INITIAL": $ListenerTransform

constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $Vec3
public "right"(): $Vec3
public "up"(): $Vec3
public "forward"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListenerTransform$$Type = ({"position"?: $Vec3$$Type, "forward"?: $Vec3$$Type, "up"?: $Vec3$$Type}) | ([position?: $Vec3$$Type, forward?: $Vec3$$Type, up?: $Vec3$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListenerTransform$$Original = $ListenerTransform;}
declare module "com.mojang.blaze3d.audio.SoundBuffer" {
import {$AudioFormat$$Type} from "javax.sound.sampled.AudioFormat"
import {$OptionalInt} from "java.util.OptionalInt"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $SoundBuffer {
constructor(arg0: $ByteBuffer$$Type, arg1: $AudioFormat$$Type)

public "discardAlBuffer"(): void
public "releaseAlBuffer"(): $OptionalInt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundBuffer$$Type = ($SoundBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundBuffer$$Original = $SoundBuffer;}
declare module "com.mojang.blaze3d.audio.Library$Pool" {
import {$Enum} from "java.lang.Enum"

export class $Library$Pool extends $Enum<($Library$Pool)> {
static readonly "STREAMING": $Library$Pool
static readonly "STATIC": $Library$Pool

public static "values"(): ($Library$Pool)[]
public static "valueOf"(arg0: StringJS): $Library$Pool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Library$Pool$$Type = (("static") | ("streaming"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Library$Pool$$Original = $Library$Pool;}
declare module "com.mojang.blaze3d.audio.Library" {
import {$Library$Pool$$Type} from "com.mojang.blaze3d.audio.Library$Pool"
import {$List} from "java.util.List"
import {$Listener} from "com.mojang.blaze3d.audio.Listener"
import {$Channel, $Channel$$Type} from "com.mojang.blaze3d.audio.Channel"

export class $Library {
constructor()

public "init"(arg0: StringJS, arg1: boolean): void
public "cleanup"(): void
public "getDebugString"(): StringJS
public "releaseChannel"(arg0: $Channel$$Type): void
public "acquireChannel"(arg0: $Library$Pool$$Type): $Channel
public "getAvailableSoundDevices"(): $List<(StringJS)>
public "getCurrentDeviceName"(): StringJS
public "hasDefaultDeviceChanged"(): boolean
public static "getDefaultDeviceName"(): StringJS
public "isCurrentDeviceDisconnected"(): boolean
public "getListener"(): $Listener
get "debugString"(): StringJS
get "availableSoundDevices"(): $List<(StringJS)>
get "currentDeviceName"(): StringJS
public static get "defaultDeviceName"(): StringJS
get "currentDeviceDisconnected"(): boolean
get "listener"(): $Listener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Library$$Type = ($Library);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Library$$Original = $Library;}
