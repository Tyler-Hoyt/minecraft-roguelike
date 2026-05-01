// KubeJS 7 — Minecraft item / block / fluid wrapper types

/** A resolved ItemStack with item id, count, and optional NBT */
interface ItemStack {
  readonly id: ResourceLocation;
  readonly count: number;
  readonly nbt: NbtCompound | null;
  withCount(count: number): ItemStack;
  withNbt(nbt: NbtCompound): ItemStack;
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
