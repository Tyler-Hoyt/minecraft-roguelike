declare module "net.minecraft.network.TickablePacketListener" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$Exception$$Type} from "java.lang.Exception"
import {$PacketListener$$Interface} from "net.minecraft.network.PacketListener"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"

export interface $TickablePacketListener$$Interface extends $PacketListener$$Interface {
get "acceptingMessages"(): boolean
}

export class $TickablePacketListener implements $TickablePacketListener$$Interface {
 "tick"(): void
 "protocol"(): $ConnectionProtocol
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickablePacketListener$$Type = ($TickablePacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickablePacketListener$$Original = $TickablePacketListener;}
declare module "net.minecraft.network.ConnectionProtocol" {
import {$Enum} from "java.lang.Enum"

export class $ConnectionProtocol extends $Enum<($ConnectionProtocol)> {
static readonly "PLAY": $ConnectionProtocol
static readonly "STATUS": $ConnectionProtocol
static readonly "CONFIGURATION": $ConnectionProtocol
static readonly "LOGIN": $ConnectionProtocol
static readonly "HANDSHAKING": $ConnectionProtocol

public static "values"(): ($ConnectionProtocol)[]
public static "valueOf"(arg0: StringJS): $ConnectionProtocol
public "id"(): StringJS
public "isPlay"(): boolean
public "isConfiguration"(): boolean
get "play"(): boolean
get "configuration"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionProtocol$$Type = (("handshaking") | ("play") | ("status") | ("login") | ("configuration"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectionProtocol$$Original = $ConnectionProtocol;}
declare module "net.minecraft.network.PacketSendListener" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Runnable$$Type} from "java.lang.Runnable"

export interface $PacketSendListener$$Interface {
}

export class $PacketSendListener implements $PacketSendListener$$Interface {
static "thenRun"(arg0: $Runnable$$Type): $PacketSendListener
 "onSuccess"(): void
 "onFailure"(): $Packet<(never)>
static "exceptionallySend"(arg0: $Supplier$$Type<($Packet$$Type<(never)>)>): $PacketSendListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketSendListener$$Type = ($PacketSendListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PacketSendListener$$Original = $PacketSendListener;}
declare module "net.minecraft.network.ProtocolInfo" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BundlerInfo} from "net.minecraft.network.protocol.BundlerInfo"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$PacketListener} from "net.minecraft.network.PacketListener"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export interface $ProtocolInfo$$Interface<T extends $PacketListener> {
}

export class $ProtocolInfo<T extends $PacketListener> implements $ProtocolInfo$$Interface {
 "id"(): $ConnectionProtocol
 "bundlerInfo"(): $BundlerInfo
 "codec"(): $StreamCodec<($ByteBuf), ($Packet<(T)>)>
 "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtocolInfo$$Type<T> = ($ProtocolInfo<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProtocolInfo$$Original<T> = $ProtocolInfo<(T)>;}
declare module "net.minecraft.network.ClientboundPacketListener" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$Exception$$Type} from "java.lang.Exception"
import {$PacketListener$$Interface} from "net.minecraft.network.PacketListener"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"

export interface $ClientboundPacketListener$$Interface extends $PacketListener$$Interface {
get "acceptingMessages"(): boolean
}

export class $ClientboundPacketListener implements $ClientboundPacketListener$$Interface {
 "flow"(): $PacketFlow
 "protocol"(): $ConnectionProtocol
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPacketListener$$Type = ($ClientboundPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientboundPacketListener$$Original = $ClientboundPacketListener;}
declare module "net.minecraft.network.Connection" {
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$DefaultEventLoopGroup} from "io.netty.channel.DefaultEventLoopGroup"
import {$PacketListener, $PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$ClientLoginPacketListener$$Type} from "net.minecraft.network.protocol.login.ClientLoginPacketListener"
import {$OwoClientConnectionExtension$$Interface} from "io.wispforest.owo.network.OwoClientConnectionExtension"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ProtocolInfo, $ProtocolInfo$$Type} from "net.minecraft.network.ProtocolInfo"
import {$ChannelFuture} from "io.netty.channel.ChannelFuture"
import {$Supplier} from "java.util.function.Supplier"
import {$NioEventLoopGroup} from "io.netty.channel.nio.NioEventLoopGroup"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerboundPacketListener} from "net.minecraft.network.ServerboundPacketListener"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$BandwidthDebugMonitor$$Type} from "net.minecraft.network.BandwidthDebugMonitor"
import {$ClientboundPacketListener, $ClientboundPacketListener$$Type} from "net.minecraft.network.ClientboundPacketListener"
import {$ClientStatusPacketListener$$Type} from "net.minecraft.network.protocol.status.ClientStatusPacketListener"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$LocalSampleLogger$$Type} from "net.minecraft.util.debugchart.LocalSampleLogger"
import {$ChannelPipeline$$Type} from "io.netty.channel.ChannelPipeline"
import {$PacketSendListener$$Type} from "net.minecraft.network.PacketSendListener"
import {$EpollEventLoopGroup} from "io.netty.channel.epoll.EpollEventLoopGroup"
import {$ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"
import {$Channel} from "io.netty.channel.Channel"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SimpleChannelInboundHandler} from "io.netty.channel.SimpleChannelInboundHandler"
import {$Cipher$$Type} from "javax.crypto.Cipher"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Marker} from "org.slf4j.Marker"
import {$InetSocketAddress$$Type} from "java.net.InetSocketAddress"

