// KubeJS 7 — Minecraft item / block / fluid wrapper types

/** NBT compound tag — matches $CompoundTag from ProbeJS */
interface NbtCompound {
  getBoolean(key: string): boolean;
  putBoolean(key: string, value: boolean): void;
  getByte(key: string): number;
  putByte(key: string, value: number): void;
  getShort(key: string): number;
  putShort(key: string, value: number): void;
  getInt(key: string): number;
  putInt(key: string, value: number): void;
  getLong(key: string): number;
  putLong(key: string, value: number): void;
  getFloat(key: string): number;
  putFloat(key: string, value: number): void;
  getDouble(key: string): number;
  putDouble(key: string, value: number): void;
  contains(key: string): boolean;
  remove(key: string): void;
  size(): number;
}

/** A resolved ItemStack with item id, count, and optional NBT */
interface ItemStack {
  readonly id: ResourceLocation;
  readonly count: number;
  readonly nbt: NbtCompound | null;
  withCount(count: number): ItemStack;
  withNbt(nbt: NbtCompound | Record<string, unknown>): ItemStack;
}

/** An ingredient that matches one or more items (can be tag or item id) */
type Ingredient = ResourceLocation | string | { tag: string } | ItemStack;

/** A fluid stack */
interface FluidStack {
  readonly fluid: ResourceLocation;
  readonly amount: number;
}

/** Result type for recipe outputs — either an ItemStack or ResourceLocation string */
type RecipeOutput = ItemStack | ResourceLocation;

// ── Static wrapper objects (declared as globals in global.d.ts) ─────────────

interface ItemWrapperStatic {
  of(id: ResourceLocation, count?: number, nbt?: NbtCompound | string): ItemStack;
  of(id: ResourceLocation, nbt: NbtCompound | string): ItemStack;
  /** Returns an empty ItemStack */
  empty(): ItemStack;
}

interface BlockWrapperStatic {
  id(id: ResourceLocation): BlockState;
}

interface BlockState {
  readonly id: ResourceLocation;
}

interface FluidWrapperStatic {
  of(id: ResourceLocation, amount?: number): FluidStack;
}

interface IngredientWrapperStatic {
  of(id: ResourceLocation | string): Ingredient;
  tag(tag: string): Ingredient;
}
