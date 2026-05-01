// Primitive Minecraft types used throughout the KubeJS API

type ResourceLocation = string; // "minecraft:stone", "mod:item"
type ResourceKey = string;      // registry key e.g. "minecraft:item"
type Codec = unknown;

/** An NBT compound tag (map of key→value) */
interface NbtCompound {
  [key: string]: NbtValue;
}

type NbtValue = string | number | boolean | NbtCompound | NbtValue[];

/** A Minecraft text component (can be a plain string or structured Component) */
type TextComponent = string | { text: string; color?: string; bold?: boolean; italic?: boolean };

/** RGB color as a hex number or CSS string */
type Color = number | string;

/** A 3D block position */
interface BlockPos {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

/** A 3D floating-point vector */
interface Vec3 {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}