export class $Connection extends $SimpleChannelInboundHandler<($Packet<(never)>)> implements $OwoClientConnectionExtension$$Interface {
static readonly "PACKET_MARKER": $Marker
static readonly "PACKET_SENT_MARKER": $Marker
static readonly "NETWORK_WORKER_GROUP": $Supplier<($NioEventLoopGroup)>
static readonly "PACKET_RECEIVED_MARKER": $Marker
static readonly "LOCAL_WORKER_GROUP": $Supplier<($DefaultEventLoopGroup)>
static readonly "ROOT_MARKER": $Marker
static readonly "NETWORK_EPOLL_WORKER_GROUP": $Supplier<($EpollEventLoopGroup)>

constructor(arg0: $PacketFlow$$Type)

public static "connect"(arg0: $InetSocketAddress$$Type, arg1: boolean, arg2: $Connection$$Type): $ChannelFuture
public "setReadOnly"(): void
public "channel"(): $Channel
public "tick"(): void
public "configurePacketHandler"(arg0: $ChannelPipeline$$Type): void
public static "configureInMemoryPipeline"(arg0: $ChannelPipeline$$Type, arg1: $PacketFlow$$Type): void
public static "configureSerialization"(arg0: $ChannelPipeline$$Type, arg1: $PacketFlow$$Type, arg2: boolean, arg3: $BandwidthDebugMonitor$$Type): void
public "getDisconnectionDetails"(): $DisconnectionDetails
public "getAverageReceivedPackets"(): float
public "getAverageSentPackets"(): float
public static "connectToLocalServer"(arg0: $SocketAddress$$Type): $Connection
public "setupInboundProtocol"<T extends $PacketListener>(arg0: $ProtocolInfo$$Type<(T)>, arg1: T): void
public "handleDisconnection"(): void
public "setupOutboundProtocol"(arg0: $ProtocolInfo$$Type<(never)>): void
public "disconnect"(arg0: $DisconnectionDetails$$Type): void
public "disconnect"(arg0: $Component$$Type): void
public static "connectToServer"(arg0: $InetSocketAddress$$Type, arg1: boolean, arg2: $LocalSampleLogger$$Type): $Connection
public "getLoggableAddress"(arg0: boolean): StringJS
public "setBandwidthLogger"(arg0: $LocalSampleLogger$$Type): void
public "isEncrypted"(): boolean
public "isConnecting"(): boolean
public "getPacketListener"(): $PacketListener
public "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
public "setupCompression"(arg0: integer, arg1: boolean): void
public "runOnceConnected"(arg0: $Consumer$$Type<($Connection)>): void
public "channelActive"(arg0: $ChannelHandlerContext$$Type): void
public "setEncryptionKey"(arg0: $Cipher$$Type, arg1: $Cipher$$Type): void
public "getReceiving"(): $PacketFlow
public "owo$getChannelSet"(): $Set
public "owo$setChannelSet"(channels: $Set$$Type): void
public "getInboundProtocol"(): $ProtocolInfo<(never)>
public "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
public "flushChannel"(): void
public "initiateServerboundStatusConnection"(arg0: StringJS, arg1: integer, arg2: $ClientStatusPacketListener$$Type): void
public "send"(arg0: $Packet$$Type<(never)>, arg1: $PacketSendListener$$Type, arg2: boolean): void
public "send"(arg0: $Packet$$Type<(never)>, arg1: $PacketSendListener$$Type): void
public "send"(arg0: $Packet$$Type<(never)>): void
public "initiateServerboundPlayConnection"<S extends $ServerboundPacketListener, C extends $ClientboundPacketListener>(arg0: StringJS, arg1: integer, arg2: $ProtocolInfo$$Type<(S)>, arg3: $ProtocolInfo$$Type<(C)>, arg4: C, arg5: boolean): void
public "initiateServerboundPlayConnection"(arg0: StringJS, arg1: integer, arg2: $ClientLoginPacketListener$$Type): void
public "setListenerForServerboundHandshake"(arg0: $PacketListener$$Type): void
public "getSending"(): $PacketFlow
public "getDirection"(): $PacketFlow
public "isMemoryConnection"(): boolean
public "isConnected"(): boolean
public "getRemoteAddress"(): $SocketAddress
get "readOnly"(): void
get "disconnectionDetails"(): $DisconnectionDetails
get "averageReceivedPackets"(): float
get "averageSentPackets"(): float
set "upOutboundProtocol"(value: $ProtocolInfo$$Type<(never)>)
set "bandwidthLogger"(value: $LocalSampleLogger$$Type)
get "encrypted"(): boolean
get "connecting"(): boolean
get "packetListener"(): $PacketListener
get "receiving"(): $PacketFlow
get "inboundProtocol"(): $ProtocolInfo<(never)>
set "listenerForServerboundHandshake"(value: $PacketListener$$Type)
get "sending"(): $PacketFlow
get "direction"(): $PacketFlow
get "memoryConnection"(): boolean
get "connected"(): boolean
get "remoteAddress"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connection$$Type = ($Connection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Connection$$Original = $Connection;}
declare module "net.minecraft.network.RegistryFriendlyByteBuf" {
import {$ConnectionType, $ConnectionType$$Type} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$ReferenceCounted} from "io.netty.util.ReferenceCounted"
import {$Function} from "java.util.function.Function"
import {$OutputStream$$Type} from "java.io.OutputStream"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $RegistryFriendlyByteBuf extends $FriendlyByteBuf {
static readonly "MAX_COMPONENT_STRING_LENGTH": integer
static readonly "MAX_STRING_LENGTH": short
static readonly "DEFAULT_NBT_QUOTA": integer

/**
 * 
 * @deprecated
 */
constructor(arg0: $ByteBuf$$Type, arg1: $RegistryAccess$$Type)
constructor(arg0: $ByteBuf$$Type, arg1: $RegistryAccess$$Type, arg2: $ConnectionType$$Type)

public "registryAccess"(): $RegistryAccess
public "getConnectionType"(): $ConnectionType
/**
 * 
 * @deprecated
 */
public static "decorator"(arg0: $RegistryAccess$$Type): $Function<($ByteBuf), ($RegistryFriendlyByteBuf)>
public static "decorator"(arg0: $RegistryAccess$$Type, arg1: $ConnectionType$$Type): $Function<($ByteBuf), ($RegistryFriendlyByteBuf)>
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "getBytes"(arg0: integer, arg1: $OutputStream$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "writeInt"(arg0: integer): $ByteBuf
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "capacity"(arg0: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "skipBytes"(arg0: integer): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "discardSomeReadBytes"(): $ByteBuf
public "markReaderIndex"(): $ByteBuf
public "ensureWritable"(arg0: integer): $ByteBuf
public "writeShortLE"(arg0: integer): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "resetReaderIndex"(): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "readerIndex"(arg0: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "retain"(): $ByteBuf
public "retain"(arg0: integer): $ReferenceCounted
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "writeIntLE"(arg0: integer): $ByteBuf
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
get "connectionType"(): $ConnectionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryFriendlyByteBuf$$Type = ($RegistryFriendlyByteBuf);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryFriendlyByteBuf$$Original = $RegistryFriendlyByteBuf;}
declare module "net.minecraft.network.BandwidthDebugMonitor" {
import {$LocalSampleLogger$$Type} from "net.minecraft.util.debugchart.LocalSampleLogger"

export class $BandwidthDebugMonitor {
constructor(arg0: $LocalSampleLogger$$Type)

public "tick"(): void
public "onReceive"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BandwidthDebugMonitor$$Type = ($BandwidthDebugMonitor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BandwidthDebugMonitor$$Original = $BandwidthDebugMonitor;}
declare module "net.minecraft.network.ServerboundPacketListener" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$Exception$$Type} from "java.lang.Exception"
import {$PacketListener$$Interface} from "net.minecraft.network.PacketListener"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"

export interface $ServerboundPacketListener$$Interface extends $PacketListener$$Interface {
get "acceptingMessages"(): boolean
}

export class $ServerboundPacketListener implements $ServerboundPacketListener$$Interface {
 "flow"(): $PacketFlow
 "protocol"(): $ConnectionProtocol
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerboundPacketListener$$Type = ($ServerboundPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerboundPacketListener$$Original = $ServerboundPacketListener;}
declare module "net.minecraft.network.DisconnectionDetails" {
import {$URI, $URI$$Type} from "java.net.URI"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $DisconnectionDetails extends $Record {
constructor(arg0: $Component$$Type)
constructor(arg0: $Component$$Type, arg1: ($Path$$Type)?, arg2: ($URI$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "reason"(): $Component
public "report"(): $Optional<($Path)>
public "bugReportLink"(): $Optional<($URI)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisconnectionDetails$$Type = ({"report"?: ($Path$$Type)?, "bugReportLink"?: ($URI$$Type)?, "reason"?: $Component$$Type}) | ([report?: ($Path$$Type)?, bugReportLink?: ($URI$$Type)?, reason?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisconnectionDetails$$Original = $DisconnectionDetails;}
declare module "net.minecraft.network.PacketListener" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$Exception$$Type} from "java.lang.Exception"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"

export interface $PacketListener$$Interface {
get "acceptingMessages"(): boolean
}

export class $PacketListener implements $PacketListener$$Interface {
 "protocol"(): $ConnectionProtocol
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketListener$$Type = ($PacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PacketListener$$Original = $PacketListener;}
declare module "net.minecraft.network.FriendlyByteBuf" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$PublicKey, $PublicKey$$Type} from "java.security.PublicKey"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ReferenceCounted} from "io.netty.util.ReferenceCounted"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteProcessor$$Type} from "io.netty.util.ByteProcessor"
import {$StreamEncoder$$Type} from "net.minecraft.network.codec.StreamEncoder"
import {$Charset$$Type} from "java.nio.charset.Charset"
import {$TriConsumer$$Type} from "org.apache.commons.lang3.function.TriConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Date, $Date$$Type} from "java.util.Date"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$IFriendlyByteBufExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IFriendlyByteBufExtension"
import {$FileChannel$$Type} from "java.nio.channels.FileChannel"
import {$BitSet, $BitSet$$Type} from "java.util.BitSet"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$EndecBuffer$$Interface} from "io.wispforest.endec.util.EndecBuffer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class$$Type} from "java.lang.Class"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$NbtAccounter$$Type} from "net.minecraft.nbt.NbtAccounter"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$OutputStream$$Type} from "java.io.OutputStream"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$ByteBufAllocator} from "io.netty.buffer.ByteBufAllocator"
import {$IntList, $IntList$$Type} from "it.unimi.dsi.fastutil.ints.IntList"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $FriendlyByteBuf extends $ByteBuf implements $IFriendlyByteBufExtension$$Interface, $EndecBuffer$$Interface {
static readonly "MAX_COMPONENT_STRING_LENGTH": integer
static readonly "MAX_STRING_LENGTH": short
static readonly "DEFAULT_NBT_QUOTA": integer

constructor(arg0: $ByteBuf$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "toString"(arg0: $Charset$$Type): StringJS
public "toString"(arg0: integer, arg1: integer, arg2: $Charset$$Type): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ByteBuf$$Type): integer
public "indexOf"(arg0: integer, arg1: integer, arg2: byte): integer
public "getBoolean"(arg0: integer): boolean
public "getByte"(arg0: integer): byte
public "getShort"(arg0: integer): short
public "getChar"(arg0: integer): character
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): $FriendlyByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $FriendlyByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $FriendlyByteBuf
public "getBytes"(arg0: integer, arg1: $OutputStream$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $FriendlyByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: $GatheringByteChannel$$Type, arg2: integer): integer
public "getBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (byte)[]
public "arrayOffset"(): integer
public "write"(ctx: $SerializationContext$$Type, endec: $Endec$$Type, value: any): void
public "read"(ctx: $SerializationContext$$Type, endec: $Endec$$Type): any
public "writeInt"(arg0: integer): $ByteBuf
public "readInt"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $FriendlyByteBuf
public "setInt"(arg0: integer, arg1: integer): $FriendlyByteBuf
public "setLong"(arg0: integer, arg1: long): $FriendlyByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(arg0: integer, arg1: integer): $ByteBuf
public "copy"(): $ByteBuf
public "unwrap"(): $ByteBuf
public "capacity"(): integer
public "capacity"(arg0: integer): $ByteBuf
public "release"(arg0: integer): boolean
public "release"(): boolean
public "isReadOnly"(): boolean
public "slice"(): $ByteBuf
public "slice"(arg0: integer, arg1: integer): $ByteBuf
public "duplicate"(): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $FriendlyByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: (byte)[]): $FriendlyByteBuf
public "readBytes"(arg0: $GatheringByteChannel$$Type, arg1: integer): integer
public "readBytes"(arg0: integer): $ByteBuf
public "writeBytes"(arg0: (byte)[]): $FriendlyByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $FriendlyByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $FriendlyByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type): $FriendlyByteBuf
public "writeBytes"(arg0: $ByteBuffer$$Type): $FriendlyByteBuf
public "writeBytes"(arg0: $ScatteringByteChannel$$Type, arg1: integer): integer
public "writeBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $FriendlyByteBuf
public "writeBytes"(arg0: $InputStream$$Type, arg1: integer): integer
public "order"(arg0: $ByteOrder$$Type): $ByteBuf
public "order"(): $ByteOrder
public "writeChar"(arg0: integer): $FriendlyByteBuf
public "readChar"(): character
public "writeFloat"(arg0: float): $FriendlyByteBuf
public "readFloat"(): float
public "skipBytes"(arg0: integer): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readUnsignedByte"(): short
public "readShort"(): short
public "readUnsignedShort"(): integer
public "readLong"(): long
public "readDouble"(): double
public "getUnsignedShort"(arg0: integer): integer
public "writeBoolean"(arg0: boolean): $FriendlyByteBuf
public "writeByte"(arg0: integer): $FriendlyByteBuf
public "writeShort"(arg0: integer): $FriendlyByteBuf
public "writeLong"(arg0: long): $FriendlyByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "isReadable"(): boolean
public "isReadable"(arg0: integer): boolean
public "isWritable"(arg0: integer): boolean
public "isWritable"(): boolean
public "setIndex"(arg0: integer, arg1: integer): $FriendlyByteBuf
public "getSource"(): $ByteBuf
public "readUtf"(): StringJS
public "readUtf"(arg0: integer): StringJS
public "readUnsignedShortLE"(): integer
public "discardSomeReadBytes"(): $ByteBuf
public "maxFastWritableBytes"(): integer
public "getUnsignedMediumLE"(arg0: integer): integer
public "readUnsignedMediumLE"(): integer
public "writeResourceLocation"(arg0: $ResourceLocation$$Type): $FriendlyByteBuf
/**
 * 
 * @deprecated
 */
public "readWithCodecTrusted"<T>(arg0: $DynamicOps$$Type<($Tag$$Type)>, arg1: $Codec$$Type<(T)>): T
public "readResourceLocation"(): $ResourceLocation
public "writeBlockHitResult"(arg0: $BlockHitResult$$Type): void
public static "readByteArray"(arg0: $ByteBuf$$Type): (byte)[]
public "readByteArray"(): (byte)[]
public static "readByteArray"(arg0: $ByteBuf$$Type, arg1: integer): (byte)[]
public "readByteArray"(arg0: integer): (byte)[]
public "writeByteArray"(arg0: (byte)[]): $FriendlyByteBuf
public static "writeByteArray"(arg0: $ByteBuf$$Type, arg1: (byte)[]): void
public static "readVector3f"(arg0: $ByteBuf$$Type): $Vector3f
public "readVector3f"(): $Vector3f
public "writeVector3f"(arg0: $Vector3f$$Type): void
public static "writeVector3f"(arg0: $ByteBuf$$Type, arg1: $Vector3f$$Type): void
public static "writeQuaternion"(arg0: $ByteBuf$$Type, arg1: $Quaternionf$$Type): void
public "writeQuaternion"(arg0: $Quaternionf$$Type): void
public "readQuaternion"(): $Quaternionf
public static "readQuaternion"(arg0: $ByteBuf$$Type): $Quaternionf
public static "readNullable"<T, B extends $ByteBuf>(arg0: B, arg1: $StreamDecoder$$Type<(B), (T)>): T
public "readNullable"<T>(arg0: $StreamDecoder$$Type<($FriendlyByteBuf), (T)>): T
public static "writeNullable"<T, B extends $ByteBuf>(arg0: B, arg1: T, arg2: $StreamEncoder$$Type<(B), (T)>): void
public "writeNullable"<T>(arg0: T, arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (T)>): void
public "forEachByte"(arg0: $ByteProcessor$$Type): integer
public "forEachByte"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: $ByteProcessor$$Type): integer
public static "writeBlockPos"(arg0: $ByteBuf$$Type, arg1: $BlockPos$$Type): void
public "writeBlockPos"(arg0: $BlockPos$$Type): $FriendlyByteBuf
public "getCharSequence"(arg0: integer, arg1: integer, arg2: $Charset$$Type): charseq
public "writeDate"(arg0: $Date$$Type): $FriendlyByteBuf
public "touch"(arg0: any): $FriendlyByteBuf
public "touch"(): $FriendlyByteBuf
public "asReadOnly"(): $ByteBuf
public static "readNbt"(arg0: $ByteBuf$$Type, arg1: $NbtAccounter$$Type): $Tag
public "readNbt"(): $CompoundTag
public "readNbt"(arg0: $NbtAccounter$$Type): $Tag
public static "readNbt"(arg0: $ByteBuf$$Type): $CompoundTag
public static "writeNbt"(arg0: $ByteBuf$$Type, arg1: $Tag$$Type): void
public "writeNbt"(arg0: $Tag$$Type): $FriendlyByteBuf
public "markReaderIndex"(): $ByteBuf
public "getMediumLE"(arg0: integer): integer
public "ensureWritable"(arg0: integer, arg1: boolean): integer
public "ensureWritable"(arg0: integer): $ByteBuf
public "readUnsignedIntLE"(): long
public "maxWritableBytes"(): integer
public "readRetainedSlice"(arg0: integer): $ByteBuf
public "writeShortLE"(arg0: integer): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "readableBytes"(): integer
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "getUnsignedMedium"(arg0: integer): integer
public "writeMediumLE"(arg0: integer): $FriendlyByteBuf
public "readCharSequence"(arg0: integer, arg1: $Charset$$Type): charseq
public "getUnsignedIntLE"(arg0: integer): long
public "resetWriterIndex"(): $FriendlyByteBuf
public "readMediumLE"(): integer
public "writableBytes"(): integer
public "setCharSequence"(arg0: integer, arg1: charseq, arg2: $Charset$$Type): integer
public "readUnsignedInt"(): long
public "bytesBefore"(arg0: integer, arg1: byte): integer
public "bytesBefore"(arg0: integer, arg1: integer, arg2: byte): integer
public "bytesBefore"(arg0: byte): integer
public "retainedSlice"(): $ByteBuf
public "retainedSlice"(arg0: integer, arg1: integer): $ByteBuf
public "writeLongLE"(arg0: long): $FriendlyByteBuf
public "writeCharSequence"(arg0: charseq, arg1: $Charset$$Type): integer
public "readUnsignedMedium"(): integer
public "getUnsignedByte"(arg0: integer): short
public "writerIndex"(arg0: integer): $FriendlyByteBuf
public "writerIndex"(): integer
public "resetReaderIndex"(): $ByteBuf
public "getUnsignedShortLE"(arg0: integer): integer
public "maxCapacity"(): integer
public "markWriterIndex"(): $FriendlyByteBuf
public "discardReadBytes"(): $ByteBuf
public "getUnsignedInt"(arg0: integer): long
public "readerIndex"(arg0: integer): $ByteBuf
public "readerIndex"(): integer
public "readShortLE"(): short
public "readBlockHitResult"(): $BlockHitResult
public "writeLongArray"(arg0: (long)[]): $FriendlyByteBuf
public "readGlobalPos"(): $GlobalPos
public "writeInstant"(arg0: $Instant$$Type): void
public "readLongArray"(): (long)[]
public "readLongArray"(arg0: (long)[], arg1: integer): (long)[]
public "readLongArray"(arg0: (long)[]): (long)[]
public "writeGlobalPos"(arg0: $GlobalPos$$Type): void
public "readVarLong"(): long
public "internalNioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "writeVarInt"(arg0: integer): $FriendlyByteBuf
public "writeOptional"<T>(arg0: (T)?, arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (T)>): void
public "readOptional"<T>(arg0: $StreamDecoder$$Type<($FriendlyByteBuf), (T)>): $Optional<(T)>
public "writeSectionPos"(arg0: $SectionPos$$Type): $FriendlyByteBuf
public "readRegistryKey"<T>(): $ResourceKey<($Registry<(T)>)>
public "readResourceKey"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $ResourceKey<(T)>
public static "readBlockPos"(arg0: $ByteBuf$$Type): $BlockPos
public "readBlockPos"(): $BlockPos
public "readJsonWithCodec"<T>(arg0: $Codec$$Type<(T)>): T
public "readSectionPos"(): $SectionPos
public "readChunkPos"(): $ChunkPos
public "readWithCount"(arg0: $Consumer$$Type<($FriendlyByteBuf)>): void
public "writeResourceKey"(arg0: $ResourceKey$$Type<(never)>): void
public "nioBufferCount"(): integer
/**
 * 
 * @deprecated
 */
public "writeWithCodec"<T>(arg0: $DynamicOps$$Type<($Tag$$Type)>, arg1: $Codec$$Type<(T)>, arg2: T): $FriendlyByteBuf
public "readIntIdList"(): $IntList
public "writeFixedBitSet"(arg0: $BitSet$$Type, arg1: integer): void
public "writeVarIntArray"(arg0: (integer)[]): $FriendlyByteBuf
public "retainedDuplicate"(): $ByteBuf
/**
 * 
 * @deprecated
 */
public "readWithCodec"<T>(arg0: $DynamicOps$$Type<($Tag$$Type)>, arg1: $Codec$$Type<(T)>, arg2: $NbtAccounter$$Type): T
public "memoryAddress"(): long
public "writeEnumSet"<E extends $Enum<(object)>>(arg0: $EnumSet$$Type<(E)>, arg1: $Class$$Type<(E)>): void
public "writeVarLong"(arg0: long): $FriendlyByteBuf
public "isContiguous"(): boolean
public "readCollection"<T, C extends $Collection<(object)>>(arg0: $IntFunction$$Type<(C)>, arg1: $StreamDecoder$$Type<($FriendlyByteBuf), (T)>): C
public "readVarIntArray"(): (integer)[]
public "readVarIntArray"(arg0: integer): (integer)[]
public "writeChunkPos"(arg0: $ChunkPos$$Type): $FriendlyByteBuf
public "writeJsonWithCodec"<T>(arg0: $Codec$$Type<(T)>, arg1: T): void
public "writeCollection"<T>(arg0: $Collection$$Type<(T)>, arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (T)>): void
public "writeIntIdList"(arg0: $IntList$$Type): void
public "readFixedBitSet"(arg0: integer): $BitSet
public "readInstant"(): $Instant
public "hasMemoryAddress"(): boolean
public "readEnumSet"<E extends $Enum<(object)>>(arg0: $Class$$Type<(E)>): $EnumSet<(E)>
public "readPublicKey"(): $PublicKey
public "writePublicKey"(arg0: $PublicKey$$Type): $FriendlyByteBuf
public "writeBitSet"(arg0: $BitSet$$Type): void
public "alloc"(): $ByteBufAllocator
public "getShortLE"(arg0: integer): short
public "getMedium"(arg0: integer): integer
public static "limitValue"<T>(arg0: $IntFunction$$Type<(T)>, arg1: integer): $IntFunction<(T)>
public "readMedium"(): integer
public "setBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $InputStream$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "setBytes"(arg0: integer, arg1: $ScatteringByteChannel$$Type, arg2: integer): integer
public "nioBuffers"(): ($ByteBuffer)[]
public "nioBuffers"(arg0: integer, arg1: integer): ($ByteBuffer)[]
public "getLongLE"(arg0: integer): long
public "getIntLE"(arg0: integer): integer
public "retain"(): $ByteBuf
public "retain"(arg0: integer): $ReferenceCounted
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "setMedium"(arg0: integer, arg1: integer): $FriendlyByteBuf
public "readLongLE"(): long
public "writeZero"(arg0: integer): $FriendlyByteBuf
public "readSlice"(arg0: integer): $ByteBuf
public "writeIntLE"(arg0: integer): $ByteBuf
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
public "readIntLE"(): integer
public "setIntLE"(arg0: integer, arg1: integer): $FriendlyByteBuf
public "setShortLE"(arg0: integer, arg1: integer): $FriendlyByteBuf
public "nioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "nioBuffer"(): $ByteBuffer
public "writeUtf"(arg0: StringJS, arg1: integer): $FriendlyByteBuf
public "writeUtf"(arg0: StringJS): $FriendlyByteBuf
public "refCnt"(): integer
public "writeMap"<K, V>(arg0: $Map$$Type<(K), (V)>, arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (K)>, arg2: $StreamEncoder$$Type<($FriendlyByteBuf), (V)>): void
public "readVarInt"(): integer
public "readVec3"(): $Vec3
public "writeVec3"(arg0: $Vec3$$Type): void
public "writeEnum"(arg0: $Enum$$Type<(never)>): $FriendlyByteBuf
public "writeById"<T>(arg0: $ToIntFunction$$Type<(T)>, arg1: T): $FriendlyByteBuf
public "readById"<T>(arg0: $IntFunction$$Type<(T)>): T
public "readEnum"<T extends $Enum<(object)>>(arg0: $Class$$Type<(T)>): T
public "readDate"(): $Date
public "readBitSet"(): $BitSet
public "readMap"<K, V>(arg0: $StreamDecoder$$Type<($FriendlyByteBuf), (K)>, arg1: $StreamDecoder$$Type<($FriendlyByteBuf), (V)>): $Map<(K), (V)>
public "readMap"<K, V, M extends $Map<(object), (object)>>(arg0: $IntFunction$$Type<(M)>, arg1: $StreamDecoder$$Type<($FriendlyByteBuf), (K)>, arg2: $StreamDecoder$$Type<($FriendlyByteBuf), (V)>): M
public "readList"<T>(arg0: $StreamDecoder$$Type<($FriendlyByteBuf), (T)>): $List<(T)>
public "readUUID"(): $UUID
public static "readUUID"(arg0: $ByteBuf$$Type): $UUID
public "writeUUID"(arg0: $UUID$$Type): $FriendlyByteBuf
public static "writeUUID"(arg0: $ByteBuf$$Type, arg1: $UUID$$Type): void
public "writeByte"(arg0: byte): $FriendlyByteBuf
public "writeObjectCollection"<T>(arg0: $Collection$$Type<(T)>, arg1: $BiConsumer$$Type<(T), ($FriendlyByteBuf)>): void
public "readArray"<T>(arg0: $IntFunction$$Type<((T)[])>, arg1: $StreamDecoder$$Type<($FriendlyByteBuf), (T)>): (T)[]
public "writeArray"<T>(arg0: (T)[], arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (T)>): $FriendlyByteBuf
public "writeMap"<K, V>(arg0: $Map$$Type<(K), (V)>, arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (K)>, arg2: $TriConsumer$$Type<($FriendlyByteBuf), (K), (V)>): void
public "readMap"<K, V>(arg0: $StreamDecoder$$Type<($FriendlyByteBuf), (K)>, arg1: $BiFunction$$Type<($FriendlyByteBuf), (K), (V)>): $Map<(K), (V)>
public "write"<T>(arg0: $Endec$$Type<(T)>, arg1: T): void
public "read"<T>(arg0: $Endec$$Type<(T)>): T
get "direct"(): boolean
get "readOnly"(): boolean
get "readable"(): boolean
get "writable"(): boolean
get "source"(): $ByteBuf
get "contiguous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FriendlyByteBuf$$Type = ($FriendlyByteBuf);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FriendlyByteBuf$$Original = $FriendlyByteBuf;}
