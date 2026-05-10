declare module "com.mojang.blaze3d.audio.Channel" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$AudioStream$$Type} from "net.minecraft.client.sounds.AudioStream"
import {$SoundBuffer$$Type} from "com.mojang.blaze3d.audio.SoundBuffer"

export class $Channel {
static readonly "BUFFER_DURATION_SECONDS": integer

public "stop"(): void
public "destroy"(): void
public "playing"(): boolean
public "stopped"(): boolean
public "setPitch"(arg0: float): void
public "play"(): void
public "pause"(): void
public "setRelative"(arg0: boolean): void
public "setSelfPosition"(arg0: $Vec3$$Type): void
public "linearAttenuation"(arg0: float): void
public "disableAttenuation"(): void
public "attachBufferStream"(arg0: $AudioStream$$Type): void
public "attachStaticBuffer"(arg0: $SoundBuffer$$Type): void
public "unpause"(): void
public "setVolume"(arg0: float): void
public "setLooping"(arg0: boolean): void
public "updateStream"(): void
set "pitch"(value: float)
set "relative"(value: boolean)
set "selfPosition"(value: $Vec3$$Type)
set "volume"(value: float)
set "looping"(value: boolean)
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

public "releaseAlBuffer"(): $OptionalInt
public "discardAlBuffer"(): void
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
